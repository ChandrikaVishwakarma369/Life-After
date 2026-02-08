import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/read-more", label: "Read More" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Life After
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/signin"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/signin" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent">
              Sign In
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground text-center">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
