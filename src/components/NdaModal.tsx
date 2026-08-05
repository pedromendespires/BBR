import React, { useState } from 'react';
import { NdaFormData } from '../types';
import confetti from 'canvas-confetti';
import { Lock, CheckCircle2, X, Building, Mail, Phone, User, Send } from 'lucide-react';

interface NdaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NdaModal: React.FC<NdaModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<NdaFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    investorType: 'Fundo ou Family Office',
    agreedToTerms: true,
    interestLevel: 'Comprar Ativo Imobiliário + Operação (1.2M€)',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/nda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setReceiptData(data.data);
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error('Erro ao submeter NDA:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#F5F2ED] max-w-lg w-full p-5 sm:p-8 relative border border-black/20 space-y-6 text-[#0F172A] shadow-2xl rounded-2xl my-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-[#0F172A] text-white hover:bg-black transition-all cursor-pointer rounded-lg min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5] flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#00A8B5]" />
                  <span>Acordo de Confidencialidade (NDA)</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C2340] tracking-tight">
                Solicitar Acesso ao Dossiê Completo
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                Aceda às demonstrações financeiras detalhadas, minuta de aquisição de quotas e agende a visita presencial.
              </p>
            </div>

            {/* Input Name */}
            <div>
              <label className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider mb-1 block">
                Nome Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Dra. Sofia Monteiro"
                  className="w-full bg-white border border-black/10 pl-9 pr-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#00A8B5] rounded-lg font-light min-h-[42px]"
                />
              </div>
            </div>

            {/* Input Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider mb-1 block">
                  Email Institucional *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sofia@investimentos.pt"
                    className="w-full bg-white border border-black/10 pl-9 pr-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#00A8B5] rounded-lg font-light min-h-[42px]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider mb-1 block">
                  Telefone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+351 910 000 000"
                    className="w-full bg-white border border-black/10 pl-9 pr-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#00A8B5] rounded-lg font-light min-h-[42px]"
                  />
                </div>
              </div>
            </div>

            {/* Company & Investor Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider mb-1 block">
                  Empresa / Entidade
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex: Capital Asset Mgt"
                    className="w-full bg-white border border-black/10 pl-9 pr-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#00A8B5] rounded-lg font-light min-h-[42px]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider mb-1 block">
                  Perfil de Investidor
                </label>
                <select
                  value={formData.investorType}
                  onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                  className="w-full bg-white border border-black/10 px-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#00A8B5] rounded-lg font-light min-h-[42px]"
                >
                  <option value="Fundo ou Family Office">Fundo / Family Office</option>
                  <option value="Investidor Individual">Investidor Individual / Privado</option>
                  <option value="Consultor / Broker">Broker ou Consultor M&A</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            {/* Checkbox Terms */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                className="mt-0.5 accent-[#00A8B5] w-4 h-4"
              />
              <label htmlFor="terms" className="text-[10px] text-slate-600 leading-tight font-light cursor-pointer">
                Confirmo que as informações prestadas são verdadeiras e aceito manter sob estrita confidencialidade todos os dados financeiros recebidos relativos à Vetores & Hipotenusas, Lda.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-[#0F172A] hover:bg-[#00A8B5] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitting ? 'A Processar Pedido...' : 'Enviar Pedido de NDA & VDR'}</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#0F172A] text-[#00A8B5] flex items-center justify-center mx-auto rounded-full">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">Pedido Submetido com Sucesso!</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-light">
              Obrigado pelo interesse na Besmart Boutique Residence. O seu código de referência do pedido é{' '}
              <strong className="text-[#00A8B5] font-bold">{receiptData?.id || 'NDA-982134'}</strong>. O responsável do dossiê entrará em contacto dentro de 24 horas.
            </p>

            <div className="bg-white p-4 border border-black/10 text-left text-xs space-y-1 font-light rounded-xl">
              <p className="font-bold text-[#0F172A]">Resumo da Solicitação:</p>
              <p className="text-slate-600">Investidor: {receiptData?.name}</p>
              <p className="text-slate-600">Email: {receiptData?.email}</p>
              <p className="text-slate-600">Perfil: {receiptData?.investorType}</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-[#0F172A] hover:bg-[#00A8B5] text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer rounded-xl min-h-[44px]"
            >
              Concluir & Regressar ao Dossiê
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

