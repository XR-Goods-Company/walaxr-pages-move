import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/walaxr/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/walaxr", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/xrgoodscompany/", label: "LinkedIn" },
];

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "Youth", href: "https://www.walaxr.com/collections/youth" },
      { name: "Adult", href: "https://www.walaxr.com/collections/adult" },
      { name: "Women's", href: "https://www.walaxr.com/collections/womens" },
      { name: "Toddler", href: "https://www.walaxr.com/collections/toddler" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Try Demo", href: "https://app.xrshirts.com/dragon?sample=60" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl font-bold text-gradient">WaLa</span>
              <span className="font-display text-sm text-muted-foreground tracking-widest">XR</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Experience the magic of augmented reality apparel. Simply scan the QR code on your shirt and watch it come to life – no app required!
            </p>

            {/* Contact Email */}
            <a 
              href="mailto:hello@walaxr.com" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@walaxr.com
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-bold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WaLa XR. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Formerly XR Apparel
          </p>
        </div>
      </div>
    </footer>
  );
}
