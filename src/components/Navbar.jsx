import { Phone, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-rose-500" />
              <span className="text-white font-semibold tracking-tight">PristineClean</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-rose-500 text-white px-4 py-2 shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition"
              >
                <Phone className="h-4 w-4" />
                Get a Quote
              </a>
            </nav>

            <button
              className="md:hidden text-white/90 hover:text-white"
              aria-label="Open Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/80 hover:text-white transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg bg-rose-500 text-white px-4 py-2 shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition"
                >
                  <Phone className="h-4 w-4" />
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;