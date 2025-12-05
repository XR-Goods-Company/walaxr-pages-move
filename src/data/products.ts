import productSpace from "@/assets/product-space.jpg";
import productDino from "@/assets/product-dino.jpg";
import productDragon from "@/assets/product-dragon.jpg";
import productTiger from "@/assets/product-tiger.jpg";
import productAlien from "@/assets/product-alien.jpg";
import productUnicorn from "@/assets/product-unicorn.jpg";
import productSpaceHoodie from "@/assets/product-space-hoodie.jpg";
import productDinoToddler from "@/assets/product-dino-toddler.jpg";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: string;
  image: string;
  images: string[];
  category: string;
  colors: string[];
  sizes: string[];
  description: string;
  shopifyUrl: string;
}

export const products: Product[] = [
  // Youth
  {
    id: "space-discovery-youth",
    name: "XR Reality Collection: Space Discovery (Unisex) Youth T-Shirt",
    shortName: "Space Discovery Youth T-Shirt",
    price: "$39.00",
    image: productSpace,
    images: [productSpace],
    category: "youth",
    colors: ["Black", "Navy", "Black Heather"],
    sizes: ["S", "M", "L", "XL"],
    description: "Experience the wonders of space exploration with this interactive AR t-shirt. Scan the design to launch an immersive astronaut adventure.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-space-discovery-unisex-youth-t-shirt",
  },
  {
    id: "jurassic-stomp-youth",
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Youth T-Shirt",
    shortName: "Jurassic Stomp Youth T-Shirt",
    price: "$39.00",
    image: productDino,
    images: [productDino],
    category: "youth",
    colors: ["Black", "Navy", "Black Heather"],
    sizes: ["S", "M", "L", "XL"],
    description: "Bring dinosaurs to life with this incredible AR t-shirt. Watch as prehistoric creatures emerge from the design.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-youth-t-shirt",
  },
  {
    id: "dragon-youth",
    name: "XR Reality Collection: Year of the Dragon (Unisex) Youth T-Shirt",
    shortName: "Year of the Dragon Youth T-Shirt",
    price: "$39.00",
    image: productDragon,
    images: [productDragon],
    category: "youth",
    colors: ["Black", "Navy", "Black Heather"],
    sizes: ["S", "M", "L", "XL"],
    description: "Celebrate the Year of the Dragon with this stunning AR t-shirt featuring an interactive dragon experience.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-year-of-the-dragon-unisex-youth-t-shirt",
  },
  {
    id: "tiger-youth",
    name: "XR Reality Collection: Year of the Tiger (Unisex) Youth T-Shirt",
    shortName: "Year of the Tiger Youth T-Shirt",
    price: "$39.00",
    image: productTiger,
    images: [productTiger],
    category: "youth",
    colors: ["Black", "Navy", "Black Heather"],
    sizes: ["S", "M", "L", "XL"],
    description: "Experience the power of the tiger with this AR-enabled t-shirt. Watch the majestic creature come to life.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-year-of-the-tiger-unisex-youth-t-shirt",
  },
  // Toddler
  {
    id: "jurassic-stomp-toddler",
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Toddler T-Shirt",
    shortName: "Jurassic Stomp Toddler T-Shirt",
    price: "$35.00",
    image: productDinoToddler,
    images: [productDinoToddler],
    category: "toddler",
    colors: ["Black", "Navy"],
    sizes: ["2T", "3T", "4T", "5T"],
    description: "Perfect for little dino lovers! This AR t-shirt brings dinosaurs to life for your toddler.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-toddler-t-shirt",
  },
  // Adult
  {
    id: "jurassic-stomp-adult",
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Adult T-Shirt",
    shortName: "Jurassic Stomp Adult T-Shirt",
    price: "$39.00",
    image: productDino,
    images: [productDino],
    category: "adult",
    colors: ["Black", "Navy", "Black Heather"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    description: "Bring dinosaurs to life with this incredible AR t-shirt designed for adults.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-adult-t-shirt",
  },
  {
    id: "dragon-adult",
    name: "XR Reality Collection: Year of the Dragon (Unisex) Adult T-Shirt",
    shortName: "Year of the Dragon Adult T-Shirt",
    price: "$39.00",
    image: productDragon,
    images: [productDragon],
    category: "adult",
    colors: ["Black", "Navy", "Black Heather"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    description: "Celebrate the Year of the Dragon with this stunning AR t-shirt for adults.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-year-of-the-dragon-unisex-adult-t-shirt",
  },
  {
    id: "alien-hoodie-adult",
    name: "XR Reality Collection: Outta This World Alien (Unisex) Adult Hoodie",
    shortName: "Alien Adult Hoodie",
    price: "$79.00",
    image: productAlien,
    images: [productAlien],
    category: "adult",
    colors: ["Black", "Navy"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description: "Stay warm while experiencing out-of-this-world AR adventures with this premium hoodie.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-outta-this-world-alien-unisex-adult-hoodie",
  },
  // Women's
  {
    id: "unicorn-womens",
    name: "XR Reality Collection: Magical Unicorn (Women's) T-Shirt",
    shortName: "Magical Unicorn Women's T-Shirt",
    price: "$39.00",
    image: productUnicorn,
    images: [productUnicorn],
    category: "womens",
    colors: ["Black", "Navy", "Heather"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Experience magical unicorn adventures with this enchanting AR t-shirt designed for women.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-magical-unicorn-womens-t-shirt",
  },
  // Accessories
  {
    id: "space-hoodie",
    name: "XR Reality Collection: Space Discovery (Unisex) Adult Hoodie",
    shortName: "Space Discovery Hoodie",
    price: "$79.00",
    image: productSpaceHoodie,
    images: [productSpaceHoodie],
    category: "accessories",
    colors: ["Black", "Navy"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description: "Premium hoodie featuring our Space Discovery AR experience.",
    shopifyUrl: "https://www.walaxr.com/products/xr-reality-collection-space-discovery-unisex-adult-hoodie",
  },
];

export const categories = [
  { id: "youth", name: "Youth", slug: "youth" },
  { id: "toddler", name: "Toddler", slug: "toddler" },
  { id: "adult", name: "Adult", slug: "adult" },
  { id: "womens", name: "Women's", slug: "womens" },
  { id: "accessories", name: "Accessories", slug: "accessories" },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
