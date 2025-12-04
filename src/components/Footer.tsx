import { Instagram, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/walaxr/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/walaxr", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-display text-2xl font-bold text-primary">WaLa</span>
            <span className="text-[8px] text-primary ml-0.5 -mt-2">®</span>
            <span className="text-sm text-muted-foreground ml-2">XR</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://www.walaxr.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              www.walaxr.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WaLa XR. All rights reserved.</p>
          <p className="mt-2 text-xs">
            This is a static archive. For purchases, visit{" "}
            <a href="https://www.walaxr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              walaxr.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
