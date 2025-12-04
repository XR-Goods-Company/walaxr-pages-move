import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter Signup",
      description: "To subscribe to our newsletter, please visit our store at walaxr.com",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Adventure in your inbox
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest experience updates, promotions and sharing. No spam guaranteed!
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-none border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              required
            />
            <Button type="submit" className="h-12 px-6 rounded-none bg-foreground text-background hover:bg-foreground/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
