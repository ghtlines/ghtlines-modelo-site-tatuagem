import { useState, useEffect } from 'react';
import { Send, CheckCircle2, MapPin, Clock, Calendar, Phone, Sparkles } from 'lucide-react';
import { ARTISTS_DATA } from '../data/studioData';

interface BookingSectionProps {
  prefilledNotes?: string;
}

export function BookingSection({ prefilledNotes }: BookingSectionProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [artist, setArtist] = useState('any');
  const [style, setStyle] = useState('fineline');
  const [targetDate, setTargetDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledNotes) {
      setNotes(prefilledNotes);
    }
  }, [prefilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setWhatsapp('');
    setEmail('');
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section id="agendamento" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Studio Contact & Location Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
                Atendimento Privativo
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-semibold tracking-tight">
                Inicie Seu Projeto Exclusivo
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Cada sessão é planejada individualmente. Preencha seus dados para que nossa equipe
                de concierge entre em contato pelo WhatsApp com as datas disponíveis do artista selecionado.
              </p>
            </div>

            {/* Studio Units */}
            <div className="space-y-4">
              {/* Unit SP */}
              <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm font-semibold text-zinc-100 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Atelier São Paulo — Jardins</span>
                  </h4>
                  <span className="text-[11px] text-zinc-500 font-mono">Unidade Flagship</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  Alameda Lorena, 1420 · 4º andar (com valet cortesia)
                </p>
                <div className="flex items-center gap-3 text-[11px] text-zinc-500 pt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Terça a Sábado, das 10h às 20h</span>
                </div>
              </div>

              {/* Unit RJ */}
              <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm font-semibold text-zinc-100 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Atelier Rio de Janeiro — Ipanema</span>
                  </h4>
                  <span className="text-[11px] text-zinc-500 font-mono">Unidade Mar</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  Rua Garcia D&apos;Ávila, 173 · Cobertura Privativa
                </p>
                <div className="flex items-center gap-3 text-[11px] text-zinc-500 pt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Quarta a Domingo, das 11h às 21h</span>
                </div>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="p-4 rounded-lg bg-amber-400/5 border border-amber-400/20 text-xs text-zinc-300 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Política de Atendimento VIP</span>
              </div>
              <p className="text-zinc-400 leading-relaxed font-light">
                Não realizamos atendimentos sem hora marcada para preservar o silêncio, a concentração do artista
                e a privacidade de cada cliente em cabine fechada.
              </p>
            </div>
          </div>

          {/* Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800/90 rounded-lg p-6 sm:p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-semibold text-zinc-100">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
                    Obrigado, <strong className="text-zinc-200">{name}</strong>. Nossa equipe de concierge já recebeu os detalhes da sua ideia e entrará em contato pelo WhatsApp no número <strong className="text-zinc-200">{whatsapp}</strong> em até 2 horas úteis.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/5511999998888?text=${encodeURIComponent(
                      `Olá! Acabei de enviar minha solicitação de projeto para ${name} no site do Onyx & Ink.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                  >
                    Abrir Conversa Imediata no WhatsApp
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-5 py-3 text-xs text-zinc-400 hover:text-zinc-200 transition-colors uppercase tracking-wider font-medium cursor-pointer"
                  >
                    Enviar Outro Projeto
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-zinc-800 pb-3">
                  <h3 className="font-serif text-xl font-semibold text-zinc-100">
                    Formulário de Consulta &amp; Agendamento
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    Campos marcados são essenciais para orçarmos a complexidade da sua arte.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Castro"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 99876-5432"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Date preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                      Previsão de Data / Mês
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Próximo mês / Fins de semana"
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Artist & Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                      Artista Residente
                    </label>
                    <select
                      value={artist}
                      onChange={(e) => setArtist(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="any">Sem preferência — Melhor especialista</option>
                      {ARTISTS_DATA.map((art) => (
                        <option key={art.id} value={art.id}>
                          {art.name} ({art.specialty.split(',')[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                      Estilo Principal
                    </label>
                    <select
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="fineline">Fine Line Cirúrgico &amp; Botânico</option>
                      <option value="blackwork">Blackwork Geométrico &amp; Pontilhismo</option>
                      <option value="realism">Realismo Preto &amp; Cinza</option>
                      <option value="microrealism">Micro-realismo</option>
                      <option value="neotrad">Neo Tradicional Autoral</option>
                    </select>
                  </div>
                </div>

                {/* Project Idea / Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                    Descrição da Sua Ideia / Conceito / Região Anatômica
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte sobre os elementos que gostaria de incluir, tamanho aproximado em centímetros e região do corpo..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-zinc-950 font-semibold text-xs tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Enviando Projeto...' : 'Solicitar Horário & Alinhamento de Desenho'}</span>
                </button>

                <p className="text-[11px] text-zinc-500 text-center font-light">
                  Seus dados são confidenciais e protegidos pela LGPD. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
