import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import productSpace from "@/assets/product-space.jpg";
import productDino from "@/assets/product-dino.jpg";
import productDragon from "@/assets/product-dragon.jpg";
import productAlien from "@/assets/product-alien.jpg";
import productUnicorn from "@/assets/product-unicorn.jpg";
import productSpaceHoodie from "@/assets/product-space-hoodie.jpg";

const categories = [
  { name: "Youth", href: "https://www.walaxr.com/collections/youth" },
  { name: "Toddler", href: "https://www.walaxr.com/collections/toddler" },
  { name: "Adult", href: "https://www.walaxr.com/collections/adult" },
  { name: "Women's", href: "https://www.walaxr.com/collections/womens" },
  { name: "Accessories", href: "https://www.walaxr.com/collections/small-items" },
];

const featuredProducts = [
  {
    name: "XR Reality: Space Discovery Youth T-Shirt",
    price: "$39.00",
    image: productSpace,
    href: "https://www.walaxr.com/products/xr-reality-collection-space-discovery-unisex-youth-t-shirt",
  },
  {
    name: "XR Reality: Jurassic Stomp Youth T-Shirt",
    price: "$39.00",
    image: productDino,
    href: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-youth-t-shirt",
  },
  {
    name: "XR Reality: Year of the Dragon Youth T-Shirt",
    price: "$39.00",
    image: productDragon,
    href: "https://www.walaxr.com/products/xr-reality-collection-year-of-the-dragon-unisex-youth-t-shirt",
  },
  {
    name: "XR Reality: Outta This World Alien Hoodie",
    price: "$79.00",
    image: productAlien,
    href: "https://www.walaxr.com/products/xr-reality-collection-outta-this-world-alien-unisex-youth-hoodie",
  },
  {
    name: "XR Reality: Mystical Unicorn Youth T-Shirt",
    price: "$39.00",
    image: productUnicorn,
    href: "https://www.walaxr.com/products/xr-reality-collection-mystical-unicorn-unisex-youth-t-shirt",
  },
  {
    name: "XR Reality: Space Discovery Adult Hoodie",
    price: "$79.00",
    image: productSpaceHoodie,
    href: "https://www.walaxr.com/products/xr-reality-collection-space-discovery-unisex-adult-hoodie",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Spring</span> Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of XR-enabled apparel for the whole family. Each piece features a unique QR code that unlocks an immersive augmented reality experience.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all text-sm font-medium"
            >
              {category.name}
            </a>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <a
              key={index}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-glow bg-card rounded-xl overflow-hidden border border-border"
            >
              <div className="aspect-square overflow-hidden bg-muted relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-sm font-display flex items-center gap-2">
                    View on Shopify <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-display text-lg text-gradient">{product.price}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.walaxr.com/collections/all" target="_blank" rel="noopener noreferrer">
              View All Products
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Notice Banner */}
        <div className="mt-16 p-6 rounded-xl bg-primary/10 border border-primary/30 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Note:</span> All purchases are processed through our Shopify store. Click any product to be redirected.
          </p>
        </div>
      </div>
    </section>
  );
}
