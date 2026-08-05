import { Currency, Language } from '../types';

const EXCHANGE_RATES: Record<Currency, number> = {
  EUR: 1.0,
  USD: 1.08,
  GBP: 0.85,
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  EUR: '€',
  USD: '$',
  GBP: '£',
};

export function formatCurrency(amount: number, currency: Currency = 'EUR'): string {
  const converted = amount * EXCHANGE_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  
  const formatted = new Intl.NumberFormat('pt-PT', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(converted));

  if (currency === 'USD') {
    return `${symbol}${formatted}`;
  }
  return `${formatted} ${symbol}`;
}

export function formatPercent(value: number, lang: Language = 'PT'): string {
  if (lang === 'EN') {
    return `${value.toFixed(1)}%`;
  }
  return `${value.toFixed(1).replace('.', ',')}%`;
}

export const TRANSLATIONS = {
  PT: {
    title: 'Besmart Boutique Residence',
    subtitle: 'Aquisição de Ativo Imobiliário e Operação Comercial no Setor de Living no centro histórico de Aveiro.',
    enterpriseValue: 'Enterprise Value (EV)',
    netYield: 'Net Yield',
    equityRequired: 'Equity Requerido',
    bankLoan: 'Dívida Bancária',
    taxSavings: 'Poupança Fiscal Share Deal',
    amortizationRate: 'Amortização de Capital',
    requestNda: 'Solicitar NDA',
    techDocs: 'Ver Documentação Técnica',
    simulatorTitle: 'Simulador Financeiro de Investimento',
    simulatorSubtitle: 'Ajuste os parâmetros para analisar a rentabilidade personalizada em tempo real.',
    capitalStructure: 'Estrutura de Capital (Equity vs. Dívida)',
    ebitdaHistory: 'Evolução do EBITDA (2023-2025)',
    riskReturn: 'Perfil Risco vs. Retorno',
    hybridModel: 'O Modelo de Negócio Híbrido',
    swotAnalysis: 'Análise SWOT Estratégica',
    riskMatrix: 'Matriz de Gestão de Riscos',
    dataRoom: 'Sala de Dados Virtual (Data Room)',
    aiAssistant: 'Assistente de IA para Investidores',
    roomExplorer: 'Explorador de Unidades & Ativo',
  },
  EN: {
    title: 'Besmart Boutique Residence',
    subtitle: 'A unique real estate & operational investment opportunity in the historic heart of Aveiro.',
    enterpriseValue: 'Enterprise Value',
    netYield: 'Net Yield',
    equityRequired: 'Equity Required',
    bankLoan: 'Bank Debt',
    taxSavings: 'Share Deal Tax Savings',
    amortizationRate: 'Capital Amortization',
    requestNda: 'Request NDA',
    techDocs: 'View Technical Documentation',
    simulatorTitle: 'Interactive Financial Investment Simulator',
    simulatorSubtitle: 'Adjust parameters to analyze customized yields and cash flows in real time.',
    capitalStructure: 'Capital Structure (Equity vs. Debt)',
    ebitdaHistory: 'EBITDA Evolution (2023-2025)',
    riskReturn: 'Risk vs. Return Profile',
    hybridModel: 'Hybrid Business Model',
    swotAnalysis: 'Strategic SWOT Analysis',
    riskMatrix: 'Risk Management Matrix',
    dataRoom: 'Virtual Data Room',
    aiAssistant: 'AI Investment Assistant',
    roomExplorer: 'Property & Units Explorer',
  },
};
