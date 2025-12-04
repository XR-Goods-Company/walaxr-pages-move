import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedRetailer() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Retailer</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Dinosaur Ridge</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Visit our featured retail partner Dinosaur Ridge in Morrison, Colorado – one of the world's most famous dinosaur fossil locations! Pick up exclusive WaLa XR apparel featuring the Jurassic Collection in person.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://dinoridge.org/" target="_blank" rel="noopener noreferrer">
                Visit Dinosaur Ridge
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.walaxr.com/collections/all" target="_blank" rel="noopener noreferrer">
                Shop Jurassic Collection
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
