import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Life After
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Extending conversations beyond life. Preserve memories, continue connections.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/read-more" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Read More</Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Team</h4>
          <p className="text-sm text-muted-foreground">Chandrika Vishwakarma</p>
          <p className="text-sm text-muted-foreground">Dolly Vishwakarma</p>
          <p className="text-sm text-muted-foreground">Preeti Thakur</p>
          <p className="text-sm text-muted-foreground">Ishika Trivedi</p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 Life After. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
