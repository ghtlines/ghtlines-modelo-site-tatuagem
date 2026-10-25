import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/studioData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeTab, setActiveTab] = useState<'all' | 'procedimento' | 'cuidados' | 'valores' | 'agendamento'>('all');

  const filteredFaqs = activeTab === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter((item) => item.category === activeTab);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium">
            Esclarecimentos Frequentes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-semibold tracking-tight">
            Tudo o que Você Precisa Saber Antes de Tatuar
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Transparência total sobre dor, processo criativo, biossegurança, pós-sessão e política de garantia.
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-zinc-900/60 border border-zinc-800 rounded-lg max-w-xl mx-auto mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Todas as Dúvidas
          </button>
          <button
            onClick={() => setActiveTab('procedimento')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              activeTab === 'procedimento'
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Arte &amp; Dor
          </button>
          <button
            onClick={() => setActiveTab('cuidados')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              activeTab === 'cuidados'
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Cicatrização
          </button>
          <button
            onClick={() => setActiveTab('valores')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              activeTab === 'valores'
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Garantia &amp; Retoque
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-zinc-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t border-zinc-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Help */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 mb-3">
            Ainda ficou com alguma dúvida sobre seu projeto específico?
          </p>
          <a
            href="https://wa.me/5511999998888?text=Ol%C3%A1%20Onyx%20%26%20Ink!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20processo%20de%20tatuagem."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conversar diretamente com nosso concierge no WhatsApp &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
