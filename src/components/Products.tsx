import productSpace from "@/assets/product-space.jpg";
import productDino from "@/assets/product-dino.jpg";
import productDragon from "@/assets/product-dragon.jpg";
import productTiger from "@/assets/product-tiger.jpg";
import productAlien from "@/assets/product-alien.jpg";
import productUnicorn from "@/assets/product-unicorn.jpg";
import productSpaceHoodie from "@/assets/product-space-hoodie.jpg";

const youthProducts = [
  {
    name: "XR Reality Collection: Space Discovery (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productSpace,
    href: "https://www.walaxr.com/products/xr-reality-collection-space-discovery-unisex-youth-t-shirt",
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

const adultProducts = [
  {
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Adult T-Shirt",
    price: "$39.00",
    image: productDino,
    href: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-adult-t-shirt",
  },
  {
    name: "XR Reality Collection: Year of the Dragon (Unisex) Adult T-Shirt",
    price: "$39.00",
    image: productDragon,
    href: "https://www.walaxr.com/products/xr-reality-collection-year-of-the-dragon-unisex-adult-t-shirt",
  },
  {
    name: "XR Reality Collection: Outta This World Alien (Unisex) Adult Hoodie",
    price: "$79.00",
    image: productAlien,
    href: "https://www.walaxr.com/products/xr-reality-collection-outta-this-world-alien-unisex-adult-hoodie",
  },
];

function ProductCard({ product }: { product: typeof youthProducts[0] }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="aspect-square overflow-hidden bg-secondary rounded-none mb-3">
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

export function Products() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Spring Collection</p>
        </div>

        {/* Youth Section */}
        <div className="mb-16">
          <div className="flex justify-center gap-8 mb-8">
            <CategoryHeader title="Youth" href="https://www.walaxr.com/collections/youth" />
            <CategoryHeader title="Adult" href="https://www.walaxr.com/collections/adult" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {youthProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.walaxr.com/collections/youth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary underline transition-colors"
            >
              View all
            </a>
          </div>
        </div>

        {/* Adult Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {adultProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.walaxr.com/collections/adult" 
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
