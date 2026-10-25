import { X, Clock, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { Artwork } from '../types/tattoo';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onSelectForSimulator: (artwork: Artwork) => void;
}

export function ArtworkModal({ artwork, onClose, onSelectForSimulator }: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-zinc-900 border border-zinc-800 rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl my-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-zinc-950/80 hover:bg-zinc-950 rounded-full transition-colors cursor-pointer"
          aria-label="Fechar Detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 bg-black flex items-center justify-center overflow-hidden min-h-[340px] lg:min-h-[500px]">
            <img
              src={artwork.image}
              alt={artwork.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-[560px]"
            />
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Quiet unboxed metadata */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400/90 font-medium">
                <span>{artwork.styleLabel}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>{artwork.healingStage}</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-zinc-100 leading-snug">
                {artwork.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {artwork.description}
              </p>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500">Artista:</span>{' '}
                    <span className="font-medium text-zinc-200">{artwork.artist}</span> ({artwork.artistRole})
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500">Tempo de Execução:</span>{' '}
                    <span className="font-medium text-zinc-200">{artwork.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500">Local anatômico:</span>{' '}
                    <span className="font-medium text-zinc-200">{artwork.placement}</span>
                  </div>
                </div>
              </div>

              {/* Tags unboxed */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                {artwork.tags.map((tag, idx) => (
                  <span key={tag} className="flex items-center gap-2">
                    {idx > 0 && <span aria-hidden="true" className="text-zinc-700">·</span>}
                    <span className="text-zinc-400">{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onSelectForSimulator(artwork);
                  onClose();
                }}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Simular Orçamento com Este Estilo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-zinc-500 text-center">
                Cada obra é personalizada e desenhada sob medida. Não reproduzimos cópias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
