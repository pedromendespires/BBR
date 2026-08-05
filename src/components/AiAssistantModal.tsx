import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, Loader2 } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenNda: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
}

const PRESET_QUESTIONS = [
  'Qual a rentabilidade em cenário conservador?',
  'Como funciona a poupança do Share Deal de 75k€?',
  'Quais os custos operacionais fixos (OPEX)?',
  'Como é gerida a ocupação no Verão?',
  'Qual a maturidade e taxa do empréstimo bancário?',
];

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose, onOpenNda }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Olá! Sou o Assistente de IA de Investimento da Besmart Boutique Residence em Aveiro. Como posso ajudar com dúvidas sobre o EBITDA, retorno, dívida ou modelo operacional?',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const sendMessage = async (userText: string) => {
    if (!userText.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history }),
      });

      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || 'Desculpe, ocorreu uma falha ao consultar os dados.',
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Erro na resposta da IA:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: 'Ocorreu um erro ao comunicar com a IA. Pode consultar todos os dados financeiros no simulador interativo e no dossiê.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0F172A] max-w-2xl w-full h-[600px] max-h-[90vh] text-white border border-white/20 flex flex-col overflow-hidden relative shadow-2xl">
        {/* Header */}
        <div className="p-5 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#B59410] text-white flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white">Assistente de IA M&A</h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-light">Respostas fundamentadas no Dossiê</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 text-xs font-light">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'assistant' && (
                <div className="w-7 h-7 bg-[#B59410] text-white flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-4 leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#B59410] text-white font-medium'
                    : 'bg-slate-900 text-slate-200 border border-slate-800'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 bg-slate-700 text-white flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-10">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#B59410]" />
              <span>A analisar os dados do dossiê...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset Chips */}
        <div className="px-4 py-2 bg-slate-950 border-t border-white/10 flex gap-2 overflow-x-auto no-scrollbar">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(q)}
              className="px-3 py-1.5 bg-slate-900 hover:bg-[#B59410] text-slate-300 hover:text-white text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border border-slate-800 cursor-pointer shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            placeholder="Faça uma pergunta sobre o investimento em Aveiro..."
            className="flex-1 bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#B59410] font-light"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            className="p-2.5 bg-[#B59410] hover:bg-amber-600 disabled:opacity-40 text-white transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

