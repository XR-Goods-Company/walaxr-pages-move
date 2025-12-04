import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pb-16">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg uppercase tracking-wide">
            Scan. Click. Wow!
          </h1>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
            asChild
          >
            <a href="https://www.walaxr.com/collections" target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
