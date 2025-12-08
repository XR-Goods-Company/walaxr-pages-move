import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { products } from "@/data/products";

const CartPage = () => {
  // Get popular picks (accessories/small items)
  const popularPicks = products.filter(p => p.category === "small-items").slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Cart | WaLa XR</title>
        <meta name="description" content="Your shopping cart - WaLa XR AR-enabled apparel" />
      </Helmet>
      
      <AnnouncementBar />
      <Header />
      
      <main className="flex-1 pt-8 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Cart Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-wider">
              CART
            </h1>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground underline"
            >
              Continue shopping
            </Link>
          </div>

          {/* Empty Cart Message */}
          <p className="text-center text-muted-foreground mb-16">
            Your cart is currently empty.
          </p>

          {/* Popular Picks Section */}
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wider">
                POPULAR PICKS
              </h2>
              <Link 
                to="/collections/small-items" 
                className="text-sm font-medium text-foreground hover:text-primary tracking-wider"
              >
                VIEW ALL
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularPicks.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground">{product.price}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
