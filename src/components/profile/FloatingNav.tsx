import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/profile-data";

export function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="floating-nav">
      <a href="#home" className="brand-mark" aria-label="Haywhy FC home"><span>H</span>HAYWHY_FC</a>
      <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
        ))}
      </nav>
      <div className="nav-status"><i /> ONLINE</div>
      <Button variant="ghost" size="icon" className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
        {menuOpen ? <X /> : <Menu />}
      </Button>
    </header>
  );
}
