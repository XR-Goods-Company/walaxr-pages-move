import { Button } from "@/components/ui/button";

export function PlanetExploration() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest mb-4 text-blue-300">Brand new experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Planet Exploration!
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Learn about gravity and space travel as an astronaut exploring different planets in our solar system.
          </p>
          <Button 
            size="lg"
            className="bg-white text-indigo-900 hover:bg-blue-100 font-semibold"
            asChild
          >
            <a href="https://www.walaxr.com/collections/astronaut-planet-exploration" target="_blank" rel="noopener noreferrer">
              Shop Collection
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
