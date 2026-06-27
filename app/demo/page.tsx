export default function Demo() {
  const modules = [
    { week: "Week 1", page: "/core", name: "Generative Core Agent", description: "AI skin analysis form with personalized product recommendations based on skin type, concerns, allergies, and age range.", status: "✅ Live" },
    { week: "Week 2", page: "/research", name: "Research + Benchmarking", description: "8 competitor analysis with filterable table, 5 global benchmarks, Mexico market opportunity ($2.1B), and risk map.", status: "✅ Live" },
    { week: "Week 3", page: "/product", name: "Product Architecture", description: "3 pricing tiers (Free, Pro $99 MXN, Premium $199 MXN), feature map, and 2 customer segments.", status: "✅ Live" },
    { week: "Week 3", page: "/pricing", name: "Pricing Simulator", description: "Interactive revenue calculator. 100 Pro users = $9,900 MXN/month = $118,800 MXN/year.", status: "✅ Live" },
    { week: "Week 4", page: "/marketing", name: "Marketing Engine", description: "Target persona (Sofia, 26), 10 social posts, 3 video scripts, 14-day campaign calendar, A/B headline tester.", status: "✅ Live" },
    { week: "Week 5", page: "/chat", name: "Public Chatbot", description: "Guided assistant with 3 intake questions, personalized recommendations, medical guardrails, and thumbs up/down feedback.", status: "✅ Live" },
  ];

  const agentMap = [
    { from: "User visits /", to: "/core", action: "Clicks Scan My Skin" },
    { from: "/core", to: "Supabase core_outputs", action: "Saves skin analysis result" },
    { from: "User visits /research", to: "Supabase research_outputs", action: "Saves research snapshot" },
    { from: "User visits /pricing", to: "Supabase pricing_scenarios", action: "Saves revenue scenario" },
    { from: "User visits /marketing", to: "Supabase marketing_assets", action: "Saves marketing content" },
    { from: "User visits /chat", to: "Supabase chat_sessions", action: "Saves chat session" },
    { from: "All pages", to: "/dashboard", action: "Shows all saved records" },
  ];

  const impactChecks = [
    { check: "Does it create real value?", answer: "Yes — it helps women identify their skin type and get affordable product recommendations without wasting money on trends that don't work for them.", result: "✅ Pass" },
    { check: "Does it avoid obvious harm?", answer: "Yes — the chatbot has guardrails that block medical advice and redirect users to dermatologists. All AI outputs are labeled as simulated.", result: "✅ Pass" },
    { check: "Is it honest about AI limitations?", answer: "Yes — every AI output is clearly labeled as simulated. The app never claims to replace professional dermatological advice.", result: "✅ Pass" },
    { check: "Is it accessible and simple?", answer: "Yes — 3 external testers aged 23-52 with different tech skill levels all found it easy to use. The form has only 4 fields.", result: "✅ Pass" },
    { check: "Does it serve an underserved market?", answer: "Yes — zero Spanish-language AI skincare apps exist for Mexico. SkinScan AI fills that gap for the $2.1B Mexican beauty market.", result: "✅ Pass" },
  ];

  const roadmap = [
    { version: "v2.0", feature: "Camera skin scanner", description: "Use device camera to scan skin directly and detect conditions like acne, rosacea, and dryness visually — suggested by 2 out of 3 external testers." },
    { version: "v2.1", feature: "PDF report download", description: "Export personalized skin analysis and routine as a downloadable PDF — requested by Claudia during external user testing." },
    { version: "v2.2", feature: "Specific product recommendations", description: "Recommend actual products available in Mexico with prices and links — requested by all 3 external testers." },
    { version: "v2.3", feature: "Real AI integration", description: "Replace simulated outputs with actual Claude or GPT API for truly personalized dynamic recommendations." },
    { version: "v3.0", feature: "Skincare progress tracker", description: "Let users track their skin over time with photo comparisons and routine adherence logging." },
  ];

  const externalUsers = [
    { name: "Claudia", age: 32, skin: "Dry, niacinamide allergy", week: "Week 5", feedback: "Easy to use, loved the 3-step routine. Suggested PDF download and specific product names.", rating: "👍" },
    { name: "Pame", age: 23, skin: "Normal with acne", week: "Week 5", feedback: "Recommendations made sense. Suggested adding a camera feature to scan skin directly.", rating: "👍" },
    { name: "Susana", age: 52, skin: "Sensitive with rosacea", week: "Week 5", feedback: "Simple and easy with few questions. Recommendations matched her skin. Would use again.", rating: "👍" },
    { name: "Tania (sister)", age: 20, skin: "Combination", week: "Week 2", feedback: "Confirmed she buys skincare based on trends and would use SkinScan AI to make better decisions.", rating: "👍" },
    { name: "Anonymous Tester", age: "18-25", skin: "Various", week: "Week 5", feedback: "Completed the /core scan and confirmed recommendations were relevant to their skin profile.", rating: "👍" },
  ];

  const regressionTests = [
    { page: "/", test: "Homepage loads with all sections", result: "✅ Pass" },
    { page: "/core", test: "Form submits and output card appears", result: "✅ Pass" },
    { page: "/research", test: "Filter by 'France' shows French competitors", result: "✅ Pass" },
    { page: "/product", test: "All 3 tiers and 2 segments load", result: "✅ Pass" },
    { page: "/pricing", test: "100 x $99 = $9,900 MXN monthly", result: "✅ Pass" },
    { page: "/marketing", test: "All 5 tabs load and A/B tester tracks votes", result: "✅ Pass" },
    { page: "/chat", test: "Guardrail fires on 'I need a doctor'", result: "✅ Pass" },
    { page: "/dashboard", test: "All pages and tables listed correctly", result: "✅ Pass" },
    { page: "/docs", test: "Documentation page loads", result: "✅ Pass" },
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
          <a href="/dashboard" className="text-gray-600 hover:text-rose-500">Dashboard</a>
          <a href="/demo" className="text-rose-500 font-semibold">Demo</a>
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-rose-500 font-semibold text-sm mb-2 tracking-widest uppercase">Final Submission — Week 6</p>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">SkinScan AI</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">An integrated agentic skincare venture built in 6 weeks — proving the problem is real, the product works, and the impact is positive.</p>
        </div>

        {/* Module Walkthrough */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🗺️ 6-Week Module Walkthrough</h3>
          <div className="grid grid-cols-1 gap-4">
            {modules.map((m, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold flex-shrink-0">{m.week}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <a href={m.page} className="font-semibold text-rose-500 hover:underline">{m.name}</a>
                    <span className="text-gray-400 text-xs">{m.page}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{m.description}</p>
                </div>
                <span className="text-green-500 text-sm font-semibold flex-shrink-0">{m.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Map */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🤖 Agent Map — How SkinScan AI Works</h3>
          <div className="grid grid-cols-1 gap-3">
            {agentMap.map((a, i) => (
              <div key={i} className="flex items-center gap-3 bg-rose-50 rounded-xl p-4">
                <span className="text-rose-500 font-semibold text-sm flex-shrink-0 w-48">{a.from}</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-600 text-sm flex-1">{a.action}</span>
                <span className="text-gray-500 font-semibold text-sm flex-shrink-0">{a.to}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Check */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">✅ Practical Impact Check</h3>
          <div className="grid grid-cols-1 gap-4">
            {impactChecks.map((ic, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-gray-800 text-sm">{ic.check}</p>
                  <span className="text-green-600 font-bold text-sm flex-shrink-0 ml-4">{ic.result}</span>
                </div>
                <p className="text-gray-500 text-sm">{ic.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* External Users */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">👥 5 External User Tests</h3>
          <div className="grid grid-cols-1 gap-4">
            {externalUsers.map((u, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <div className="bg-rose-100 rounded-full w-10 h-10 flex items-center justify-center text-rose-600 font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-800">{u.name}</p>
                    <span className="text-gray-400 text-xs">Age {u.age} · {u.skin}</span>
                    <span className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded text-xs">{u.week}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{u.feedback}</p>
                </div>
                <span className="text-2xl">{u.rating}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regression Test */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🧪 Full-Site Regression Test</h3>
          <div className="grid grid-cols-1 gap-3">
            {regressionTests.map((t, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-gray-100 pb-3">
                <span className="text-rose-500 font-semibold text-sm w-28 flex-shrink-0">{t.page}</span>
                <p className="text-gray-600 text-sm flex-1">{t.test}</p>
                <span className="text-green-600 font-bold text-sm flex-shrink-0">{t.result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Version 2 Roadmap */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🚀 Version 2 Roadmap</h3>
          <div className="grid grid-cols-1 gap-4">
            {roadmap.map((r, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold flex-shrink-0">{r.version}</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{r.feature}</p>
                  <p className="text-gray-500 text-sm">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Stats */}
        <div className="bg-rose-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">SkinScan AI — Built in 6 Weeks</h3>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-bold">10</p>
              <p className="text-rose-100 text-sm">Live Pages</p>
            </div>
            <div>
              <p className="text-4xl font-bold">5</p>
              <p className="text-rose-100 text-sm">Supabase Tables</p>
            </div>
            <div>
              <p className="text-4xl font-bold">5</p>
              <p className="text-rose-100 text-sm">External Testers</p>
            </div>
            <div>
              <p className="text-4xl font-bold">$0</p>
              <p className="text-rose-100 text-sm">Infrastructure Cost</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint | AI-101 Summer Intensive 2026
      </footer>
    </main>
  );
}