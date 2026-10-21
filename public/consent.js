(() => {
  const KEY='awp-cookie-preferences', DENY='awp-analytics-denied', MARK='|awp-analytics-denied|', ID='G-HXM22WWPKP';
  function denied(){
    if(window.__awpDenied)return true;
    try{if(sessionStorage.getItem(DENY)==='1')return true;}catch{return true;}
    try{return window.name.includes(MARK);}catch{return true;}
  }
  function markDeny(){
    window.__awpDenied=true;window['ga-disable-'+ID]=true;
    let retained=false;
    try{sessionStorage.setItem(DENY,'1');retained=sessionStorage.getItem(DENY)==='1';}catch{}
    try{window.name=window.name.split(MARK).join('')+MARK;retained=window.name.includes(MARK)||retained;}catch{}
    return retained;
  }
  function clearDeny(){
    // Verify tab-local veto removal before publishing a shared grant.
    sessionStorage.removeItem(DENY);
    if(sessionStorage.getItem(DENY)==='1')throw Error('Session refusal remains');
    window.name=window.name.split(MARK).join('');
    if(window.name.includes(MARK))throw Error('Tab refusal remains');
  }
  function read(){
    if(denied())return null;
    try{
      const saved=JSON.parse(localStorage.getItem(KEY)||'null');
      // A stale stored grant must not revive while writes are blocked.
      localStorage.setItem(KEY+'-write-check','1');localStorage.removeItem(KEY+'-write-check');
      return saved && typeof saved.analytics==='boolean'?saved:null;
    }catch{return null;}
  }
  function apply(grant){
    window['ga-disable-'+ID]=!grant;
    if(!grant){window.gtag?.('consent','update',{analytics_storage:'denied'});return;}
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    if(document.getElementById('awp-ga4')){window.gtag('consent','update',{analytics_storage:'granted'});return;}
    window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('consent','update',{analytics_storage:'granted'});
    const script=document.createElement('script');script.id='awp-ga4';script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(script);
    window.gtag('js',new Date());window.gtag('config',ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
  }
  let retainedDenial=false;
  function save(analytics){
    analytics=analytics===true;
    if(!analytics){retainedDenial=markDeny();apply(false);}
    try{
      if(analytics){clearDeny();localStorage.getItem(KEY);localStorage.setItem(KEY+'-write-check','1');localStorage.removeItem(KEY+'-write-check');}
      localStorage.setItem(KEY,JSON.stringify({analytics}));
      if(analytics)window.__awpDenied=false;
      apply(read()?.analytics===true);return true;
    }catch{retainedDenial=markDeny();apply(false);return false;}
  }
  window.awpConsent={read,save};
  const saved=read();apply(saved?.analytics===true);
  const status=document.getElementById('cookie-status');const lang=document.documentElement.lang==='en'?'en':'id';
  function choose(value){
    const stored=save(value),allowed=read()?.analytics===true;
    if(status)status.textContent=lang==='id'
      ?stored?(allowed?'Google Analytics diizinkan pada browser ini.':value?'Pilihan disimpan; Google Analytics tetap nonaktif pada tab ini karena penyimpanan browser tidak dapat dipastikan.':'Google Analytics ditolak pada browser ini.')
        :retainedDenial?'Google Analytics dinonaktifkan untuk tab ini, termasuk saat berpindah halaman atau memuat ulang. Pilihan permanen tidak dapat disimpan; izin lama mungkin masih ada di tab lain. Hapus data situs melalui pengaturan browser untuk menarik izin tersimpan.'
        :'Google Analytics dinonaktifkan pada halaman ini. Pilihan tidak dapat disimpan; hapus data situs melalui pengaturan browser sebelum berpindah halaman atau memuat ulang.'
      :stored?(allowed?'Google Analytics allowed in this browser.':value?'Choice saved; Google Analytics remains off in this tab because browser storage could not be confirmed.':'Google Analytics refused in this browser.')
        :retainedDenial?'Google Analytics is off for this tab, including navigation and refresh. The permanent choice could not be saved; old permission may remain in other tabs. Clear site data in browser settings to remove stored permission.'
        :'Google Analytics is off on this page. The choice could not be saved; clear site data in browser settings before navigating or refreshing.';
  }
  document.getElementById('accept-analytics')?.addEventListener('click',()=>choose(true));
  document.getElementById('decline-analytics')?.addEventListener('click',()=>choose(false));
  window.addEventListener('storage',event=>{
    if(event.key!==KEY&&event.key!==null)return;
    let grant=false;try{grant=JSON.parse(event.newValue||'null')?.analytics===true;}catch{}
    if(!grant)markDeny();
    const allowed=read()?.analytics===true;apply(allowed);
    if(status)status.textContent=lang==='id'?(allowed?'Google Analytics aktif pada tab ini.':'Google Analytics nonaktif pada tab ini.'):(allowed?'Google Analytics is on in this tab.':'Google Analytics is off in this tab.');
  });
})();
