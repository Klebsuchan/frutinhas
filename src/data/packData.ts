export interface Character {
  id: string;
  name: string;
  role: string;
  tag: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  avatarEmoji: string;
  description: string;
  quote: string;
  traits: string[];
  sampleDialogue: string;
}

export interface Episode {
  id: number;
  title: string;
  character: string;
  emoji: string;
  hook: string;
  twist: string;
  cliffhanger: string;
  views: string;
  likes: string;
  comments: string;
  duration: string;
  dialogueLines: { speaker: string; text: string; color: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const CHECKOUT_URL = "https://acesseseuproduto.shop";

export const CHARACTERS: Character[] = [
  {
    id: "banana-boss",
    name: "Banana Boss",
    role: "O Galã Ostentação",
    tag: "CARISMA PURO",
    color: "#facc15",
    bgGradient: "from-amber-500/20 to-yellow-600/30",
    borderColor: "border-yellow-500/50",
    avatarEmoji: "🍌",
    description: "O galã de óculos escuros e corrente de ouro de $100k. Sempre no centro dos holofotes e causando ciúmes no pomar.",
    quote: "Aqui quem manda é o papai! Quer ibope? Cola na minha vibe.",
    traits: ["Óculos de Sol", "Corrente de Ouro", "Invejado", "Rei do Camarote"],
    sampleDialogue: "— Moranguete, para de surtar! Eu só dei um 'oi' pra Uvinha. Você sabe que você é minha fruta preferida!",
  },
  {
    id: "moranguete",
    name: "Moranguete",
    role: "A Diva Ciumenta",
    tag: "DRAMA & BARRACO",
    color: "#ef4444",
    bgGradient: "from-red-500/20 to-rose-600/30",
    borderColor: "border-red-500/50",
    avatarEmoji: "🍓",
    description: "A diva ciumenta que arma todo o barraco. Cheia de charme, glamour e explosões de ciúme que viralizam na hora.",
    quote: "Acha que me engana, fofa? Eu vi você olhando pro meu Banana Boss!",
    traits: ["Salto Alto", "Glitter Vermelho", "Surtada", "Rainha do Drama"],
    sampleDialogue: "— Como assim você curtiu a foto da Uvinha em Cancún?! banana safado, hoje você vai dormir na geladeira!",
  },
  {
    id: "uvinha-fatal",
    name: "Uvinha Fatal",
    role: "A Fofoqueira Estilosa",
    tag: "FOFOCA DA BOA",
    color: "#a855f7",
    bgGradient: "from-purple-500/20 to-fuchsia-600/30",
    borderColor: "border-purple-500/50",
    avatarEmoji: "🍇",
    description: "A fofoqueira estilosa de estampa de onça. Sabe de todos os podres do pomar e adora soltar uma bomba no ar.",
    quote: "Miga, tu num sabe do bafo... O Banana Boss foi visto no hortifruti com outra!",
    traits: ["Estampa de Onça", "Elegante", "Leva e Traz", "Influencer do Pomar"],
    sampleDialogue: "— Só digo uma coisa: o barraco que rolou hoje na banca da feira foi digno de novela das nove!",
  },
  {
    id: "melancia-laranja",
    name: "Melancia & Laranja",
    role: "O Drama e a Comédia",
    tag: "HUMOR & LÁGRIMAS",
    color: "#10b981",
    bgGradient: "from-emerald-500/20 to-orange-600/30",
    borderColor: "border-emerald-500/50",
    avatarEmoji: "🍉🍊",
    description: "Melancia Chorona chora por tudo, enquanto a Laranja Risonha racha o bico de tudo. A dupla dinâmica de comédia e drama.",
    quote: "Melancia: 'Ninguém me ama... Buáaa!' / Laranja: 'Kkkkkk tu chora até com vento, doida!'",
    traits: ["Choro Dramático", "Risada Escandalosa", "Meme Pronto", "Impossível Ignorar"],
    sampleDialogue: "— Melancia: 'Eles me cortaram em fatias!' — Laranja: 'Mas vc ficou linda de aperitivo, mulher! Kkkkkk!'",
  },
];

export const EPISODES: Episode[] = [
  {
    id: 1,
    title: "Ep. 01 — O Flagra no Hortifruti",
    character: "Banana Boss & Moranguete",
    emoji: "🍌💔🍓",
    hook: "Banana Boss foi visto conversando bem de perto com a Uvinha Fatal...",
    twist: "Moranguete aparece de surpresa com salto alto e pega a conversa no flagra!",
    cliffhanger: "Será que Moranguete vai jogar suco de maracujá na cara da Uvinha? Descubra no próximo episódio!",
    views: "1.4M",
    likes: "248K",
    comments: "12.4K",
    duration: "0:28",
    dialogueLines: [
      { speaker: "Uvinha Fatal 🍇", text: "Nossa Banana, como você tá cheiroso hoje...", color: "text-purple-400" },
      { speaker: "Banana Boss 🍌", text: "Comigo é assim, gatinha. Sempre no brilho!", color: "text-yellow-400" },
      { speaker: "Moranguete 🍓", text: "O QUÊ?! BANANA SEU TROPICAL SAFADO!!", color: "text-red-400 font-bold" },
    ],
  },
  {
    id: 2,
    title: "Ep. 02 — A Vingança da Moranguete",
    character: "Moranguete & Melancia",
    emoji: "🍓💥🍉",
    hook: "Moranguete decide postar um Exposed do Banana Boss no TikTok...",
    twist: "A Melancia Chorona começa a chorar rios de lágrimas de tanta emoção!",
    cliffhanger: "O exposed bateu 3 milhões de views em 1 hora! O que o Banana vai fazer?!",
    views: "2.8M",
    likes: "512K",
    comments: "38.9K",
    duration: "0:34",
    dialogueLines: [
      { speaker: "Moranguete 🍓", text: "Vou cancelar esse Banana em todas as redes!", color: "text-red-400" },
      { speaker: "Melancia Chorona 🍉", text: "Buáaaa! Que história mais triste e linda! 😭", color: "text-emerald-400" },
      { speaker: "Laranja Risonha 🍊", text: "KKKKKK manda mais exposed que tá pouco!", color: "text-orange-400" },
    ],
  },
  {
    id: 3,
    title: "Ep. 03 — O Pedido de Perdão de Luxo",
    character: "Banana Boss & Moranguete",
    emoji: "🍌💍🍓",
    hook: "Banana Boss aparece com uma limusine de champanhe para pedir desculpas.",
    twist: "Ele traz um anel de diamantes e uma cesta de morangos cobertos de ouro!",
    cliffhanger: "Será que Moranguete perdoa o galã do pomar ou joga tudo fora?",
    views: "3.2M",
    likes: "680K",
    comments: "45.1K",
    duration: "0:41",
    dialogueLines: [
      { speaker: "Banana Boss 🍌", text: "Moranguete, me perdoa... Eu comprei um jatinho só pra gente!", color: "text-yellow-400" },
      { speaker: "Moranguete 🍓", text: "Hum... jatinho? Deixa eu pensar no seu caso...", color: "text-red-400" },
      { speaker: "Uvinha Fatal 🍇", text: "Menina, perdoa não! Deixa o jatinho pra mim!", color: "text-purple-400" },
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "Sobre os Vídeos",
    question: "Como vou receber os 2.000+ vídeos?",
    answer: "Após a confirmação do pagamento, você recebe acesso imediato e vitalício à nossa área de membros e drive organizado por categorias e capítulos. Basta clicar no link, baixar e publicar.",
  },
  {
    category: "Monetização",
    question: "Posso monetizar no TikTok, YouTube Shorts e Instagram Reels?",
    answer: "Sim! Os vídeos são gravados em formato vertical (9:16) em altíssima qualidade (HD/4K), sem marcas d'água. Eles cumprem os requisitos de retenção e engajamento das redes sociais.",
  },
  {
    category: "Direitos e Edição",
    question: "Preciso aparecer ou narrar com a minha voz?",
    answer: "Não! Esse é o grande diferencial. Todos os vídeos já possuem dublagem profissional em português, legendas dinâmicas, efeitos sonoros e trilhas virais sincronizadas. É só copiar e postar.",
  },
  {
    category: "Formato e Suporte",
    question: "Preciso ter computador ou posso fazer tudo pelo celular?",
    answer: "Pode fazer 100% pelo celular! O download é simples e direto para a galeria do seu smartphone (Android ou iPhone).",
  },
  {
    category: "Garantia",
    question: "Tem garantia de reembolso?",
    answer: "Sim! Você conta com 7 dias de garantia incondicional. Se por qualquer motivo não gostar do conteúdo, devolvemos 100% do seu dinheiro sem burocracia.",
  },
];

export const PLATFORMS = [
  {
    name: "TikTok",
    badge: "Alcance Rápido e Viral",
    color: "from-cyan-500 to-pink-500",
    glow: "shadow-cyan-500/20",
    icon: "🎵",
    desc: "O algoritmo do TikTok ama novelinhas em episódios. As pessoas assistem a série inteira no seu perfil!",
  },
  {
    name: "YouTube Shorts",
    badge: "Audiência que Monetiza",
    color: "from-red-600 to-rose-500",
    glow: "shadow-red-500/20",
    icon: "▶️",
    desc: "Monetize no Programa de Parcerias do YouTube acumulando milhões de visualizações em poucas semanas.",
  },
  {
    name: "Instagram Reels",
    badge: "Engajamento e Seguidores",
    color: "from-purple-600 via-pink-500 to-amber-500",
    glow: "shadow-pink-500/20",
    icon: "📸",
    desc: "Transforme seguidores em uma comunidade engajada e fature com parcerias, links de afiliados e parcerias pagas.",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "BAIXE",
    subtitle: "Acesse e Baixe Instantaneamente",
    desc: "Baixe os vídeos do pack no link oficial e mantenha na sua galeria do celular.",
    linkText: "Acessar Plataforma Oficial",
    url: CHECKOUT_URL,
    icon: "📥",
  },
  {
    step: "02",
    title: "POSTE",
    subtitle: "Copiou. Postou. Sem complicação.",
    desc: "Poste no TikTok, Shorts e Reels seguindo nossa ordem de episódios para criar retenção extrema.",
    linkText: "Pronto para Publicar",
    icon: "🚀",
  },
  {
    step: "03",
    title: "MONETIZE",
    subtitle: "Crescimento & Ganhos Recorrentes",
    desc: "Monetize conforme sua audiência cresce e sua conta atende às regras de monetização das plataformas.",
    linkText: "Começar a Faturar",
    icon: "💰",
  },
];
