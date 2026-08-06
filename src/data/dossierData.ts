import { EbitdaData, RevenueSeason, RoomAsset, SwotCategory, RiskFactor, DataRoomDoc, Language } from '../types';

export const DOSSIER_SUMMARY = {
  enterpriseValue: 1200000,
  netYield: 9.1,
  grossYield: 12.7,
  conservativeGrossYield: 8.50,
  conservativeNetYield: 6.08,
  equityRequired: 886000,
  bankLoanAssumed: 314001.86,
  loanMaturityYear: 2037,
  loanMaturityMonth: 'Junho',
  monthlyLoanPayment: 2984,
  bankName: "Novo Banco",
  realEstateAppraisal: 1000000,
  appraisalJLL: 980000,
  appraisalJLlDate: 'Outubro de 2025',
  appraisalExitCasa: 1050000,
  appraisalExitCasaDate: 'Julho de 2026',
  operationalPremium: 200000,
  shareDealTaxSavings: 75000,
  capitalAmortizationPercent: 64,
  annualCapitalAmortization: 23000,
  avgEbitdaThreeYears: 36668,
  totalRooms: 10,
  totalBeds: 21,
  buildingAreaSqM: 420.91,
  floorsCount: 3,
  location: "Centro Histórico de Aveiro, Portugal",
  entityName: "Vetores & Hipotenusas, Lda.",
  brandName: "Besmart",
  alLicense: "RNAL 129411/AL",
  propertyManager: "Home Sweet Home Aveiro (contrato desde 01/01/2026)",
  academicMonthsCount: 10.5,
  summerMaxNights: 45,
  energyCertificate: "D",
  energyFeePerBed: 115,
};

export const EBITDA_HISTORY_PT: EbitdaData[] = [
  {
    year: '2023',
    ebitda: 39222,
    revenue: 94100,
    opex: 54878,
    occupancy: 96,
    note: 'Fecho contabilístico oficial. Elevada ocupação académica e excelente faturação de Verão.',
  },
  {
    year: '2024',
    ebitda: 35295,
    revenue: 91800,
    opex: 56505,
    occupancy: 94,
    note: 'Fecho contabilístico oficial. Estabilidade operacional e controlo rigoroso de OPEX.',
  },
  {
    year: '2025',
    ebitda: 35486.53,
    revenue: 93500,
    opex: 58013.47,
    occupancy: 95,
    note: 'Fecho contabilístico oficial. Estrutura de custos fixos mínimos com zero pessoal.',
  },
];

export const EBITDA_HISTORY_EN: EbitdaData[] = [
  {
    year: '2023',
    ebitda: 39222,
    revenue: 94100,
    opex: 54878,
    occupancy: 96,
    note: 'Official financial close. High academic occupancy and strong summer revenue.',
  },
  {
    year: '2024',
    ebitda: 35295,
    revenue: 91800,
    opex: 56505,
    occupancy: 94,
    note: 'Official financial close. Operational stability and strict OPEX cost control.',
  },
  {
    year: '2025',
    ebitda: 35486.53,
    revenue: 93500,
    opex: 58013.47,
    occupancy: 95,
    note: 'Official financial close. Minimal fixed cost structure with zero payroll.',
  },
];

export function getEbitdaHistory(lang: Language = 'PT'): EbitdaData[] {
  return lang === 'EN' ? EBITDA_HISTORY_EN : EBITDA_HISTORY_PT;
}

export const EBITDA_HISTORY = EBITDA_HISTORY_PT;

export const REVENUE_SEASONS_PT: RevenueSeason[] = [
  {
    period: 'Setembro - Julho (10,5 Meses)',
    months: 'Época Letiva / Académica',
    type: 'PBSA / Co-Living / Flex Living',
    monthlyRevenueMin: 7000,
    monthlyRevenueMax: 9000,
    totalSeasonMin: 73500,
    totalSeasonMax: 94500,
    description: '10 suites (400 € a 850 €/mês com despesas incluídas) para estudantes universitários, investigadores, jovens profissionais e nómadas digitais.',
  },
  {
    period: 'Julho - Agosto (Máx. 45 Noites)',
    months: 'Época Alta Balnear',
    type: 'Alojamento Local (RNAL 129411/AL)',
    monthlyRevenueMin: 14400,
    monthlyRevenueMax: 18000,
    totalSeasonMin: 28800,
    totalSeasonMax: 36000,
    description: 'Exploração turística em Aveiro com ADR de 80 €. Cenário conservador (80% ocupação): 28.800 €. Cenário otimista (100% ocupação): 36.000 €.',
  },
];

export const REVENUE_SEASONS_EN: RevenueSeason[] = [
  {
    period: 'September - July (10.5 Months)',
    months: 'Academic / Student Term',
    type: 'PBSA / Co-Living / Flex Living',
    monthlyRevenueMin: 7000,
    monthlyRevenueMax: 9000,
    totalSeasonMin: 73500,
    totalSeasonMax: 94500,
    description: '10 suites (€400 to €850/mo including utilities) for university students, researchers, young professionals, and digital nomads.',
  },
  {
    period: 'July - August (Max. 45 Nights)',
    months: 'Peak Summer Season',
    type: 'Short-Term Rental (RNAL 129411/AL)',
    monthlyRevenueMin: 14400,
    monthlyRevenueMax: 18000,
    totalSeasonMin: 28800,
    totalSeasonMax: 36000,
    description: 'Summer tourist operations in Aveiro at €80 ADR. Conservative case (80% occupancy): €28,800. Optimistic case (100% occupancy): €36,000.',
  },
];

export function getRevenueSeasons(lang: Language = 'PT'): RevenueSeason[] {
  return lang === 'EN' ? REVENUE_SEASONS_EN : REVENUE_SEASONS_PT;
}

export const REVENUE_SEASONS = REVENUE_SEASONS_PT;

export const ROOM_ASSETS: RoomAsset[] = [
  {
    id: 'R101',
    name: 'Suite Master Ria',
    floor: 1,
    type: 'Suite Premium',
    sizeSqM: 24,
    monthlyRentAcademic: 850,
    summerNightRate: 150,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho Privativa', 'Varanda com Vista Canal', 'Ar Condicionado DAININ A+', 'Secretária Ergonómica'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_10_b-1280x853.webp',
  },
  {
    id: 'R102',
    name: 'Studio Moliceiro',
    floor: 1,
    type: 'Estúdio com Kitchnette',
    sizeSqM: 22,
    monthlyRentAcademic: 800,
    summerNightRate: 140,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Kitchenette Privativa', 'Casa de Banho', 'Fechadura Inteligente SmartLock', 'Wi-Fi 6 Dedicated'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_2_a-1280x853.webp',
  },
  {
    id: 'R103',
    name: 'Quarteto Beira-Mar',
    floor: 1,
    type: 'Quarto Executive',
    sizeSqM: 18,
    monthlyRentAcademic: 750,
    summerNightRate: 125,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho En-Suite', 'Varanda Privativa', 'Cama Queen Size', 'Frigobar'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_3_a-1280x853.webp',
  },
  {
    id: 'R201',
    name: 'Suite Universidade',
    floor: 2,
    type: 'Suite Academic Deluxe',
    sizeSqM: 21,
    monthlyRentAcademic: 780,
    summerNightRate: 130,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho Privativa', 'Zona de Estudo Ampliada', 'Luz Natural Abundante'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_4_b-1280x853.webp',
  },
  {
    id: 'R202',
    name: 'Studio Arte Nova',
    floor: 2,
    type: 'Estúdio Executive',
    sizeSqM: 20,
    monthlyRentAcademic: 760,
    summerNightRate: 120,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho Privativa', 'Isolamento Acústico Duplo', 'Ar Condicionado Inverter'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_5_a-1280x853.webp',
  },
  {
    id: 'R203',
    name: 'Quarto Salinas',
    floor: 2,
    type: 'Quarto Superior',
    sizeSqM: 17,
    monthlyRentAcademic: 720,
    summerNightRate: 110,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho En-Suite', 'Mobilia Porro Design', ' Smart TV 43"'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_6_a-1280x853.webp',
  },
  {
    id: 'R301',
    name: 'Penthouse Loft Aveiro',
    floor: 3,
    type: 'Penthouse Loft',
    sizeSqM: 32,
    monthlyRentAcademic: 950,
    summerNightRate: 180,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['Terraço Privativo Panorâmico', 'Cozinha Completa Integrada', 'Design Exclusivo', 'Ar Condicionado'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_10_c-1280x853.webp',
  },
  {
    id: 'R302',
    name: 'Suite Dunas',
    floor: 3,
    type: 'Suite Superior',
    sizeSqM: 19,
    monthlyRentAcademic: 740,
    summerNightRate: 115,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho En-Suite', 'Janelas Velux de Sótão', 'Insonorização Premium'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_7_a-1280x853.webp',
  },
  {
    id: 'R303',
    name: 'Quarto Farol',
    floor: 3,
    type: 'Quarto Comfort',
    sizeSqM: 16,
    monthlyRentAcademic: 690,
    summerNightRate: 100,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho Privativa', 'Ar Condicionado', 'Secretária e Estante Integrada'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_6_b-1280x853.webp',
  },
  {
    id: 'R304',
    name: 'Quarto Barra',
    floor: 3,
    type: 'Quarto Comfort',
    sizeSqM: 15,
    monthlyRentAcademic: 670,
    summerNightRate: 95,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Casa de Banho En-Suite', 'Controlo Acesso por App Mobile', 'Roupeiro Embutido'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_7_b-1280x853.webp',
  },
];

export const ROOM_ASSETS_PT = ROOM_ASSETS;

export const ROOM_ASSETS_EN: RoomAsset[] = [
  {
    id: 'R101',
    name: 'Suite Master Ria',
    floor: 1,
    type: 'Premium Suite',
    sizeSqM: 24,
    monthlyRentAcademic: 850,
    summerNightRate: 150,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['Private Bathroom', 'Balcony with Canal View', 'DAIKIN A+ Air Conditioning', 'Ergonomic Desk'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_10_b-1280x853.webp',
  },
  {
    id: 'R102',
    name: 'Studio Moliceiro',
    floor: 1,
    type: 'Studio with Kitchenette',
    sizeSqM: 22,
    monthlyRentAcademic: 800,
    summerNightRate: 140,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Private Kitchenette', 'En-Suite Bathroom', 'SmartLock Keyless Entry', 'Dedicated Wi-Fi 6'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_2_a-1280x853.webp',
  },
  {
    id: 'R103',
    name: 'Quarteto Beira-Mar',
    floor: 1,
    type: 'Executive Room',
    sizeSqM: 18,
    monthlyRentAcademic: 750,
    summerNightRate: 125,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['En-Suite Bathroom', 'Private Balcony', 'Queen Size Bed', 'Mini Fridge'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_3_a-1280x853.webp',
  },
  {
    id: 'R201',
    name: 'Suite Universidade',
    floor: 2,
    type: 'Deluxe Academic Suite',
    sizeSqM: 21,
    monthlyRentAcademic: 780,
    summerNightRate: 130,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['Private Bathroom', 'Extended Study Zone', 'Abundant Natural Light'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_4_b-1280x853.webp',
  },
  {
    id: 'R202',
    name: 'Studio Arte Nova',
    floor: 2,
    type: 'Executive Studio',
    sizeSqM: 20,
    monthlyRentAcademic: 760,
    summerNightRate: 120,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Private Bathroom', 'Double Soundproofing', 'Inverter Air Conditioning'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_5_a-1280x853.webp',
  },
  {
    id: 'R203',
    name: 'Quarto Salinas',
    floor: 2,
    type: 'Superior Room',
    sizeSqM: 17,
    monthlyRentAcademic: 720,
    summerNightRate: 110,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['En-Suite Bathroom', 'Porro Design Furniture', '43" Smart TV'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_6_a-1280x853.webp',
  },
  {
    id: 'R301',
    name: 'Penthouse Loft Aveiro',
    floor: 3,
    type: 'Penthouse Loft',
    sizeSqM: 32,
    monthlyRentAcademic: 950,
    summerNightRate: 180,
    hasPrivateBath: true,
    hasBalcony: true,
    occupancyStatus: 'Occupied',
    features: ['Panoramic Private Terrace', 'Fully Integrated Kitchen', 'Exclusive Design', 'Air Conditioning'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_10_c-1280x853.webp',
  },
  {
    id: 'R302',
    name: 'Suite Dunas',
    floor: 3,
    type: 'Superior Suite',
    sizeSqM: 19,
    monthlyRentAcademic: 740,
    summerNightRate: 115,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['En-Suite Bathroom', 'Velux Skylight Windows', 'Premium Soundproofing'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_7_a-1280x853.webp',
  },
  {
    id: 'R303',
    name: 'Quarto Farol',
    floor: 3,
    type: 'Comfort Room',
    sizeSqM: 16,
    monthlyRentAcademic: 690,
    summerNightRate: 100,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['Private Bathroom', 'Air Conditioning', 'Desk & Integrated Bookshelf'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_6_b-1280x853.webp',
  },
  {
    id: 'R304',
    name: 'Quarto Barra',
    floor: 3,
    type: 'Comfort Room',
    sizeSqM: 15,
    monthlyRentAcademic: 670,
    summerNightRate: 95,
    hasPrivateBath: true,
    hasBalcony: false,
    occupancyStatus: 'Occupied',
    features: ['En-Suite Bathroom', 'Mobile App Access Control', 'Built-In Wardrobe'],
    imageUrl: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_7_b-1280x853.webp',
  },
];

export function getRoomAssets(lang: Language = 'PT'): RoomAsset[] {
  return lang === 'EN' ? ROOM_ASSETS_EN : ROOM_ASSETS_PT;
}

export const PROPERTY_GALLERY_PT = [
  {
    id: 'ext-1',
    title: 'Fachada Principal Reabilitada',
    category: 'Exterior',
    url: 'https://besmart.pt/wp-content/uploads/2026/03/besmart_exterior_1_1-1280x853.webp',
    description: 'Edifício histórico inteiramente reabilitado no centro histórico de Aveiro.',
  },
  {
    id: 'suite-1',
    title: 'Suíte / Quarto Elegante',
    category: 'Suites',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_10_b-1280x853.webp',
    description: 'Design contemporâneo com zona de trabalho.',
  },
  {
    id: 'kitchen-1',
    title: 'Cozinha Comunitária Equipada',
    category: 'Zonas Comuns',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_cozinha_1-1280x853.webp',
    description: 'Cozinha modernizada para residentes com eletrodomésticos de alta eficiência.',
  },
  {
    id: 'living-1',
    title: 'Sala de Convivência & Lounge',
    category: 'Zonas Comuns',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_sala_2-1280x853.webp',
    description: 'Espaço social com luz natural para estudantes, investigadores e nómadas digitais.',
  },
  {
    id: 'patio-1',
    title: 'Pátio Exterior Privativo',
    category: 'Exterior & Lazer',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_patio_2-1280x853.webp',
    description: 'Zona de relaxamento ao ar livre no pátio interior da residência.',
  },
  {
    id: 'stairs-1',
    title: 'Arquitetura e Escadaria de Acesso',
    category: 'Arquitetura',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_escadas_2-1280x853.webp',
    description: 'Preservação de elementos arquitetónicos combinados com acabamentos modernos.',
  },
  {
    id: 'suite-2',
    title: 'Suíte / Quarto Elegante',
    category: 'Suites',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_2_a-1280x853.webp',
    description: 'Espaço funcional adaptado a estadias académicas de média e longa duração.',
  },
  {
    id: 'suite-3',
    title: 'Suíte / Quarto com Luz Natural',
    category: 'Suites',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_3_a-1280x853.webp',
    description: 'Mobiliário ergonómico de elevada durabilidade.',
  },
];

export const PROPERTY_GALLERY_EN = [
  {
    id: 'ext-1',
    title: 'Restored Main Facade',
    category: 'Exterior',
    url: 'https://besmart.pt/wp-content/uploads/2026/03/besmart_exterior_1_1-1280x853.webp',
    description: 'Completely restored historic building in Aveiro’s historic city center.',
  },
  {
    id: 'suite-1',
    title: 'Suite / Elegant Room',
    category: 'Suites',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_10_b-1280x853.webp',
    description: 'Contemporary design with dedicated workspace.',
  },
  {
    id: 'kitchen-1',
    title: 'Fully Equipped Communal Kitchen',
    category: 'Common Areas',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_cozinha_1-1280x853.webp',
    description: 'Modernized resident kitchen featuring high-efficiency appliances.',
  },
  {
    id: 'living-1',
    title: 'Living Room & Resident Lounge',
    category: 'Common Areas',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_sala_2-1280x853.webp',
    description: 'Sunlit social lounge for students, researchers, and digital nomads.',
  },
  {
    id: 'patio-1',
    title: 'Private Exterior Courtyard',
    category: 'Outdoor & Leisure',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_patio_2-1280x853.webp',
    description: 'Outdoor relaxation garden inside the residence courtyard.',
  },
  {
    id: 'stairs-1',
    title: 'Architecture & Access Staircase',
    category: 'Architecture',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_escadas_2-1280x853.webp',
    description: 'Preserved historic architectural elements blended with modern finishes.',
  },
  {
    id: 'suite-2',
    title: 'Suite / Elegant Room',
    category: 'Suites',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_2_a-1280x853.webp',
    description: 'Functional space tailored for mid-to-long term academic stays.',
  },
  {
    id: 'suite-3',
    title: 'Suite / Room with Natural Light',
    category: 'Suites',
    url: 'https://besmart.pt/wp-content/uploads/2026/02/besmart_quarto_3_a-1280x853.webp',
    description: 'High-durability ergonomic furniture and abundant sunlight.',
  },
];

export function getPropertyGallery(lang: Language = 'PT') {
  return lang === 'EN' ? PROPERTY_GALLERY_EN : PROPERTY_GALLERY_PT;
}

export const PROPERTY_GALLERY = PROPERTY_GALLERY_PT;

export const SWOT_DATA_PT: SwotCategory[] = [
  {
    title: 'FORÇAS (Strengths)',
    color: 'emerald',
    items: [
      'Marca Própria Consolidada: O website atua como canal de venda direta, mitigando comissões de plataformas de terceiros (Booking e Airbnb) de setembro a julho.',
      'Margem Operacional: Parcerias estratégicas de distribuição com plataformas especializadas (Uniscopio, Residenciasuniversitarias, Spotahome, Spacest).',
      'Estrutura de Custos Otimizada: Zero encargos ou responsabilidades com pessoal, garantindo uma estrutura de EBITDA limpa.',
      'Modelo de Alta Rentabilidade: A operação de verão otimizada maximiza a tarifa diária (ADR) e reduz o risco operacional ao longo do ano.',
      'Proteção de Oscilações Energéticas: Taxa mensal fixa de 115 € por cama (incluída na mensalidade), desenhada para absorver oscilações nos consumos energéticos.',
    ],
  },
  {
    title: 'OPORTUNIDADES (Opportunities)',
    color: 'blue',
    items: [
      'Crescimento contínuo do polo universitário de Aveiro e atração crescente de estudantes universitários, investigadores, jovens profissionais e nómadas digitais.',
      'Aumento da procura por soluções de alojamento "tudo incluído" com serviço de limpezas e lavandaria.',
      'Parcerias com redes globais de estudantes (Erasmus+) habituados a valores mais elevados no setor de alojamento estudantil e co-living.',
      'Expansão da exploração turística balnear otimizada durante os 45 dias de Verão.',
    ],
  },
  {
    title: 'FRAQUEZAS (Weaknesses)',
    color: 'amber',
    items: [
      'Limitações estruturais do edifício (ausência de elevador e de garagem privada).',
    ],
  },
  {
    title: 'AMEAÇAS (Threats)',
    color: 'rose',
    items: [
      'Potencial entrada a médio prazo de grandes operadores institucionais internacionais (PBSA) no mercado regional.',
    ],
  },
];

export const SWOT_DATA_EN: SwotCategory[] = [
  {
    title: 'STRENGTHS',
    color: 'emerald',
    items: [
      'Established Direct Brand: Proprietary website drives direct bookings, eliminating third-party OTA commissions (Booking/Airbnb) from September to July.',
      'High Operational Margin: Strategic distribution partnerships with specialized portals (Uniscopio, Spotahome, Spacest).',
      'Optimized Cost Structure: Zero staffing liabilities or payroll burdens, ensuring a clean EBITDA structure.',
      'High-Yield Business Model: Optimized summer operations maximize ADR and mitigate annual operational risk.',
      'Utility Volatility Protection: Fixed €115 monthly fee per bed included in rent, hedging against energy price fluctuations.',
    ],
  },
  {
    title: 'OPPORTUNITIES',
    color: 'blue',
    items: [
      'Continuous growth of Aveiro University hub, attracting more international students, researchers, young professionals, and digital nomads.',
      'Surging demand for all-inclusive living solutions with professional cleaning and laundry amenities.',
      'Partnerships with global student networks (Erasmus+) accustomed to higher PBSA and co-living price points.',
      'Expansion of high-margin summer vacation rentals during peak 45-day summer window.',
    ],
  },
  {
    title: 'WEAKNESSES',
    color: 'amber',
    items: [
      'Building structural constraints (no elevator and no private garage).',
    ],
  },
  {
    title: 'THREATS',
    color: 'rose',
    items: [
      'Medium-term potential entry of large international institutional PBSA operators into the regional market.',
    ],
  },
];

export function getSwotData(lang: Language = 'PT'): SwotCategory[] {
  return lang === 'EN' ? SWOT_DATA_EN : SWOT_DATA_PT;
}

export const SWOT_DATA = SWOT_DATA_PT;

export const RISK_FACTORS_PT: RiskFactor[] = [
  {
    id: 'RF1',
    category: 'Financeiro / Taxas de Juro',
    risk: 'Subida da Euribor aumentando o encargo mensal da dívida bancária (~314k€).',
    impact: 'Medium',
    probability: 'Medium',
    mitigation: 'Fixação de taxa de juro junto do Novo Banco ou amortização antecipada parcial recorrendo ao fluxo de caixa do Verão.',
  },
  {
    id: 'RF2',
    category: 'Regulamentação AL',
    risk: 'Novas restrições municipais às licenças de Alojamento Local no centro histórico.',
    impact: 'High',
    probability: 'Low',
    mitigation: 'O modelo de negócio é prioritariamente PBSA/Co-living (10 meses letivos) garantindo rentabilidade de 7,5%+ mesmo sem AL no Verão.',
  },
  {
    id: 'RF3',
    category: 'Ocupação Académica',
    risk: 'Redução temporária no número de estudantes internacionais Erasmus.',
    impact: 'Medium',
    probability: 'Low',
    mitigation: 'Contratos garantidos por fiadores/plataformas globais (Spotahome, Uniplaces, HousingAnywhere) com pagamento antecipado de caução.',
  },
  {
    id: 'RF4',
    category: 'Manutenção / Edifício',
    risk: 'Despesas imprevistas de manutenção em infraestruturas e fachadas.',
    impact: 'Low',
    probability: 'Low',
    mitigation: 'Edifício com reabilitação integral recente, garantias de construção válidas e fundo de reserva alimentado pelo fluxo operacional.',
  },
];

export const RISK_FACTORS_EN: RiskFactor[] = [
  {
    id: 'RF1',
    category: 'Financial / Interest Rates',
    risk: 'Euribor rate increases raising monthly debt service (~€314k bank loan).',
    impact: 'Medium',
    probability: 'Medium',
    mitigation: 'Interest rate hedging with Novo Banco or partial debt prepayments using summer cash flow.',
  },
  {
    id: 'RF2',
    category: 'Short-Term Rental Regulations',
    risk: 'New municipal restrictions on short-term rental licenses in the historic center.',
    impact: 'High',
    probability: 'Low',
    mitigation: 'The core business model is PBSA/Co-living (10 academic months), securing 7.5%+ yields even without summer tourist rentals.',
  },
  {
    id: 'RF3',
    category: 'Student Occupancy',
    risk: 'Temporary decrease in international Erasmus student enrollments.',
    impact: 'Medium',
    probability: 'Low',
    mitigation: 'Guaranteed lease contracts backed by guarantors and global platforms (Spotahome, Uniplaces, HousingAnywhere) with upfront security deposits.',
  },
  {
    id: 'RF4',
    category: 'Building Maintenance',
    risk: 'Unforeseen capital maintenance expenses on building infrastructure or facade.',
    impact: 'Low',
    probability: 'Low',
    mitigation: 'Recently fully renovated building, valid construction warranties, and a capital reserve fund funded by operational cash flow.',
  },
];

export function getRiskFactors(lang: Language = 'PT'): RiskFactor[] {
  return lang === 'EN' ? RISK_FACTORS_EN : RISK_FACTORS_PT;
}

export const RISK_FACTORS = RISK_FACTORS_PT;

export const DATA_ROOM_DOCS_PT: DataRoomDoc[] = [
  {
    id: 'DOC-001',
    title: 'Dossiê Financeiro & Fechos Contabilísticos 2023-2025',
    category: 'Contabilidade & Finanças',
    fileSize: '4.2 MB',
    format: 'PDF',
    isProtected: false,
    description: 'Demonstrações financeiras oficiais confirmadas (EBITDA médio de 36.668,00 €) e balancetes dos últimos 3 anos.',
    downloadCount: 142,
  },
  {
    id: 'DOC-002',
    title: 'Relatórios Oficiais de Avaliação Imobiliária (JLL & Exit Casa)',
    category: 'Imobiliário & Avaliação',
    fileSize: '8.7 MB',
    format: 'PDF',
    isProtected: false,
    description: 'Avaliações oficiais da JLL (980.000 € em out/2025) e Exit Casa Aveiro (1.050.000 € em jul/2026), fixando a base do imóvel em 1.000.000 €.',
    downloadCount: 98,
  },
  {
    id: 'DOC-003',
    title: 'Contrato Financiamento Novo Banco (Maturidade Junho 2037)',
    category: 'Bancário & Jurídico',
    fileSize: '2.1 MB',
    format: 'PDF',
    isProtected: true,
    description: 'Empréstimo bancário com saldo residual de 314.001,86 € (a 30/06/2026), prestação de 2.984 €/mês com 64% de amortização (~23k€/ano).',
    downloadCount: 65,
  },
  {
    id: 'DOC-004',
    title: 'Minuta Transmissão de Quotas Vetores & Hipotenusas, Lda.',
    category: 'Jurídico & Fiscal',
    fileSize: '1.5 MB',
    format: 'PDF',
    isProtected: true,
    description: 'Contrato de aquisição de 100% das quotas da sociedade comercial detentora da marca Besmart e do imóvel, com isenção de IMT e Selo (~75k€).',
    downloadCount: 52,
  },
  {
    id: 'DOC-005',
    title: 'Licença AL (RNAL 129411/AL), Certificado Energético D e Caderneta Predial',
    category: 'Licenciamento & Imóvel',
    fileSize: '3.1 MB',
    format: 'PDF',
    isProtected: false,
    description: 'Licença de Alojamento Local ativa, caderneta predial com 420,91 m² de área bruta e Certificado Energético D (remodelação total em 2020).',
    downloadCount: 110,
  },
];

export const DATA_ROOM_DOCS_EN: DataRoomDoc[] = [
  {
    id: 'DOC-001',
    title: 'Financial Dossier & 2023-2025 Accounting Statements',
    category: 'Accounting & Finance',
    fileSize: '4.2 MB',
    format: 'PDF',
    isProtected: false,
    description: 'Confirmed official financial statements (average EBITDA of €36,668.00) and trial balances for the past 3 years.',
    downloadCount: 142,
  },
  {
    id: 'DOC-002',
    title: 'Official Real Estate Valuation Reports (JLL & Exit Casa)',
    category: 'Real Estate & Valuation',
    fileSize: '8.7 MB',
    format: 'PDF',
    isProtected: false,
    description: 'Official property appraisals from JLL (€980,000 in Oct 2025) and Exit Casa Aveiro (€1,050,000 in Jul 2026), establishing asset baseline at €1,000,000.',
    downloadCount: 98,
  },
  {
    id: 'DOC-003',
    title: 'Novo Banco Financing Agreement (Maturity June 2037)',
    category: 'Banking & Legal',
    fileSize: '2.1 MB',
    format: 'PDF',
    isProtected: true,
    description: 'Bank debt with remaining principal of €314,001.86 (as of June 30, 2026), monthly payment of €2,984 with 64% principal amortization (~€23k/yr).',
    downloadCount: 65,
  },
  {
    id: 'DOC-004',
    title: 'Draft Share Purchase Agreement (Vetores & Hipotenusas, Lda.)',
    category: 'Legal & Tax',
    fileSize: '1.5 MB',
    format: 'PDF',
    isProtected: true,
    description: 'Purchase contract for 100% corporate shares of the entity owning the Besmart brand and real estate, exempt from transfer tax and stamp duty (~€75k).',
    downloadCount: 52,
  },
  {
    id: 'DOC-005',
    title: 'Short-Term Rental License (RNAL 129411/AL), Energy Certificate D & Property Register',
    category: 'Licensing & Property',
    fileSize: '3.1 MB',
    format: 'PDF',
    isProtected: false,
    description: 'Active short-term rental license, tax registry showing 420.91 sqm gross floor area, and D Energy Certificate (full renovation in 2020).',
    downloadCount: 110,
  },
];

export function getDataRoomDocs(lang: Language = 'PT'): DataRoomDoc[] {
  return lang === 'EN' ? DATA_ROOM_DOCS_EN : DATA_ROOM_DOCS_PT;
}

export const DATA_ROOM_DOCS = DATA_ROOM_DOCS_PT;

export const RISK_RETURN_BENCHMARKS_PT = [
  { name: 'PBSA Europeu Tradicional', risk: 5, yield: 4.2, size: 12, fill: '#94a3b8' },
  { name: 'Besmart Boutique Aveiro', risk: 8, yield: 6.08, size: 28, fill: '#2563eb' },
  { name: 'Habitação Tradicional Aveiro', risk: 14, yield: 5.2, size: 14, fill: '#cbd5e1' },
  { name: 'Fundo Imobiliário Comercial', risk: 11, yield: 5.8, size: 14, fill: '#f59e0b' },
];

export const RISK_RETURN_BENCHMARKS_EN = [
  { name: 'European Traditional PBSA', risk: 5, yield: 4.2, size: 12, fill: '#94a3b8' },
  { name: 'Besmart Boutique Aveiro', risk: 8, yield: 6.08, size: 28, fill: '#2563eb' },
  { name: 'Aveiro Residential Rental', risk: 14, yield: 5.2, size: 14, fill: '#cbd5e1' },
  { name: 'Commercial Real Estate Fund', risk: 11, yield: 5.8, size: 14, fill: '#f59e0b' },
];

export function getRiskReturnBenchmarks(lang: Language = 'PT') {
  return lang === 'EN' ? RISK_RETURN_BENCHMARKS_EN : RISK_RETURN_BENCHMARKS_PT;
}

export const RISK_RETURN_BENCHMARKS = RISK_RETURN_BENCHMARKS_PT;

