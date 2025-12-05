import { Link } from "react-router-dom";
import productSpace from "@/assets/product-space.jpg";
import productDino from "@/assets/product-dino.jpg";
import productDragon from "@/assets/product-dragon.jpg";
import productTiger from "@/assets/product-tiger.jpg";
import productAlien from "@/assets/product-alien.jpg";

const youthProducts = [
  {
    id: "space-discovery-youth",
    name: "XR Reality Collection: Space Discovery (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productSpace,
  },
  {
    id: "jurassic-stomp-youth",
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productDino,
  },
  {
    id: "dragon-youth",
    name: "XR Reality Collection: Year of the Dragon (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productDragon,
  },
  {
    id: "tiger-youth",
    name: "XR Reality Collection: Year of the Tiger (Unisex) Youth T-Shirt",
    price: "$39.00",
    image: productTiger,
  },
];

const adultProducts = [
  {
    id: "jurassic-stomp-adult",
    name: "XR Reality Collection: Jurassic Stomp (Unisex) Adult T-Shirt",
    price: "$39.00",
    image: productDino,
  },
  {
    id: "dragon-adult",
    name: "XR Reality Collection: Year of the Dragon (Unisex) Adult T-Shirt",
    price: "$39.00",
    image: productDragon,
  },
  {
    id: "alien-hoodie-adult",
    name: "XR Reality Collection: Outta This World Alien (Unisex) Adult Hoodie",
    price: "$79.00",
    image: productAlien,
  },
];

function ProductCard({ product }: { product: typeof youthProducts[0] }) {
  return (
    <Link
      to={`/products/${product.id}`}
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
    </Link>
  );
}

function CategoryHeader({ title, href }: { title: string; href: string }) {
  return (
    <Link 
      to={href}
      className="inline-block text-lg font-semibold text-foreground hover:text-primary transition-colors border-b-2 border-foreground hover:border-primary pb-1"
    >
      {title}
    </Link>
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
            <CategoryHeader title="Youth" href="/collections/youth" />
            <CategoryHeader title="Adult" href="/collections/adult" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {youthProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/collections/youth"
              className="text-sm text-foreground hover:text-primary underline transition-colors"
            >
              View all
            </Link>
          </div>
        </div>

        {/* Adult Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {adultProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/collections/adult"
              className="text-sm text-foreground hover:text-primary underline transition-colors"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
