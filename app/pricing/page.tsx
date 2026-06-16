"use client";
import { useState } from "react";

const plans = [
  { name: "Free", price: 0, color: "bg-gray-100 text-gray-700" },
  { name: "Pro", price: 99, color: "bg-rose-100 text-rose-700" },
  { name: "Premium", price: 199, color: "bg-rose-200 text-rose-800" },
];

const assumptions = [
  { item: "Free plan conversion to Pro", value: "15% of free users" },
  { item: "Pro plan conversion to Premium", value: "20% of Pro users" },
  { item: "Average user lifetime", value: "8 months" },
  { item: "Monthly churn rate", value: "5%" },
  { item: "Target market (Mexico)", value: "Women 23-60, middle class" },
  { item: "Pricing currency", value: "Mexican Pesos (MXN)" },
];

export default function Pricing() {
  const [users, setUsers] = useState(100);
  const [selectedPlan, setSelectedPlan] = useState("Pro");
  const [billing, setBilling] = useState("monthly");
  const [saved, setSaved] = useState<any[]>([]);
  const [scenarioName, setScenarioName] = useState("");

  const plan = plans.find(p => p.name === selectedPlan)!;
  const monthlyRevenue = users * plan.price;
  const annualRevenue = monthlyRevenue * 12;
  const displayRevenue = billing === "monthly" ? monthlyRevenue : annualRevenue;

  const saveScenario = () => {
    if (!scenarioName) return;
    const scenario = {
      name: scenarioName,
      plan: selectedPlan,
      users,
      billing,
      revenue: displayRevenue,
      savedAt: new Date().toLocaleString(),
    };
    setSaved([...saved, scenario]);
    setScenarioName("");
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
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Pricing Simulator</h2>
        <p className="text-gray-500 mb-10">Calculate monthly and annual revenue for SkinScan AI based on your growth scenarios.</p>

        {/* Calculator */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">💰 Revenue Calculator</h3>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Number of Users</label>
              <input
                type="number"
                value={users}
                onChange={e => setUsers(Number(e.target.value))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700"
                min="0"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Plan</label>
              <select
                value={selectedPlan}
                onChange={e => setSelectedPlan(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700"
              >
                {plans.map(p => (
                  <option key={p.name} value={p.name}>{p.name} — ${p.price} MXN/mo</option>
                ))}
              </select>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-xl font-semibold ${billing === "monthly" ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-600"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-6 py-2 rounded-xl font-semibold ${billing === "annual" ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-600"}`}
            >
              Annual
            </button>
          </div>

          {/* Revenue Output */}
          <div className="bg-rose-50 rounded-2xl p-6 text-center mb-6">
            <p className="text-gray-500 text-sm mb-1">{billing === "monthly" ? "Monthly" : "Annual"} Revenue — {selectedPlan} Plan</p>
            <p className="text-5xl font-bold text-rose-500">${displayRevenue.toLocaleString()} MXN</p>
            <p className="text-gray-400 text-sm mt-2">{users} users × ${plan.price} MXN {billing === "annual" ? "× 12 months" : "/month"}</p>
          </div>

          {/* Save Scenario */}
          <div className="flex gap-4">
            <input
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-700"
              placeholder="Name this scenario (e.g. Conservative Q1)"
              value={scenarioName}
              onChange={e => setScenarioName(e.target.value)}
            />
            <button
              onClick={saveScenario}
              className="bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-600"
            >
              Save Scenario →
            </button>
          </div>
        </div>

        {/* Saved Scenarios */}
        {saved.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Saved Scenarios</h3>
            <div className="grid grid-cols-1 gap-4">
              {saved.map((s, i) => (
                <div key={i} className="bg-rose-50 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">{s.name}</p>
                    <p className="text-gray-500 text-sm">{s.users} users · {s.plan} · {s.billing}</p>
                    <p className="text-gray-400 text-xs">{s.savedAt}</p>
                  </div>
                  <p className="text-2xl font-bold text-rose-500">${s.revenue.toLocaleString()} MXN</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Assumptions Table */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Assumptions</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-rose-50">
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">Assumption</th>
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {assumptions.map((a, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-700">{a.item}</td>
                  <td className="px-4 py-3 text-gray-500">{a.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}