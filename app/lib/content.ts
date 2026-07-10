// ============================================================================
//  ХОЁР ХЭЛНИЙ АГУУЛГА (МН / EN) — public сайтын БҮХ текст энд байрлана.
//  Header дэх хэл солих товч нь энэ хоёрын хооронд шилжүүлнэ.
//  Шинэ текст нэмэхдээ ХОЁУЛАНГ нь (mn ба en) заавал бөглөнө үү.
// ============================================================================

export type Lang = "mn" | "en";

// ---- Хэлнээс үл хамаарах тогтмол утгууд (давхардуулахгүйн тулд) --------------
const shared = {
  shortName: "ISH",
  phones: ["+976 9000 0000", "+976 8000 0000"],
  email: "info@example.mn",
  foundedYear: 2012,
  social: {
    facebook: "#",
    instagram: "#",
  },
};

export type NavItem = { label: string; href: string };
export type Service = { title: string; description: string; icon: string };
export type Project = { title: string; location: string; year: string; category: string };
export type NewsItem = { slug: string; title: string; date: string; excerpt: string };
export type Stat = { value: string; label: string };
export type Fact = { icon: string; label: string; value: string };
export type Slide = { heading: string; subtitle: string; ctaLabel: string; ctaHref: string; bg: string };

const SLIDE_BG = [
  "linear-gradient(120deg, #1e293b 0%, #334155 45%, #475569 100%)",
  "linear-gradient(120deg, #16356f 0%, #143d8a 50%, #1559d6 100%)",
  "linear-gradient(120deg, #0f2147 0%, #1247ad 55%, #2474f0 100%)",
];

// ===========================================================================
//  МОНГОЛ
// ===========================================================================
const mn = {
  company: {
    ...shared,
    name: "Индэрт Шүтээн ХХК",
    tagline: "Чанартай вакуум цонх, хаалганы шийдэл",
    category: "Вакуум цонхны үйлдвэрлэл · Улаанбаатар, Монгол",
    intro:
      "Индэрт Шүтээн ХХК нь Монгол улсад тэргүүлэх чанарын вакуум цонх, хаалга үйлдвэрлэгч компани юм. Бид PVC профиль ашиглан олон давхар шилтэй, дулааны алдагдлыг бууруулсан цонхны шийдлийг танд санал болгодог.",
    address: "Улаанбаатар хот, Монгол",
    workHours: "Даваа–Бямба, 09:00–18:00",
  },

  nav: [
    { label: "Нүүр хуудас", href: "/" },
    { label: "Бидний тухай", href: "/about" },
    { label: "Тооцоолуур", href: "/calculator" },
    { label: "Мэдээлэл", href: "/news" },
    { label: "Үйлчилгээ", href: "/services" },
    { label: "Хийсэн ажлууд", href: "/projects" },
    { label: "Холбоо барих", href: "/contact" },
  ] as NavItem[],

  ui: {
    menu: "Цэс",
    login: "Нэвтрэх",
    logout: "Гарах",
    admin: "Админ",
    order: "Захиалга өгөх",
    langLabel: "EN", // товч дээр харагдах — англи руу шилжүүлнэ
    prev: "Өмнөх",
    next: "Дараах",
    slide: "Слайд",
    readMore: "Дэлгэрэнгүй →",
    viewAll: "Бүгдийг үзэх →",
    imageLabel: "Зураг",
  },

  hero: [
    {
      heading: "Индэрт Шүтээн ХХК нь чанарын вакуум цонх, хаалганы үйлдвэр",
      subtitle:
        "Индэрт Шүтээн ХХК нь Монгол улсад тэргүүлэх чанарын вакуум цонх, хаалга үйлдвэрлэгч компани юм. Бид PVC профиль ашиглан олон давхар шилтэй, дулааны алдагдлыг бууруулсан цонхны шийдлийг танд санал болгодог.",
      ctaLabel: "Дэлгэрэнгүй",
      ctaHref: "/about",
      bg: SLIDE_BG[0],
    },
    {
      heading: "Орчин үеийн PVC цонхны шийдэл",
      subtitle:
        "66, 72, 80 рам профиль ашиглан дулаан, чимээ тусгаарлалт сайтай цонхыг захиалгаар хийнэ.",
      ctaLabel: "Үйлчилгээ үзэх",
      ctaHref: "/services",
      bg: SLIDE_BG[1],
    },
    {
      heading: "Үнээ онлайнаар тооцоол",
      subtitle:
        "Цонхныхоо дизайн, хэмжээг сонгоод ойролцоо үнийг хэдхэн секундэд тооцоолоорой.",
      ctaLabel: "Тооцоолох",
      ctaHref: "/calculator",
      bg: SLIDE_BG[2],
    },
  ] as Slide[],

  home: {
    servicesTitle: "Бидний үйлчилгээ",
    servicesSubtitle: "Захиалгаас угсралт, баталгаат үйлчилгээ хүртэлх бүрэн шийдэл.",
    servicesCta: "Бүх үйлчилгээг үзэх →",
    aboutTitle: "Бидний тухай",
    aboutBullets: [
      "Европын стандартад нийцсэн үйлдвэрлэл",
      "Туршлагатай мэргэжлийн баг",
      "Баталгаат чанар, хугацаандаа гүйцэтгэл",
      "Үнийн боломжит санал",
    ],
    aboutCta: "Дэлгэрэнгүй",
    projectsTitle: "Хийсэн ажлууд",
    projectsSubtitle: "Бидний гүйцэтгэсэн зарим төслүүд.",
    newsTitle: "Сүүлийн мэдээлэл",
    partnersLabel: "Хамтран ажилладаг брэндүүд",
    ctaTitle: "Захиалга өгөхөд бэлэн үү?",
    ctaSubtitle: "Үнэ төлбөргүй зөвлөгөө, хэмжилт авахаар бидэнтэй холбогдоорой.",
  },

  stats: [
    { value: "13+", label: "Жилийн туршлага" },
    { value: "5000+", label: "Гүйцэтгэсэн захиалга" },
    { value: "100%", label: "Баталгаат чанар" },
    { value: "24/7", label: "Үйлчилгээ, дэмжлэг" },
  ] as Stat[],

  services: [
    { title: "Вакуум цонх үйлдвэрлэл", description: "Дулаан алдагдлыг бууруулсан, олон давхар шилтэй вакуум цонхыг хэмжээгээр захиалгаар хийнэ.", icon: "🪟" },
    { title: "Хуванцар хүрээ", description: "Олон танхимт, бат бөх хуванцар хүрээ — урт эдэлгээтэй, агаар, чимээ тусгаарлалт сайтай.", icon: "🧱" },
    { title: "Угсралт, суурилуулалт", description: "Туршлагатай багийн гүйцэтгэх мэргэжлийн угсралт, хэмжилт, цэвэр ажиллагаа.", icon: "🔧" },
    { title: "Цонхны сэлбэг, дагалдах хэрэгсэл", description: "Чанартай нугас, цоож, дүүргэгч хөөс зэрэг дагалдах хэрэгслийн нийлүүлэлт.", icon: "⚙️" },
    { title: "Засвар, үйлчилгээ", description: "Эвдэрсэн цонх, нугас, цоожны засвар болон тохиргооны баталгаат үйлчилгээ.", icon: "🛠️" },
    { title: "Үнийн тооцоо", description: "Хэмжээ, материалын сонголтоор шуурхай үнийн санал, зөвлөгөө өгнө.", icon: "🧮" },
  ] as Service[],

  servicesPage: {
    subtitle: "Цонх, хаалганы захиалга, үйлдвэрлэл, угсралт болон засвар үйлчилгээний бүрэн шийдэл.",
    cardCta: "Захиалга өгөх →",
    ctaTitle: "Танд тохирох шийдэл хайж байна уу?",
    ctaSubtitle: "Манай мэргэжилтнүүд танд үнэ төлбөргүй зөвлөгөө өгөхөд бэлэн.",
    ctaButton: "Холбоо барих",
  },

  projects: [
    { title: "Дүнжингарав хороолол", location: "Улаанбаатар", year: "2023", category: "Орон сууц" },
    { title: "Олимп хороолол", location: "Улаанбаатар", year: "2022", category: "Орон сууц" },
    { title: "Амгалан хотхон", location: "Улаанбаатар", year: "2022", category: "Орон сууц" },
    { title: "Эрдэнэт 7-р хороолол", location: "Эрдэнэт", year: "2021", category: "Орон сууц" },
    { title: "Цагаан хуаран", location: "Улаанбаатар", year: "2021", category: "Орон сууц" },
    { title: "Нэхмэл-8", location: "Улаанбаатар", year: "2021", category: "Орон сууц" },
    { title: "Гашуунсухайт", location: "Умнөговь", year: "2020", category: "Үйлдвэрийн барилга" },
    { title: "SGD-88", location: "Улаанбаатар", year: "2020", category: "Оффис" },
    { title: "Тэлмү Виллаж", location: "Улаанбаатар", year: "2021", category: "Хувийн орон сууц" },
    { title: "Дөлгөөн Алтай Апартмент", location: "Улаанбаатар", year: "2020", category: "Орон сууц" },
    { title: "Агарта Ресиденс", location: "Улаанбаатар", year: "2020", category: "Орон сууц" },
    { title: "Консул Ресиденс", location: "Улаанбаатар", year: "2019", category: "Орон сууц" },
  ] as Project[],

  projectsPage: {
    subtitle: "Бидний амжилттай гүйцэтгэсэн төслүүдийн жагсаалт.",
  },

  news: [
    { slug: "winter-discount", title: "Өвлийн хямдралын урамшуулал эхэллээ", date: "2026-06-01", excerpt: "Энэ улирлын турш бүх төрлийн вакуум цонхонд онцгой хямдрал зарлаж байна. Дэлгэрэнгүй мэдээллийг доороос үзнэ үү." },
    { slug: "new-showroom", title: "Шинэ үзэсгэлэнгийн танхим нээгдлээ", date: "2026-05-12", excerpt: "Бид үйлчлүүлэгчиддээ илүү ойр байх зорилгоор шинэ үзэсгэлэнгийн танхимаа нээлээ." },
    { slug: "quality-standard", title: "Чанарын олон улсын стандарт нэвтрүүллээ", date: "2026-04-20", excerpt: "Үйлдвэрлэлийн чанарын хяналтын шинэ систем нэвтрүүлж, бүтээгдэхүүний баталгааг сайжруулав." },
  ] as NewsItem[],

  newsPage: {
    subtitle: "Компанийн сүүлийн үеийн мэдээ, урамшуулал, зарлал.",
    imageLabel: "Мэдээний зураг",
    readMore: "Дэлгэрэнгүй →",
  },

  about: {
    subtitle: "Вакуум цонхны үйлдвэрлэл · Улаанбаатар, Монгол",
    lead: {
      before: " нь Монгол улсад тэргүүлэх чанарын вакуум цонх, хаалга үйлдвэрлэгч компани юм. Бид ",
      pvc: "PVC профиль",
      after: " ашиглан олон давхар шилтэй, дулааны алдагдлыг бууруулсан цонхны шийдлийг танд санал болгодог.",
    },
    paragraphs: [
      { lead: " нь 2012 оноос эхлэн хуванцар цонх, хаалганы үйлдвэрлэл, угсралтын чиглэлээр тасралтгүй үйл ажиллагаа явуулж буй найдвартай компани юм." },
    ],
    story2: "Бид хэрэглэгчдэд цонхтой холбоотой цогц үйлчилгээг — зөвлөгөөнөөс эхлэн угсралт, дагалдах иж бүрдэл хүртэл — нэг дороос санал болгодог. Манай бүтээгдэхүүн MNS 5830-2007 болон MNS 6266-2011 стандартын шаардлагыг бүрэн хангаж, чанар болон бат бэхийн өндөр шалгуурыг давдаг.",
    story3: "2016 оноос хуванцар цонхны бэлдэц материалыг дотооддоо үйлдвэрлэж эхэлсэн нь манай үйлдвэрлэлийн хүчин чадлыг эрс нэмэгдүүлсэн.",
    projectsHeading: "🏢 Томоохон хэрэгжсэн төслүүд",
    quickFacts: [
      { icon: "📍", label: "Хаяг", value: "Улаанбаатар хот, Монгол" },
      { icon: "🏷️", label: "Мэргэшлийн чиглэл", value: "PVC вакуум цонх, хаалга" },
      { icon: "⚙️", label: "Бүтээгдэхүүн", value: "66, 72, 80 рам цонх" },
      { icon: "💻", label: "Систем", value: "AI тооцоолол, дижитал захиалга" },
    ] as Fact[],
    facts: [
      { icon: "🏁", label: "Үйл ажиллагаа эхэлсэн", value: "2012 он" },
      { icon: "🏭", label: "Дотоод үйлдвэрлэл", value: "2016 оноос" },
      { icon: "📋", label: "Чанарын стандарт", value: "MNS 5830 · 6266" },
      { icon: "🪟", label: "Мэргэшлийн чиглэл", value: "PVC цонх & хаалга" },
    ] as Fact[],
    projectNames: [
      "Дүнжингарав хороолол", "Олимп хороолол", "Амгалан хотхон", "Эрдэнэт 7-р хороолол",
      "Цагаан хуаран", "Нэхмэл-8", "Гашуунсухайт", "SGD-88", "Тэлмү Виллаж",
      "Дөлгөөн Алтай Апартмент", "Агарта Ресиденс", "Консул Ресиденс",
    ],
  },

  contact: {
    subtitle: "Асуулт, захиалга, санал хүсэлтээ бидэнд илгээнэ үү.",
    infoTitle: "Холбоо барих мэдээлэл",
    addressLabel: "Хаяг",
    phoneLabel: "Утас",
    emailLabel: "И-мэйл",
    hoursLabel: "Ажиллах цаг",
    mapPlaceholder: "Газрын зураг (Google Maps) энд орно",
    formTitle: "Хүсэлт илгээх",
    formSubtitle: "Доорх маягтыг бөглөнө үү. Бид удахгүй тантай холбогдоно.",
    form: {
      name: "Нэр",
      namePlaceholder: "Таны нэр",
      phone: "Утас",
      phonePlaceholder: "99XXXXXX",
      email: "И-мэйл",
      emailPlaceholder: "email@example.mn",
      message: "Зурвас",
      messagePlaceholder: "Захиалга, асуултаа бичнэ үү...",
      submit: "Илгээх",
      success: "✓ Таны хүсэлт хүлээн авлаа. (Жич: backend холбогдсоны дараа жинхэнэ илгээлт хийгдэнэ.)",
    },
  },

  calculator: {
    title: "Үнийн тооцоолуур",
    subtitle: "Цонхныхоо хэмжээ, төрлийг сонгоод ойролцоо үнийг тооцоолоорой.",
    chooseDesign: "Дизайн сонгох:",
    chooseConfig: "Тохиргоог тодорхойлно уу",
    config: "Тохиргоо",
    innerColorTitle: "Цонхны дотор өнгө",
    colorPrefix: "Өнгө:",
    toggleOuter: "Цонхны гадна өнгө өөр байхуу?",
    toggleSeal: "Амалгаа байх уу?",
    toggleSill: "Тавцан байх уу?",
    orderButton: "Энэ тохиргоогоор захиалах",
    disclaimer: "* Эцсийн үнийг хэмжилт хийсний дараа мэргэжилтэн тодорхойлно. (Жинхэнэ үнэ тооцоолол backend талд хийгдэнэ.)",
    designs: { one: "Нэг цонх", two: "Хоёр цонх", three: "Гурав цонх", door: "Тагттай цонх" } as Record<string, string>,
    colors: { white: "Цагаан", gray: "Саарал", brown: "Хүрэн", oak: "Царс мод" } as Record<string, string>,
  },

  footer: {
    pages: "Хуудаснууд",
    services: "Үйлчилгээ",
    contact: "Холбоо барих",
    rights: "Бүх эрх хуулиар хамгаалагдсан.",
  },

  login: {
    title: "Нэвтрэх",
    subtitle: "Админ хэсэгт нэвтрэхийн тулд мэдээллээ оруулна уу.",
    username: "Хэрэглэгчийн нэр",
    usernamePlaceholder: "admin",
    password: "Нууц үг",
    passwordPlaceholder: "••••••••",
    submit: "Нэвтрэх",
    back: "← Сайт руу буцах",
    hint: "Туршилтын горим: аль ч мэдээллээр нэвтэрч болно.",
  },
};

// ===========================================================================
//  ENGLISH
// ===========================================================================
const en: typeof mn = {
  company: {
    ...shared,
    name: "Indert Shuteen LLC",
    tagline: "Quality vacuum window & door solutions",
    category: "Vacuum window manufacturing · Ulaanbaatar, Mongolia",
    intro:
      "Indert Shuteen LLC is a leading manufacturer of high-quality vacuum windows and doors in Mongolia. Using PVC profiles, we offer multi-pane, thermally efficient window solutions that minimize heat loss.",
    address: "Ulaanbaatar, Mongolia",
    workHours: "Mon–Sat, 09:00–18:00",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Calculator", href: "/calculator" },
    { label: "News", href: "/news" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],

  ui: {
    menu: "Menu",
    login: "Log in",
    logout: "Log out",
    admin: "Admin",
    order: "Order now",
    langLabel: "МН", // товч дээр харагдах — монгол руу шилжүүлнэ
    prev: "Previous",
    next: "Next",
    slide: "Slide",
    readMore: "Read more →",
    viewAll: "View all →",
    imageLabel: "Image",
  },

  hero: [
    {
      heading: "Indert Shuteen LLC — a factory for quality vacuum windows & doors",
      subtitle:
        "Indert Shuteen LLC is a leading manufacturer of high-quality vacuum windows and doors in Mongolia. Using PVC profiles, we offer multi-pane, thermally efficient window solutions that minimize heat loss.",
      ctaLabel: "Learn more",
      ctaHref: "/about",
      bg: SLIDE_BG[0],
    },
    {
      heading: "Modern PVC window solutions",
      subtitle:
        "Made to order using 66, 72 and 80 series frame profiles with excellent thermal and sound insulation.",
      ctaLabel: "View services",
      ctaHref: "/services",
      bg: SLIDE_BG[1],
    },
    {
      heading: "Estimate your price online",
      subtitle:
        "Select your window design and dimensions to get an approximate price in seconds.",
      ctaLabel: "Calculate",
      ctaHref: "/calculator",
      bg: SLIDE_BG[2],
    },
  ],

  home: {
    servicesTitle: "Our services",
    servicesSubtitle: "A complete solution from order and installation to warranty service.",
    servicesCta: "View all services →",
    aboutTitle: "About us",
    aboutBullets: [
      "Manufacturing that meets European standards",
      "An experienced professional team",
      "Guaranteed quality, delivered on time",
      "Affordable pricing",
    ],
    aboutCta: "Learn more",
    projectsTitle: "Our work",
    projectsSubtitle: "Some of the projects we have completed.",
    newsTitle: "Latest news",
    partnersLabel: "Brands we work with",
    ctaTitle: "Ready to place an order?",
    ctaSubtitle: "Contact us for a free consultation and measurement.",
  },

  stats: [
    { value: "13+", label: "Years of experience" },
    { value: "5000+", label: "Orders completed" },
    { value: "100%", label: "Guaranteed quality" },
    { value: "24/7", label: "Service & support" },
  ],

  services: [
    { title: "Vacuum window manufacturing", description: "Multi-pane vacuum windows with reduced heat loss, made to your exact measurements.", icon: "🪟" },
    { title: "PVC frames", description: "Durable multi-chamber PVC frames — long-lasting, with great air and sound insulation.", icon: "🧱" },
    { title: "Installation & assembly", description: "Professional installation, measurement and clean workmanship by an experienced team.", icon: "🔧" },
    { title: "Window parts & accessories", description: "Supply of quality hinges, locks, sealing foam and other accessories.", icon: "⚙️" },
    { title: "Repair & maintenance", description: "Warranty repair and adjustment of broken windows, hinges and locks.", icon: "🛠️" },
    { title: "Price estimation", description: "Fast price quotes and advice based on dimensions and material choices.", icon: "🧮" },
  ],

  servicesPage: {
    subtitle: "A complete solution for ordering, manufacturing, installing and repairing windows and doors.",
    cardCta: "Order now →",
    ctaTitle: "Looking for the right solution for you?",
    ctaSubtitle: "Our specialists are ready to give you free advice.",
    ctaButton: "Contact us",
  },

  projects: [
    { title: "Dunjingarav District", location: "Ulaanbaatar", year: "2023", category: "Residential" },
    { title: "Olymp District", location: "Ulaanbaatar", year: "2022", category: "Residential" },
    { title: "Amgalan Residential Area", location: "Ulaanbaatar", year: "2022", category: "Residential" },
    { title: "Erdenet 7th District", location: "Erdenet", year: "2021", category: "Residential" },
    { title: "Tsagaan Khuaran", location: "Ulaanbaatar", year: "2021", category: "Residential" },
    { title: "Nekhmel-8", location: "Ulaanbaatar", year: "2021", category: "Residential" },
    { title: "Gashuunsukhait", location: "Umnugovi", year: "2020", category: "Industrial building" },
    { title: "SGD-88", location: "Ulaanbaatar", year: "2020", category: "Office" },
    { title: "Telmu Village", location: "Ulaanbaatar", year: "2021", category: "Private residence" },
    { title: "Dulguun Altai Apartment", location: "Ulaanbaatar", year: "2020", category: "Residential" },
    { title: "Agarta Residence", location: "Ulaanbaatar", year: "2020", category: "Residential" },
    { title: "Consul Residence", location: "Ulaanbaatar", year: "2019", category: "Residential" },
  ],

  projectsPage: {
    subtitle: "A list of the projects we have successfully completed.",
  },

  news: [
    { slug: "winter-discount", title: "Winter discount promotion has started", date: "2026-06-01", excerpt: "Throughout this season we are offering a special discount on all types of vacuum windows. See the details below." },
    { slug: "new-showroom", title: "A new showroom has opened", date: "2026-05-12", excerpt: "We have opened a new showroom to be closer to our customers." },
    { slug: "quality-standard", title: "International quality standard adopted", date: "2026-04-20", excerpt: "We introduced a new production quality control system and improved our product guarantees." },
  ],

  newsPage: {
    subtitle: "The company's latest news, promotions and announcements.",
    imageLabel: "News image",
    readMore: "Read more →",
  },

  about: {
    subtitle: "Vacuum window manufacturing · Ulaanbaatar, Mongolia",
    lead: {
      before: " is a leading manufacturer of high-quality vacuum windows and doors in Mongolia. Using ",
      pvc: "PVC profiles",
      after: ", we offer multi-pane, thermally efficient window solutions that minimize heat loss.",
    },
    paragraphs: [
      { lead: " has, since 2012, operated continuously and reliably in the manufacturing and installation of PVC windows and doors." },
    ],
    story2: "We offer customers a complete window service in one place — from consultation to installation and accessories. Our products fully meet the requirements of the MNS 5830-2007 and MNS 6266-2011 standards, passing high criteria for quality and durability.",
    story3: "Since 2016 we have produced PVC window blank materials domestically, which has dramatically increased our manufacturing capacity.",
    projectsHeading: "🏢 Major completed projects",
    quickFacts: [
      { icon: "📍", label: "Address", value: "Ulaanbaatar, Mongolia" },
      { icon: "🏷️", label: "Specialization", value: "PVC vacuum windows & doors" },
      { icon: "⚙️", label: "Products", value: "66, 72, 80 series windows" },
      { icon: "💻", label: "System", value: "AI estimation, digital ordering" },
    ],
    facts: [
      { icon: "🏁", label: "Operations began", value: "2012" },
      { icon: "🏭", label: "Domestic production", value: "Since 2016" },
      { icon: "📋", label: "Quality standards", value: "MNS 5830 · 6266" },
      { icon: "🪟", label: "Specialization", value: "PVC windows & doors" },
    ],
    projectNames: [
      "Dunjingarav District", "Olymp District", "Amgalan Residential Area", "Erdenet 7th District",
      "Tsagaan Khuaran", "Nekhmel-8", "Gashuunsukhait", "SGD-88", "Telmu Village",
      "Dulguun Altai Apartment", "Agarta Residence", "Consul Residence",
    ],
  },

  contact: {
    subtitle: "Send us your questions, orders and suggestions.",
    infoTitle: "Contact information",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Working hours",
    mapPlaceholder: "A map (Google Maps) will go here",
    formTitle: "Send a request",
    formSubtitle: "Please fill out the form below. We will contact you shortly.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "99XXXXXX",
      email: "Email",
      emailPlaceholder: "email@example.mn",
      message: "Message",
      messagePlaceholder: "Write your order or question...",
      submit: "Send",
      success: "✓ Your request has been received. (Note: real submission will work once the backend is connected.)",
    },
  },

  calculator: {
    title: "Price calculator",
    subtitle: "Select your window size and type to estimate an approximate price.",
    chooseDesign: "Choose a design:",
    chooseConfig: "Define the configuration",
    config: "Configuration",
    innerColorTitle: "Interior window color",
    colorPrefix: "Color:",
    toggleOuter: "Different exterior color?",
    toggleSeal: "Add sealing?",
    toggleSill: "Add a sill?",
    orderButton: "Order with this configuration",
    disclaimer: "* The final price is determined by a specialist after measurement. (Real price calculation is handled on the backend.)",
    designs: { one: "One pane", two: "Two panes", three: "Three panes", door: "Window with door" },
    colors: { white: "White", gray: "Gray", brown: "Brown", oak: "Oak" },
  },

  footer: {
    pages: "Pages",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
  },

  login: {
    title: "Log in",
    subtitle: "Enter your details to access the admin area.",
    username: "Username",
    usernamePlaceholder: "admin",
    password: "Password",
    passwordPlaceholder: "••••••••",
    submit: "Log in",
    back: "← Back to site",
    hint: "Demo mode: you can log in with any details.",
  },
};

export type Dict = typeof mn;

export const content: Record<Lang, Dict> = { mn, en };

export function isLang(v: string | undefined): v is Lang {
  return v === "mn" || v === "en";
}

// Cookie тогтмолууд ба серверт ажиллах туслах (client бус — layout-д ашиглана).
export const LANG_COOKIE = "ish_lang";
export const AUTH_COOKIE = "ish_auth";

export function readLang(value: string | undefined): Lang {
  return isLang(value) ? value : "mn";
}
