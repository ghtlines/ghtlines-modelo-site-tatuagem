import { Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { REVIEWS_DATA } from '../data/studioData';

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
              Avaliações Verificadas
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-semibold tracking-tight">
              A Experiência na Voz de Quem Já Tatuou
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Depoimentos reais de clientes que acompanharam todo o processo: desde a concepção do desenho
              até a cicatrização completa anos após a sessão.
            </p>
          </div>

          {/* Aggregate Rating Block */}
          <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 text-right self-start md:self-auto">
            <div className="flex items-center gap-1 justify-end text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs text-zinc-300 font-medium">
              <strong className="text-zinc-100">4.9 de 5.0</strong> em +640 avaliações no Google
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              100% de satisfação com garantia de retoque
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-lg bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between space-y-6 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Clean unboxed header with tattoo attribution */}
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 text-amber-400/90 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Obra cicatrizada há {rev.healedMonths} meses</span>
                  </div>
                  <span className="text-zinc-500">{rev.timeAgo}</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light italic">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-zinc-100">
                    {rev.clientName}
                  </h4>
                  <div className="text-xs text-zinc-400">
                    {rev.role} · {rev.city}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-zinc-400">Tatuado por:</div>
                  <div className="text-xs text-amber-400 font-medium">{rev.artistName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-12 text-center text-xs text-zinc-500 flex items-center justify-center gap-2">
          <HeartHandshake className="w-4 h-4 text-amber-400/80" />
          <span>Mais de 15.000 clientes atendidos com histórico zero de intercorrências infecciosas.</span>
        </div>
      </div>
    </section>
  );
}
