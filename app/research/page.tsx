"use client";
import { useState } from "react";

const competitors = [
  { name: "Skin Genius (L'Oréal)", category: "AI Analysis", country: "France", price: "Free", gap: "Only recommends L'Oréal products — not neutral" },
  { name: "OnSkin", category: "Ingredient Scanner", country: "Global", price: "Freemium", gap: "Inconsistent results — same product gets different scores" },
  { name: "TroveSkin", category: "Skin Tracking", country: "Singapore", price: "Freemium", gap: "Accuracy questioned in reviews, not for diagnosis" },
  { name: "Skin Bliss", category: "Routine Builder", country: "Spain", price: "Freemium", gap: "English only, no Latin American market consideration" },
  { name: "Yuka", category: "Ingredient Scanner", country: "France", price: "Freemium", gap: "Focused on food, not specialized in skincare" },
  { name: "Glo Skin", category: "AI Analysis", country: "Global", price: "Free", gap: "Too basic, doesn't consider specific allergies" },
  { name: "Perfect Corp", category: "AI Analysis", country: "Taiwan", price: "Paid B2B", gap: "Expensive, focused on businesses not consumers" },
  { name: "Lovi", category: "Medical Analysis", country: "Global", price: "Premium", gap: "Not available in Spanish or for Mexican market" },
];

const benchmarks = [
  { title: "L'Oréal Beauty Genius", country: "🇫🇷 France", insight: "400,000+ consultations processed with agentic AI that remembers past conversations" },
  { title: "TroveSkin", country: "🇸🇬 Singapore", insight: "Skin tracking over time with daily photo comparisons and habit logging" },
  { title: "Yuka", country: "🇫🇷 France", insight: "50M+ users scanning food and cosmetic ingredients globally" },
  { title: "Perfect Corp", country: "🇹🇼 Taiwan", insight: "Enterprise-grade AI skin analysis used by 400+ beauty brands worldwide" },
  { title: "Lovi", country: "🌍 Global", insight: "Medical-grade face scanning trained by professionals, not beauty influencers" },
];

const risks = [
  { risk: "AI accuracy concerns", level: "Medium", mitigation: "Label all outputs as simulated and recommend consulting a dermatologist" },
  { risk: "No Spanish-language competitors", level: "Opportunity", mitigation: "SkinScan AI fills this gap for the Mexican market" },
  { risk: "User trust in AI skincare advice", level: "Medium", mitigation: "Be transparent about simulated outputs and add disclaimer" },
  { risk: "Competition from big brands like L'Oréal", level: "High", mitigation: "Focus on neutrality — SkinScan AI recommends any brand, not just one" },
];

export default function Research() {
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState(false);

  const filtered = competitors.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase()) ||
    c.country.toLowerCase().includes(search.toLowerCase()) ||
    c.price.toLowerCase().includes(search.toLowerCase())
  );

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
    <a href="/chat" className="text-gray-600 hover:text-rose-500">Chat</a>
    <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
  </div>
</nav>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Research + Benchmarking</h2>
        <p className="text-gray-500 mb-10">Proving the problem is real and identifying market gaps for SkinScan AI.</p>

        {/* Mexico Market */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🇲🇽 Mexico Market Opportunity</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-rose-50 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-rose-500">$2.1B</p>
              <p className="text-gray-500 text-sm">Mexico beauty market size</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-rose-500">0</p>
              <p className="text-gray-500 text-sm">Spanish AI skincare apps for Mexico</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-rose-500">68%</p>
              <p className="text-gray-500 text-sm">Women influenced by social media to buy skincare</p>
            </div>
          </div>
        </div>

        {/* Competitor Table */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Competitor Analysis</h3>
          <input
            className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-700"
            placeholder="Filter by name or category..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-rose-50">
                  <th className="text-left px-4 py-3 text-gray-600 font-semibold">Competitor</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-semibold">Category</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-semibold">Country</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-semibold">Price</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-semibold">Gap vs SkinScan AI</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{c.name}</td>
                    <td className="px-4 py-3 text-gray-600">{c.category}</td>
                    <td className="px-4 py-3 text-gray-600">{c.country}</td>
                    <td className="px-4 py-3 text-gray-600">{c.price}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{c.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Benchmarks */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🌍 5 Global Benchmarks</h3>
          <div className="grid grid-cols-1 gap-4">
            {benchmarks.map((b, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-gray-800">{b.title}</h4>
                  <span className="text-sm text-gray-500">{b.country}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{b.insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Map */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Risk Map</h3>
          <div className="grid grid-cols-1 gap-4">
            {risks.map((r, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${r.level === "High" ? "bg-red-100 text-red-600" : r.level === "Medium" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}`}>
                  {r.level}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{r.risk}</p>
                  <p className="text-gray-500 text-sm">{r.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">💾 Save Research Record</h3>
          <p className="text-gray-500 mb-4">Save this research snapshot to your dashboard.</p>
          <button
            onClick={() => setSaved(true)}
            className="bg-rose-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-rose-600"
          >
            {saved ? "✅ Research Saved!" : "Save Research →"}
          </button>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}