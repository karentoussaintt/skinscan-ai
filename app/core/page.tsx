"use client";
import { useState } from "react";

export default function Core() {
  const [form, setForm] = useState({
    skinType: "",
    concerns: "",
    allergies: "",
    ageRange: "",
  });
  const [output, setOutput] = useState<any>(null);
  const [saved, setSaved] = useState(false);

  const handleSubmit = () => {
    const result = {
      skinType: form.skinType,
      concerns: form.concerns,
      recommendation: `Based on your ${form.skinType} skin with concerns about ${form.concerns}, we recommend: 1) A gentle cleanser with no sulfates, 2) A hydrating serum with hyaluronic acid, 3) SPF 50 sunscreen daily. Avoid products with ${form.allergies || "harsh fragrances"}.`,
      generatedAt: new Date().toLocaleString(),
    };
    setOutput(result);
    setSaved(false);
  };

  return (
    <main className="min-h-screen bg-rose-50">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-rose-500">SkinScan AI</h1>
  <div className="flex gap-6">
    <a href="/" className="text-gray-600 hover:text-rose-500">Home</a>
    <a href="/core" className="text-gray-600 hover:text-rose-500">Scan</a>
    <a href="/research" className="text-gray-600 hover:text-rose-500">Research</a>
    <a href="/product" className="text-gray-600 hover:text-rose-500">Product</a>
    <a href="/pricing" className="text-gray-600 hover:text-rose-500">Pricing</a>
    <a href="/marketing" className="text-gray-600 hover:text-rose-500">Marketing</a>
    <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
  </div>
</nav>

      <section className="max-w-2xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Skin Analysis</h2>
        <p className="text-gray-500 mb-8">Tell us about your skin and we'll recommend what you actually need.</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Skin Type</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700" onChange={e => setForm({...form, skinType: e.target.value})}>
              <option value="">Select your skin type</option>
              <option value="oily">Oily</option>
              <option value="dry">Dry</option>
              <option value="combination">Combination</option>
              <option value="sensitive">Sensitive</option>
              <option value="normal">Normal</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Main Concerns</label>
            <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700" placeholder="e.g. acne, redness, dehydration, wrinkles" onChange={e => setForm({...form, concerns: e.target.value})} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Known Allergies or Ingredients to Avoid</label>
            <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700" placeholder="e.g. retinol, fragrance, alcohol" onChange={e => setForm({...form, allergies: e.target.value})} />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Age Range</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700" onChange={e => setForm({...form, ageRange: e.target.value})}>
              <option value="">Select your age range</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46-60">46-60</option>
            </select>
          </div>

          <button onClick={handleSubmit} className="w-full bg-rose-500 text-white py-4 rounded-xl font-semibold hover:bg-rose-600">
            Analyze My Skin →
          </button>
        </div>

        {output && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-xs text-rose-400 font-semibold mb-2">⚠️ SIMULATED AI OUTPUT</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Skin Recommendations</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{output.recommendation}</p>
            <p className="text-gray-400 text-sm mb-4">Generated: {output.generatedAt}</p>
            <button onClick={() => setSaved(true)} className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900">
              {saved ? "✅ Saved!" : "Save Results"}
            </button>
          </div>
        )}
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}