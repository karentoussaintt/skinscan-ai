export default function Product() {
  const tiers = [
    {
      name: "Free",
      price: "$0 MXN",
      color: "bg-gray-50",
      badge: "bg-gray-200 text-gray-700",
      features: [
        "1 skin scan per day",
        "Basic skin type detection",
        "3-step routine suggestion",
        "Budget-friendly product recommendations",
        "Access to /core page",
      ],
      notIncluded: [
        "Ingredient conflict checker",
        "Saved scan history",
        "Priority recommendations",
        "Brand comparison tool",
      ]
    },
    {
      name: "Pro",
      price: "$99 MXN/mo",
      color: "bg-rose-50",
      badge: "bg-rose-400 text-white",
      features: [
        "Unlimited skin scans",
        "Advanced skin condition detection",
        "Ingredient conflict checker",
        "Saved scan history (30 days)",
        "Smart price comparison",
        "Budget vs premium alternatives",
        "Weekly skin progress report",
      ],
      notIncluded: [
        "Dermatologist-level analysis",
        "Brand partnership deals",
      ]
    },
    {
      name: "Premium",
      price: "$199 MXN/mo",
      color: "bg-rose-100",
      badge: "bg-rose-600 text-white",
      features: [
        "Everything in Pro",
        "Dermatologist-level AI analysis",
        "Unlimited scan history",
        "Personalized monthly skin report",
        "Early access to new features",
        "Priority customer support",
        "Exclusive brand partnership deals",
        "Custom routine builder",
      ],
      notIncluded: []
    }
  ];

  const segments = [
    {
      name: "The Smart Buyer",
      age: "23–45 years old",
      description: "Feels overwhelmed by TikTok and Instagram skincare trends. Wants simple 3-step routines and uses scanning to confirm if a product on sale actually works for her skin type. Doesn't want the most expensive — wants the best for her budget.",
      plan: "Free → Pro",
      icon: "🛍️"
    },
    {
      name: "The Conscious Spender",
      age: "35–60 years old",
      description: "Focused on skin aging, dryness, and specific conditions. Already spends on skincare but wants to make sure every product is actually working. Uses SkinScan AI to validate purchases and build a science-backed routine.",
      plan: "Pro → Premium",
      icon: "💎"
    }
  ];

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

      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Product Architecture</h2>
        <p className="text-gray-500 mb-12">Three plans designed for every stage of your skincare journey.</p>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <div key={i} className={`${tier.color} rounded-2xl p-8 shadow-sm`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{tier.name}</h3>
                <span className={`${tier.badge} px-3 py-1 rounded-full text-sm font-semibold`}>{tier.name}</span>
              </div>
              <p className="text-3xl font-bold text-rose-500 mb-6">{tier.price}</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">✅ Included:</p>
                {tier.features.map((f, j) => (
                  <p key={j} className="text-gray-700 text-sm mb-1">• {f}</p>
                ))}
              </div>
              {tier.notIncluded.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">❌ Not included:</p>
                  {tier.notIncluded.map((f, j) => (
                    <p key={j} className="text-gray-400 text-sm mb-1">• {f}</p>
                  ))}
                </div>
              )}
              <a href="/pricing" className="mt-6 block text-center bg-rose-500 text-white py-3 rounded-xl font-semibold hover:bg-rose-600">
                Calculate Revenue →
              </a>
            </div>
          ))}
        </div>

        {/* Customer Segments */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6">👥 Customer Segments</h3>
        <div className="grid grid-cols-2 gap-6">
          {segments.map((seg, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">{seg.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">{seg.name}</h4>
              <p className="text-rose-500 text-sm font-semibold mb-3">{seg.age}</p>
              <p className="text-gray-600 text-sm mb-4">{seg.description}</p>
              <div className="bg-rose-50 rounded-xl px-4 py-2">
                <p className="text-xs text-gray-500 font-semibold">RECOMMENDED PLAN</p>
                <p className="text-rose-500 font-bold">{seg.plan}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}