import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Simply scan the QR code on the shirt and watch it come to life! No app required.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wide"
            asChild
          >
            <a href="https://app.xrshirts.com/dragon?sample=60" target="_blank" rel="noopener noreferrer">
              Sample the Experience Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
