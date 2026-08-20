/**
 * Style reminder — Palm Archive: warm paper ground, teak text, precise editorial cadence.
 * This legal page is intentionally direct and readable; do not dilute it with decorative cards.
 */
import { useState } from "react";
import { ArrowLeft, ChevronRight, Mail, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

type Language = "id" | "en";
type LegalKind = "privacy" | "terms" | "cookies";

const copy = {
  id: {
    back: "Kembali ke panduan", 
    privacy: {
      eyebrow: "TRANSPARANSI DATA",
      title: "Kebijakan Privasi",
      intro: "Panduan ini mengumpulkan sesedikit mungkin informasi untuk menjaga situs tetap bermanfaat dan dapat diakses.",
      updated: "Terakhir diperbarui: Agustus 2026",
      sections: [
        ["Informasi yang kami kumpulkan", "Kami hanya mengumpulkan data minimum yang diperlukan untuk menjalankan situs. Data ini dapat mencakup data penelusuran seperti alamat IP, jenis peramban, serta halaman yang dikunjungi; cookie dan teknologi serupa; serta informasi yang secara sukarela Anda kirimkan lewat formulir umpan balik atau email."],
        ["Bagaimana informasi digunakan", "Informasi digunakan untuk memperbaiki isi dan pengalaman situs, memahami pola penggunaan secara agregat, menanggapi pesan Anda, dan memenuhi kewajiban hukum yang relevan."],
        ["Layanan pihak ketiga", "Situs dapat menautkan atau menyematkan layanan pihak ketiga, termasuk Google Maps untuk peta dan Google Analytics bila Anda mengaktifkan cookie analitik. Layanan tersebut mempunyai kebijakan privasinya sendiri."],
        ["Hak Anda", "Sesuai peraturan yang berlaku, Anda dapat meminta akses, perbaikan, atau penghapusan data yang Anda berikan; menolak pemrosesan tertentu; dan mengajukan keluhan kepada otoritas yang berwenang."],
      ],
    },
    terms: {
      eyebrow: "PENGGUNAAN SITUS",
      title: "Ketentuan Layanan",
      intro: "Informasi ini disusun sebagai panduan umum dan bukan pengganti konfirmasi langsung di lokasi.",
      updated: "Terakhir diperbarui: Agustus 2026",
      sections: [
        ["Penggunaan konten", "Dengan menggunakan situs ini, Anda menyetujui ketentuan ini. Situs adalah proyek informasi pengunjung independen dan tidak berafiliasi dengan pengelola kawasan, instansi pemerintah, atau organisasi resmi mana pun."],
        ["Ketepatan informasi", "Kami berusaha menyajikan informasi yang hati-hati dan jelas mengenai batas verifikasinya. Namun akses, kondisi, fasilitas, atau rute dapat berubah. Selalu konfirmasikan kebutuhan penting melalui peta, pengelola setempat, atau pihak berwenang sebelum berangkat."],
        ["Hak kekayaan intelektual", "Rancangan dan teks orisinal situs dilindungi. Ilustrasi visual pada situs dibuat khusus untuk panduan ini; data peta yang disematkan tetap tunduk pada ketentuan Google."],
        ["Batas tanggung jawab", "Situs diberikan sebagaimana adanya tanpa jaminan. Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan informasi ini atau keputusan perjalanan yang dibuat berdasarkan informasi tersebut."],
      ],
    },
    cookies: {
      eyebrow: "PILIHAN ANDA",
      title: "Pengaturan Cookie",
      intro: "Pilih data yang boleh disimpan untuk membantu situs bekerja dengan baik bagi Anda.",
      updated: "Terakhir diperbarui: Agustus 2026",
      sections: [
        ["Cookie penting", "Cookie ini diperlukan agar preferensi bahasa dan pengaturan dasar situs dapat diingat. Cookie penting selalu aktif."],
        ["Cookie analitik", "Jika diaktifkan, Google Analytics dapat membantu kami memahami penggunaan situs secara anonim. Cookie ini tidak diperlukan untuk membaca panduan."],
        ["Cookie preferensi", "Cookie ini menyimpan pilihan seperti bahasa yang dipilih. Anda dapat menghapusnya lewat pengaturan peramban Anda."],
        ["Kendali persetujuan", "Anda dapat mengubah pilihan kapan saja pada halaman ini. Menonaktifkan kategori tertentu mungkin memengaruhi kenyamanan penggunaan, tetapi tidak membatasi akses ke informasi inti."],
      ],
    },
  },
  en: {
    back: "Back to the guide",
    privacy: {
      eyebrow: "DATA TRANSPARENCY",
      title: "Privacy Policy",
      intro: "This guide collects the least amount of information needed to keep the site useful and accessible.",
      updated: "Last updated: August 2026",
      sections: [
        ["Information we collect", "We collect only the minimum data needed to run this site. This may include browsing data such as IP address, browser type, and pages viewed; cookies and similar technologies; and information you voluntarily send by feedback form or email."],
        ["How information is used", "Information is used to improve the site and its experience, understand aggregate usage patterns, respond to messages, and meet applicable legal obligations."],
        ["Third-party services", "The site may link to or embed third-party services, including Google Maps for maps and Google Analytics when you enable analytics cookies. These services have their own privacy policies."],
        ["Your rights", "Subject to applicable rules, you may ask to access, correct, or delete data you provide; object to certain processing; and raise a complaint with the appropriate authority."],
      ],
    },
    terms: {
      eyebrow: "SITE USE",
      title: "Terms of Use",
      intro: "This information is a general guide, not a substitute for checking conditions directly at the destination.",
      updated: "Last updated: August 2026",
      sections: [
        ["Content use", "By using this site, you agree to these terms. It is an independent visitor-information project and is not affiliated with the estate manager, any government agency, or any official organisation."],
        ["Information accuracy", "We aim to communicate information carefully and make its verification limits clear. Access, conditions, facilities, or routes may change. Please confirm anything important through maps, local managers, or relevant authorities before leaving."],
        ["Intellectual property", "The site's original design and writing are protected. Its visual illustrations were created for this guide; embedded map data remains subject to Google's terms."],
        ["Limitation of liability", "The site is provided as-is without warranties. We are not responsible for loss arising from use of this information or travel decisions made from it."],
      ],
    },
    cookies: {
      eyebrow: "YOUR CHOICE",
      title: "Cookie Settings",
      intro: "Choose which data may be stored to help the site work well for you.",
      updated: "Last updated: August 2026",
      sections: [
        ["Essential cookies", "These cookies are needed to remember your language preference and basic site settings. Essential cookies are always active."],
        ["Analytics cookies", "When enabled, Google Analytics can help us understand anonymous use of the site. These cookies are not needed to read the guide."],
        ["Preference cookies", "These cookies retain settings such as your chosen language. You can clear them in your browser settings."],
        ["Consent control", "You may change your choice on this page at any time. Disabling some categories may affect convenience, but will not restrict access to core information."],
      ],
    },
  },
} as const;

function loadGoogleAnalytics() {
  if (document.querySelector('script[data-vtb-ga="true"]')) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP";
  script.dataset.vtbGa = "true";
  document.head.appendChild(script);
  const queue = window.dataLayer ?? [];
  window.dataLayer = queue;
  window.gtag = function () { queue.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "G-HXM22WWPKP", { anonymize_ip: true });
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Legal({ kind }: { kind: LegalKind }) {
  const [lang, setLang] = useState<Language>(() => typeof window !== "undefined" && localStorage.getItem("vtb-lang") === "en" ? "en" : "id");
  const content = copy[lang][kind] as unknown as { eyebrow: string; title: string; intro: string; updated: string; sections: readonly (readonly [string, string])[] };
  const [analytics, setAnalytics] = useState(() => typeof window !== "undefined" && localStorage.getItem("vtb-analytics") === "true");

  const changeLanguage = (next: Language) => {
    localStorage.setItem("vtb-lang", next);
    setLang(next);
  };

  const changeAnalytics = (checked: boolean) => {
    setAnalytics(checked);
    localStorage.setItem("vtb-analytics", String(checked));
    if (checked) loadGoogleAnalytics();
  };

  return (
    <main className="min-h-screen bg-[#F5EFE3] text-[#31251F]">
      <header className="border-b border-[#4A352C]/15 bg-[#F5EFE3]/95 px-5 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A352C] transition hover:text-[#5B7A5A]"><ArrowLeft size={16} /> {copy[lang].back}</Link>
          <div className="flex rounded-full border border-[#4A352C]/20 bg-white/50 p-1 text-xs font-bold tracking-[0.08em]">
            <button className={lang === "id" ? "rounded-full bg-[#4A352C] px-3 py-1.5 text-white" : "px-3 py-1.5 text-[#6A574A]"} onClick={() => changeLanguage("id")}>ID</button>
            <button className={lang === "en" ? "rounded-full bg-[#4A352C] px-3 py-1.5 text-white" : "px-3 py-1.5 text-[#6A574A]"} onClick={() => changeLanguage("en")}>EN</button>
          </div>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-5 pb-24 pt-16 md:px-10 md:pt-24">
        <p className="mb-5 font-mono text-xs font-bold tracking-[0.18em] text-[#5B7A5A]">{content.eyebrow}</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-[#34251E] md:text-7xl">{content.title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6A574A]">{content.intro}</p>
        <p className="mt-8 border-y border-[#4A352C]/15 py-4 text-sm font-medium text-[#5B7A5A]">{content.updated}</p>
        {kind === "cookies" && (
          <section className="mt-10 border border-[#4A352C]/15 bg-white/50 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div><p className="font-display text-2xl text-[#34251E]">Google Analytics</p><p className="mt-1 max-w-md text-sm leading-6 text-[#6A574A]">{lang === "id" ? "Aktifkan hanya jika Anda setuju dengan pengukuran kunjungan anonim." : "Enable only if you agree to anonymous visit measurement."}</p></div>
              <button onClick={() => changeAnalytics(!analytics)} className={"relative h-8 w-14 rounded-full transition " + (analytics ? "bg-[#5B7A5A]" : "bg-[#CFC4B2]")} aria-pressed={analytics} aria-label="Toggle analytics">
                <span className={"absolute top-1 h-6 w-6 rounded-full bg-white shadow transition " + (analytics ? "left-7" : "left-1")} />
              </button>
            </div>
          </section>
        )}
        <div className="mt-12 divide-y divide-[#4A352C]/15 border-y border-[#4A352C]/15">
          {content.sections.map(([heading, body], index) => <section key={heading} className="grid gap-4 py-8 md:grid-cols-[96px_1fr] md:gap-10"><div className="font-mono text-xs font-bold text-[#C86F4D]">0{index + 1}</div><div><h2 className="font-display text-3xl text-[#34251E]">{heading}</h2><p className="mt-3 max-w-2xl leading-7 text-[#6A574A]">{body}</p></div></section>)}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 border-l-4 border-[#5B7A5A] bg-white/45 p-6 text-sm text-[#6A574A]"><ShieldCheck size={20} className="shrink-0 text-[#5B7A5A]" /><span>{lang === "id" ? "Pertanyaan mengenai data atau isi?" : "Questions about data or content?"}</span><a className="ml-auto inline-flex items-center gap-2 font-bold text-[#4A352C] hover:text-[#5B7A5A]" href="mailto:claritleonelmnicol@gmail.com"><Mail size={16} /> Email <ChevronRight size={16} /></a></div>
      </article>
    </main>
  );
}
