import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a static site, we'll show a message directing to Shopify
    toast({
      title: "Newsletter Signup",
      description: "To subscribe to our newsletter, please visit our Shopify store at walaxr.com",
    });
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Stay Updated</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Adventure in Your <span className="text-gradient">Inbox</span>
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Get the latest experience updates, new designs, promotions and exclusive offers. No spam guaranteed!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 pl-12 pr-4 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to receive marketing emails from WaLa XR.
          </p>
        </div>
      </div>
    </section>
  );
}
