const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "Our Solution" },
  { href: "#tech", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            V
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">
            Verlilian Investment CC
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
