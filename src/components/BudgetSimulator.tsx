import { useState, useMemo } from 'react';
import { Calculator, Check, MessageSquare, ArrowRight, ShieldCheck, Heart, AlertCircle, Sparkles } from 'lucide-react';
import { BODY_REGIONS, ARTISTS_DATA } from '../data/studioData';

interface BudgetSimulatorProps {
  onOpenBookingWithDetails: (details: string) => void;
  initialStyle?: string;
  initialArtist?: string;
}

const STYLES = [
  { id: 'fineline', name: 'Fine Line & Botânica', baseRate: 1.0, sessionsBase: 1, needle: '03RL / 05RL Cirúrgica' },
  { id: 'blackwork', name: 'Blackwork & Geometria', baseRate: 1.15, sessionsBase: 1, needle: '07RL + Magnum Pontilhismo' },
  { id: 'realism', name: 'Realismo Preto & Cinza', baseRate: 1.35, sessionsBase: 1.5, needle: 'Curved Magnum + Round Liner' },
  { id: 'microrealism', name: 'Micro-realismo', baseRate: 1.25, sessionsBase: 1, needle: '01RL / 03RL Ultra-fina' },
  { id: 'neotrad', name: 'Neo Tradicional Autoral', baseRate: 1.2, sessionsBase: 1, needle: 'Linhas sólidas + Shading' }
];

const SIZES = [
  { id: 'micro', name: 'Micro (até 5 cm)', multiplier: 0.65, minPrice: 450, maxPrice: 650, estHours: '1h a 1h30' },
  { id: 'small', name: 'Pequeno (6 a 10 cm)', multiplier: 1.0, minPrice: 700, maxPrice: 980, estHours: '2h a 3h' },
  { id: 'medium', name: 'Médio (11 a 18 cm)', multiplier: 1.5, minPrice: 1100, maxPrice: 1600, estHours: '3h a 4h30' },
  { id: 'large', name: 'Grande (19 a 28 cm)', multiplier: 2.2, minPrice: 1800, maxPrice: 2600, estHours: '5h a 7h (1 ou 2 sessões)' },
  { id: 'closure', name: 'Fechamento / Grande Escala (30cm+)', multiplier: 3.5, minPrice: 3200, maxPrice: 4900, estHours: '2 a 4 sessões' }
];

const COMPLEXITIES = [
  { id: 'minimal', name: 'Linha Pura / Minimalista', factor: 0.9, desc: 'Apenas contornos precisos sem preenchimento complexo.' },
  { id: 'moderate', name: 'Sombreado Suave & Texturas', factor: 1.0, desc: 'Pontilhismo delicado, gradientes e texturas orgânicas.' },
  { id: 'dense', name: 'Hiperdetalhado & Alto Contraste', factor: 1.25, desc: 'Preto sólido profundo, texturas hiper-realistas e tridimensionais.' }
];

export function BudgetSimulator({ onOpenBookingWithDetails, initialStyle, initialArtist }: BudgetSimulatorProps) {
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyle || 'fineline');
  const [selectedSize, setSelectedSize] = useState<string>('small');
  const [selectedRegion, setSelectedRegion] = useState<string>('antebraco');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('moderate');
  const [selectedArtist, setSelectedArtist] = useState<string>(initialArtist || 'any');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const currentRegion = useMemo(() => {
    return BODY_REGIONS.find((r) => r.id === selectedRegion) || BODY_REGIONS[0];
  }, [selectedRegion]);

  const currentStyle = useMemo(() => {
    return STYLES.find((s) => s.id === selectedStyle) || STYLES[0];
  }, [selectedStyle]);

  const currentSize = useMemo(() => {
    return SIZES.find((s) => s.id === selectedSize) || SIZES[1];
  }, [selectedSize]);

  const currentComplexity = useMemo(() => {
    return COMPLEXITIES.find((c) => c.id === selectedComplexity) || COMPLEXITIES[1];
  }, [selectedComplexity]);

  // Pricing calculation
  const calculatedBudget = useMemo(() => {
    const rawMin = currentSize.minPrice * currentStyle.baseRate * currentComplexity.factor;
    const rawMax = currentSize.maxPrice * currentStyle.baseRate * currentComplexity.factor;
    // Round to nearest 50
    const roundedMin = Math.round(rawMin / 50) * 50;
    const roundedMax = Math.round(rawMax / 50) * 50;
    return {
      min: roundedMin,
      max: roundedMax,
    };
  }, [currentSize, currentStyle, currentComplexity]);

  const formattedWhatsAppMsg = useMemo(() => {
    const artistText = selectedArtist !== 'any'
      ? ARTISTS_DATA.find((a) => a.id === selectedArtist)?.name
      : 'Qualquer artista especialista';

    return `Olá Onyx & Ink! Realizei a simulação no site para um projeto exclusivo:
• Estilo: ${currentStyle.name}
• Tamanho: ${currentSize.name}
• Região: ${currentRegion.name} (Sensibilidade: nível ${currentRegion.painLevel}/5)
• Acabamento: ${currentComplexity.name}
• Preferência de Artista: ${artistText}
• Estimativa média: R$ ${calculatedBudget.min.toLocaleString('pt-BR')} a R$ ${calculatedBudget.max.toLocaleString('pt-BR')}

Gostaria de verificar a agenda disponível para alinhar minha ideia autoral.`;
  }, [currentStyle, currentSize, currentRegion, currentComplexity, selectedArtist, calculatedBudget]);

  const handleCopyAndWhatsApp = () => {
    navigator.clipboard.writeText(formattedWhatsAppMsg);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
    // WhatsApp web direct link
    const phone = '5511999998888';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(formattedWhatsAppMsg)}`;
    window.open(url, '_blank');
  };

  const handleProceedToBooking = () => {
    onOpenBookingWithDetails(formattedWhatsAppMsg);
  };

  return (
    <section id="simulador" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
            Ferramenta Interativa
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-semibold tracking-tight">
            Simulador de Projeto, Sensibilidade &amp; Investimento
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Configure as características do seu projeto para obter uma estimativa transparente
            de tempo de sessão, nível de dor na região anatômica e faixa de valor.
          </p>
        </div>

        {/* Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-6 sm:p-8">
            {/* Step 1: Estilo */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                1. Escolha o Estilo Artístico
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STYLES.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStyle(st.id)}
                    className={`p-3 text-left rounded border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedStyle === st.id
                        ? 'bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{st.name}</span>
                      {selectedStyle === st.id && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <span className="text-[11px] text-zinc-500 mt-1">{st.needle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tamanho */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                2. Dimensão Estimada
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SIZES.map((sz) => (
                  <button
                    key={sz.id}
                    type="button"
                    onClick={() => setSelectedSize(sz.id)}
                    className={`p-3 text-left rounded border transition-all cursor-pointer ${
                      selectedSize === sz.id
                        ? 'bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{sz.name}</span>
                      {selectedSize === sz.id && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <span className="text-[11px] text-zinc-500 block mt-1">Duração: {sz.estHours}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Região do Corpo & Sensibilidade */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                  3. Região do Corpo &amp; Sensibilidade Anatômica
                </label>
                <span className="text-[11px] text-amber-400/90 font-medium">
                  {currentRegion.painDescription}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BODY_REGIONS.map((reg) => (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() => setSelectedRegion(reg.id)}
                    className={`p-3 text-left rounded border transition-all cursor-pointer ${
                      selectedRegion === reg.id
                        ? 'bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="text-xs font-medium">{reg.name}</div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <span className="text-[10px] text-zinc-500">Dor:</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`w-1.5 h-1.5 rounded-full ${
                              level <= reg.painLevel ? 'bg-amber-400' : 'bg-zinc-800'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Complexidade */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                4. Nível de Densidade &amp; Sombra
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {COMPLEXITIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedComplexity(c.id)}
                    className={`p-3 text-left rounded border transition-all cursor-pointer ${
                      selectedComplexity === c.id
                        ? 'bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="text-xs font-semibold">{c.name}</div>
                    <div className="text-[10px] text-zinc-500 mt-1 line-clamp-2">{c.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Artist selection */}
            <div className="space-y-2 pt-2 border-t border-zinc-800/80">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                Artista de Preferência (Opcional)
              </label>
              <select
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
              >
                <option value="any">Sem preferência — Indicar o melhor especialista para este estilo</option>
                {ARTISTS_DATA.map((art) => (
                  <option key={art.id} value={art.id}>
                    {art.name} ({art.specialty})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Real-Time Result Panel (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 bg-zinc-900 border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-200">
                  Resumo da Simulação
                </span>
              </div>
              <span className="text-[11px] text-zinc-500">Estimativa Prévia</span>
            </div>

            {/* Price Range Display */}
            <div className="space-y-1">
              <div className="text-xs text-zinc-400">Faixa de Investimento Estimada</div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 tabular-nums">
                R$ {calculatedBudget.min.toLocaleString('pt-BR')} — R$ {calculatedBudget.max.toLocaleString('pt-BR')}
              </div>
              <p className="text-[11px] text-zinc-500 leading-snug pt-1">
                Valores calculados com base no nível técnico, tempo de bancada e insumos hospitalares.
                Orçamento exato confirmado após alinhamento do desenho exclusivo.
              </p>
            </div>

            {/* Spec breakdown table */}
            <div className="space-y-2.5 text-xs border-y border-zinc-800 py-4">
              <div className="flex justify-between">
                <span className="text-zinc-500">Estilo:</span>
                <span className="text-zinc-200 font-medium">{currentStyle.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Dimensão:</span>
                <span className="text-zinc-200 font-medium">{currentSize.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Área Anatômica:</span>
                <span className="text-zinc-200 font-medium">{currentRegion.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Nível de Dor Estimado:</span>
                <span className="text-zinc-200 font-medium flex items-center gap-1">
                  <span>{currentRegion.painLevel} de 5</span>
                  <span className="text-zinc-500">({currentRegion.painDescription.split('.')[0]})</span>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Duração Prevista:</span>
                <span className="text-zinc-200 font-medium">{currentSize.estHours}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Tempo de Cicatrização:</span>
                <span className="text-zinc-200 font-medium">{currentRegion.healingTime}</span>
              </div>
            </div>

            {/* Guarantee and Inclusions */}
            <div className="space-y-2 bg-zinc-950/60 p-4 rounded border border-zinc-800/80 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Garantia de Retoque Cortesia:</strong> Válida por 60 dias sem qualquer custo adicional.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Kit Pós-Sessão:</strong> Curativo adesivo Second Skin e orientações completas inclusos.
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleCopyAndWhatsApp}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-900/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{copiedSuccess ? 'Copiado! Abrindo WhatsApp...' : 'Enviar Simulação no WhatsApp'}</span>
              </button>

              <button
                onClick={handleProceedToBooking}
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs tracking-wider uppercase rounded border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Consulta VIP no Estúdio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
