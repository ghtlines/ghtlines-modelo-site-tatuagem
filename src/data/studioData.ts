import { Artwork, Artist, Review, FaqItem, BodyRegion } from '../types/tattoo';

export const STUDIO_IMAGES = {
  hero: '/images/hero.jpg',
  blackwork: '/images/blackwork.jpg',
  fineline: '/images/fineline.jpg',
  realism: '/images/realism.jpg',
  interior: '/images/interior.jpg',
};

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'bw-metatron',
    title: 'Cubo de Metatron & Geometria Sagrada',
    style: 'blackwork',
    styleLabel: 'Blackwork Geométrico',
    artist: 'Mateus Vianna',
    artistRole: 'Diretor Criativo & Master Blackwork',
    image: STUDIO_IMAGES.blackwork,
    placement: 'Antebraço completo com extensão ao punho',
    duration: '2 sessões (7 horas totais)',
    healingStage: 'Cicatrizada há 8 meses',
    description: 'Composição de geometria sagrada com pontilhismo gradual (stippling) e contrastes profundos em preto carbônico puro. Traçado milimétrico preservando espaçamentos anatômicos.',
    tags: ['Pontilhismo', 'Geometria Sagrada', 'Preto Puro', 'Exclusivo']
  },
  {
    id: 'fl-botanical',
    title: 'Rosas Silvestres & Folhas de Eucalipto',
    style: 'fineline',
    styleLabel: 'Fine Line Botânico',
    artist: 'Camila Dornelles',
    artistRole: 'Especialista em Fine Line & Micro-realismo',
    image: STUDIO_IMAGES.fineline,
    placement: 'Clavícula e ombro com caimento orgânico',
    duration: '1 sessão (3h30)',
    healingStage: 'Cicatrizada há 4 meses',
    description: 'Traço com agulha 03RL cirúrgica e lavagens sutis de cinza para volume tridimensional suave. Desenhada no método freehand para acompanhar as curvas ósseas da cliente.',
    tags: ['Agulha 03RL', 'Botânica', 'Freehand', 'Delicado']
  },
  {
    id: 'rl-sculpture',
    title: 'Busto Clássico & Chiaroscuro',
    style: 'realism',
    styleLabel: 'Realismo Preto & Cinza',
    artist: 'Lucas "Kuro" Taniguchi',
    artistRole: 'Master em Realismo & Sombreados',
    image: STUDIO_IMAGES.realism,
    placement: 'Bíceps e deltóide anterior',
    duration: '1 sessão intensiva (6 horas)',
    healingStage: 'Cicatrizada há 1 ano',
    description: 'Estudo de iluminação renascentista reproduzindo textura de mármore esculpido e barba detalhada fio a fio. Graduações de sombra sem contornos rígidos.',
    tags: ['Preto & Cinza', 'Escultura', 'Chiaroscuro', 'Museum Grade']
  },
  {
    id: 'bw-ouroboros',
    title: 'Ouroboros & Mandalas Cósmicas',
    style: 'blackwork',
    styleLabel: 'Blackwork Autoral',
    artist: 'Mateus Vianna',
    artistRole: 'Diretor Criativo & Master Blackwork',
    image: STUDIO_IMAGES.blackwork,
    placement: 'Costas superiores / Escápula',
    duration: '2 sessões (8 horas)',
    healingStage: 'Cicatrizada há 6 meses',
    description: 'Mistura de pontilhismo de alta densidade e blocos de preto sólido, inspirada em arte alquímica medieval e símbolos ancestrais.',
    tags: ['Alquimia', 'Dotwork', 'Blackwork Pesado']
  },
  {
    id: 'fl-minimal-astronomy',
    title: 'Constelações & Diagramas Orbitais',
    style: 'fineline',
    styleLabel: 'Fine Line Minimalista',
    artist: 'Camila Dornelles',
    artistRole: 'Especialista em Fine Line & Micro-realismo',
    image: STUDIO_IMAGES.fineline,
    placement: 'Costelas laterais',
    duration: '1 sessão (2h30)',
    healingStage: 'Cicatrizada há 3 meses',
    description: 'Micro-traços de espessura constante de 0.25mm reproduzindo cartas estelares náuticas e órbitas planetárias com precisão milimétrica.',
    tags: ['Minimalismo', 'Astronomia', 'Precisão']
  },
  {
    id: 'rl-wild-feline',
    title: 'Olhar do Tigre de Bengala',
    style: 'realism',
    styleLabel: 'Micro-realismo',
    artist: 'Lucas "Kuro" Taniguchi',
    artistRole: 'Master em Realismo & Sombreados',
    image: STUDIO_IMAGES.realism,
    placement: 'Antebraço interno',
    duration: '1 sessão (5 horas)',
    healingStage: 'Cicatrizada há 5 meses',
    description: 'Realismo fotográfico com foco na profundidade da íris e textura da pelagem. Contraste de alta definição com pigmentos estáveis.',
    tags: ['Olhar', 'Vida Selvagem', 'Alta Resolução']
  }
];

export const ARTISTS_DATA: Artist[] = [
  {
    id: 'mateus-vianna',
    name: 'Mateus Vianna',
    role: 'Fundador & Diretor Criativo',
    experience: '12 anos tatuando',
    specialty: 'Blackwork, Geometria Sagrada & Dark Art',
    instagram: '@mateus.onyxink',
    bio: 'Pioneiro do blackwork geométrico e pontilhismo no Brasil. Com passagens por guest spots em Berlim, Londres e Tóquio, foca em projetos autorais de grande escala que dialogam com a anatomia humana.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    openBooking: true,
    featuredWorks: ['bw-metatron', 'bw-ouroboros']
  },
  {
    id: 'camila-dornelles',
    name: 'Camila Dornelles',
    role: 'Resident Artist — Fine Line',
    experience: '8 anos tatuando',
    specialty: 'Fine Line Cirúrgico, Botânica & Micro-realismo',
    instagram: '@camila.dornelles.ink',
    bio: 'Formada em Artes Visuais com ênfase em gravura. Conhecida pela delicadeza extrema de seus traços com agulhas ultra-finas e projetos botânicos fluidos desenhados à mão livre diretamente no corpo.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    openBooking: true,
    featuredWorks: ['fl-botanical', 'fl-minimal-astronomy']
  },
  {
    id: 'lucas-taniguchi',
    name: 'Lucas "Kuro" Taniguchi',
    role: 'Resident Artist — Realismo',
    experience: '10 anos tatuando',
    specialty: 'Realismo Preto & Cinza e Neo Irezumi',
    instagram: '@kuro.taniguchi',
    bio: 'Premiado 4 vezes em convenções nacionais de realismo. Especialista em capturar alma, texturas de pedra, animais e retratos com transições de cinza aveludadas que não clareiam com os anos.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    openBooking: true,
    featuredWorks: ['rl-sculpture', 'rl-wild-feline']
  },
  {
    id: 'helena-prado',
    name: 'Helena Prado',
    role: 'Resident Artist — Neo Tradicional',
    experience: '7 anos tatuando',
    specialty: 'Neo Tradicional Autoral & Ilustração Mitológica',
    instagram: '@helena.prado.art',
    bio: 'Ilustradora editorial que encontrou na pele sua tela definitiva. Combina linhas de contorno expressivas com paletas de cores sóbrias e referências ao Art Nouveau e mitologia clássica.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    openBooking: true,
    featuredWorks: ['bw-ouroboros']
  }
];

export const BODY_REGIONS: BodyRegion[] = [
  {
    id: 'antebraco',
    name: 'Antebraço / Pulso',
    painLevel: 2,
    painDescription: 'Desconforto leve a moderado. Ideal para primeira tatuagem.',
    healingTime: '10 a 14 dias',
    recommendedSize: '8cm a 22cm'
  },
  {
    id: 'biceps-ombro',
    name: 'Bíceps & Deltóide',
    painLevel: 2,
    painDescription: 'Uma das áreas mais tranquilas do corpo. Dor baixa.',
    healingTime: '12 a 15 dias',
    recommendedSize: '10cm a 25cm'
  },
  {
    id: 'clavicula',
    name: 'Clavícula & Ombro Superior',
    painLevel: 4,
    painDescription: 'Vibração óssea acentuada. Sensibilidade moderada-alta.',
    healingTime: '14 a 18 dias',
    recommendedSize: '8cm a 18cm'
  },
  {
    id: 'costelas',
    name: 'Costelas & Tórax Lateral',
    painLevel: 5,
    painDescription: 'Sensibilidade alta devido à pele fina sobre as costelas.',
    healingTime: '14 a 20 dias',
    recommendedSize: '10cm a 30cm'
  },
  {
    id: 'costas',
    name: 'Costas / Coluna Central',
    painLevel: 3,
    painDescription: 'Sensibilidade moderada nas omoplatas, maior sobre a coluna.',
    healingTime: '14 a 21 dias',
    recommendedSize: '15cm a 45cm'
  },
  {
    id: 'coxa-panturrilha',
    name: 'Coxa & Panturrilha',
    painLevel: 2,
    painDescription: 'Área com boa densidade muscular. Muito confortável.',
    healingTime: '12 a 16 dias',
    recommendedSize: '12cm a 35cm'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    clientName: 'Rodrigo Menezes',
    role: 'Arquiteto Urbanista',
    city: 'São Paulo, SP',
    tattooDescription: 'Fechamento de antebraço geométrico',
    artistName: 'Mateus Vianna',
    quote: 'O estúdio é de um nível ímpar. O Mateus desenhou tudo respeitando a anatomia do meu braço com uma precisão matemática. Dois anos depois, o preto continua profundo e o pontilhismo intacto.',
    rating: 5,
    timeAgo: 'Avaliado recentemente',
    healedMonths: 24
  },
  {
    id: 'rev-2',
    clientName: 'Beatriz Albuquerque',
    role: 'Diretora Criativa de Moda',
    city: 'Rio de Janeiro, RJ',
    tattooDescription: 'Fine Line botânico na clavícula',
    artistName: 'Camila Dornelles',
    quote: 'Eu tinha muito receio de agulha e de traço grosso. A Camila tem uma mão incrivelmente leve, a sala privativa tinha música ambiente excelente e a peça cicatrizou como um desenho a lápis na pele.',
    rating: 5,
    timeAgo: 'Avaliado há 1 mês',
    healedMonths: 4
  },
  {
    id: 'rev-3',
    clientName: 'Dr. Gabriel Siqueira',
    role: 'Cirurgião Cardiovascular',
    city: 'São Paulo, SP',
    tattooDescription: 'Realismo clássico no bíceps',
    artistName: 'Lucas Taniguchi',
    quote: 'Como médico, meu critério número um era a biossegurança. O estúdio segue padrões cirúrgicos impecáveis: autoclave com teste biológico, barreiras estéreis e descartáveis de verdade. O trabalho artístico do Kuro é arte pura.',
    rating: 5,
    timeAgo: 'Avaliado há 2 meses',
    healedMonths: 12
  },
  {
    id: 'rev-4',
    clientName: 'Fernanda Lima Castro',
    role: 'Advogada Tributarista',
    city: 'Belo Horizonte, MG',
    tattooDescription: 'Projeto exclusivo na escápula',
    artistName: 'Helena Prado',
    quote: 'Viajei especificamente para tatuar na Onyx & Ink e valeu cada quilômetro. O atendimento desde a consulta inicial até as orientações de pós-sessão foi impecável. O café do lounge também é sensacional.',
    rating: 5,
    timeAgo: 'Avaliado há 3 semanas',
    healedMonths: 3
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o processo de criação de uma arte exclusiva?',
    category: 'procedimento',
    answer: 'Nenhum dos nossos projetos é copiado da internet. Na consulta de alinhamento (presencial ou online), você traz suas referências, ideias e história. O artista desenvolve um desenho autoral sob medida para o seu corpo, que é apresentado para aprovação com possibilidade de ajustes antes da data da sessão.'
  },
  {
    id: 'faq-2',
    question: 'Quanto dói fazer uma tatuagem? Posso usar anestésico?',
    category: 'procedimento',
    answer: 'A dor varia conforme a região anatômica (em nosso simulador você pode consultar o nível de 1 a 5 de cada área). No geral, a sensação é de arranhão quente contínuo e perfeitamente suportável. Não recomendamos pomadas anestésicas sem prescrição, pois elas alteram a textura da derme e afetam a retenção do pigmento; nossos artistas utilizam técnicas de manuseio e pausas que minimizam o desconforto.'
  },
  {
    id: 'faq-3',
    question: 'Como é o protocolo de biossegurança do estúdio?',
    category: 'cuidados',
    answer: 'Seguimos rigorosamente os padrões da ANVISA e normas hospitalares internacionais: autoclave digital Cristofoli com monitoramento biológico semanal, 100% de agulhas e ponteiras de cartucho descartáveis abertas na sua presença, tintas veganas livres de metais pesados registradas, e desinfecção de alto nível das superfícies entre cada cliente.'
  },
  {
    id: 'faq-4',
    question: 'Quais os cuidados essenciais nos primeiros 15 dias de cicatrização?',
    category: 'cuidados',
    answer: 'Ao término da sessão, aplicamos o curativo adesivo estéril tipo second skin (que você mantém por 3 a 5 dias). Após a retirada, higienização com sabonete neutro e hidratação fina com pomada específica 2 a 3 vezes ao dia. Durante 15 dias: nada de sol direto, praia, piscina, sauna ou alimentos hiperinflamatórios.'
  },
  {
    id: 'faq-5',
    question: 'O retoque é cobrado caso precise de ajustes após cicatrizar?',
    category: 'valores',
    answer: 'Não. Todas as nossas tatuagens acompanham garantia incondicional de retoque gratuito em até 60 dias após a sessão. Caso qualquer ponto do pigmento perca intensidade durante a regeneração natural da sua pele, o retoque é feito sem nenhum custo adicional.'
  },
  {
    id: 'faq-6',
    question: 'Como funciona o agendamento e a reserva de data?',
    category: 'agendamento',
    answer: 'Para garantir a data e iniciar o estudo da arte, solicitamos um sinal de reserva de 20% do valor do projeto (deduzido do total no dia da sessão). Você pode remarcar com aviso prévio de até 72 horas sem perder a reserva.'
  }
];
