import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function FunForAllAges() {
  return (
    <section 
      className="py-32 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
          Fun for all ages
        </h2>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          asChild
        >
          <a href="https://www.walaxr.com/collections/all" target="_blank" rel="noopener noreferrer">
            Shop Now
          </a>
        </Button>
      </div>
    </section>
  );
}
