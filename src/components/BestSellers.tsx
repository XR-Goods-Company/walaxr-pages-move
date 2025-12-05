import productDino from "@/assets/product-dino.jpg";
import productDragon from "@/assets/product-dragon.jpg";
import productTiger from "@/assets/product-tiger.jpg";
import productDinoToddler from "@/assets/product-dino-toddler.jpg";
import productAlien from "@/assets/product-alien.jpg";
import productSpaceHoodie from "@/assets/product-space-hoodie.jpg";

const tshirtProducts = [
  {
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Toddler T-Shirt",
    price: "$39.00",
    image: productDinoToddler,
    href: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-toddler-t-shirt",
  },
  {
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productDino,
    href: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-youth-t-shirt",
  },
  {
    name: "XR Reality Collection: Year of the Dragon (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productDragon,
    href: "https://www.walaxr.com/products/xr-reality-collection-year-of-the-dragon-unisex-youth-t-shirt",
  },
  {
    name: "XR Reality Collection: Year of the Tiger (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productTiger,
    href: "https://www.walaxr.com/products/xr-reality-collection-year-of-the-tiger-unisex-youth-t-shirt",
  },
];

const hoodieProducts = [
  {
    name: "XR Reality Collection: Outta This World Alien (Unisex) Adult Hoodie",
    price: "$79.00",
    image: productAlien,
    href: "https://www.walaxr.com/products/xr-reality-collection-outta-this-world-alien-unisex-adult-hoodie",
  },
  {
    name: "XR Reality Collection: Space Discovery (Unisex) Adult Hoodie",
    price: "$79.00",
    image: productSpaceHoodie,
    href: "https://www.walaxr.com/products/xr-reality-collection-space-discovery-unisex-adult-hoodie",
  },
  {
    name: "XR Reality Collection: Space Discovery (Unisex) Youth Hoodie",
    price: "$79.00",
    image: productSpaceHoodie,
    href: "https://www.walaxr.com/products/xr-reality-collection-space-discovery-unisex-youth-hoodie",
  },
];

function ProductCard({ product }: { product: typeof tshirtProducts[0] }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="aspect-square overflow-hidden bg-secondary mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-sm font-medium text-foreground">{product.price}</p>
    </a>
  );
}

function CategoryHeader({ title, href }: { title: string; href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block text-lg font-semibold text-foreground hover:text-primary transition-colors border-b-2 border-foreground hover:border-primary pb-1"
    >
      {title}
    </a>
  );
}

export function BestSellers() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Best sellers</p>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <CategoryHeader title="T-Shirts" href="https://www.walaxr.com/collections/t-shirts" />
          <CategoryHeader title="Hoodies" href="https://www.walaxr.com/collections/hoodies" />
        </div>

        {/* T-Shirts */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tshirtProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="text-center mt-6">
            <a 
              href="https://www.walaxr.com/collections/t-shirts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary underline transition-colors"
            >
              View all
            </a>
          </div>
        </div>

        {/* Hoodies */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {hoodieProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="text-center mt-6">
            <a 
              href="https://www.walaxr.com/collections/hoodies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary underline transition-colors"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
