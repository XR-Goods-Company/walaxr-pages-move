import dinosaurRidge from "@/assets/dinosaur-ridge.png";
import productDino from "@/assets/product-dino.jpg";

const dinoProducts = [
  {
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Adult T-Shirt",
    price: "$39.00",
    image: productDino,
    href: "https://www.walaxr.com/products/xr-reality-collection-jurassic-stomp-unisex-adult-t-shirt",
  },
  {
    name: "XR Reality Collection: Jurassic Footprint (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productDino,
    href: "https://www.walaxr.com/products/xr-reality-collection-jurassic-footprint-unisex-youth-t-shirt",
  },
];

export function FeaturedRetailer() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Featured Retailer: Dinosaur Ridge
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-1">
            <img 
              src={dinosaurRidge} 
              alt="Dinosaur Ridge AR Experience" 
              className="w-full rounded-lg"
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {dinoProducts.map((product, index) => (
              <a
                key={index}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-square overflow-hidden bg-background mb-3 rounded-lg">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
