import { Instagram, MapPin, Phone, Mail, ShieldAlert } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="font-serif text-lg tracking-[0.25em] font-semibold text-zinc-100 uppercase hover:text-amber-400 transition-colors inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-amber-500 rotate-45 inline-block"></span>
              <span>ONYX &amp; INK</span>
            </a>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-light">
              Haute Tattoo Atelier dedicado à arte autoral de alta precisão.
              Ambiente cirúrgico privativo, artistas residentes premiados e garantia incondicional de cicatrização.
            </p>
            <div className="pt-2 flex items-center gap-4 text-zinc-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>@onyxink.atelier</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h5 className="font-serif text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Navegação
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#galeria" className="hover:text-zinc-100 transition-colors">
                  Galeria &amp; Obras
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-zinc-100 transition-colors">
                  Simulador de Orçamento
                </a>
              </li>
              <li>
                <a href="#artistas" className="hover:text-zinc-100 transition-colors">
                  Artistas Residentes
                </a>
              </li>
              <li>
                <a href="#biosseguranca" className="hover:text-zinc-100 transition-colors">
                  Biossegurança &amp; Espaço
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-zinc-100 transition-colors">
                  Guia de Cicatrização
                </a>
              </li>
            </ul>
          </div>

          {/* Units */}
          <div className="space-y-3">
            <h5 className="font-serif text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Unidades
            </h5>
            <div className="space-y-3 font-light text-zinc-400">
              <div>
                <strong className="text-zinc-200 font-medium block">São Paulo (Jardins)</strong>
                <span>Alameda Lorena, 1420 · 4º andar</span>
              </div>
              <div>
                <strong className="text-zinc-200 font-medium block">Rio de Janeiro (Ipanema)</strong>
                <span>Rua Garcia D&apos;Ávila, 173 · Cobertura</span>
              </div>
            </div>
          </div>

          {/* Legal & Sanitário */}
          <div className="space-y-3">
            <h5 className="font-serif text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Conformidade
            </h5>
            <p className="text-[11px] leading-relaxed text-zinc-500 font-light">
              Estúdio licenciado com alvará da Vigilância Sanitária (ANVISA). Todos os materiais perfurocortantes são de uso único e incinerados por empresa de coleta hospitalar certificada.
            </p>
            <p className="text-[11px] text-zinc-500 font-light">
              Proibido o atendimento a menores de 18 anos desacompanhados de responsável legal.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Onyx &amp; Ink Haute Tattoo Atelier.</span>
            <span aria-hidden="true">·</span>
            <span>Demonstração Exclusiva</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Privacidade &amp; Termos</span>
            <span aria-hidden="true">·</span>
            <span>Protocolo Hospitalar ANVISA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
