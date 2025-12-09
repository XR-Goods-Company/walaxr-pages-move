import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.shortName.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term) ||
        product.colors.some(color => color.toLowerCase().includes(term)) ||
        product.sizes.some(size => size.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Search | WaLa XR</title>
        <meta name="description" content="Search WaLa XR products - AR-enabled apparel for kids and adults" />
      </Helmet>
      
      <AnnouncementBar />
      <Header />
      
      <main className="flex-1 pt-8 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Search</span>
          </nav>

          {/* Search Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8 tracking-wider">
            SEARCH
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto mb-12">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search our store"
              className="flex-1 h-12 text-base"
            />
            <Button type="submit" className="h-12 px-6 bg-primary hover:bg-primary/90">
              <Search className="w-5 h-5" />
            </Button>
          </form>

          {/* Search Results */}
          {searchTerm && (
            <div>
              <p className="text-center text-muted-foreground mb-8">
                {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchTerm}"
              </p>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {searchResults.map((product) => (
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
              ) : (
                <p className="text-center text-muted-foreground">
                  No products found. Try a different search term.
                </p>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
