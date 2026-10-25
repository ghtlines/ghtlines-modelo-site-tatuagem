export interface Artwork {
  id: string;
  title: string;
  style: 'blackwork' | 'fineline' | 'realism' | 'neotrad' | 'oriental';
  styleLabel: string;
  artist: string;
  artistRole: string;
  image: string;
  placement: string;
  duration: string;
  healingStage: string;
  description: string;
  tags: string[];
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  instagram: string;
  bio: string;
  avatar: string;
  openBooking: boolean;
  featuredWorks: string[];
}

export interface Review {
  id: string;
  clientName: string;
  role: string;
  city: string;
  tattooDescription: string;
  artistName: string;
  quote: string;
  rating: number;
  timeAgo: string;
  healedMonths: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'procedimento' | 'cuidados' | 'agendamento' | 'valores';
}

export interface BodyRegion {
  id: string;
  name: string;
  painLevel: 1 | 2 | 3 | 4 | 5;
  painDescription: string;
  healingTime: string;
  recommendedSize: string;
}

export interface SimulatorState {
  style: string;
  size: string;
  region: string;
  detailLevel: string;
  artistPreference: string;
}
