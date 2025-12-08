import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Search, ShoppingBag, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { name: "YOUTH", href: "/collections/youth" },
  { name: "TODDLER", href: "/collections/toddler" },
  { name: "ADULT", href: "/collections/adult" },
  { name: "WOMEN'S", href: "/collections/womens" },
  { name: "ACCESSORIES", href: "/collections/small-items" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/walaxr/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/walaxr", label: "Facebook" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-semibold tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:mx-auto">
            <div className="flex items-center">
              <span className="font-display text-3xl font-bold text-primary tracking-tight">
                WaLa
              </span>
              <span className="text-[10px] text-primary ml-0.5 -mt-2">®</span>
            </div>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.walaxr.com/account/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors hidden sm:block"
              aria-label="Log in"
            >
              <User className="w-5 h-5" />
            </a>
            <a
              href="https://www.walaxr.com/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors hidden sm:block"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </a>
            <a
              href="https://www.walaxr.com/cart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.walaxr.com/account/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Log in
              </a>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
