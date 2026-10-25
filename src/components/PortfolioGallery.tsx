import { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { Artwork } from '../types/tattoo';
import { ARTWORKS_DATA } from '../data/studioData';

interface PortfolioGalleryProps {
  onSelectArtwork: (artwork: Artwork) => void;
  onSelectForSimulator: (artwork: Artwork) => void;
}

export function PortfolioGallery({ onSelectArtwork, onSelectForSimulator }: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blackwork' | 'fineline' | 'realism'>('all');

  const filteredArtworks = activeFilter === 'all'
    ? ARTWORKS_DATA
    : ARTWORKS_DATA.filter((art) => art.style === activeFilter);

  return (
    <section id="galeria" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
              Curadoria &amp; Obras Autorais
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-semibold tracking-tight">
              Galeria de Obras Recentes &amp; Cicatrizadas
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Fotografias reais de trabalhos concluídos sob luz de estúdio e em peles 100% cicatrizadas.
              Nenhum filtro enganoso ou retoque digital.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900/90 border border-zinc-800 rounded-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              Todos ({ARTWORKS_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('blackwork')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'blackwork'
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              Blackwork &amp; Geometria
            </button>
            <button
              onClick={() => setActiveFilter('fineline')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'fineline'
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              Fine Line Botânico
            </button>
            <button
              onClick={() => setActiveFilter('realism')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'realism'
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              Realismo Preto &amp; Cinza
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectArtwork(item)}
              className="group cursor-pointer rounded-lg bg-zinc-900/60 border border-zinc-800/80 overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                {/* Hover inspection button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/80 hover:bg-zinc-900 p-2 rounded text-zinc-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-zinc-300 flex items-center justify-between">
                  <span className="font-medium text-amber-300">{item.styleLabel}</span>
                  <span className="text-[11px] text-zinc-400">{item.healingStage}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Metadata (Unboxed) */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-zinc-300 font-medium">{item.artist}</span>
                  <span className="text-zinc-500">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Bottom Note */}
        <div className="mt-12 p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <p className="text-xs sm:text-sm text-zinc-300">
              Tem uma ideia autoral em mente ou quer combinar elementos dessas obras?
            </p>
          </div>
          <a
            href="#simulador"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded transition-colors whitespace-nowrap shrink-0"
          >
            Calcular Projeto no Simulador &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
