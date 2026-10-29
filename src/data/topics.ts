// Data-driven topic registry for Amsterdam Waterpark Tangerang guide.
// All topics are Indonesian (Bahasa Indonesia) and written as an independent,
// non-commercial visitor guide. Claims about prices, facilities and hours are
// attributed to public third-party sources and flagged for on-site confirmation.
// No fabricated reviews, prices, menus or operator partnerships are asserted.

export type TopicGroup =
  | "tiket"
  | "fasilitas"
  | "kunjungan"
  | "transportasi"
  | "kuliner"
  | "wisata"
  | "itinerary";

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export type TopicFaq = [string, string];

export interface TopicContent {
  slug: string;
  group: TopicGroup;
  category: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  updated: string;
  related: string[];
}

export const GROUP_LABELS: Record<TopicGroup, string> = {
  tiket: "Tiket & Jam Buka",
  fasilitas: "Wahana & Fasilitas",
  kunjungan: "Panduan Kunjungan",
  transportasi: "Transportasi",
  kuliner: "Kuliner Sekitar",
  wisata: "Wisata Sekitar",
  itinerary: "Itinerary",
};

export const GROUP_ORDER: TopicGroup[] = [
  "tiket",
  "fasilitas",
  "kunjungan",
  "transportasi",
  "kuliner",
  "wisata",
  "itinerary",
];

const CHECK = "Periksa kembali dengan pihak loket atau penjual resmi sebelum berangkat; panduan ini tidak menjual tiket.";

export const TOPICS: TopicContent[] = [
  // ---------- TIKET & JAM BUKA ----------
  {
    slug: "harga-tiket",
    group: "tiket",
    category: "Tiket & Jam Buka",
    title: "Harga Tiket Amsterdam Waterpark 2026: Jenis & Cara Cek",
    description:
      "Panduan cek harga tiket masuk Amsterdam Waterpark Tangerang. Penjual pihak ketiga mencantumkan mulai Rp 35.000; konfirmasi kategori dewasa/anak, parkir dan sewa sebelum beli.",
    h1: "Harga tiket Amsterdam Waterpark, dan cara mengeceknya dengan benar.",
    lead: "Harga masuk resmi Amsterdam Waterpark belum kami verifikasi secara mandiri. Penjual tiket pihak ketiga mencantumkan harga mulai dari Rp 35.000 per orang. Gunakan halaman ini untuk tahu apa yang perlu ditanyakan agar tidak salah beli.",
    sections: [
      {
        heading: "Apa yang tercantum di penjual pihak ketiga",
        paragraphs: [
          "Salah satu platform penjual tiket pihak ketiga (Traveloka) mencantumkan 'Harga Mulai Rp 35.000' untuk I Amsterdam Waterpark. Angka ini berasal dari pihak ketiga, bukan pengumuman resmi operator, dan biasanya adalah harga terendah kategori tertentu, bukan semua jenis pengunjung.",
          "Kami tidak memverifikasi bahwa Rp 35.000 berlaku untuk semua hari, usia, atau sudah termasuk wahana tambahan. Anggap ini sebagai titik awal pengecekan, bukan tarif final."
        ],
        callout: "Harga di atas bukan daftar resmi. Tanyakan harga dewasa, anak, dan paket keluarga secara terpisah sebelum membayar."
      },
      {
        heading: "Kategori yang perlu ditanyakan",
        bullets: [
          "Tiket dewasa dan tiket anak: apakah dibedakan berdasarkan tinggi badan atau usia?",
          "Apakah ada paket keluarga atau tiket terusan dengan wahana tertentu?",
          "Biaya parkir kendaraan roda dua dan roda empat.",
          "Sewa perlengkapan (pelampung, ban, loker) dan aktivitas tambahan.",
          "Kebijakan tanggal berlaku dan pembatalan jika rencana berubah."
        ]
      },
      {
        heading: "Cara cek harga terkini",
        paragraphs: [
          "Buka situs atau aplikasi penjual tiket resmi yang Anda percaya, cari 'I Amsterdam Waterpark', lalu pilih tanggal kunjungan untuk melihat harga per kategori. Bandingkan dengan harga di loket jika memungkinkan.",
          "Jika membeli online, simpan bukti dan periksa kebijakan refund sebelum bayar. Jangan asumsikan satu tiket mencakup semuanya."
        ]
      }
    ],
    faqs: [
      [
        "Berapa harga tiket masuk Amsterdam Waterpark?",
        "Penjual pihak ketiga mencantumkan mulai Rp 35.000 per orang. Harga resmi per kategori belum kami verifikasi; tanyakan tiket dewasa/anak, parkir dan sewa secara terpisah sebelum membeli."
      ],
      [
        "Apakah tiket sudah termasuk semua wahana?",
        "Tidak otomatis. Penjual menyebutkan fasilitas seperti kolam, perosotan, loker dan area parkir, tetapi setiap aktivitas tambahan atau sewa alat perlu dikonfirmasi biayanya masing-masing."
      ],
      [
        "Di mana cek harga paling aman?",
        "Gunakan aplikasi penjual tiket terpercaya dengan tanggal kunjungan spesifik, lalu bandingkan dengan loket. Simpan bukti pembayaran dan baca syarat refund terlebih dahulu."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["cara-beli-tiket", "jam-buka", "parkir", "loker-kamar-ganti"]
  },
  {
    slug: "cara-beli-tiket",
    group: "tiket",
    category: "Tiket & Jam Buka",
    title: "Cara Beli Tiket Amsterdam Waterpark (Online & Loket)",
    description:
      "Langkah beli tiket Amsterdam Waterpark Tangerang secara online via penjual pihak ketiga atau loket, plus poin yang harus dikonfirmasi sebelum bayar.",
    h1: "Cara membeli tiket Amsterdam Waterpark tanpa kebingungan.",
    lead: "Anda bisa membeli tiket melalui aplikasi penjual tiket pihak ketiga atau langsung di loket. Panduan ini merangkum langkah umum dan hal yang wajib dicek agar pembelian sesuai kebutuhan keluarga.",
    sections: [
      {
        heading: "Beli lewat aplikasi penjual tiket",
        paragraphs: [
          "Buka aplikasi atau situs penjual tiket terpercaya, cari 'I Amsterdam Waterpark', pilih tanggal kunjungan, tentukan jumlah dan jenis tiket, lalu ikuti pembayaran hingga selesai.",
          "Setelah bayar, simpan kode tiket atau bukti elektronik. Periksa apakah tiket sudah termasuk wahana yang ingin dicoba atau hanya tiket masuk."
        ]
      },
      {
        heading: "Beli di loket",
        paragraphs: [
          "Jika membeli langsung di tempat, tanyakan kategori harga, jam berlaku, dan apakah masih ada kuota di hari tersebut—terutama saat libur panjang atau akhir pekan.",
          "Siapkan uang tunai atau kartu sesuai kebijakan loket setempat. Konfirmasi lokasi pintu masuk dan titik penukaran tiket sebelum mengantre."
        ]
      },
      {
        heading: "Sebelum bayar, pastikan",
        bullets: [
          "Jenis tiket cocok untuk anggota keluarga yang ikut (dewasa/anak/balita).",
          "Tanggal dan jam berlaku sesuai rencana perjalanan.",
          "Kebijakan refund atau perubahan tanggal jika cuaca buruk.",
          "Biaya parkir dan sewa alat apakah sudah termasuk atau terpisah."
        ],
        callout: CHECK
      }
    ],
    faqs: [
      [
        "Boleh beli tiket di loket hari yang sama?",
        "Biasanya bisa, tetapi ketersediaan tergantung hari dan cuaca. Saat libur, lebih aman cek atau pesan lebih awal agar tidak kehabisan."
      ],
      [
        "Apakah tiket online lebih murah dari loket?",
        "Tidak selalu. Bandingkan harga kategori yang sama antara penjual online dan loket. Jangan asumsikan harga 'mulai Rp 35.000' berlaku untuk semua pengunjung."
      ],
      [
        "Apa yang dilakukan jika rencana berubah?",
        "Baca syarat perubahan tanggal atau refund sebelum membayar. Tanyakan ke penjual apakah tiket bisa dipindah hari atau tidak bisa dikembalikan."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["harga-tiket", "jam-buka", "tips-berkunjung"]
  },
  {
    slug: "jam-buka",
    group: "tiket",
    category: "Tiket & Jam Buka",
    title: "Jam Buka Amsterdam Waterpark & Kebijakan Hari Libur",
    description:
      "Jam buka Amsterdam Waterpark Tangerang menurut Google Maps (08.00–17.00) dan penjual tiket (08.00–18.00). Konfirmasi sebelum berangkat karena bisa berubah.",
    h1: "Jam buka Amsterdam Waterpark, dan mengapa Anda harus cek ulang.",
    lead: "Sumber publik menampilkan jam yang sedikit berbeda: Google Maps mencantumkan setiap hari 08.00–17.00, sementara salah satu penjual tiket pihak ketiga mencantumkan 08.00–18.00. Selisih ini wajar karena data diambil dari pihak berbeda dan bisa berubah.",
    sections: [
      {
        heading: "Dua sumber, dua jam",
        paragraphs: [
          "Snapshot Google Maps yang kami catat menunjukkan operasional setiap hari 08.00–17.00. Penjual tiket pihak ketiga mencantumkan 08.00–18.00. Kami tidak menetapkan mana yang benar; keduanya adalah catatan pihak ketiga, bukan pengumuman resmi operator."
        ],
        callout: "Gunakan rentang 08.00–18.00 sebagai perkiraan, lalu konfirmasi hari itu juga sebelum membeli tiket."
      },
      {
        heading: "Jam tidak menjamin semua wahana buka",
        paragraphs: [
          "Jam operasional keseluruhan bukan jaminan bahwa setiap kolam, perosotan, atau layanan buka penuh sepanjang waktu. Cuaca, pemeliharaan, dan jadwal operator dapat menutup sebagian area."
        ]
      },
      {
        heading: "Hari libur dan akhir pekan",
        bullets: [
          "Saat libur nasional atau akhir pekan, jam dan kepadatan bisa berbeda dari hari biasa.",
          "Konfirmasi apakah ada penyesuaian jam saat hujan deras atau petir.",
          "Datang lebih awal umumnya memberi lebih banyak waktu sebelum antrean panjang."
        ]
      }
    ],
    faqs: [
      [
        "Jam berapa Amsterdam Waterpark buka dan tutup?",
        "Google Maps mencantumkan 08.00–17.00; penjual tiket pihak ketiga mencantumkan 08.00–18.00. Konfirmasi hari itu sebelum berangkat karena bisa berubah."
      ],
      [
        "Apakah buka setiap hari?",
        "Kedua sumber menunjukkan operasional harian, tetapi hari libur atau cuaca buruk dapat mengubah akses. Cek ulang sebelum membeli tiket."
      ],
      [
        "Jam buka berarti semua wahana beroperasi?",
        "Tidak. Jam buka adalah operasional umum; sebagian kolam atau perosotan bisa ditutup karena pemeliharaan atau cuaca."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["harga-tiket", "saat-hujan", "tips-berkunjung", "lokasi-peta"]
  },
  // ---------- WAHANA & FASILITAS ----------
  {
    slug: "wahana",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Wahana & Fasilitas Amsterdam Waterpark (Cek Sebelum Ke Sana)",
    description:
      "Daftar fasilitas Amsterdam Waterpark menurut penjual pihak ketiga: kolam, perosotan, loker, kamar ganti, parkir dan food court. Konfirmasi area yang buka.",
    h1: "Fasilitas Amsterdam Waterpark yang perlu Anda tanyakan saat tiba.",
    lead: "Amsterdam Waterpark adalah waterpark bertema kota Belanda di Villa Tomang Baru Square, Kuta Jaya. Penjual tiket pihak ketiga menyebutkan beberapa fasilitas pendukung; panduan ini merangkumnya tanpa mengklaim semuanya beroperasi penuh setiap hari.",
    sections: [
      {
        heading: "Fasilitas yang disebutkan pihak ketiga",
        paragraphs: [
          "Penjual tiket pihak ketiga memuat daftar fasilitas antara lain toilet, kamar ganti dan bilas, loker untuk menyimpan barang, area parkir, serta food court atau gerai makanan dan minuman. Daftar ini berasal dari pihak ketiga, bukan konfirmasi operator bahwa semua tersedia setiap hari."
        ]
      },
      {
        heading: "Kolam dan perosotan",
        paragraphs: [
          "Tanyakan area mana yang sedang buka, kedalaman masing-masing, serta batas usia dan tinggi untuk tiap perosotan. Kami tidak memverifikasi ukuran kolam atau ketentuan anak secara mandiri."
        ],
        callout: "Pilih hanya area yang dibuka dan sesuai aturan operator, terutama untuk anak."
      },
      {
        heading: "Sarana olahraga dan aktivitas tambahan",
        paragraphs: [
          "Lapangan atau aktivitas selain kolam tidak otomatis termasuk tiket masuk. Konfirmasikan jadwal, biaya, dan syarat masing-masing sebelum mengandalkannya dalam rencana."
        ]
      }
    ],
    faqs: [
      [
        "Apa saja fasilitas di Amsterdam Waterpark?",
        "Penjual pihak ketiga menyebutkan toilet, kamar ganti dan bilas, loker, area parkir, serta food court. Ketersediaan harian perlu dikonfirmasi di lokasi."
      ],
      [
        "Apakah ada perosotan dan kolam anak?",
        "Terdapat area kolam dan perosotan, tetapi kedalaman dan batas usia/tinggi perlu ditanyakan saat tiba. Jangan asumsikan semua area cocok untuk balita."
      ],
      [
        "Apakah sarana olahraga termasuk tiket?",
        "Tidak otomatis. Lapangan dan aktivitas tambahan dikonfirmasi biaya dan jadwalnya masing-masing."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["kolam-anak", "loker-kamar-ganti", "aturan-makanan-minuman", "keselamatan-air"]
  },
  {
    slug: "kolam-anak",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Kolam & Area Anak Amsterdam Waterpark: Panduan Orang Tua",
    description:
      "Panduan kolam anak di Amsterdam Waterpark Tangerang: tanyakan kedalaman, batas usia/tinggi dan pengawasan. Tidak ada ukuran yang kami verifikasi.",
    h1: "Area anak Amsterdam Waterpark, dan apa yang harus dikonfirmasi orang tua.",
    lead: "Banyak keluarga datang untuk kolam anak dan perosotan. Karena panduan ini tidak memverifikasi kedalaman atau ketentuan anak secara mandiri, fokus halaman ini adalah daftar pertanyaan yang wajib Anda ajukan sebelum membiarkan anak bermain.",
    sections: [
      {
        heading: "Pertanyaan wajib sebelum anak bermain",
        bullets: [
          "Area mana yang khusus anak, dan berapa kedalamannya?",
          "Apakah ada batas usia atau tinggi untuk perosotan tertentu?",
          "Di mana titik pengawasan petugas, dan apakah pelampung wajib?",
          "Apakah kolam anak terpisah dari kolam dewasa yang lebih dalam?"
        ],
        callout: "Awasi anak setiap saat. Jangan menganggap area dangkal selalu aman untuk semua usia."
      },
      {
        heading: "Persiapan untuk anak",
        paragraphs: [
          "Bawa pakaian renang, pelampung atau ban sesuai aturan loket, baju ganti, dan perlengkapan mandi ringkas. Cek apakah alat tertentu wajib disewa di tempat."
        ]
      },
      {
        heading: "Saat ramai",
        paragraphs: [
          "Di akhir pekan atau libur, area anak cenderung padat. Datang lebih awal dan tentukan titik kumpul agar tidak terpisah."
        ]
      }
    ],
    faqs: [
      [
        "Apakah ada kolam khusus anak?",
        "Penjual pihak ketiga menyebutkan area kolam dan perosotan, tetapi kami tidak memverifikasi kedalaman atau batas usia. Tanyakan area anak dan pengawasannya saat tiba."
      ],
      [
        "Apakah balita boleh masuk kolam?",
        "Ketentuan balita bergantung aturan operator dan kedalaman area. Konfirmasikan sebelum membeli tiket agar sesuai usia anak."
      ],
      [
        "Apakah pelampung wajib?",
        "Kewajiban pelampung atau ban tergantung area dan aturan loket. Tanyakan apakah boleh bawa sendiri atau harus sewa di tempat."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["untuk-balita", "untuk-keluarga", "keselamatan-air", "wahana"]
  },
  {
    slug: "foto",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Foto & Spot Foto Amsterdam Waterpark (Gambar Referensi)",
    description:
      "Kumpulan gambar referensi Amsterdam Waterpark Tangerang: kincir angin, kolam dan area anak. Caption menjelaskan status referensi, bukan keadaan hari ini.",
    h1: "Foto referensi Amsterdam Waterpark dan cara menafsirkannya.",
    lead: "Halaman ini mengumpulkan gambar referensi yang beredar di platform publik. Gambar ini membantu mengenali nuansa tema Belanda dan area bermain, tetapi bukan jaminan sudut atau fasilitas yang sama dapat diakses hari ini.",
    sections: [
      {
        heading: "Tema visual kincir angin",
        paragraphs: [
          "Artikel Pemerintah Kota Tangerang (25 April 2025) menyebut Amsterdam Waterpark bertema Eropa/kincir angin. Kincir angin menjadi penanda tema, bukan lokasi di Belanda."
        ],
        callout: "Alamat navigasi tetap di Pasar Kemis, Kabupaten Tangerang, Banten—bukan Amsterdam di Belanda."
      },
      {
        heading: "Area kolam dan perosotan",
        paragraphs: [
          "Gambar referensi menunjukkan kolam dengan perosotan berwarna dan struktur permainan di air. Gunakan sebagai gambaran umum; konfirmasi area yang buka saat kunjungan."
        ]
      },
      {
        heading: "Etika foto",
        paragraphs: [
          "Gunakan area yang diizinkan untuk foto dan hormati privasi pengunjung lain, terutama saat memotret anak. Jangan asumsikan sudut yang sama selalu bisa diakses."
        ]
      }
    ],
    faqs: [
      [
        "Di mana titik foto paling populer?",
        "Kincir angin dan area kolam menjadi penanda visual utama. Kami tidak menjamin akses sudut yang sama; ikuti arahan lokasi saat memotret."
      ],
      [
        "Apakah foto di panduan adalah foto terkini?",
        "Tidak. Gambar adalah referensi dari platform publik; lokasi dan tanggal pengambilan belum diverifikasi mandiri."
      ],
      [
        "Boleh foto di dalam area bermain?",
        "Gunakan area yang diizinkan dan hormati privasi pengunjung lain. Tanya petugas jika ragu soal titik foto."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["wahana", "kolam-anak", "ulasan"]
  },
  {
    slug: "loker-kamar-ganti",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Loker, Kamar Ganti & Bilas Amsterdam Waterpark",
    description:
      "Loker, kamar ganti dan bilas di Amsterdam Waterpark menurut penjual pihak ketiga. Konfirmasi ketersediaan, kapasitas dan biaya saat tiba.",
    h1: "Loker dan kamar ganti Amsterdam Waterpark: apa yang perlu dikonfirmasi.",
    lead: "Penjual tiket pihak ketiga menyebutkan ketersediaan toilet, kamar ganti dan bilas, serta loker untuk menyimpan barang. Panduan ini merangkumnya tanpa memastikan biaya atau kapasitas.",
    sections: [
      {
        heading: "Apa yang disebutkan",
        paragraphs: [
          "Daftar fasilitas pihak ketiga mencakup toilet, kamar ganti dan bilas, serta loker. Keberadaan ini membantu perencanaan, tetapi ketersediaan harian, kapasitas, dan tarif loker belum kami verifikasi."
        ]
      },
      {
        heading: "Tips membawa barang",
        bullets: [
          "Siapkan kantong pakaian basah terpisah dan baju ganti.",
          "Bawa perlengkapan mandi ringkas sendiri untuk kenyamanan.",
          "Tanyakan lokasi loker dan apakah perlu koin atau pembayaran digital.",
          "Jangan tinggalkan barang berharga tanpa pengawasan."
        ],
        callout: "Tanyakan ketersediaan dan tarif loker kepada petugas sebelum membeli tiket."
      }
    ],
    faqs: [
      [
        "Apakah disediakan loker dan kamar ganti?",
        "Penjual pihak ketiga menyebutkan loker, kamar ganti dan bilas tersedia. Konfirmasikan ketersediaan serta tarif saat tiba."
      ],
      [
        "Berapa biaya loker?",
        "Biaya loker belum kami verifikasi. Tanyakan petugas apakah gratis atau berbayar, dan metode pembayarannya."
      ],
      [
        "Boleh bawa baju ganti sendiri?",
        "Biasanya boleh. Siapkan kantong pakaian basah dan perlengkapan mandi sendiri agar lebih nyaman setelah berenang."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["wahana", "toilet-mushola-istirahat", "barang-bawaan", "harga-tiket"]
  },
  {
    slug: "toilet-mushola-istirahat",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Toilet, Mushola & Area Istirahat Amsterdam Waterpark",
    description:
      "Toilet Amsterdam Waterpark tersedia menurut pihak ketiga. Mushola dan area istirahat belum diverifikasi; konfirmasi di lokasi saat ramai.",
    h1: "Toilet, mushola, dan area istirahat: fasilitas dasar yang perlu dicek.",
    lead: "Penjual tiket pihak ketiga menyebutkan toilet sebagai fasilitas pendukung. Untuk mushola dan area istirahat, panduan ini belum menemukan konfirmasi mandiri, sehingga perlu ditanyakan langsung di lokasi.",
    sections: [
      {
        heading: "Toilet",
        paragraphs: [
          "Toilet tercantum dalam daftar fasilitas pihak ketiga. Saat ramai, antrean bisa panjang; ajak anak ke toilet sebelum area bermain penuh."
        ]
      },
      {
        heading: "Mushola dan area istirahat",
        paragraphs: [
          "Kami tidak memverifikasi keberadaan mushola atau ruang istirahat khusus. Tanyakan kepada petugas lokasi jika keluarga membutuhkan titik istirahat atau ibadah."
        ],
        callout: "Bawa perlengkapan ibadah sendiri jika diperlukan; jangan asumsikan mushola tersedia."
      }
    ],
    faqs: [
      [
        "Apakah ada toilet di area waterpark?",
        "Ya, toilet tercantum dalam daftar fasilitas pihak ketiga. Konfirmasi kondisi dan lokasinya saat tiba."
      ],
      [
        "Apakah tersedia mushola?",
        "Kami belum memverifikasi mushola. Tanyakan petugas lokasi; bawa perlengkapan ibadah sendiri untuk berjaga."
      ],
      [
        "Di mana area istirahat yang nyaman?",
        "Gunakan area teduh yang disediakan dan hindari meninggalkan anak tanpa pengawasan. Titik istirahat pasti perlu dipastikan di lokasi."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["loker-kamar-ganti", "barang-bawaan", "untuk-keluarga"]
  },
  {
    slug: "aturan-makanan-minuman",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Aturan Bawa Makanan & Minuman Amsterdam Waterpark",
    description:
      "Food court tersedia menurut pihak ketiga. Aturan bawa bekal belum diverifikasi; konfirmasi sebelum memasukkan makanan sendiri.",
    h1: "Makanan, minuman, dan food court di Amsterdam Waterpark.",
    lead: "Penjual tiket pihak ketiga menyebutkan food court atau gerai makanan dan minuman di area waterpark. Aturan membawa bekal dari luar belum kami verifikasi, sehingga perlu ditanyakan di lokasi.",
    sections: [
      {
        heading: "Food court di area",
        paragraphs: [
          "Daftar fasilitas pihak ketiga mencakup food court atau gerai makanan dan minuman. Ini memberi opsi makan di dalam area, tetapi pilihan menu dan harga perlu dicek langsung."
        ]
      },
      {
        heading: "Bawa bekal sendiri?",
        bullets: [
          "Tanyakan apakah makanan/minuman dari luar diperbolehkan masuk.",
          "Siapkan air minum cukup, mengingat cuaca panas.",
          "Perhatikan aturan jenis wadah yang diizinkan.",
          "Buang sampah pada tempatnya untuk menjaga kenyamanan bersama."
        ],
        callout: "Aturan bawa makanan dari luar belum diverifikasi; konfirmasi ke petugas sebelum membawa bekal."
      }
    ],
    faqs: [
      [
        "Apakah boleh bawa makanan sendiri?",
        "Aturan membawa bekal dari luar belum kami verifikasi. Tanyakan petugas lokasi sebelum membawa makanan atau minuman masuk."
      ],
      [
        "Apakah ada tempat makan di dalam?",
        "Penjual pihak ketiga menyebutkan food court atau gerai makanan. Pilihan menu dan harga cek langsung di lokasi."
      ],
      [
        "Perlu bawa air minum?",
        "Sangat disarankan, terutama saat cuaca panas. Sesuaikan dengan aturan bawa minuman yang berlaku."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["tempat-makan-dekat", "loker-kamar-ganti", "tips-berkunjung"]
  },
  {
    slug: "aksesibilitas",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Aksesibilitas Amsterdam Waterpark untuk Pengunjung Berkebutuhan Khusus",
    description:
      "Panduan aksesibilitas Amsterdam Waterpark: tanyakan jalur tanpa tangga, area istirahat dan kamar ganti sebelum berkunjung.",
    h1: "Aksesibilitas Amsterdam Waterpark: pertanyaan yang wajib diajukan.",
    lead: "Panduan ini belum memverifikasi ketersediaan fasilitas aksesibilitas seperti jalur tanpa tangga atau kursi roda. Halaman ini merangkum hal yang harus dikonfirmasi agar kunjungan lebih mudah direncanakan.",
    sections: [
      {
        heading: "Yang perlu ditanyakan",
        bullets: [
          "Apakah ada jalur tanpa tangga menuju pintu masuk dan area kolam?",
          "Di mana kamar ganti dan toilet yang mudah diakses?",
          "Apakah disediakan kursi roda atau bantuan pengunjung?",
          "Bagaimana kondisi lantai basah di jalur yang dilalui?"
        ],
        callout: "Jangan asumsikan area dangkal atau lantai rata selalu cocok untuk semua pengunjung."
      },
      {
        heading: "Saat ramai",
        paragraphs: [
          "Lantai basah dan keramaian dapat menyulitkan pergerakan. Datang lebih awal dan tentukan titik istirahat yang aman."
        ]
      }
    ],
    faqs: [
      [
        "Apakah Amsterdam Waterpark ramah kursi roda?",
        "Kami belum memverifikasi fasilitas kursi roda atau jalur tanpa tangga. Tanyakan langsung ke pihak loket sebelum berkunjung."
      ],
      [
        "Di mana area istirahat yang mudah dijangkau?",
        "Titik istirahat dan toiletnya perlu dikonfirmasi di lokasi; bawa pendamping jika diperlukan."
      ],
      [
        "Apakah lansia disarankan datang?",
        "Sesuaikan dengan kondisi kesehatan dan aturan area basah. Konfirmasikan akses aman sebelum membeli tiket."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["toilet-mushola-istirahat", "keselamatan-air", "tips-berkunjung"]
  },
  {
    slug: "keselamatan-air",
    group: "fasilitas",
    category: "Wahana & Fasilitas",
    title: "Aturan & Keselamatan Bermain Air di Amsterdam Waterpark",
    description:
      "Aturan bermain air di Amsterdam Waterpark: awasi anak, ikuti batas usia/tinggi, dan jangan berenang saat petir. Panduan independen.",
    h1: "Keselamatan bermain air yang wajib diutamakan.",
    lead: "Keamanan di kolam dan perosotan bergantung pada aturan lokasi dan pengawasan pengunjung. Halaman ini merangkum prinsip umum keselamatan air yang berlaku di fasilitas rekreasi air.",
    sections: [
      {
        heading: "Prinsip dasar",
        bullets: [
          "Awasi anak setiap saat; jangan bergantung pada pengawas saja.",
          "Ikuti batas usia dan tinggi untuk tiap perosotan.",
          "Cek kedalaman dan kondisi lantai basah sebelum bermain.",
          "Jangan berenang atau gunakan wahana saat petir atau area ditutup."
        ],
        callout: "Ikuti arahan petugas. Jika area ditutup, jangan menganggap semua wahana tetap beroperasi."
      },
      {
        heading: "Cuaca dan kenyamanan",
        paragraphs: [
          "Gunakan pelindung matahari dan minum cukup saat cuaca panas. Saat hujan deras atau petir, ikuti arahan petugas untuk berhenti bermain air."
        ]
      },
      {
        heading: "Kebersihan bersama",
        paragraphs: [
          "Buang sampah pada tempatnya, kurangi plastik sekali pakai, dan jangan menggunakan sabun atau shampo di kolam umum."
        ]
      }
    ],
    faqs: [
      [
        "Apakah aman membawa balita ke kolam?",
        "Aman jika diawasi ketat dan di area yang sesuai aturan operator. Konfirmasikan kedalaman dan batas usia sebelum membiarkan balita bermain."
      ],
      [
        "Boleh bermain saat hujan?",
        "Saat hujan deras atau petir, ikuti arahan petugas dan hentikan aktivitas air. Jangan asumsikan wahana tetap buka."
      ],
      [
        "Apa yang dilakukan jika ada kondisi tidak aman?",
        "Laporkan ke petugas dan jauhkan anak dari area tersebut. Utamakan pengumuman operator di hari kunjungan."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["kolam-anak", "untuk-balita", "saat-hujan", "aksesibilitas"]
  },
  // ---------- PANDUAN KUNJUNGAN ----------
  {
    slug: "tips-berkunjung",
    group: "kunjungan",
    category: "Panduan Kunjungan",
    title: "Tips Berkunjung ke Amsterdam Waterpark untuk Pemula",
    description:
      "Tips pertama kali ke Amsterdam Waterpark Tangerang: waktu terbaik, durasi, tiket, dan hal wajib konfirmasi sebelum berangkat.",
    h1: "Tips berkunjung Amsterdam Waterpark agar tidak terkejut.",
    lead: "Halaman ini merangkum langkah persiapan yang membantu kunjungan pertama berjalan lancar: dari mengecek tiket dan cuaca, hingga membawa perlengkapan yang tepat.",
    sections: [
      {
        heading: "Sebelum berangkat",
        bullets: [
          "Cek tiket, jam buka, dan cuaca hari itu.",
          "Siapkan pakaian renang, handuk, sandal anti-selip, baju ganti, dan perlengkapan anak.",
          "Simpan pin peta -6.1582786, 106.5835666 dan alamat lengkap.",
          "Tentukan titik kumpul keluarga jika ramai."
        ]
      },
      {
        heading: "Saat di lokasi",
        paragraphs: [
          "Konfirmasi area yang buka, aturan perosotan, dan biaya parkir atau sewa alat. Datang lebih awal memberi waktu lebih sebelum antrean panjang."
        ],
        callout: "Gunakan prakiraan cuaca regional sebagai panduan, bukan konfirmasi buka/tutup fasilitas."
      },
      {
        heading: "Durasi saran",
        paragraphs: [
          "Izinkan 3–5 jam sebagai saran perencanaan termasuk persiapan dan istirahat. Sesuaikan dengan area yang benar-benar buka dan kondisi keluarga."
        ]
      }
    ],
    faqs: [
      [
        "Kapan waktu terbaik berkunjung?",
        "Pilih waktu yang sesuai keluarga dan prakiraan harian. Konfirmasi akses hari itu, terutama saat libur atau cuaca buruk."
      ],
      [
        "Berapa lama waktu yang ideal?",
        "Saran 3–5 jam termasuk persiapan dan istirahat, bukan durasi resmi. Sesuaikan dengan area yang buka dan cuaca."
      ],
      [
        "Apa yang sering terlupakan pengunjung?",
        "Baju ganti, sandal anti-selip, pelindung matahari, dan air minum. Serta konfirmasi parkir dan loker sebelum membeli tiket."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["barang-bawaan", "jam-buka", "harga-tiket", "saat-hujan"]
  },
  {
    slug: "barang-bawaan",
    group: "kunjungan",
    category: "Panduan Kunjungan",
    title: "Barang yang Harus Dibawa ke Amsterdam Waterpark",
    description:
      "Daftar bawaan Amsterdam Waterpark: pakaian renang, handuk, sandal anti-selip, baju ganti, pelindung matahari dan kebutuhan anak.",
    h1: "Barang bawaan Amsterdam Waterpark supaya tidak kurang satu.",
    lead: "Persiapan bawaan yang tepat membuat kunjungan lebih nyaman. Berikut daftar praktis beserta catatan agar Anda tidak lupa hal penting.",
    sections: [
      {
        heading: "Bawaan wajib",
        bullets: [
          "Pakaian renang untuk setiap anggota keluarga.",
          "Handuk dan baju ganti.",
          "Sandal anti-selip untuk lantai basah.",
          "Kantong pakaian basah terpisah.",
          "Pelindung matahari dan air minum."
        ]
      },
      {
        heading: "Kebutuhan anak",
        bullets: [
          "Pelampung atau ban sesuai aturan loket (tanya apakah boleh bawa sendiri).",
          "Popok renang jika diperlukan.",
          "Camilan dan obat pribadi."
        ]
      },
      {
        heading: "Dokumen dan navigasi",
        paragraphs: [
          "Simpan bukti tiket, pin peta -6.1582786, 106.5835666, dan alamat lengkap Villa Tomang Baru Square. Siapkan uang tunai atau kartu sesuai kebijakan loket."
        ]
      }
    ],
    faqs: [
      [
        "Wajib bawa pelampung sendiri?",
        "Tergantung aturan loket; tanyakan apakah boleh bawa sendiri atau wajib sewa di tempat. Siapkan rencana cadangan."
      ],
      [
        "Boleh bawa makanan sendiri?",
        "Aturan membawa bekal dari luar belum diverifikasi; konfirmasi ke petugas. Bawa air minum cukup sesuai aturan."
      ],
      [
        "Apa yang sering lupa dibawa?",
        "Baju ganti, sandal anti-selip, dan pelindung matahari. Juga bukti tiket dan pin peta untuk navigasi."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["tips-berkunjung", "loker-kamar-ganti", "aturan-makanan-minuman"]
  },
  {
    slug: "untuk-balita",
    group: "kunjungan",
    category: "Panduan Kunjungan",
    title: "Amsterdam Waterpark untuk Balita: Apakah Cocok & Persiapan",
    description:
      "Panduan bawa balita ke Amsterdam Waterpark: tanyakan kedalaman kolam anak, batas usia, pelampung dan pengawasan. Bukan jaminan aman.",
    h1: "Amsterdam Waterpark untuk balita: cocok atau tidak?",
    lead: "Banyak orang tua membawa balita ke waterpark. Karena panduan ini tidak memverifikasi kedalaman atau ketentuan anak, fokus halaman ini adalah persiapan dan pertanyaan wajib sebelum membawa bayi atau balita.",
    sections: [
      {
        heading: "Pertanyaan sebelum membawa balita",
        bullets: [
          "Apakah ada kolam khusus balita dan berapa kedalamannya?",
          "Batas usia atau tinggi untuk perosotan tertentu?",
          "Apakah pelampung atau ban wajib, dan boleh bawa sendiri?",
          "Di mana titik pengawasan dan bilas terdekat?"
        ],
        callout: "Awasi balita setiap saat. Jangan asumsikan area dangkal selalu cocok untuk semua usia."
      },
      {
        heading: "Persiapan balita",
        paragraphs: [
          "Bawa popok renang, baju ganti ekstra, pelindung matahari anak, dan camilan. Cek aturan suhu air dan jadwal istirahat agar balita tidak lelah."
        ]
      },
      {
        heading: "Saat ramai",
        paragraphs: [
          "Akhir pekan dan libur cenderung padat. Datang lebih awal dan tentukan titik kumpul agar tidak terpisah."
        ]
      }
    ],
    faqs: [
      [
        "Apakah Amsterdam Waterpark cocok untuk balita?",
        "Tergantung ketersediaan kolam anak dan kedalamannya. Kami tidak memverifikasi ukuran; tanyakan saat tiba sebelum membeli tiket."
      ],
      [
        "Berapa usia minimal yang diperbolehkan?",
        "Ketentuan usia bergantung aturan operator. Konfirmasikan sebelum berkunjung agar sesuai usia anak."
      ],
      [
        "Perlu bawa pelampung khusus balita?",
        "Kewajiban pelampung tergantung area dan aturan loket. Tanyakan apakah boleh bawa sendiri atau harus sewa di tempat."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["kolam-anak", "untuk-keluarga", "pemula-berenang", "keselamatan-air"]
  },
  {
    slug: "untuk-keluarga",
    group: "kunjungan",
    category: "Panduan Kunjungan",
    title: "Amsterdam Waterpark untuk Keluarga: Rencana & Tips",
    description:
      "Rencana kunjungan keluarga ke Amsterdam Waterpark: durasi, area anak, istirahat, makan, dan titik kumpul saat ramai.",
    h1: "Amsterdam Waterpark untuk keluarga: susun rencana dari rumah.",
    lead: "Waterpark adalah pilihan rekreasi keluarga yang populer di Tangerang. Halaman ini membantu menyusun rencana keluarga tanpa bergantung pada informasi yang belum diverifikasi.",
    sections: [
      {
        heading: "Susun rencana bersama",
        paragraphs: [
          "Tentukan siapa yang ikut, kebutuhan tiap anak, dan durasi saran 3–5 jam. Konfirmasi area yang buka dan aturan perosotan saat tiba."
        ]
      },
      {
        heading: "Kenyamanan bersama",
        bullets: [
          "Tentukan titik kumpul keluarga sebelum masuk area ramai.",
          "Giliran menjaga anak di kolam dan di area istirahat.",
          "Siapkan baju ganti dan handuk untuk semua anggota.",
          "Cek opsi makan di food court atau area sekitar."
        ]
      },
      {
        heading: "Anggaran",
        paragraphs: [
          "Hitung tiket per kategori, parkir, sewa alat, dan makan terpisah. Jangan asumsikan satu tiket mencakup semuanya."
        ],
        callout: "Konfirmasi harga dewasa/anak, parkir, dan sewa sebelum membeli tiket."
      }
    ],
    faqs: [
      [
        "Berapa lama waktu yang cukup untuk keluarga?",
        "Saran 3–5 jam termasuk persiapan dan istirahat. Sesuaikan dengan area yang benar-benar buka dan kondisi anak."
      ],
      [
        "Apakah nyaman untuk lansia ikut?",
        "Tergantung akses dan aturan area basah. Konfirmasikan jalur aman dan titik istirahat sebelum membeli tiket."
      ],
      [
        "Bagaimana agar tidak terpisah saat ramai?",
        "Tetapkan titik kumpul dan giliran menjaga anak. Datang lebih awal mengurangi kepadatan."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["untuk-balita", "itinerary-keluarga", "tempat-makan-dekat", "tips-berkunjung"]
  },
  {
    slug: "pemula-berenang",
    group: "kunjungan",
    category: "Panduan Kunjungan",
    title: "Amsterdam Waterpark untuk Pemula Berenang: Tips Aman",
    description:
      "Tips pemula berenang di Amsterdam Waterpark: pilih area dangkal, gunakan pelampung, dan ikuti batas usia. Bukan kursus renang.",
    h1: "Amsterdam Waterpark untuk pemula berenang: nikmati air dengan aman.",
    lead: "Bagi yang jarang berenang, waterpark bisa menyenangkan asal memilih area yang sesuai. Halaman ini memberi panduan umum keamanan, bukan instruksi renang.",
    sections: [
      {
        heading: "Mulai dari area dangkal",
        paragraphs: [
          "Tanyakan area dengan kedalaman terendah dan cocok untuk pemula. Jangan langsung ke perosotan atau kolam dalam sebelum yakin nyaman di air."
        ]
      },
      {
        heading: "Alat bantu dan aturan",
        bullets: [
          "Gunakan pelampung atau ban sesuai aturan loket.",
          "Ikuti batas usia dan tinggi untuk perosotan.",
          "Jangan berenang saat petir atau area ditutup."
        ],
        callout: "Awasi anak atau pasangan yang belum mahir; jangan bergantung pada pengawas saja."
      },
      {
        heading: "Kenyamanan",
        paragraphs: [
          "Gunakan pelindung matahari dan minum cukup. Istirahat jika lelah agar tidak kram atau dehidrasi."
        ]
      }
    ],
    faqs: [
      [
        "Apakah cocok untuk yang tidak bisa berenang?",
        "Bisa, asal di area dangkal dan menggunakan pelampung sesuai aturan. Jangan masuk kolam dalam jika tidak yakin."
      ],
      [
        "Wajib bisa berenang untuk naik perosotan?",
        "Tergantung aturan operator dan kedalaman kolam tujuan. Tanyakan sebelum menggunakan perosotan."
      ],
      [
        "Perlu bawa pelampung sendiri?",
        "Tanyakan loket apakah boleh bawa sendiri atau wajib sewa di tempat. Siapkan rencana cadangan."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["kolam-anak", "keselamatan-air", "untuk-balita"]
  },
  {
    slug: "saat-hujan",
    group: "kunjungan",
    category: "Panduan Kunjungan",
    title: "Amsterdam Waterpark Saat Hujan: Keputusan & Persiapan Cuaca",
    description:
      "Amsterdam Waterpark saat hujan: cek prakiraan, ikuti arahan petugas, dan siapkan rencana cadangan. Prakiraan bukan konfirmasi buka.",
    h1: "Saat hujan: bagaimana memutuskan kunjungan Amsterdam Waterpark.",
    lead: "Cuaca tropis Tangerang sering hujan tiba-tiba. Halaman ini membantu membaca prakiraan regional dan menyiapkan keputusan, tanpa mengklaim panduan cuaca sebagai konfirmasi buka/tutup.",
    sections: [
      {
        heading: "Gunakan prakiraan regional",
        paragraphs: [
          "Widget cuaca di panduan menampilkan prakiraan Open-Meteo di sekitar pin peta. Ini informasi regional, bukan sensor di kolam atau keputusan operator."
        ]
      },
      {
        heading: "Saat hujan di lokasi",
        bullets: [
          "Ikuti arahan petugas; jangan asumsikan semua wahana tetap beroperasi.",
          "Hentikan aktivitas air saat petir.",
          "Gunakan area teduh dan bilas sebelum meninggalkan kolam."
        ],
        callout: "Utamakan pengumuman operator pada hari kunjungan di atas prakiraan."
      },
      {
        heading: "Rencana cadangan",
        paragraphs: [
          "Jika hujan deras, pertimbangkan menunda atau beralih ke itinerary alternatif di sekitar Pasar Kemis yang tidak bergantung air."
        ]
      }
    ],
    faqs: [
      [
        "Apakah waterpark tutup saat hujan?",
        "Tergantung kebijakan operator dan kondisi lapangan. Ikuti arahan petugas; jangan asumsikan semua area tutup atau tetap buka."
      ],
      [
        "Apakah prakiraan cuaca akurat untuk lokasi?",
        "Prakiraan bersifat regional di sekitar pin peta, bukan pengukuran di kolam. Gunakan sebagai panduan, bukan konfirmasi."
      ],
      [
        "Apa rencana cadangan saat hujan?",
        "Tunda kunjungan atau beralih ke wisata sekitar Pasar Kemis yang tidak bergantung air. Cek itinerary alternatif di panduan ini."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["jam-buka", "itinerary-alternatif-hujan", "tips-berkunjung", "wisata-keluarga-dekat"]
  },
  // ---------- TRANSPORTASI ----------
  {
    slug: "lokasi-peta",
    group: "transportasi",
    category: "Transportasi",
    title: "Lokasi & Peta Amsterdam Waterpark (Pasar Kemis, Tangerang)",
    description:
      "Alamat dan peta Amsterdam Waterpark: Villa Tomang Baru Square, Kuta Jaya, Pasar Kemis, Tangerang, Banten. Pin -6.1582786, 106.5835666.",
    h1: "Lokasi Amsterdam Waterpark, dan mengapa alamatnya penting.",
    lead: "Amsterdam Waterpark berada di Villa Tomang Baru Square, Jl. Villa Tomang Baru No.1, Kuta Jaya, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15561. Gunakan alamat lengkap dan pin peta agar tidak tertukar dengan Amsterdam di Belanda.",
    sections: [
      {
        heading: "Alamat lengkap",
        paragraphs: [
          "Villa Tomang Baru Square, Jl. Villa Tomang Baru No.1, Kuta Jaya, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15561, Indonesia. Koordinat: -6.1582786, 106.5835666."
        ],
        callout: "Ini lokasi di Pasar Kemis, Indonesia—bukan Amsterdam di Belanda."
      },
      {
        heading: "Gunakan pin dan aplikasi peta",
        paragraphs: [
          "Salin pin -6.1582786, 106.5835666 ke aplikasi peta untuk belokan terakhir. Periksa akses jalan dan pintu masuk terkini, terutama jika menggunakan kendaraan pribadi."
        ]
      },
      {
        heading: "Entitas wilayah",
        bullets: [
          "Kecamatan: Pasar Kemis.",
          "Kabupaten: Tangerang, Banten.",
          "Kelurahan sekitar: Kuta Jaya; area Kutabumi/Kotabumi juga di Pasar Kemis."
        ]
      }
    ],
    faqs: [
      [
        "Di mana persisnya Amsterdam Waterpark?",
        "Di Villa Tomang Baru Square, Jl. Villa Tomang Baru No.1, Kuta Jaya, Pasar Kemis, Tangerang, Banten. Pin -6.1582786, 106.5835666."
      ],
      [
        "Apakah ini di Belanda?",
        "Tidak. Alamat berada di Pasar Kemis, Kabupaten Tangerang, Banten, Indonesia. Nama bertema Belanda tidak memindahkan lokasinya."
      ],
      [
        "Bagaimana membuka peta?",
        "Gunakan pin di atas atau tautan Google Maps di panduan. Periksa rute dan pintu masuk sesuai titik awal Anda."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["rute-jakarta", "rute-kota-tangerang", "parkir", "jam-buka"]
  },
  {
    slug: "rute-jakarta",
    group: "transportasi",
    category: "Transportasi",
    title: "Rute Jakarta ke Amsterdam Waterpark (Tangerang)",
    description:
      "Rute dari Jakarta ke Amsterdam Waterpark: arah Tangerang/Pasar Kemis via tol. Jarak dan waktu perkiraan; konfirmasi di aplikasi peta.",
    h1: "Rute Jakarta ke Amsterdam Waterpark, dan apa yang perlu diperhitungkan.",
    lead: "Dari Jakarta, perjalanan menuju Pasar Kemis biasanya melewati jaringan tol menuju arah Tangerang. Halaman ini memberi kerangka umum; jarak dan waktu tempuh bervariasi dengan titik awal dan hari perjalanan.",
    sections: [
      {
        heading: "Kerangka umum",
        paragraphs: [
          "Jakarta dan Tangerang terhubung tol yang dapat ditempuh dalam waktu yang bervariasi tergantung titik awal dan kepadatan. Dari pusat Jakarta ke arah Pasar Kemis biasanya membutuhkan waktu tempuh yang signifikan saat jam sibuk."
        ],
        callout: "Gunakan pin -6.1582786, 106.5835666 di aplikasi peta untuk rute dan waktu nyata sesuai kondisi lalu lintas."
      },
      {
        heading: "Moda yang umum",
        bullets: [
          "Kendaraan pribadi atau sewaan via tol menuju Tangerang/Pasar Kemis.",
          "Transportasi umum dilanjutkan dengan ojek online untuk menjangkau pintu masuk.",
          "Taksi atau ride-hailing langsung dari Jakarta ke alamat lengkap."
        ]
      },
      {
        heading: "Tiba di lokasi",
        paragraphs: [
          "Setelah keluar di simpul Tangerang/Pasar Kemis, gunakan alamat lengkap dan pin untuk belokan terakhir. Periksa akses jalan dan titik turun yang aman."
        ]
      }
    ],
    faqs: [
      [
        "Berapa lama dari Jakarta ke Amsterdam Waterpark?",
        "Bervariasi dengan titik awal dan lalu lintas; gunakan aplikasi peta dengan pin lokasi untuk perkiraan waktu nyata."
      ],
      [
        "Lewat tol mana?",
        "Gunakan aplikasi peta menuju arah Tangerang/Pasar Kemis. Kami tidak menetapkan nomor jalan tol tertentu."
      ],
      [
        "Apakah ada transportasi umum langsung?",
        "Tidak ada rute langsung yang kami konfirmasi. Opsi umum dilanjutkan ojek online dari simpul terdekat ke pintu masuk."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["transportasi-umum", "ojek-online", "parkir", "lokasi-peta"]
  },
  {
    slug: "rute-kota-tangerang",
    group: "transportasi",
    category: "Transportasi",
    title: "Rute Kota Tangerang ke Amsterdam Waterpark",
    description:
      "Rute dari Kota Tangerang ke Amsterdam Waterpark di Pasar Kemis. Jarak lebih dekat dari Jakarta; konfirmasi rute di aplikasi peta.",
    h1: "Rute Kota Tangerang ke Amsterdam Waterpark.",
    lead: "Jika Anda berangkat dari pusat Kota Tangerang, jarak ke Pasar Kemis umumnya lebih pendek dibanding dari Jakarta. Halaman ini memberi kerangka umum tanpa menetapkan nomor rute.",
    sections: [
      {
        heading: "Arah umum",
        paragraphs: [
          "Dari pusat Kota Tangerang, menuju ke arah Pasar Kemis melalui jaringan jalan utama dan tol lokal. Waktu tempuh bervariasi dengan titik awal persis dan kepadatan lalu lintas."
        ],
        callout: "Gunakan pin -6.1582786, 106.5835666 untuk rute dan waktu nyata di aplikasi peta."
      },
      {
        heading: "Moda",
        bullets: [
          "Kendaraan pribadi atau sewaan.",
          "Angkutan umum dilanjutkan ojek online ke pintu masuk.",
          "Ride-hailing langsung ke alamat lengkap."
        ]
      }
    ],
    faqs: [
      [
        "Berapa jauh Kota Tangerang ke sini?",
        "Lebih dekat dari Jakarta, tetapi jarak pasti tergantung titik awal. Cek di aplikasi peta dengan pin lokasi."
      ],
      [
        "Lewat mana?",
        "Gunakan aplikasi peta menuju Pasar Kemis. Kami tidak menetapkan nomor jalan tertentu."
      ],
      [
        "Apakah mudah dijangkau angkutan umum?",
        "Tidak ada rute langsung yang kami konfirmasi; ojek online membantu menjangkau pintu masuk dari simpul terdekat."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["transportasi-umum", "ojek-online", "parkir", "lokasi-peta"]
  },
  {
    slug: "rute-kotabumi",
    group: "transportasi",
    category: "Transportasi",
    title: "Rute Kotabumi (Kutabumi) ke Amsterdam Waterpark",
    description:
      "Rute dari Kotabumi/Kutabumi, Pasar Kemis ke Amsterdam Waterpark. Kutabumi adalah kelurahan di Pasar Kemis; jarak dekat, konfirmasi rute.",
    h1: "Rute Kutabumi ke Amsterdam Waterpark.",
    lead: "Kotabumi (sering ditulis Kutabumi) adalah kelurahan di Kecamatan Pasar Kemis, Kabupaten Tangerang—sangat dekat dengan lokasi waterpark di Kuta Jaya. Halaman ini memberi kerangka karena jarak antar kelurahan ini pendek.",
    sections: [
      {
        heading: "Konteks wilayah",
        paragraphs: [
          "Kutabumi/Kotabumi berada dalam wilayah Kecamatan Pasar Kemis, sama dengan lokasi Amsterdam Waterpark di Kuta Jaya. Jarak antar kelurahan ini umumnya dekat, sehingga perjalanan bisa singkat tergantung titik awal persis."
        ],
        callout: "Meski dekat, konfirmasi rute dan waktu di aplikasi peta dengan pin lokasi karena kondisi jalan bervariasi."
      },
      {
        heading: "Moda yang masuk akal",
        bullets: [
          "Ojek online atau angkutan lokal untuk jarak dekat antar kelurahan.",
          "Kendaraan pribadi atau sewaan melalui jalan lokal Pasar Kemis.",
          "Pastikan titik turun di pintu masuk Villa Tomang Baru Square."
        ]
      }
    ],
    faqs: [
      [
        "Apakah Kotabumi dekat dengan Amsterdam Waterpark?",
        "Ya, Kutabumi/Kotabumi adalah kelurahan di Pasar Kemis, sama dengan lokasi waterpark di Kuta Jaya. Jarak pendek, tetapi rute pasti cek di peta."
      ],
      [
        "Bagaimana ke sana dari Kotabumi?",
        "Ojek online atau kendaraan pribadi via jalan lokal Pasar Kemis. Gunakan pin -6.1582786, 106.5835666."
      ],
      [
        "Berapa lama waktu tempuh?",
        "Bervariasi dengan titik awal; karena dekat, biasanya singkat. Konfirmasi di aplikasi peta."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["transportasi-umum", "ojek-online", "lokasi-peta", "rute-pasar-kemis"]
  },
  {
    slug: "rute-pasar-kemis",
    group: "transportasi",
    category: "Transportasi",
    title: "Rute dari Pusat Pasar Kemis ke Amsterdam Waterpark",
    description:
      "Rute dari pusat kecamatan Pasar Kemis ke Amsterdam Waterpark di Kuta Jaya. Jarak dekat; gunakan pin peta untuk rute terakhir.",
    h1: "Rute pusat Pasar Kemis ke Amsterdam Waterpark.",
    lead: "Pusat kecamatan Pasar Kemis dan lokasi waterpark di Kuta Jaya berada dalam wilayah yang sama, sehingga perjalanan cenderung pendek. Halaman ini memberi kerangka umum.",
    sections: [
      {
        heading: "Kerangka umum",
        paragraphs: [
          "Dari pusat Pasar Kemis menuju Kuta Jaya dapat ditempuh dengan kendaraan lokal atau ojek online. Jarak pendek, tetapi waktu bervariasi dengan kemacetan pasar dan kondisi jalan."
        ],
        callout: "Gunakan pin -6.1582786, 106.5835666 dan alamat lengkap untuk belokan terakhir."
      },
      {
        heading: "Tips tiba",
        bullets: [
          "Hindari jam sibuk pasar jika memungkinkan.",
          "Sepakati titik turun yang aman di Villa Tomang Baru Square.",
          "Periksa akses jalan setempat sebelum berangkat."
        ]
      }
    ],
    faqs: [
      [
        "Berapa jauh pusat Pasar Kemis ke sini?",
        "Dekat, dalam satu kecamatan. Jarak pasti dan waktu cek di aplikasi peta dengan pin lokasi."
      ],
      [
        "Bagaimana moda terbaik?",
        "Ojek online atau kendaraan pribadi via jalan lokal. Tidak ada rute langsung yang kami konfirmasi."
      ],
      [
        "Apakah sulit dijangkau?",
        "Umumnya mudah karena dekat, tetapi kemacetan pasar dapat memperlambat. Konfirmasi rute hari itu."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["rute-kotabumi", "transportasi-umum", "ojek-online", "parkir"]
  },
  {
    slug: "transportasi-umum",
    group: "transportasi",
    category: "Transportasi",
    title: "Transportasi Umum ke Amsterdam Waterpark (Tangerang)",
    description:
      "Transportasi umum ke Amsterdam Waterpark: belum ada rute langsung. Gunakan angkutan lokal + ojek online ke pintu masuk.",
    h1: "Transportasi umum ke Amsterdam Waterpark: apa yang realistis.",
    lead: "Panduan ini tidak memverifikasi nomor trayek, stasiun transit, atau sambungan langsung ke pintu masuk. Halaman ini merangkum pendekatan umum menggunakan angkutan umum dan ojek online.",
    sections: [
      {
        heading: "Pendekatan umum",
        paragraphs: [
          "Tidak ada nomor trayek, stasiun transit, atau sambungan langsung ke pintu masuk yang kami konfirmasi. Pendekatan realistis adalah menggunakan angkutan umum menuju simpul terdekat di Tangerang/Pasar Kemis, lalu dilanjutkan dengan ojek online."
        ],
        callout: "Cek jaringan dan jadwal dengan operator angkutan pada hari perjalanan."
      },
      {
        heading: "Menyambung ke pintu masuk",
        bullets: [
          "Gunakan aplikasi peta untuk mencari simpul angkutan umum terdekat.",
          "Lanjutkan dengan ojek online ke pin -6.1582786, 106.5835666.",
          "Sepakati titik turun di Villa Tomang Baru Square."
        ]
      }
    ],
    faqs: [
      [
        "Apakah ada bus atau kereta langsung?",
        "Tidak ada rute langsung yang kami konfirmasi. Gunakan angkutan umum ke simpul terdekat lalu ojek online."
      ],
      [
        "Bagaimana jika tanpa kendaraan pribadi?",
        "Kombinasikan angkutan umum dengan ojek online menuju pintu masuk. Cek jadwal operator hari itu."
      ],
      [
        "Berapa perkiraan ongkos?",
        "Tergantung jarak dan aplikasi. Kami tidak menetapkan tarif; cek langsung di aplikasi peta atau ride-hailing."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["ojek-online", "rute-jakarta", "lokasi-peta", "parkir"]
  },
  {
    slug: "ojek-online",
    group: "transportasi",
    category: "Transportasi",
    title: "Ojek Online & Ride-Hailing ke Amsterdam Waterpark",
    description:
      "Gunakan ojek online/ride-hailing ke pin Amsterdam Waterpark -6.1582786, 106.5835666. Sepakati titik turun di Villa Tomang Baru Square.",
    h1: "Ojek online ke Amsterdam Waterpark: panduan praktis.",
    lead: "Bagi tanpa kendaraan pribadi, ojek online atau ride-hailing adalah cara paling langsung menjangkau pintu masuk. Masukkan pin atau alamat lengkap ke aplikasi.",
    sections: [
      {
        heading: "Cara memesan",
        paragraphs: [
          "Buka aplikasi ojek online, masukkan 'Amsterdam Waterpark' atau pin -6.1582786, 106.5835666, lalu pilih titik jemput. Pastikan tujuan adalah Villa Tomang Baru Square, Kuta Jaya, Pasar Kemis."
        ]
      },
      {
        heading: "Saat tiba",
        bullets: [
          "Sepakati titik turun yang aman di area Villa Tomang Baru Square.",
          "Konfirmasi dengan driver bahwa tujuan adalah waterpark, bukan lokasi lain bernama mirip.",
          "Siapkan uang tunai cadangan jika pembayaran digital bermasalah."
        ],
        callout: "Pastikan alamat tujuan di Pasar Kemis, bukan Amsterdam di Belanda."
      }
    ],
    faqs: [
      [
        "Apakah ojek online menjangkau lokasi?",
        "Ya, masukkan pin -6.1582786, 106.5835666 atau alamat lengkap ke aplikasi. Ketersediaan driver bervariasi dengan waktu."
      ],
      [
        "Berapa perkiraan ongkos?",
        "Tergantung jarak dan aplikasi; kami tidak menetapkan tarif. Cek langsung di aplikasi sebelum memesan."
      ],
      [
        "Apakah aman untuk keluarga?",
        "Umumnya ya, tetapi pastikan kursi anak jika perlu dan pilih kendaraan sesuai jumlah penumpang."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["transportasi-umum", "lokasi-peta", "parkir"]
  },
  {
    slug: "parkir",
    group: "transportasi",
    category: "Transportasi",
    title: "Parkir di Amsterdam Waterpark: Ketersediaan & Tips",
    description:
      "Area parkir tersedia menurut pihak ketiga. Tarif dan kapasitas belum diverifikasi; tanyakan petugas sebelum beli tiket.",
    h1: "Parkir Amsterdam Waterpark: apa yang perlu dikonfirmasi.",
    lead: "Penjual tiket pihak ketiga menyebutkan area parkir sebagai fasilitas pendukung. Panduan ini merangkumnya tanpa memastikan tarif, kapasitas, atau aturan harian.",
    sections: [
      {
        heading: "Yang disebutkan",
        paragraphs: [
          "Daftar fasilitas pihak ketiga mencakup area parkir. Keberadaan ini membantu perencanaan, tetapi ketersediaan, kapasitas, dan tarif belum kami verifikasi."
        ],
        callout: "Tanyakan ketersediaan, lokasi, jam, dan tarif parkir kepada petugas sebelum membeli tiket."
      },
      {
        heading: "Tips parkir",
        bullets: [
          "Ikuti marka dan arahan petugas saat parkir.",
          "Pilih titik turun yang aman sebelum mengunci kendaraan.",
          "Periksa akses jalan setempat, terutama saat ramai.",
          "Siapkan uang tunai jika pembayaran parkir tunai."
        ]
      }
    ],
    faqs: [
      [
        "Apakah tersedia area parkir?",
        "Penjual pihak ketiga menyebutkan area parkir tersedia. Konfirmasikan ketersediaan dan tarif saat tiba."
      ],
      [
        "Berapa tarif parkir?",
        "Tarif belum kami verifikasi. Tanyakan petugas apakah gratis atau berbayar, dan metode pembayarannya."
      ],
      [
        "Apakah aman memarkir kendaraan pribadi?",
        "Ikuti marka dan arahan petugas. Kami tidak menjamin keamanan; pastikan kendaraan terkunci dan barang berharga tidak ditinggal."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["lokasi-peta", "harga-tiket", "ojek-online"]
  },
  // ---------- KULINER SEKITAR ----------
  {
    slug: "tempat-makan-dekat",
    group: "kuliner",
    category: "Kuliner Sekitar",
    title: "Tempat Makan Dekat Amsterdam Waterpark (Pasar Kemis)",
    description:
      "Tempat makan dekat Amsterdam Waterpark: ada Rumah Makan Seafood Ibu Haji VTB di kompleks yang sama, plus tips cari warung sekitar Kuta Jaya/Pasar Kemis.",
    h1: "Tempat makan dekat Amsterdam Waterpark, dan pilihan nyata di sekitar.",
    lead: "Salah satu pilihan berada persis di kompleks yang sama: Rumah Makan Seafood Ibu Haji VTB beralamat di Jl. Villa Tomang Baru No.1 Blok K4, Kuta Jaya—kawasan Villa Tomang Baru Square yang sama dengan waterpark. Untuk pilihan lain, gunakan aplikasi peta untuk menyaring warung dan restoran di Kuta Jaya dan Pasar Kemis.",
    sections: [
      {
        heading: "Di kompleks yang sama",
        paragraphs: [
          "Berdasarkan daftar bisnis daring, Rumah Makan Seafood Ibu Haji VTB berada di Jl. Villa Tomang Baru No.1 Blok K4, Kuta Jaya, Pasar Kemis—alamat yang sama dengan area waterpark. Daftar tersebut mencantumkan jam operasional selasa–minggu sekitar 12.00–21.30 (Jumat mulai 13.30). Konfirmasikan hari dan jam sebelum datang karena dapat berubah."
        ],
        callout: "Alamat dan jam di atas berasal dari daftar bisnis pihak ketiga; verifikasi ulang sebelum mengandalkannya."
      },
      {
        heading: "Mencari pilihan lain",
        bullets: [
          "Gunakan aplikasi peta dengan pin -6.1582786, 106.5835666 untuk menyaring restoran di radius Kuta Jaya/Pasar Kemis.",
          "Perhatikan jarak, jam buka, dan apakah cocok untuk anak.",
          "Bandingkan secara mandiri; panduan ini tidak mencantumkan merek tertentu sebagai rekomendasi resmi."
        ]
      },
      {
        heading: "Di dalam area waterpark",
        paragraphs: [
          "Penjual tiket pihak ketiga menyebutkan food court atau gerai makanan di area waterpark. Pilihan menu dan harga cek langsung di lokasi."
        ]
      }
    ],
    faqs: [
      [
        "Apakah ada restoran di kompleks waterpark?",
        "Ya, Rumah Makan Seafood Ibu Haji VTB tercatat di alamat Villa Tomang Baru Square yang sama. Jam dan ketersediaan konfirmasi ke sumber setempat."
      ],
      [
        "Di mana cari makan selain di area?",
        "Gunakan aplikasi peta di sekitar Kuta Jaya/Pasar Kemis. Panduan tidak mencantumkan daftar merek resmi."
      ],
      [
        "Apakah food court di dalam waterpark buka?",
        "Penjual pihak ketiga menyebutkannya; pilihan dan jam cek langsung di lokasi."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["restoran-keluarga", "cafe-dekat", "aturan-makanan-minuman", "minimarket-renang"]
  },
  {
    slug: "restoran-keluarga",
    group: "kuliner",
    category: "Kuliner Sekitar",
    title: "Restoran Keluarga Dekat Amsterdam Waterpark",
    description:
      "Restoran keluarga dekat Amsterdam Waterpark: Rumah Makan Seafood Ibu Haji VTB di kompleks sama, plus tips pilih tempat makan anak di Pasar Kemis.",
    h1: "Restoran keluarga dekat Amsterdam Waterpark untuk setelah berenang.",
    lead: "Setelah berenang, keluarga sering mencari tempat makan yang ramah anak. Pilihan terdekat adalah Rumah Makan Seafood Ibu Haji VTB di kompleks Villa Tomang Baru Square. Untuk variasi, gunakan aplikasi peta menyaring restoran di Pasar Kemis.",
    sections: [
      {
        heading: "Pilihan di kompleks",
        paragraphs: [
          "Rumah Makan Seafood Ibu Haji VTB beralamat di Jl. Villa Tomang Baru No.1 Blok K4, Kuta Jaya, Pasar Kemis, dalam kompleks yang sama dengan waterpark. Daftar bisnis daring mencantumkan jam sekitar 12.00–21.30 (Jumat mulai 13.30). Konfirmasikan hari dan jam sebelum datang."
        ]
      },
      {
        heading: "Menyaring restoran lain",
        bullets: [
          "Pilih restoran dengan area duduk nyaman dan menu yang mudah untuk anak.",
          "Periksa jarak dari pin lokasi dan waktu tempuh.",
          "Pastikan jam buka cocok dengan jadwal kunjungan Anda.",
          "Bandingkan harga secara mandiri; hindari mengandalkan satu sumber."
        ],
        callout: "Panduan tidak mencantumkan restoran tertentu sebagai mitra; gunakan aplikasi peta untuk verifikasi hari ini."
      }
    ],
    faqs: [
      [
        "Restoran apa yang paling dekat?",
        "Rumah Makan Seafood Ibu Haji VTB di kompleks yang sama. Data berasal dari daftar bisnis pihak ketiga; konfirmasi ulang."
      ],
      [
        "Apakah cocok untuk anak?",
        "Pilih restoran dengan menu mudah dan area nyaman. Verifikasi secara mandiri melalui aplikasi peta dan ulasan terkini."
      ],
      [
        "Berapa kisaran harga?",
        "Kami tidak menetapkan harga. Cek menu atau aplikasi sebelum memesan."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["tempat-makan-dekat", "cafe-dekat", "minimarket-renang"]
  },
  {
    slug: "cafe-dekat",
    group: "kuliner",
    category: "Kuliner Sekitar",
    title: "Cafe Dekat Amsterdam Waterpark (Pasar Kemis)",
    description:
      "Cafe dekat Amsterdam Waterpark: gunakan aplikasi peta menyaring kafe di Kuta Jaya/Pasar Kemis. Tidak ada kafe tertentu yang kami verifikasi.",
    h1: "Cafe dekat Amsterdam Waterpark: cara menemukannya dengan jujur.",
    lead: "Panduan ini tidak memverifikasi kafe tertentu di sekitar waterpark. Halaman ini memberi cara menyaring kafe di aplikasi peta dan poin yang perlu diperhatikan agar pilihan sesuai kebutuhan.",
    sections: [
      {
        heading: "Menyaring kafe",
        paragraphs: [
          "Gunakan aplikasi peta dengan pin -6.1582786, 106.5835666 untuk mencari kafe dalam radius Kuta Jaya dan Pasar Kemis. Perhatikan jarak, jam buka, dan suasana yang cocok untuk keluarga."
        ]
      },
      {
        heading: "Pertimbangan",
        bullets: [
          "Apakah kafe buka saat jam kunjungan Anda?",
          "Apakah ada area duduk nyaman untuk anak?",
          "Berapa jarak dari pintu masuk waterpark?",
          "Bandingkan ulasan terkini secara mandiri."
        ],
        callout: "Kami tidak mencantumkan kafe tertentu sebagai rekomendasi resmi; verifikasi hari ini via aplikasi peta."
      }
    ],
    faqs: [
      [
        "Apakah ada cafe di kompleks waterpark?",
        "Kami tidak memverifikasi kafe di kompleks. Gunakan aplikasi peta menyaring kafe di sekitar Kuta Jaya/Pasar Kemis."
      ],
      [
        "Seberapa jauh kafe terdekat?",
        "Bervariasi; cek di aplikasi peta dengan pin lokasi. Kami tidak menetapkan jarak."
      ],
      [
        "Bagaimana memilih kafe untuk keluarga?",
        "Perhatikan jam buka, kenyamanan anak, dan jarak. Verifikasi ulasan terkini secara mandiri."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["tempat-makan-dekat", "restoran-keluarga", "minimarket-renang"]
  },
  {
    slug: "minimarket-renang",
    group: "kuliner",
    category: "Kuliner Sekitar",
    title: "Minimarket & Kebutuhan Renang Dekat Amsterdam Waterpark",
    description:
      "Minimarket dan kebutuhan renang dekat Amsterdam Waterpark: gunakan peta untuk Alfamart/Indomaret/Lawson terdekat. Belum ada toko tertentu yang kami verifikasi.",
    h1: "Minimarket dan kebutuhan mendadak dekat Amsterdam Waterpark.",
    lead: "Untuk keperluan mendadak seperti air minum, snack, atau perlengkapan renang, gunakan aplikasi peta menyaring minimarket dan toko kebutuhan di sekitar Kuta Jaya/Pasar Kemis.",
    sections: [
      {
        heading: "Mencari minimarket",
        paragraphs: [
          "Jaringan minimarket seperti Alfamart, Indomaret, dan Lawson umum di area Tangerang. Kami tidak memverifikasi toko tertentu tepat di depan waterpark, sehingga gunakan aplikasi peta dengan pin lokasi untuk menemukan yang terdekat dan jam bukanya."
        ],
        callout: "Tidak ada Lawson atau minimarket tertentu yang kami konfirmasi tepat di kompleks; verifikasi via aplikasi peta."
      },
      {
        heading: "Kebutuhan renang",
        bullets: [
          "Siapkan perlengkapan dari rumah untuk menghindari harga mendadak.",
          "Jika lupa, cari toko kebutuhan atau minimarket terdekat via peta.",
          "Tanyakan loket apakah alat tertentu wajib sewa di tempat."
        ]
      }
    ],
    faqs: [
      [
        "Apakah ada Lawson dekat waterpark?",
        "Kami tidak memverifikasi Lawson tepat di kompleks. Gunakan aplikasi peta untuk minimarket terdekat (Alfamart/Indomaret/Lawson)."
      ],
      [
        "Di mana beli perlengkapan renang mendadak?",
        "Cari toko kebutuhan atau minimarket terdekat via peta. Lebih baik siapkan dari rumah."
      ],
      [
        "Boleh beli air minum di sekitar?",
        "Ya, minimarket umumnya tersedia di area Tangerang; verifikasi jarak dan jam via aplikasi peta."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["tempat-makan-dekat", "barang-bawaan", "parkir"]
  },
  // ---------- WISATA SEKITAR ----------
  {
    slug: "wisata-keluarga-dekat",
    group: "wisata",
    category: "Wisata Sekitar",
    title: "Wisata Keluarga Dekat Amsterdam Waterpark (Pasar Kemis)",
    description:
      "Wisata keluarga dekat Amsterdam Waterpark: The Nice Playland Pasar Kemis, Batavia Splash, Fun Park. Verifikasi hari ini sebelum pergi.",
    h1: "Wisata keluarga dekat Amsterdam Waterpark, opsi rekreasi lain di Pasar Kemis.",
    lead: "Selain waterpark, ada pilihan rekreasi keluarga di sekitar Pasar Kemis. Beberapa tercatat di sumber publik: The Nice Playland Pasar Kemis (taman bermain sejak 2025), Batavia Splash Water Adventure, dan Fun Park. Gunakan sebagai ide tambahan, lalu verifikasi alamat dan jam hari ini.",
    sections: [
      {
        heading: "Taman bermain dalam ruang & luar ruang",
        paragraphs: [
          "The Nice Playland Pasar Kemis disebut sebagai taman bermain keluarga baru di kawasan Pasar Kemis sejak akhir Maret 2025, dengan wahana indoor dan outdoor. Cocok sebagai alternatif jika cuaca kurang mendukung bermain air."
        ]
      },
      {
        heading: "Waterpark lain di sekitar",
        bullets: [
          "Batavia Splash Water Adventure: waterpark bertema kota Batavia di Pasar Kemis (Jl. Raya Cadas No.21, Sindangsari, Pasar Kemis).",
          "Fun Park: water park di Pasar Kemis dengan beberapa area kolam."
        ],
        callout: "Alamat dan status di atas dari sumber publik; verifikasi ulang alamat, jam, dan tiket sebelum pergi."
      },
      {
        heading: "Cara menyusun rangkaian",
        paragraphs: [
          "Pilih satu hingga dua tujuan sesuai usia anak dan energi keluarga. Jangan memaksakan terlalu banyak tempat dalam satu hari."
        ]
      }
    ],
    faqs: [
      [
        "Wisata apa yang dekat selain waterpark?",
        "The Nice Playland Pasar Kemis, Batavia Splash Water Adventure, dan Fun Park tercatat di sumber publik. Verifikasi hari ini sebelum pergi."
      ],
      [
        "Apakah The Nice Playland cocok saat hujan?",
        "Taman bermain ini memiliki wahana indoor dan outdoor; cocok sebagai alternatif saat cuaca kurang mendukung. Konfirmasi jam sebelum datang."
      ],
      [
        "Berapa jarak ke Batavia Splash?",
        "Berada di Pasar Kemis; jarak pasti cek di aplikasi peta. Kami tidak menetapkan angka."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["wisata-pasar-kemis", "waterpark-lain-tangerang", "itinerary-alternatif-hujan", "untuk-keluarga"]
  },
  {
    slug: "wisata-pasar-kemis",
    group: "wisata",
    category: "Wisata Sekitar",
    title: "Tempat Wisata di Pasar Kemis Selain Amsterdam Waterpark",
    description:
      "Tempat wisata di Pasar Kemis: waterpark, taman bermain, dan pusat belanja kebutuhan. Verifikasi alamat dan jam sebelum pergi.",
    h1: "Wisata di Pasar Kemis: ide rekreasi di kecamatan yang sama.",
    lead: "Pasar Kemis bukan hanya soal satu waterpark. Kecamatan ini memiliki beberapa opsi rekreasi keluarga yang tercatat di sumber publik. Gunakan halaman ini untuk ide, lalu verifikasi alamat dan jam hari ini.",
    sections: [
      {
        heading: "Rekreasi air dan bermain",
        paragraphs: [
          "Selain Amsterdam Waterpark, tercatat Batavia Splash Water Adventure dan Fun Park sebagai waterpark di Pasar Kemis, serta The Nice Playland Pasar Kemis sebagai taman bermain keluarga."
        ]
      },
      {
        heading: "Pusat kebutuhan dan pasar",
        paragraphs: [
          "Pasar setempat dan pusat belanja kebutuhan harian dapat dijadikan singgahan praktis sebelum atau sesudah rekreasi. Sesuaikan dengan rencana keluarga."
        ]
      },
      {
        heading: "Menyusun rencana",
        bullets: [
          "Pilih tempat berdasarkan usia anak dan cuaca.",
          "Verifikasi alamat, jam, dan tiket melalui aplikasi peta.",
          "Jangan memaksakan terlalu banyak tujuan dalam satu hari."
        ],
        callout: "Semua tempat di atas berasal dari sumber publik; panduan tidak bermitra dengan mereka."
      }
    ],
    faqs: [
      [
        "Apa saja wisata di Pasar Kemis?",
        "Amsterdam Waterpark, Batavia Splash, Fun Park, dan The Nice Playland tercatat di sumber publik. Verifikasi sebelum pergi."
      ],
      [
        "Apakah aman untuk anak?",
        "Tergantung fasilitas masing-masing; konfirmasi aturan dan pengawasan saat tiba."
      ],
      [
        "Bagaimana menyusun urutan kunjungan?",
        "Pilih 1–2 tujuan sesuai energi keluarga dan cuaca; jangan terlalu padat."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["wisata-keluarga-dekat", "waterpark-lain-tangerang", "itinerary-sehari"]
  },
  {
    slug: "waterpark-lain-tangerang",
    group: "wisata",
    category: "Wisata Sekitar",
    title: "Waterpark Lain di Tangerang Selain Amsterdam Waterpark",
    description:
      "Waterpark lain di Tangerang: Ocean Park BSD, Citra Raya Water World, Newtown Waterpark. Perbedaan lokasi dan harga; verifikasi sebelum memilih.",
    h1: "Waterpark lain di Tangerang, dan bagaimana membandingkannya.",
    lead: "Jika ingin opsi waterpark berbeda di Kabupaten/Kota Tangerang, sumber publik mencatat beberapa alternatif. Halaman ini merangkumnya sebagai referensi lokasi dan profil, bukan rekomendasi.",
    sections: [
      {
        heading: "Alternatif yang tercatat",
        bullets: [
          "Ocean Park BSD City: waterpark bertema maritim di BSD City, Tangerang; populer untuk keluarga.",
          "Citra Raya Water World: water park di kawasan Citra Raya, Cikupa, Tangerang.",
          "Newtown Waterpark: water park di Karawaci, Tangerang; penjual tiket mencantumkan harga mulai sekitar Rp 30.000.",
          "Batavia Splash Water Adventure: waterpark tema Batavia di Pasar Kemis (terdekat dengan Amsterdam Waterpark)."
        ],
        callout: "Lokasi, rating, dan harga di atas berasal dari sumber publik/pihak ketiga; verifikasi alamat, jam, dan tiket hari ini."
      },
      {
        heading: "Cara memilih",
        paragraphs: [
          "Pertimbangkan jarak dari titik awal Anda, usia anak, dan anggaran. Waterpark di BSD atau Cikupa umumnya lebih jauh dari Pasar Kemis dibanding Batavia Splash."
        ]
      }
    ],
    faqs: [
      [
        "Waterpark apa di Tangerang selain Amsterdam?",
        "Ocean Park BSD, Citra Raya Water World, Newtown Waterpark, dan Batavia Splash tercatat di sumber publik. Verifikasi sebelum memilih."
      ],
      [
        "Mana yang paling dekat dengan Pasar Kemis?",
        "Batavia Splash di Pasar Kemis adalah yang paling dekat. Yang lain berada di BSD/Cikupa/Karawaci dengan jarak lebih jauh."
      ],
      [
        "Berapa harga waterpark lain?",
        "Newtown tercatat mulai sekitar Rp 30.000 via pihak ketiga; lainnya cek di aplikasi tiket. Kami tidak menetapkan harga resmi."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["amsterdam-vs-waterpark-lain", "wisata-keluarga-dekat", "harga-tiket"]
  },
  {
    slug: "amsterdam-vs-waterpark-lain",
    group: "wisata",
    category: "Wisata Sekitar",
    title: "Amsterdam Waterpark vs Waterpark Lain di Tangerang",
    description:
      "Perbandingan Amsterdam Waterpark dengan Ocean Park BSD, Citra Raya, Newtown, Batavia Splash. Bedakan lokasi, tema, dan jarak, bukan klaim unggul.",
    h1: "Membandingkan Amsterdam Waterpark dengan waterpark lain di Tangerang.",
    lead: "Halaman ini membantu membedakan pilihan berdasarkan lokasi dan profil, bukan menyatakan satu lebih baik. Semua data dari sumber publik/pihak ketiga; verifikasi sebelum memutuskan.",
    sections: [
      {
        heading: "Berdasarkan lokasi",
        paragraphs: [
          "Amsterdam Waterpark dan Batavia Splash berada di Pasar Kemis, sehingga lebih dekat bagi pengunjung dari arah Kuta Jaya/Kotabumi. Ocean Park BSD, Citra Raya (Cikupa), dan Newtown (Karawaci) berada lebih jauh di Tangerang."
        ]
      },
      {
        heading: "Berdasarkan tema",
        bullets: [
          "Amsterdam Waterpark: tema kota Belanda/kincir angin.",
          "Ocean Park BSD: tema maritim, skala besar.",
          "Citra Raya Water World: water park kawasan perumahan Citra Raya.",
          "Newtown Waterpark: pusat rekreasi air modern di Karawaci.",
          "Batavia Splash: tema kota Batavia tempo dulu."
        ]
      },
      {
        heading: "Pertimbangan pemilihan",
        paragraphs: [
          "Pilih berdasarkan jarak, usia anak, anggaran, dan hari kunjungan. Tidak ada satu yang cocok untuk semua keluarga; verifikasi jam, tiket, dan area yang buka hari ini."
        ],
        callout: "Panduan independen; tidak bermitra dengan waterpark mana pun."
      }
    ],
    faqs: [
      [
        "Waterpark mana paling dekat Pasar Kemis?",
        "Amsterdam Waterpark dan Batavia Splash di Pasar Kemis. Lainnya lebih jauh di BSD/Cikupa/Karawaci."
      ],
      [
        "Apakah Amsterdam Waterpark lebih murah?",
        "Newtown tercatat mulai sekitar Rp 30.000 via pihak ketiga; Amsterdam tercatat mulai Rp 35.000. Harga harian verifikasi di aplikasi tiket."
      ],
      [
        "Mana yang cocok untuk anak kecil?",
        "Tergantung area anak masing-masing; konfirmasi kedalaman dan batas usia saat tiba, bukan dari perbandingan tema saja."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["waterpark-lain-tangerang", "harga-tiket", "untuk-balita"]
  },
  // ---------- ITINERARY ----------
  {
    slug: "itinerary-2-jam",
    group: "itinerary",
    category: "Itinerary",
    title: "Itinerary Amsterdam Waterpark 2 Jam untuk Kunjungan Singkat",
    description:
      "Rencana 2 jam di Amsterdam Waterpark: ganti baju, area anak, istirahat. Contoh susunan waktu, bukan jaminan wahana buka.",
    h1: "Itinerary 2 jam Amsterdam Waterpark untuk kunjungan singkat.",
    lead: "Jika waktu terbatas, susunan dua jam berikut membantu memaksimalkan kunjungan tanpa terburu-buru. Sesuaikan dengan area yang benar-benar buka hari itu.",
    sections: [
      {
        heading: "Contoh susunan",
        bullets: [
          "0–20 menit: ganti baju dan orientasi aturan area.",
          "20–70 menit: bermain di area kolam anak yang dibuka.",
          "70–100 menit: istirahat, makan ringan, foto di area tema.",
          "100–120 menit: bilas, ganti baju, persiapan pulang."
        ],
        callout: "Durasi di atas adalah saran; sesuaikan dengan area yang buka dan kondisi keluarga."
      },
      {
        heading: "Tips singkat",
        paragraphs: [
          "Datang tepat jam buka agar area belum penuh. Siapkan baju ganti dan handuk sejak awal agar bilas cepat."
        ]
      }
    ],
    faqs: [
      [
        "Apakah 2 jam cukup?",
        "Cukup untuk kenalan singkat di area anak. Untuk lebih puas, saran 3–5 jam."
      ],
      [
        "Boleh hanya main sebentar?",
        "Ya, sesuaikan dengan energi keluarga. Konfirmasi area yang buka sebelum masuk."
      ],
      [
        "Apakah perlu reservasi?",
        "Tidak ada reservasi yang kami konfirmasi; cek penjual tiket untuk kebijakan hari itu."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["tips-berkunjung", "untuk-keluarga", "kolam-anak"]
  },
  {
    slug: "itinerary-keluarga",
    group: "itinerary",
    category: "Itinerary",
    title: "Itinerary Setengah Hari Keluarga di Amsterdam Waterpark",
    description:
      "Rencana setengah hari keluarga: 3–5 jam, area anak, istirahat, makan. Serta pilihan wisata sekitar Pasar Kemis.",
    h1: "Itinerary setengah hari keluarga di Amsterdam Waterpark.",
    lead: "Susunan setengah hari membantu keluarga menikmati air tanpa lelah berlebih. Sertakan rencana cadangan jika cuaca buruk.",
    sections: [
      {
        heading: "Contoh susunan 3–5 jam",
        bullets: [
          "Datang awal: ganti baju, orientasi aturan.",
          "Sesi air di area anak dan kolam yang dibuka.",
          "Istirahat makan di food court atau restoran sekitar.",
          "Sesi kedua atau foto di area tema.",
          "Bilas, ganti baju, persiapan pulang."
        ]
      },
      {
        heading: "Tambahan di sekitar",
        paragraphs: [
          "Jika energi masih cukup, pertimbangkan The Nice Playland Pasar Kemis atau wisata sekitar lainnya sebagai kelanjutan hari. Verifikasi alamat dan jam sebelum pergi."
        ],
        callout: "Jangan memaksakan terlalu banyak tujuan; utamakan kenyamanan anak."
      }
    ],
    faqs: [
      [
        "Berapa lama ideal setengah hari?",
        "Saran 3–5 jam termasuk istirahat dan makan. Sesuaikan dengan area yang buka."
      ],
      [
        "Boleh tambah wisata lain?",
        "Bisa, misalnya taman bermain di sekitar Pasar Kemis. Verifikasi sebelum pergi agar tidak terlalu padat."
      ],
      [
        "Bagaimana jika hujan?",
        "Ikuti arahan petugas dan pertimbangkan itinerary alternatif hujan di panduan ini."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["untuk-keluarga", "wisata-keluarga-dekat", "itinerary-alternatif-hujan", "itinerary-2-jam"]
  },
  {
    slug: "itinerary-sehari",
    group: "itinerary",
    category: "Itinerary",
    title: "Itinerary Sehari di Sekitar Amsterdam Waterpark (Pasar Kemis)",
    description:
      "Rencana sehari di sekitar Amsterdam Waterpark: waterpark pagi, makan siang, wisata sekitar Pasar Kemis. Serta perkiraan anggaran.",
    h1: "Itinerary sehari di sekitar Amsterdam Waterpark.",
    lead: "Hari penuh di Pasar Kemis bisa menggabungkan waterpark dengan rekreasi lain. Susunan berikut memberi kerangka; verifikasi alamat, jam, dan tiket setiap tujuan.",
    sections: [
      {
        heading: "Contoh susunan",
        bullets: [
          "Pagi: Amsterdam Waterpark (3–5 jam).",
          "Siang: makan di sekitar Kuta Jaya/Pasar Kemis.",
          "Sore: The Nice Playland atau wisata sekitar yang terverifikasi.",
          "Senja: kembali dengan perlahan."
        ]
      },
      {
        heading: "Anggaran perkiraan",
        paragraphs: [
          "Hitung tiket per kategori, parkir, makan, dan aktivitas tambahan terpisah. Kami tidak menetapkan total; sesuaikan dengan jumlah anggota keluarga dan pilihan masing-masing."
        ],
        callout: "Verifikasi harga tiket dan tiket wisata lain di aplikasi resmi sebelum membeli."
      }
    ],
    faqs: [
      [
        "Apakah sehari cukup untuk Pasar Kemis?",
        "Cukup untuk waterpark plus satu wisata sekitar. Jangan memaksakan terlalu banyak tujuan."
      ],
      [
        "Berapa perkiraan biaya sehari?",
        "Bervariasi; hitung tiket, parkir, makan, dan aktivitas terpisah. Kami tidak menetapkan angka."
      ],
      [
        "Wisata apa yang bisa disambung?",
        "The Nice Playland atau Batavia Splash di Pasar Kemis. Verifikasi hari ini sebelum pergi."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["itinerary-keluarga", "wisata-keluarga-dekat", "tempat-makan-dekat"]
  },
  {
    slug: "itinerary-akhir-pekan",
    group: "itinerary",
    category: "Itinerary",
    title: "Itinerary Akhir Pekan Amsterdam Waterpark (Hindari Ramai)",
    description:
      "Itinerary akhir pekan: datang lebih awal, siapkan titik kumpul, dan rencana cadangan saat padat. Bukan jaminan sepi.",
    h1: "Itinerary akhir pekan Amsterdam Waterpark.",
    lead: "Akhir pekan dan libur cenderung padat. Halaman ini membantu menyusun rencana yang lebih nyaman saat keramaian tinggi.",
    sections: [
      {
        heading: "Strategi akhir pekan",
        bullets: [
          "Datang lebih awal saat pintu dan area belum penuh.",
          "Tetapkan titik kumpul keluarga sebelum masuk.",
          "Giliran menjaga anak di kolam dan area istirahat.",
          "Siapkan rencana cadangan jika antrean panjang."
        ],
        callout: "Keramaian bervariasi; kami tidak menjamin hari tertentu sepi."
      },
      {
        heading: "Jika terlalu padat",
        paragraphs: [
          "Pertimbangkan menunda atau beralih ke wisata sekitar yang tidak bergantung air, seperti taman bermain indoor di Pasar Kemis."
        ]
      }
    ],
    faqs: [
      [
        "Hari apa paling ramai?",
        "Akhir pekan dan libur cenderung padat. Kami tidak menjamin hari tertentu sepi; datang lebih awal membantu."
      ],
      [
        "Bagaimana agar tidak terpisah?",
        "Tetapkan titik kumpul dan giliran menjaga anak. Gunakan pakaian warna cerah untuk anak."
      ],
      [
        "Apakah lebih baik hari kerja?",
        "Hari biasa umumnya lebih longgar, tetapi tergantung cuaca dan hari libur. Konfirmasi akses hari itu."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["itinerary-keluarga", "itinerary-alternatif-hujan", "untuk-keluarga"]
  },
  {
    slug: "itinerary-alternatif-hujan",
    group: "itinerary",
    category: "Itinerary",
    title: "Itinerary Saat Hujan di Pasar Kemis (Alternatif Waterpark)",
    description:
      "Alternatif saat hujan di Pasar Kemis: taman bermain indoor, pusat belanja, atau tunda kunjungan waterpark. Gunakan prakiraan cuaca.",
    h1: "Itinerary alternatif saat hujan di sekitar Amsterdam Waterpark.",
    lead: "Cuaca buruk bisa mengubah rencana air. Halaman ini memberi opsi non-air di Pasar Kemis dan cara memutuskan apakah menunda kunjungan.",
    sections: [
      {
        heading: "Opsi non-air",
        bullets: [
          "The Nice Playland Pasar Kemis: taman bermain dengan wahana indoor.",
          "Pusat belanja atau pasar setempat untuk kebutuhan dan jajan.",
          "Istirahat di restoran keluarga di sekitar Kuta Jaya."
        ],
        callout: "Verifikasi alamat dan jam setiap tujuan sebelum pergi; sumber berasal dari catatan publik."
      },
      {
        heading: "Memutuskan tunda atau lanjut",
        paragraphs: [
          "Gunakan prakiraan cuaca regional di panduan sebagai panduan. Jika hujan deras atau petir, ikuti arahan petugas waterpark atau tunda kunjungan."
        ]
      }
    ],
    faqs: [
      [
        "Ke mana jika hujan saat di sini?",
        "Taman bermain indoor atau pusat belanja di Pasar Kemis. Verifikasi sebelum pergi."
      ],
      [
        "Apakah lebih baik tunda?",
        "Jika hujan deras atau petir, pertimbangkan tunda. Ikuti arahan petugas di hari kunjungan."
      ],
      [
        "Apakah prakiraan akurat?",
        "Prakiraan regional di sekitar pin peta, bukan konfirmasi buka/tutup. Gunakan sebagai panduan."
      ]
    ],
    updated: "29 Oktober 2026",
    related: ["saat-hujan", "wisata-keluarga-dekat", "itinerary-akhir-pekan"]
  }
];

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function getTopic(slug: string): TopicContent | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicsByGroup(group: TopicGroup): TopicContent[] {
  return TOPICS.filter((t) => t.group === group);
}
