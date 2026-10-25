import { Instagram, ArrowUpRight, Award, Calendar } from 'lucide-react';
import { Artist } from '../types/tattoo';
import { ARTISTS_DATA } from '../data/studioData';

interface ArtistsSectionProps {
  onSelectArtist: (artist: Artist) => void;
}

export function ArtistsSection({ onSelectArtist }: ArtistsSectionProps) {
  return (
    <section id="artistas" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
            Corpo Artístico
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-semibold tracking-tight">
            Artistas Residentes &amp; Mestres do Traço
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Cada residente do Onyx &amp; Ink possui assinatura estética autoral, anos de estudo anatômico
            e premiações internacionais. Não reproduzimos flashs genéricos: criamos artes exclusivas para sua história.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTISTS_DATA.map((artist) => (
            <div
              key={artist.id}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group"
            >
              <div>
                {/* Photo with subtle scrim */}
                <div className="relative aspect-3/4 overflow-hidden bg-black">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Open booking marker */}
                  <div className="absolute top-3 left-3 bg-zinc-950/90 text-amber-400 px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase rounded flex items-center gap-1.5 border border-amber-400/20">
                    <Calendar className="w-3 h-3" />
                    <span>Agenda Aberta</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {artist.name}
                    </h3>
                    <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                      {artist.role}
                    </div>
                  </div>

                  {/* Clean unboxed experience metadata */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Award className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>{artist.experience}</span>
                    <span aria-hidden="true" className="text-zinc-700">·</span>
                    <span className="text-zinc-300 font-medium">{artist.specialty.split(',')[0]}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                    {artist.bio}
                  </p>

                  <a
                    href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{artist.instagram}</span>
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectArtist(artist)}
                  className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold uppercase tracking-wider rounded border border-zinc-700/80 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Consultar com {artist.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
