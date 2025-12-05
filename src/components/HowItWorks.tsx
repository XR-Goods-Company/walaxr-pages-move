import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/a2227de859134d99aab3c917627c0a98.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            How it works
          </h2>
          <p className="text-lg text-white/90 mb-8">
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
