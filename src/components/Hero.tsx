import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/studioData';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-zinc-950">
      {/* Background Image with layered scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={STUDIO_IMAGES.hero}
          alt="Atelier privado Onyx & Ink com cadeira de tatuagem personalizada e iluminação direcional"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 scale-[1.02] transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        {/* Measured dark scrim for high contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-zinc-950/50 to-zinc-950/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full my-auto py-12">
        <div className="max-w-3xl space-y-6">
          {/* Static unboxed kicker with clean typographic separator */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400/90 font-medium">
            <span>Atelier de Alta Precisão</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Jardins (SP) &amp; Ipanema (RJ)</span>
          </div>

          {/* Headline with balanced wrap */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-zinc-100 font-semibold tracking-tight leading-[1.1] [text-wrap:balance]">
            Arte autoral que transcende o tempo gravada na sua pele.
          </h1>

          {/* Value proposition description */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Especialistas em Fine Line cirúrgico, Blackwork geométrico e Realismo preto &amp; cinza.
            Ambiente privativo, agulhas de alta precisão e biossegurança médica hospitalar para um projeto único.
          </p>

          {/* Action points */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#simulador"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs tracking-wider uppercase rounded transition-colors text-center shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Simular Projeto &amp; Orçamento</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#galeria"
              className="px-6 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-medium text-xs tracking-wider uppercase rounded transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-zinc-400" />
              <span>Explorar Obras Autorais</span>
            </a>
          </div>

          {/* Subtle client reassurance */}
          <div className="pt-2 flex items-center gap-3 text-xs text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Desenhos 100% exclusivos desenvolvidos sob medida · Retoque cortesia em até 60 dias</span>
          </div>
        </div>
      </div>

      {/* KPI & Proof Strip directly below Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full mt-auto">
        <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-zinc-100 tabular-nums">
              12 Anos
            </div>
            <div className="text-xs text-zinc-400 leading-snug">
              de maestria técnica e pesquisa estética
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-zinc-100 tabular-nums">
              15.000+
            </div>
            <div className="text-xs text-zinc-400 leading-snug">
              peles tatuadas com projetos autorais
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-zinc-100 tabular-nums">
              9 Prêmios
            </div>
            <div className="text-xs text-zinc-400 leading-snug">
              em convenções nacionais e internacionais
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 tabular-nums flex items-baseline gap-1.5">
              <span>4.9 / 5.0</span>
              <span className="text-xs text-zinc-400 font-normal">★</span>
            </div>
            <div className="text-xs text-zinc-400 leading-snug">
              em mais de 640 avaliações no Google
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
