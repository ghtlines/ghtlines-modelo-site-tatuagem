import { useState } from 'react';
import { X, Send, CheckCircle2, Calendar, Phone, Sparkles } from 'lucide-react';
import { ARTISTS_DATA } from '../data/studioData';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledArtistName?: string;
}

export function QuickBookingModal({ isOpen, onClose, prefilledArtistName }: QuickBookingModalProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [artist, setArtist] = useState(prefilledArtistName || 'any');
  const [style, setStyle] = useState('fineline');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-zinc-900 border border-zinc-800 rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl my-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-950/80 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold">
              Agendamento Pré-Registrado!
            </h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Recebemos sua mensagem, <strong className="text-zinc-200">{name}</strong>. Nosso concierge entrará em contato via WhatsApp no número <strong className="text-zinc-200">{whatsapp}</strong> com as datas e horários disponíveis.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-amber-400 text-zinc-950 font-semibold text-xs uppercase tracking-wider rounded cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-medium">
                Atendimento VIP
              </div>
              <h3 className="font-serif text-xl font-semibold">
                Agende Sua Sessão Exclusiva
              </h3>
              <p className="text-xs text-zinc-400 font-light">
                Consulte a disponibilidade de agenda e converse sobre sua arte autoral.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                WhatsApp com DDD *
              </label>
              <input
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                  Artista
                </label>
                <select
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-400"
                >
                  <option value="any">Sem preferência</option>
                  {ARTISTS_DATA.map((art) => (
                    <option key={art.id} value={art.name}>
                      {art.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                  Estilo
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-400"
                >
                  <option value="fineline">Fine Line</option>
                  <option value="blackwork">Blackwork</option>
                  <option value="realism">Realismo</option>
                  <option value="neotrad">Neo Tradicional</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                Breve Ideia do Projeto
              </label>
              <textarea
                rows={3}
                placeholder="Local do corpo, referências ou conceito..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Enviando...' : 'Confirmar Pré-Agendamento'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
