import { Development } from '../types/property';

export const HERO_IMAGE = '/src/assets/images/hero_apartments_facade_1790208425560.jpg';
export const INTERIOR_IMAGE = '/src/assets/images/interior_living_balcony_1790208472983.jpg';

export const DEVELOPMENTS: Record<string, Development> = {
  mooca: {
    id: 'mooca',
    regionName: 'Mooca',
    campaignLabel: 'Campanha Mooca',
    projectName: 'Reserva Mooca Tradizione',
    tagline: 'A nobreza e a tradição italiana com a conveniência do Alto da Mooca',
    formUrl: 'https://forms.gle/kAnhMoMEGiSWWddd7',
    priceFrom: 'R$ 549.000',
    installmentFrom: 'R$ 1.950/mês',
    status: 'Lançamento Exclusivo',
    deliveryDate: 'Dezembro / 2027',
    address: 'Rua da Mooca x Rua Juventus - Alto da Mooca, São Paulo - SP',
    shortDesc: 'Apartamentos com planta inteligente, terraço gourmet integrado e lazer de clube privativo em um dos bairros mais acolhedores de São Paulo.',
    fullLocationDesc: 'A Mooca é sinônimo de identidade paulistana, segurança e acolhimento familiar. Conhecida internacionalmente por sua tradição gastronômica italiana, o bairro reúne cantinas consagradas (como Di Cunto e Don Carlini), padarias artesanais centenárias e uma atmosfera calma de vila. O Alto da Mooca oferece ruas arborizadas, praças preservadas, renomados colégios e facilidade de locomoção com estações da CPTM Juventus-Mooca e Metrô Bresser-Mooca, permitindo chegar à Avenida Paulista ou ao Centro Histórico em menos de 15 minutos.',
    lifestyleHighlights: [
      'Polo gastronômico icônico com cantinas italianas, pizzarias e confeitarias tradicionais a poucos passos',
      'Excelente mobilidade com acesso direto à Radial Leste, Av. dos Estados e Av. Paes de Barros',
      'Infraestrutura médica de ponta com Hospital Alemão Oswaldo Cruz Mooca e Hospital Villa-Lobos',
      'Ambiente familiar, seguro e com forte sentimento comunitário'
    ],
    pointsOfInterest: [
      { category: 'Mobilidade', name: 'Estação Metrô Bresser-Mooca (Linha 3-Vermelha)', distance: '4 min' },
      { category: 'Mobilidade', name: 'Estação CPTM Juventus-Mooca (Linha 10-Turquesa)', distance: '5 min' },
      { category: 'Gastronomia', name: 'Rua Juventus e Tradicionais Cantinas Italianas', distance: '3 min' },
      { category: 'Lazer & Verde', name: 'Clube Atlético Juventus & Parque da Mooca', distance: '4 min' },
      { category: 'Compras', name: 'Mooca Plaza Shopping', distance: '7 min' },
      { category: 'Educação & Saúde', name: 'Universidade Anhembi Morumbi e Colégio Santa Catarina', distance: '5 min' }
    ],
    typologies: [
      {
        title: 'Planta Bella Vista (2 Dormitórios com Suíte)',
        size: '58 m²',
        bedrooms: '2 Dorms (1 Suíte)',
        bathrooms: '2 Banheiros',
        parking: '1 Vaga Coberta e Livre',
        features: ['Varanda com churrasqueira a carvão', 'Piso nivelado entre sala e terraço', 'Tomadas USB nos dormitórios', 'Persiana de enrolar integrada']
      },
      {
        title: 'Planta Famiglia Mooca (3 Dormitórios com Suíte)',
        size: '76 m²',
        bedrooms: '3 Dorms (1 Suíte)',
        bathrooms: '2 Banheiros + Lavabo',
        parking: '2 Vagas Demarcadas',
        features: ['Amplo living integrado à cozinha americana', 'Churrasqueira gourmet privativa', 'Infraestrutura para ar-condicionado em todos os cômodos', 'Depósito privativo no subsolo']
      }
    ],
    amenities: [
      'Piscina Climatizada Adulto e Infantil com Deck Molhado',
      'Rooftop Lounge com Vista Panorâmica de São Paulo',
      'Espaço Gourmet com Forno de Pizza e Churrasqueira',
      'Academia Completa com Equipamentos Life Fitness',
      'Quadra de Beach Tennis e Poliesportiva',
      'Coworking Equipado e Sala de Reuniões',
      'Pet Place com Circuito de Agility',
      'Brinquedoteca e Playground Infantil'
    ],
    heroImage: '/src/assets/images/project_mooca_residence_1790208439165.jpg',
    accentBadge: 'Tradição & Gastronomia'
  },

  tatuape: {
    id: 'tatuape',
    regionName: 'Tatuapé',
    campaignLabel: 'Campanha Tatuapé',
    projectName: 'Icon Tatuapé Sky Residence',
    tagline: 'O ápice da sofisticação e valorização no polo mais cosmopolita da Zona Leste',
    formUrl: 'https://forms.gle/EvF3vsneHwRSBGEU6',
    priceFrom: 'R$ 489.000',
    installmentFrom: 'R$ 1.820/mês',
    status: 'Obras Aceleradas / Últimas Unidades',
    deliveryDate: 'Agosto / 2026',
    address: 'Próximo ao Parque CERET e Shopping Anália Franco - Tatuapé, São Paulo - SP',
    shortDesc: 'Torre residencial imponente com arquitetura contemporânea, vista livre 360° para o skyline e acabamentos de alto padrão a poucos metros do CERET.',
    fullLocationDesc: 'O Tatuapé é a potência econômica, cultural e residencial de maior prestígio da Zona Leste. Fazendo fronteira imediata com o Jardim Anália Franco, reúne em seu entorno dois dos maiores polos de compras da cidade (Shopping Anália Franco e Complexo Comercial Metrô Tatuapé), além do icônico Parque Esportivo CERET com mais de 280 mil m² de área verde e pistas de caminhada. O bairro conta com vida noturna vibrante, alta gastronomia na Rua Itapura e Euclides Pacheco, hospitais de referência (Hospital São Luiz) e rápido escoamento pelas avenidas Radial Leste, Salim Farah Maluf e Marginal Tietê.',
    lifestyleHighlights: [
      'Vizinho direto do Jardim Anália Franco e do exuberante Parque CERET',
      'Circuito gastronômico renomado nas ruas Itapura, Emília Marengo e Coelho Lisboa',
      'Mais de 400 lojas e cinemas VIP no Shopping Anália Franco',
      'Bairro com um dos maiores índices de valorização do metro quadrado de São Paulo'
    ],
    pointsOfInterest: [
      { category: 'Lazer & Verde', name: 'Parque Esportivo do Trabalhador (CERET)', distance: '3 min' },
      { category: 'Compras', name: 'Shopping Anália Franco', distance: '4 min' },
      { category: 'Mobilidade', name: 'Estação Metrô Tatuapé & Carrão (Linha Vermelha)', distance: '5 min' },
      { category: 'Gastronomia', name: 'Polo Gastronômico da Rua Itapura', distance: '3 min' },
      { category: 'Educação & Saúde', name: 'Hospital e Maternidade São Luiz Anália Franco', distance: '5 min' },
      { category: 'Mobilidade', name: 'Acesso rápido à Radial Leste e Salim Farah Maluf', distance: '2 min' }
    ],
    typologies: [
      {
        title: 'Studio & Compacto Premium',
        size: '38 m²',
        bedrooms: '1 Suíte',
        bathrooms: '1 Banheiro',
        parking: '1 Vaga Opcional',
        features: ['Ideal para moradia individual ou locação Airbnb', 'Varanda espaçosa com vista livre', 'Fechadura eletrônica digital', 'Infraestrutura completa para ar-condicionado']
      },
      {
        title: 'Planta Metropolitan (2 Dorms com Suíte)',
        size: '64 m²',
        bedrooms: '2 Dorms (1 Suíte)',
        bathrooms: '2 Banheiros',
        parking: '1 Vaga de Garagem Coberta',
        features: ['Terraço com bancada e churrasqueira a carvão', 'Suíte master com espaço para closet', 'Janelas com atenuação acústica', 'Área de serviço independente']
      },
      {
        title: 'Planta Sky Prestige (3 Suítes)',
        size: '98 m²',
        bedrooms: '3 Suítes',
        bathrooms: '3 Banheiros + Lavabo',
        parking: '2 Vagas Determinadas',
        features: ['Elevador com biometria privativa', 'Varanda gourmet com vista panorâmica', 'Churrasqueira em inox embutida', 'Depósito privativo de 3m²']
      }
    ],
    amenities: [
      'Sky Lounge no 28º Andar com Piscina de Borda Infinita',
      'SPA Relaxante com Hidromassagem e Sauna Seca',
      'Fitness Center com Vista Panorâmica para a Cidade',
      'Salão de Festas Nobre com Pé-direito Duplo',
      'Espaço Gourmet com Adega Climatizada e Parrilla',
      'Quadra Poliesportiva Coberta',
      'Espaço Delivery com Lockers Inteligentes',
      'Car Wash com Ponto para Carregamento de Veículo Elétrico'
    ],
    heroImage: '/src/assets/images/project_tatuape_tower_1790208450773.jpg',
    accentBadge: 'Polo Cosmopolita & Valorização'
  },

  'vila-ema': {
    id: 'vila-ema',
    regionName: 'Vila Ema',
    campaignLabel: 'Campanha Vila Ema',
    projectName: 'Jardim Vila Ema Club & Home',
    tagline: 'Conforto para a família, natureza e mobilidade ágil com o melhor custo-benefício',
    formUrl: 'https://forms.gle/TwJ7d6vSHT5MPZUm7',
    priceFrom: 'R$ 329.000',
    installmentFrom: 'R$ 1.150/mês',
    status: 'Pré-Lançamento com Condição de 1ª Fase',
    deliveryDate: 'Março / 2028',
    address: 'Av. Vila Ema x Rua Solidônio Leite - Vila Ema, São Paulo - SP',
    shortDesc: 'Apartamentos modernos com lazer de clube completo e localização estratégica a poucos passos do Monotrilho com conexão direta para a Linha Verde.',
    fullLocationDesc: 'A Vila Ema desponta como uma das regiões mais promissoras da Zona Leste paulistana. O bairro experimenta uma transformação urbana veloz graças à modernidade do Monotrilho Linha 15-Prata, que permite aos moradores chegarem à Estação Vila Prudente (Linha 2-Verde) em minutos, conectando-se rapidamente à Av. Paulista, Faria Lima e Centro. A região conta com infraestrutura completa de comércio cotidiano na própria Avenida Vila Ema, supermercados (Hirota Food Express, Joanin, Roldão), padarias artesanais e ampla proximidade com o Parque Ecológico de Vila Prudente.',
    lifestyleHighlights: [
      'Mobilidade excelente a menos de 500 metros do Monotrilho com integração à Linha 2-Verde',
      'Melhor relação custo por metro quadrado da região com alto potencial de valorização',
      'Condomínio clube com taxa condominial inteligente e otimizada por energia solar',
      'Comércio dinâmico na porta: mercados, farmácias, padarias e academias'
    ],
    pointsOfInterest: [
      { category: 'Mobilidade', name: 'Estação São Lucas / Camilo Haddad (Monotrilho)', distance: '4 min a pé' },
      { category: 'Mobilidade', name: 'Estação Vila Prudente (Linha 2-Verde do Metrô)', distance: '8 min' },
      { category: 'Lazer & Verde', name: 'Parque Ecológico Professora Lydia Natalizio Diogo', distance: '6 min' },
      { category: 'Compras', name: 'Supermercado Joanin e Hirota Food Express', distance: '3 min' },
      { category: 'Gastronomia', name: 'Pizzarias e Gastronomia da Av. Vila Ema', distance: '2 min' },
      { category: 'Educação & Saúde', name: 'AMA / UBS Vila Ema e Colégios Particulares', distance: '4 min' }
    ],
    typologies: [
      {
        title: 'Planta Smart Conforto (2 Dorms)',
        size: '44 m²',
        bedrooms: '2 Dormitórios',
        bathrooms: '1 Banheiro',
        parking: 'Opção de Vaga de Garagem',
        features: ['Varanda com bancada grill', 'Cozinha americana planejada', 'Janelas amplas com iluminação natural', 'Área técnica para condensadora']
      },
      {
        title: 'Planta Family Suite (2 Dorms com Suíte)',
        size: '54 m²',
        bedrooms: '2 Dorms (1 Suíte)',
        bathrooms: '2 Banheiros',
        parking: '1 Vaga de Garagem Livre',
        features: ['Suíte com banheiro ventilado', 'Terraço gourmet integrado', 'Ponto para máquina de lavar louça', 'Piso laminado instalado nos quartos']
      }
    ],
    amenities: [
      'Complexo de Piscinas com Prainha e Solarium',
      'Quadra Poliesportiva para Prática de Esportes',
      'Salão de Festas com Churrasqueira Externa',
      'Espaço Fitness Equipado para Cardio e Musculação',
      'Bosque Privativo com Pista de Caminhada Arborizada',
      'Brinquedoteca Temática e Espaço Games Teen',
      'Pet Care e Espaço Pet com Gramado Natural',
      'Bicicletário Seguro com Tomada para Bike Elétrica'
    ],
    heroImage: '/src/assets/images/project_vila_ema_complex_1790208462733.jpg',
    accentBadge: 'Mobilidade & Melhor Preço'
  }
};

export const REGIONS_LIST: Development[] = [
  DEVELOPMENTS.mooca,
  DEVELOPMENTS.tatuape,
  DEVELOPMENTS['vila-ema']
];
