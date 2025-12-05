import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Button } from "@/components/ui/button";
import { getProductById, categories } from "@/data/products";
import { Globe, Check } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold text-foreground">Product not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Return home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find((c) => c.slug === product.category);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product.name} - WaLa XR Apparel</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <AnnouncementBar />
      <Header />

      {/* Sample Experience Banner */}
      <div className="bg-primary/10 py-3 text-center">
        <a
          href="https://app.xrshirts.com/astronaut?sample=60"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          SAMPLE THIS EXPERIENCE NOW
        </a>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link to="/" className="text-primary hover:underline">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{product.shortName}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-2 w-20">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square border-2 border-primary overflow-hidden cursor-pointer"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-square bg-secondary overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-wide mb-4">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold text-foreground mb-4">{product.price}</p>

            <p className="text-sm text-muted-foreground mb-6">
              <a href="#" className="text-primary hover:underline">Shipping</a> calculated at checkout.
            </p>

            {/* Colors */}
            <div className="mb-6">
              <label className="text-xs font-semibold tracking-widest text-foreground mb-2 block">
                COLORS
              </label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      selectedColor === color
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-foreground"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <label className="text-xs font-semibold tracking-widest text-foreground mb-2 block">
                SIZES
              </label>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border text-sm transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Shipping Info */}
            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Free worldwide shipping</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Check className="w-4 h-4" />
                <span>In stock, ready to ship</span>
              </div>
            </div>

            {/* Add to Cart - Links to Shopify */}
            <a
              href={product.shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 text-sm font-semibold tracking-wide">
                ADD TO CART
              </Button>
            </a>

            <a
              href={product.shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3"
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm font-semibold tracking-wide">
                BUY IT NOW
              </Button>
            </a>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xs font-semibold tracking-widest text-foreground mb-4">DESCRIPTION</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
