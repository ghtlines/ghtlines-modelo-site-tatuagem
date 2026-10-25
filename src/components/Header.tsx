import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-zinc-950/80 via-zinc-950/30 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-lg tracking-[0.25em] font-semibold text-zinc-100 uppercase hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-amber-500 rotate-45 inline-block"></span>
          <span>ONYX &amp; INK</span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-zinc-400">
          <a
            href="#galeria"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Galeria Curada
          </a>
          <a
            href="#simulador"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Simulador
          </a>
          <a
            href="#artistas"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Artistas
          </a>
          <a
            href="#biosseguranca"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Biossegurança
          </a>
          <a
            href="#duvidas"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Dúvidas &amp; Cuidados
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenBooking}
            className="group px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/10"
          >
            <span>Agendar Sessão</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-950 bg-amber-400 rounded cursor-pointer whitespace-nowrap"
          >
            Agendar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-md bg-zinc-900/80 border border-zinc-800"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium text-zinc-300">
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors border-b border-zinc-900"
            >
              Galeria Curada
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors border-b border-zinc-900"
            >
              Simulador de Orçamento
            </a>
            <a
              href="#artistas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors border-b border-zinc-900"
            >
              Artistas Residentes
            </a>
            <a
              href="#biosseguranca"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors border-b border-zinc-900"
            >
              O Estúdio &amp; Biossegurança
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Dúvidas Frequentes
            </a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded text-center transition-colors"
          >
            Agendar Horário Exclusivo
          </button>
        </div>
      )}
    </header>
  );
}
