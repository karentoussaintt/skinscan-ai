export default function Dashboard() {
  const records = [
    { table: "core_outputs", description: "Skin analysis results saved by users", week: "Week 1", count: "3+ records" },
    { table: "research_outputs", description: "Research and benchmarking snapshots", week: "Week 2", count: "1+ records" },
    { table: "pricing_scenarios", description: "Revenue simulation scenarios saved", week: "Week 3", count: "3+ records" },
    { table: "marketing_assets", description: "Saved social posts and video scripts", week: "Week 4", count: "5+ records" },
    { table: "chat_sessions", description: "Chatbot conversations and user feedback", week: "Week 5", count: "3+ records" },
  ];

  const pages = [
    { page: "/", name: "Homepage", status: "✅ Live", week: "Week 0", description: "Product landing page with hero, stats, pricing preview" },
    { page: "/core", name: "Skin Analysis", status: "✅ Live", week: "Week 1", description: "AI skin intake form with personalized recommendations" },
    { page: "/research", name: "Research Dashboard", status: "✅ Live", week: "Week 2", description: "8 competitors, 5 benchmarks, Mexico market data, risk map" },
    { page: "/product", name: "Product Architecture", status: "✅ Live", week: "Week 3", description: "3 pricing tiers and 2 customer segments" },
    { page: "/pricing", name: "Pricing Simulator", status: "✅ Live", week: "Week 3", description: "Interactive revenue calculator with saved scenarios" },
    { page: "/marketing", name: "Marketing Engine", status: "✅ Live", week: "Week 4", description: "Persona, 10 social posts, 3 video scripts, A/B tester" },
    { page: "/chat", name: "Public Chatbot", status: "✅ Live", week: "Week 5", description: "Guided assistant with guardrails and feedback rating" },
    { page: "/demo", name: "Final Demo", status: "✅ Live", week: "Week 6", description: "Integrated venture walkthrough and impact report" },
    { page: "/dashboard", name: "Dashboard", status: "✅ Live", week: "Week 6", description: "All saved records and Supabase data overview" },
    { page: "/docs", name: "Documentation", status: "✅ Live", week: "Week 0", description: "Prompt library and build logs" },
  ];

  return (
    <main className="min-h-screen bg-rose-50">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-500">SkinScan AI</h1>
        <div className="flex gap-3 text-sm flex-wrap">
          <a href="/" className="text-gray-600 hover:text-rose-500">Home</a>
          <a href="/core" className="text-gray-600 hover:text-rose-500">Scan</a>
          <a href="/research" className="text-gray-600 hover:text-rose-500">Research</a>
          <a href="/product" className="text-gray-600 hover:text-rose-500">Product</a>
          <a href="/pricing" className="text-gray-600 hover:text-rose-500">Pricing</a>
          <a href="/marketing" className="text-gray-600 hover:text-rose-500">Marketing</a>
          <a href="/chat" className="text-gray-600 hover:text-rose-500">Chat</a>
          <a href="/dashboard" className="text-rose-500 font-semibold">Dashboard</a>
          <a href="/demo" className="text-gray-600 hover:text-rose-500">Demo</a>
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h2>
        <p className="text-gray-500 mb-10">All saved records and live pages across SkinScan AI.</p>

        {/* Supabase Records */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🗄️ Supabase Data Records</h3>
          <div className="grid grid-cols-1 gap-4">
            {records.map((r, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="font-semibold text-gray-800">{r.table}</p>
                  <p className="text-gray-500 text-sm">{r.description}</p>
                </div>
                <div className="text-right">
                  <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-semibold">{r.week}</span>
                  <p className="text-gray-400 text-xs mt-1">{r.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Pages */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🌐 All Live Pages</h3>
          <div className="grid grid-cols-1 gap-3">
            {pages.map((p, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-gray-100 pb-3">
                <span className="text-green-500 font-bold text-sm w-6">✅</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <a href={p.page} className="font-semibold text-rose-500 hover:underline text-sm">{p.page}</a>
                    <span className="text-gray-400 text-xs">— {p.name}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{p.description}</p>
                </div>
                <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">{p.week}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl font-bold text-rose-500">10</p>
            <p className="text-gray-500 text-sm mt-1">Live Pages</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl font-bold text-rose-500">5</p>
            <p className="text-gray-500 text-sm mt-1">Supabase Tables</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl font-bold text-rose-500">5</p>
            <p className="text-gray-500 text-sm mt-1">External Testers</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl font-bold text-rose-500">6</p>
            <p className="text-gray-500 text-sm mt-1">Weeks Built</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}