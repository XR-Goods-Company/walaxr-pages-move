import { Smartphone, QrCode, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: QrCode,
    title: "Find the QR Code",
    description: "Each WaLa shirt has a unique QR code embedded in the design.",
  },
  {
    icon: Smartphone,
    title: "Scan with Your Phone",
    description: "Use your phone's camera to scan the code. No app download required!",
  },
  {
    icon: Sparkles,
    title: "Watch It Come to Life",
    description: "Experience stunning AR animations right on the shirt – dragons, dinosaurs, aliens and more!",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bringing your apparel to life is as easy as 1-2-3. No complicated setup, no app downloads – just pure XR magic.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="card-glow bg-card border border-border rounded-xl p-8 text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center font-display font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/30">
          <h3 className="font-display text-2xl font-bold mb-4">Try It Now!</h3>
          <p className="text-muted-foreground mb-6">
            Don't have a WaLa shirt yet? No problem! Click below to sample our Dragon XR experience right in your browser.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://app.xrshirts.com/dragon?sample=60" target="_blank" rel="noopener noreferrer">
              <Play className="w-5 h-5" />
              Sample the Experience
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
