import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Memory store for NDA requests & messages
  const ndaRequests: Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    investorType: string;
    createdAt: string;
  }> = [];

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Besmart Boutique Residence Dossier API" });
  });

  // Handle NDA request submission
  app.post("/api/nda", (req, res) => {
    const { name, email, phone, company, investorType } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Nome e Email são obrigatórios." });
    }
    const newRequest = {
      id: "NDA-" + Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      phone: phone || "",
      company: company || "",
      investorType: investorType || "Individual",
      createdAt: new Date().toISOString(),
    };
    ndaRequests.push(newRequest);
    console.log("Novo pedido de NDA recebido:", newRequest);
    return res.json({
      success: true,
      message: "Pedido de NDA submetido com sucesso! O nosso responsável entrará em contacto dentro de 24 horas.",
      data: newRequest,
    });
  });

  // AI Investment Assistant endpoint using Gemini SDK
  app.post("/api/ai-assistant", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Mensagem é obrigatória." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "Chave de API Gemini não configurada no servidor.",
          reply: "A chave GEMINI_API_KEY não está configurada no ambiente. Pode consultar os dados do dossiê interativo diretamente na página.",
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemPrompt = `Você é o Assistente Virtual de Investimentos da Besmart Boutique Residence em Aveiro.
Responda a dúvidas de potenciais investidores de forma profissional, precisa, cortês e fundamentada nos dados reais do Dossiê de Investimento oficial:

DADOS CHAVE DA OPERAÇÃO:
- Sociedade & Marca: Vetores & Hipotenusas, Lda., única detentora da marca Besmart e do imóvel.
- Licença Alojamento Local: RNAL 129411/AL.
- Ativo Imobiliário: Edifício de 3 pisos, com 420,91 m² de área bruta total. 10 suites exclusivas (quartos com casa de banho privativa), totalizando 21 camas (1 quarto individual, 7 duplos e 2 triplos). Remodelado totalmente em 2020. Classe Energética: D.
- Enterprise Value (EV): 1.200.000 €
- Equity Requerido: ~886.000 €
- Dívida Bancária Assumida: 314.001,86 € (a 30 de junho de 2026) junto do Novo Banco, maturidade em junho de 2037. Prestação de 2.984 €/mês com 64% de amortização de capital (~23.000 €/ano).
- Avaliações Oficiais: JLL (980.000 € em out/2025) e Exit Casa Aveiro (1.050.000 € em jul/2026), fixando a base do imóvel em 1 M€ em 2026. Prémio da operação comercial: apenas 200.000 € (oferece margem de segurança imobiliária de 87,5%).
- Métricas de Rentabilidade: Gross Yield Projetada de ~12,7% e Net Yield Projetada de ~9,1%. Cenário Conservador (102.000 € de receita): Gross Yield de 8,50% e Net Yield Passivo de ~6,08% (superando a média nacional de PBSA em Portugal de 5,25% a 5,75%).
- EBITDA Médio Trienal (2023-2025): 36.668,00 €/ano (2023: 39.222,00 €, 2024: 35.295,00 €, 2025: 35.486,53 €). Sem custos com pessoal (operação enxuta).
- Otimização Operacional: Gestão diária (property management) delegada na Home Sweet Home Aveiro (contrato desde 01/01/2026).
- Isenção Fiscal (Share Deal): Poupança transacional imediata de ~75.000 € em IMT e Imposto do Selo.
- Taxa Fixa Energética: Taxa mensal fixa de 115 € por cama (incluída na mensalidade) para cobrir consumos de energia e serviços públicos.
- Modelo Híbrido de Receita:
  1) Setembro a Julho (Época Letiva - 10,5 Meses): PBSA / Co-Living / Flex Living (suites entre 400 € e 850 €/mês, despesas incluídas). Faturação bruta mensal: 7.000 € a 9.000 €.
  2) Julho e Agosto (Época Balnear - Máx. 45 Noites): Alojamento Local (AL) com ADR de 80 €. Faturação no Verão: 28.800 € (80% ocupação) a 36.000 € (100% ocupação).

Responda sempre em português (ou no idioma em que o utilizador perguntar), mantendo o tom rigoroso de banca de investimento e consultoria imobiliária. Seja claro, conciso e destaque a segurança do ativo e os elevados retornos.`;

      const contents = [];
      if (Array.isArray(history)) {
        for (const item of history) {
          contents.push({
            role: item.role === "user" ? "user" : "model",
            parts: [{ text: item.text }],
          });
        }
      }
      contents.push({
        role: "user",
        parts: [{ text: `${systemPrompt}\n\nPergunta do Investidor: ${message}` }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
      });

      const reply = response.text || "Não foi possível gerar uma resposta detalhada neste momento.";
      return res.json({ reply });
    } catch (err: any) {
      console.error("Erro no AI Assistant Gemini:", err);
      return res.status(500).json({
        error: "Falha ao processar consulta com o assistente AI.",
        reply: "Ocorreu um erro ao consultar o assistente de IA. Por favor tente novamente ou consulte os dados na tabela e nos gráficos do dossiê.",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Besmart Dossier a correr na porta ${PORT}`);
  });
}

startServer();
