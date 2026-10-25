import { useState } from 'react';
import { MessageSquare, ArrowUp, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BudgetSimulator } from './components/BudgetSimulator';
import { ArtistsSection } from './components/ArtistsSection';
import { StudioBioSafety } from './components/StudioBioSafety';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { ArtworkModal } from './components/ArtworkModal';
import { QuickBookingModal } from './components/QuickBookingModal';
import { Artwork, Artist } from './types/tattoo';

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [quickBookingOpen, setQuickBookingOpen] = useState(false);
  const [selectedArtistForModal, setSelectedArtistForModal] = useState<string | undefined>(undefined);
  const [simulatorInitialStyle, setSimulatorInitialStyle] = useState<string | undefined>(undefined);
  const [simulatorInitialArtist, setSimulatorInitialArtist] = useState<string | undefined>(undefined);
  const [bookingPrefillNotes, setBookingPrefillNotes] = useState<string | undefined>(undefined);
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);

  // Handle selecting an artwork to inspect
  const handleSelectArtwork = (art: Artwork) => {
    setSelectedArtwork(art);
  };

  // Handle setting simulator based on selected artwork
  const handleSelectArtworkForSimulator = (art: Artwork) => {
    setSimulatorInitialStyle(art.style);
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle selecting an artist to consult
  const handleSelectArtist = (artist: Artist) => {
    setSelectedArtistForModal(artist.name);
    setQuickBookingOpen(true);
  };

  // Handle passing calculation results to the main booking form
  const handleOpenBookingWithDetails = (details: string) => {
    setBookingPrefillNotes(details);
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle ambient lounge sound simulator (soft synthesizer beep / harmonic white-noise relaxation vibe)
  const toggleAmbientAudio = () => {
    if (!ambientAudioActive) {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(174, audioCtx.currentTime); // 174 Hz solfeggio frequency for relaxation
        gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        setTimeout(() => {
          gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3);
          setTimeout(() => osc.stop(), 3100);
        }, 1000);
      } catch {
        // Fallback silently if audio context is blocked
      }
      setAmbientAudioActive(true);
    } else {
      setAmbientAudioActive(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Header */}
      <Header onOpenBooking={() => setQuickBookingOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => setQuickBookingOpen(true)} />

        <PortfolioGallery
          onSelectArtwork={handleSelectArtwork}
          onSelectForSimulator={handleSelectArtworkForSimulator}
        />

        <BudgetSimulator
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
          initialStyle={simulatorInitialStyle}
          initialArtist={simulatorInitialArtist}
        />

        <ArtistsSection onSelectArtist={handleSelectArtist} />

        <StudioBioSafety />

        <Testimonials />

        <FaqSection />

        <BookingSection prefilledNotes={bookingPrefillNotes} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onSelectForSimulator={handleSelectArtworkForSimulator}
      />

      <QuickBookingModal
        isOpen={quickBookingOpen}
        onClose={() => {
          setQuickBookingOpen(false);
          setSelectedArtistForModal(undefined);
        }}
        prefilledArtistName={selectedArtistForModal}
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Subtle Ambient Lounge audio trigger */}
        <button
          onClick={toggleAmbientAudio}
          title={ambientAudioActive ? 'Silenciar Áudio Ambiente' : 'Ativar Modo Lounge Calmante (174Hz)'}
          className="p-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 border border-zinc-800 shadow-lg backdrop-blur transition-all cursor-pointer text-xs flex items-center gap-1.5"
        >
          {ambientAudioActive ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          <span className="hidden sm:inline text-[11px] font-medium pr-1">
            {ambientAudioActive ? 'Lounge Ativo' : 'Áudio Atelier'}
          </span>
        </button>

        {/* Floating WhatsApp Action */}
        <a
          href="https://wa.me/5511999998888?text=Ol%C3%A1%20Onyx%20%26%20Ink!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20tatuagem."
          target="_blank"
          rel="noreferrer"
          className="group px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer border border-emerald-400/30"
          aria-label="Falar no WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
            Falar no WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
