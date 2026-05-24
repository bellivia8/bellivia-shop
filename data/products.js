export const products = [
  {
    id: 1,
    name: "Sukienka Lniana Ecru",
    price: 189.99,
    description:
      "Elegancka sukienka midi z naturalnego lnu w kolorze ecru. Idealna na letnie dni oraz wieczorne wyjscia. Doskonale przewiewna i komfortowa w noszeniu. Dostepna w rozmiarach XS–XL.",
    shortDesc: "Sukienka midi z naturalnego lnu",
    category: "sukienki",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "/images/product-1.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Bluzka Muslinowa Bezowa",
    price: 129.99,
    description:
      "Zwiewna bluzka z delikatnego muslinu w kolorze bezowym. Rekawy z falbankami, luzny krojenie. Idealna w parze ze spodnica lub spodniami wide leg.",
    shortDesc: "Zwiewna bluzka z muslinu",
    category: "bluzki",
    sizes: ["S", "M", "L"],
    image: "/images/product-2.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Spodnie Wide Leg Camel",
    price: 159.99,
    description:
      "Szerokie spodnie w stylu palazzo w kolorze camel. Wykonane z miekkiej, opadajacej tkaniny. Wygodne na co dzien i na wyjscia.",
    shortDesc: "Szerokie spodnie palazzo",
    category: "spodnie",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "/images/product-3.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Sweter Oversize Sand",
    price: 219.99,
    description:
      "Miekki sweter oversize w kolorze piasku. Wykonany z welny merino, ciepoly i komfortowy. Luzny krojenie pasuje do kazdej figury.",
    shortDesc: "Miekki sweter z welny merino",
    category: "swetry",
    sizes: ["S/M", "L/XL"],
    image: "/images/product-4.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    name: "Spodnica Midi Satynowa",
    price: 149.99,
    description:
      "Elegancka spodnica midi z satyny w kolorze kremowym. Gladki material pieknie uklada sie na sylwetce. Zamek z boku.",
    shortDesc: "Elegancka spodnica midi z satyny",
    category: "spodnice",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/product-5.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: "Koszula Oversize Kremowa",
    price: 139.99,
    description:
      "Oversizowa koszula z lnu w kolorze kremowym. Dluga, mozna nosic jako tunike lub zawiac w pasie. Wszechstronny must-have sezonu.",
    shortDesc: "Oversizowa koszula lniana",
    category: "koszule",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/product-6.jpg",
    inStock: true,
    featured: false,
  },
];

export const getProductById = (id) =>
  products.find((p) => p.id === parseInt(id));

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== parseInt(currentId)).slice(0, limit);