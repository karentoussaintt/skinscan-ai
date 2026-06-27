"use client";
import { useState } from "react";

const botResponses: Record<string, string> = {
  oily: "For oily skin, I recommend: 1) A gentle foaming cleanser with salicylic acid, 2) A lightweight oil-free moisturizer with niacinamide, 3) SPF 50 gel sunscreen daily. Avoid heavy creams and coconut oil.",
  dry: "For dry skin, I recommend: 1) A creamy hydrating cleanser with ceramides, 2) A rich moisturizer with hyaluronic acid and shea butter, 3) SPF 50 cream sunscreen. Look for products with glycerin and squalane.",
  combination: "For combination skin, I recommend: 1) A balanced gel cleanser, 2) A lightweight moisturizer with hyaluronic acid for the whole face, 3) SPF 50 fluid sunscreen. Use mattifying products only on the T-zone.",
  sensitive: "For sensitive skin, I recommend: 1) A fragrance-free gentle cleanser, 2) A calming moisturizer with centella asiatica and ceramides, 3) Mineral SPF 50 sunscreen. Avoid alcohol, fragrance, and harsh exfoliants.",
  normal: "For normal skin, I recommend: 1) A gentle balanced cleanser, 2) A light daily moisturizer with antioxidants, 3) SPF 50 sunscreen. You have flexibility — focus on maintaining your skin barrier.",
  acne: "For acne concerns: Look for products with salicylic acid (BHA) or benzoyl peroxide. Avoid pore-clogging ingredients like coconut oil. A simple 3-step routine works best — cleanser, lightweight moisturizer, SPF.",
  redness: "For redness and rosacea: Use fragrance-free, gentle products. Look for centella asiatica, green tea, and niacinamide. Avoid hot water, harsh scrubs, and alcohol-based products.",
  wrinkles: "For anti-aging concerns: Look for retinol (start slow), vitamin C serum in the morning, and peptides. Always use SPF 50 — it's the most effective anti-aging product. Hyaluronic acid helps with plumpness.",
  dehydration: "For dehydrated skin: Focus on hydrating ingredients like hyaluronic acid, glycerin, and ceramides. Drink more water and avoid harsh cleansers that strip your skin barrier. Layer a hydrating toner before moisturizer.",
  default: "Based on what you've shared, I recommend keeping your routine simple: a gentle cleanser, a moisturizer suited to your skin type, and SPF 50 daily. Less is more when it comes to skincare!",
};

const guardrailKeywords = ["doctor", "dermatologist", "prescription", "disease", "infection", "medication", "cancer", "medical", "diagnose", "treatment", "cure", "rash", "allergy reaction"];

const intakeQuestions = [
  {
    id: "skinType",
    question: "Hi! I'm SkinScan AI 👋 Let's find your perfect skincare routine. First — what's your skin type?",
    options: ["Oily", "Dry", "Combination", "Sensitive", "Normal", "I don't know"]
  },
  {
    id: "concern",
    question: "Got it! What's your main skin concern right now?",
    options: ["Acne", "Redness / Rosacea", "Wrinkles / Aging", "Dehydration", "Dark spots", "Just maintenance"]
  },
  {
    id: "ageRange",
    question: "Almost done! What's your age range?",
    options: ["18-25", "26-35", "36-45", "46-60"]
  }
];

type Message = {
  role: "bot" | "user";
  text: string;
  feedback?: "up" | "down" | null;
  id: number;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: intakeQuestions[0].question, id: 0, feedback: null }
  ]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(false);

  const addMessage = (role: "bot" | "user", text: string) => {
    setMessages(prev => [...prev, { role, text, id: prev.length, feedback: null }]);
  };

  const handleFeedback = (id: number, type: "up" | "down") => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, feedback: type } : m));
  };

  const handleOption = (option: string) => {
    addMessage("user", option);
    const newAnswers = { ...answers, [intakeQuestions[step].id]: option };
    setAnswers(newAnswers);

    if (step < intakeQuestions.length - 1) {
      setTimeout(() => {
        addMessage("bot", intakeQuestions[step + 1].question);
        setStep(step + 1);
      }, 500);
    } else {
      setTimeout(() => {
        const skinType = newAnswers.skinType?.toLowerCase() || "";
        const concern = newAnswers.concern?.toLowerCase() || "";
        let response = botResponses[skinType] || botResponses[concern] || botResponses.default;
        response += "\n\n⚠️ Note: This is simulated AI output. Always consult a dermatologist for medical skin conditions.";
        addMessage("bot", response);
        setDone(true);
      }, 500);
    }
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const isGuardrail = guardrailKeywords.some(k => input.toLowerCase().includes(k));
    addMessage("user", input);
    setInput("");

    setTimeout(() => {
      if (isGuardrail) {
        addMessage("bot", "🚨 I'm not able to provide medical advice or diagnose skin conditions. For medical concerns, please consult a licensed dermatologist. I can help you with general skincare routines and product recommendations for healthy skin! ✨");
      } else {
        addMessage("bot", "Great question! For personalized skincare advice, I recommend keeping your routine simple: cleanser → moisturizer → SPF. Would you like to restart the skin analysis to get more specific recommendations? ⚠️ Simulated AI output.");
      }
    }, 500);
  };

  return (
    <main className="min-h-screen bg-rose-50">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-500">SkinScan AI</h1>
        <div className="flex gap-4 text-sm">
          <a href="/" className="text-gray-600 hover:text-rose-500">Home</a>
          <a href="/core" className="text-gray-600 hover:text-rose-500">Scan</a>
          <a href="/research" className="text-gray-600 hover:text-rose-500">Research</a>
          <a href="/product" className="text-gray-600 hover:text-rose-500">Product</a>
          <a href="/pricing" className="text-gray-600 hover:text-rose-500">Pricing</a>
          <a href="/marketing" className="text-gray-600 hover:text-rose-500">Marketing</a>
          <a href="/chat" className="text-rose-500 font-semibold">Chat</a>
          <a href="/dashboard" className="text-gray-600 hover:text-rose-500">Dashboard</a>
<a href="/demo" className="text-gray-600 hover:text-rose-500">Demo</a>
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
        </div>
      </nav>

      <section className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">SkinScan AI Assistant</h2>
          <p className="text-gray-500 text-sm">Guided skincare advice · Simulated AI · Not medical advice</p>
        </div>

        {/* Chat Window */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4 min-h-96 max-h-96 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
              <div className={`inline-block px-4 py-3 rounded-2xl max-w-xs text-sm whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-rose-500 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}>
                {msg.text}
              </div>
              {msg.role === "bot" && (
                <div className="flex gap-2 mt-1">
                  <button onClick={() => handleFeedback(msg.id, "up")}
                    className={`text-sm px-2 py-1 rounded-lg ${msg.feedback === "up" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500 hover:bg-green-50"}`}>
                    👍
                  </button>
                  <button onClick={() => handleFeedback(msg.id, "down")}
                    className={`text-sm px-2 py-1 rounded-lg ${msg.feedback === "down" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500 hover:bg-red-50"}`}>
                    👎
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Reply Options */}
        {!done && step < intakeQuestions.length && (
          <div className="flex flex-wrap gap-2 mb-4">
            {intakeQuestions[step].options.map((option) => (
              <button key={option} onClick={() => handleOption(option)}
                className="bg-white border border-rose-300 text-rose-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-50">
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Free Text Input */}
        {done && (
          <form onSubmit={handleUserInput} className="flex gap-2 mb-4">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a follow-up question..."
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
            />
            <button type="submit" className="bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-rose-600">
              Send →
            </button>
          </form>
        )}

        {/* Save Chat */}
        {done && (
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-700">Chat complete!</p>
                <p className="text-xs text-gray-400">Skin type: {answers.skinType} · Concern: {answers.concern} · Age: {answers.ageRange}</p>
              </div>
              <button onClick={() => setSaved(true)}
                className="bg-rose-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-rose-600">
                {saved ? "✅ Saved!" : "Save Chat →"}
              </button>
            </div>
          </div>
        )}
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint · Not medical advice
      </footer>
    </main>
  );
}