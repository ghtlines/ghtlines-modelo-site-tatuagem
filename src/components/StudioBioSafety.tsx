import { ShieldCheck, Sparkles, CheckCircle2, Droplets, BedDouble, Coffee } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/studioData';

export function StudioBioSafety() {
  return (
    <section id="biosseguranca" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
            Protocolo Médico &amp; Estrutura
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-semibold tracking-tight">
            Biossegurança Hospitalar &amp; O Atelier Privativo
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Acreditamos que a experiência de ser tatuado deve ser tão acolhedora e segura quanto uma clínica de ponta.
            Conheça os padrões rigorosos de higiene e o design do nosso espaço.
          </p>
        </div>

        {/* Studio Visual Showcase Banner */}
        <div className="relative rounded-lg overflow-hidden border border-zinc-800/80 mb-16 bg-black">
          <div className="aspect-16/9 md:aspect-21/9 w-full">
            <img
              src={STUDIO_IMAGES.interior}
              alt="Lounge privativo Onyx & Ink com poltronas de couro e sala de procedimento envidraçada de alta esterilidade"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Estrutura Exclusiva
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-zinc-100 font-semibold">
                Salas Cirúrgicas com Isolamento Acústico &amp; Lounge de Degustação
              </h3>
            </div>
            <div className="text-xs text-zinc-300 font-medium bg-zinc-950/80 px-3.5 py-2 rounded border border-zinc-800 backdrop-blur-sm self-start md:self-auto">
              Ambiente 100% inspecionado e aprovado pela Vigilância Sanitária
            </div>
          </div>
        </div>

        {/* 4 Architectural / BioSafety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1 */}
          <div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/80 space-y-4">
            <div className="w-10 h-10 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-zinc-500 font-mono">01.</span>
              <h4 className="font-serif text-lg font-semibold text-zinc-100">
                Autoclave &amp; Teste Biológico
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Esterilização classe hospitalar com monitoramento biológico semanal por laboratório independente.
              Laudos de conformidade disponíveis para consulta na recepção.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/80 space-y-4">
            <div className="w-10 h-10 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-zinc-500 font-mono">02.</span>
              <h4 className="font-serif text-lg font-semibold text-zinc-100">
                100% Descartáveis Estéreis
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Agulhas de cartucho com membrana de segurança contra refluxo abertas na sua presença.
              Luvas de nitrilo, campos cirúrgicos e barreiras descartadas após cada procedimento.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/80 space-y-4">
            <div className="w-10 h-10 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Droplets className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-zinc-500 font-mono">03.</span>
              <h4 className="font-serif text-lg font-semibold text-zinc-100">
                Pigmentos Veganos ANVISA
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Tintas de alta pureza molecular sem metais pesados ou derivados animais.
              Garantia de estabilidade cromática: o preto permanece preto e não esverdeia com a oxidação.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/80 space-y-4">
            <div className="w-10 h-10 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <BedDouble className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-zinc-500 font-mono">04.</span>
              <h4 className="font-serif text-lg font-semibold text-zinc-100">
                Salas 100% Individuais
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Sem bancadas coletivas. Cada cliente é atendido em cabine privativa climatizada com maca ergonômica,
              playlist personalizada ou fones canceladores de ruído para total tranquilidade.
            </p>
          </div>
        </div>

        {/* Extra Hospitality Bar */}
        <div className="mt-12 p-6 rounded-lg bg-zinc-900/50 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-800 rounded text-amber-400 shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif text-base font-semibold text-zinc-100">
                Lounge &amp; Cafeteria Artesanal para Clientes &amp; Acompanhantes
              </h5>
              <p className="text-xs text-zinc-400 mt-0.5">
                Grãos especiais de cafés brasileiros selecionados, bar de chás calmantes e água alcalina durante toda a sua sessão.
              </p>
            </div>
          </div>
          <div className="text-xs text-amber-400 font-medium whitespace-nowrap">
            Cortesia em todos os atendimentos
          </div>
        </div>
      </div>
    </section>
  );
}
