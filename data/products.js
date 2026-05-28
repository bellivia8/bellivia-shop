const products = [
  {
    id: "garnitur",
    name: "Garnitur dwuczęściowy",
    category: "garnitury",
    price: 189,
    description:
      "Elegancki garnitur damski w stylowe paski. Komplet składa się z marynarki i dopasowanych spodni. Idealny na spotkania biznesowe, wesela i wyjątkowe okazje.",

    notes: ["Można przewiązać paskiem (pasek nie jest w zestawie)"],

    composition: "85% bawełna, 15% elastan",

    measurements: {
      Marynarka: {
        "Szerokość pod pachami": "54 cm",
        "Długość całkowita": "76 cm",
        "Długość rękawa": "64 cm",
        "Szerokość ramion": "42 cm",
      },

      "Spodnie S/M": {
        Pas: "32 cm",
        Biodra: "58 cm",
        "Stan (od pasa do kroku)": "36 cm",
        "Długość całkowita": "112 cm",
        "Długość nogawki od kroku": "80 cm",
      },

      "Spodnie M/L": {
        Pas: "34 cm",
        Biodra: "60 cm",
        "Stan (od pasa do kroku)": "36 cm",
        "Długość całkowita": "112 cm",
        "Długość nogawki od kroku": "80 cm",
      },
    },

    sizes: [
      {
        name: "S/M",
        available: true,
      },
      {
        name: "M/L",
        available: false,
      },
    ],

    colors: [
      {
        name: "Czarny w paski",
        value: "czarny",
        hex: "#1a1a1a",
        images: [
          "/images/gc1.jpg",
          "/images/gc2.jpg",
          "/images/gc3.jpg",
        ],
      },

      {
        name: "Beżowy w paski",
        value: "bezowy",
        hex: "#c8a96e",
        images: [
          "/images/gb1.jpg",
          "/images/gb2.jpg",
        ],
      },
    ],

    defaultColor: "czarny",
    featured: true,
    badge: "Bestseller",
  },

  {
    id: "gorset",
    name: "Gorset koronkowy",
    category: "gorset",
    price: 179,

    description:
      "Zmysłowy gorset z delikatną koronką. Podkreśla talię i dodaje kobiecości każdej stylizacji. Idealny jako samodzielna część garderoby lub dopełnienie zestawu.",

    notes: [
      "Ramiączka regulowane (odpinane)",
      "Gorset wiązany z tyłu",
      "Wymiary podane gdy gorset jest związany na minimum",
    ],

    composition: "88% poliester, 12% elastan",

    measurements: {
      "Rozmiar S/M": {
        Biust: "31 cm",
        Talia: "25 cm",
        Długość: "38 cm",
      },

      "Rozmiar M/L": {
        Biust: "33 cm",
        Talia: "27 cm",
        Długość: "38 cm",
      },
    },

    sizes: ["S/M", "M/L"],

    colors: [
      {
        name: "Ecru / Kość słoniowa",
        value: "ecru",
        hex: "#f5f0e8",
        images: [
          "/images/go1.jpg",
          "/images/go2.jpg",
        ],
      },
    ],

    defaultColor: "ecru",
    featured: true,
    badge: "Nowość",
  },

  {
    id: "spodnie",
    name: "Spodnie dzwony",
    category: "spodnie",
    price: 129,

    description:
      "Modne spodnie dzwony o szerokim kroju, które wydłużają sylwetkę. Wysoki stan podkreśla talię. Miękki, rozciągliwy materiał zapewnia komfort przez cały dzień.",

    notes: ["Ściągacz na pośladku", "Materiał rozciągliwy"],

    composition: "85% elastan, 15% bawełna",

    measurements: {
      "Rozmiar XS/S": {
        Pas: "28 cm",
        Biodra: "37 cm",
        "Stan (od kroku do góry)": "28 cm",
        "Długość całkowita": "109 cm",
        "Długość nogawki od kroku": "80 cm",
      },

      "Rozmiar S/M": {
        Pas: "30 cm",
        Biodra: "39 cm",
        "Stan (od kroku do góry)": "30 cm",
        "Długość całkowita": "109 cm",
        "Długość nogawki od kroku": "80 cm",
      },

      "Rozmiar M/L": {
        Pas: "32 cm",
        Biodra: "41 cm",
        "Stan (od kroku do góry)": "30 cm",
        "Długość całkowita": "111 cm",
        "Długość nogawki od kroku": "82 cm",
      },
    },

    sizes: ["XS/S", "S/M", "M/L"],

    colors: [
      {
        name: "Czarne",
        value: "czarny",
        hex: "#1a1a1a",
        images: [
          "/images/sc1.jpg",
          "/images/sc2.jpg",
        ],
      },

      {
        name: "Brązowe",
        value: "brazowy",
        hex: "#8b5e3c",
        images: [
          "/images/sb1.jpg",
          "/images/sb2.jpg",
        ],
      },
    ],

    defaultColor: "czarny",
    featured: false,
    badge: null,
  },

  {
    id: "top",
    name: "Top wiązany halter",
    category: "topy",
    price: 59,

    description:
      "Delikatny top w stylu halter z wiązaniem na szyi. Odsłania plecy i dodaje kobiecości. Rozmiar uniwersalny, pasuje na S–L. Idealny na lato, do spodni, spódnic i garniturów.",

    notes: ["Można zakładać na dwa sposoby"],

    composition: "85% elastan, 15% bawełna",

    measurements: {
      "Rozmiar uniwersalny": {
        Biust: "35 cm",
        "Pas pod biustem (szerokość)": "30 cm",
        "Długość całkowita": "42 cm",
      },
    },

    sizes: ["Uniwersalny"],

    colors: [
      {
        name: "Beżowy",
        value: "bezowy",
        hex: "#d4b896",
        images: ["/images/tb1.jpg", "/images/tb2.jpg"],
      },

      {
        name: "Różowy",
        value: "rozowy",
        hex: "#f4a7b9",
        images: ["/images/tr1.jpg", "/images/tr2.jpg"],
      },

      {
        name: "Biały",
        value: "bialy",
        hex: "#fafafa",
        images: ["/images/tw1.jpg", "/images/tw2.jpg"],
      },

      {
        name: "Brązowy",
        value: "brazowy",
        hex: "#4a2b1a",
        images: ["/images/tbr1.jpg", "/images/tbr2.jpg"],
      },

      {
        name: "Żółty",
        value: "zolty",
        hex: "#f5d76e",
        images: ["/images/tz1.jpg", "/images/tz2.jpg"],
      },

      {
        name: "Czarny",
        value: "czarny",
        hex: "#1a1a1a",
        images: ["/images/tc1.jpg", "/images/tc2.jpg"],
      },
    ],

    defaultColor: "bezowy",
    featured: true,
    badge: null,
  },
];

export default products;

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

export function getUpsellSuggestions(currentProductId) {
  return products.filter((p) => p.id !== currentProductId).slice(0, 3);
}