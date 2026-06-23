export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-rose-500">SkinScan AI</h1>
        <div className="flex gap-4 text-sm">
          <a href="/" className="text-gray-600 hover:text-rose-500">Home</a>
          <a href="/core" className="text-gray-600 hover:text-rose-500">Scan</a>
          <a href="/research" className="text-gray-600 hover:text-rose-500">Research</a>
          <a href="/product" className="text-gray-600 hover:text-rose-500">Product</a>
          <a href="/pricing" className="text-gray-600 hover:text-rose-500">Pricing</a>
          <a href="/marketing" className="text-gray-600 hover:text-rose-500">Marketing</a>
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-rose-50 px-8 py-24 text-center">
        <p className="text-rose-500 font-semibold text-sm mb-4 tracking-widest uppercase">AI-Powered Skincare · Mexico</p>
        <h2 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Know your skin.<br/>Use only what you need.
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          SkinScan AI analyzes your skin type and concerns to recommend only the products that truly work for you — no more wasted money on trends that don't fit your skin.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/core" className="bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-600">
            Scan My Skin — It's Free →
          </a>
          <a href="/product" className="bg-white text-rose-500 border-2 border-rose-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50">
            See Plans
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">The problem with skincare today</h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-rose-500 mb-3">68%</p>
            <p className="text-gray-600">of women buy skincare based on social media recommendations — without knowing if it works for their skin</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-rose-500 mb-3">$400</p>
            <p className="text-gray-600">MXN wasted monthly on average buying products that don't work for their specific skin type</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-rose-500 mb-3">0</p>
            <p className="text-gray-600">AI skincare apps in Spanish designed specifically for the Mexican market</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-rose-50 px-8 py-20">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">How SkinScan AI works</h3>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h4 className="font-bold text-gray-800 mb-2">Tell us about your skin</h4>
            <p className="text-gray-500 text-sm">Fill in your skin type, concerns, allergies, and age range in under 2 minutes.</p>
          </div>
          <div className="text-center">
            <div className="bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h4 className="font-bold text-gray-800 mb-2">AI analyzes your needs</h4>
            <p className="text-gray-500 text-sm">Our AI identifies your specific skin needs and finds products that actually match.</p>
          </div>
          <div className="text-center">
            <div className="bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h4 className="font-bold text-gray-800 mb-2">Get your personalized routine</h4>
            <p className="text-gray-500 text-sm">Receive a simple, affordable routine built specifically for your skin. Save it and come back anytime.</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Simple, honest pricing</h3>
        <p className="text-gray-500 mb-10">Start free. Upgrade when you're ready.</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <h4 className="font-bold text-gray-800 text-xl mb-2">Free</h4>
            <p className="text-3xl font-bold text-gray-800 mb-4">$0</p>
            <p className="text-gray-500 text-sm mb-6">1 scan/day · Basic routine · Budget recommendations</p>
            <a href="/core" className="block bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300">Start Free</a>
          </div>
          <div className="bg-rose-500 rounded-2xl p-6 text-center">
            <h4 className="font-bold text-white text-xl mb-2">Pro</h4>
            <p className="text-3xl font-bold text-white mb-4">$99 MXN<span className="text-lg font-normal">/mo</span></p>
            <p className="text-rose-100 text-sm mb-6">Unlimited scans · Ingredient checker · 30-day history</p>
            <a href="/pricing" className="block bg-white text-rose-500 py-3 rounded-xl font-semibold hover:bg-rose-50">Get Pro</a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <h4 className="font-bold text-white text-xl mb-2">Premium</h4>
            <p className="text-3xl font-bold text-white mb-4">$199 MXN<span className="text-lg font-normal">/mo</span></p>
            <p className="text-gray-400 text-sm mb-6">Everything in Pro · Dermatologist AI · Custom builder</p>
            <a href="/pricing" className="block bg-rose-500 text-white py-3 rounded-xl font-semibold hover:bg-rose-600">Get Premium</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-rose-500 px-8 py-20 text-center">
        <h3 className="text-4xl font-bold text-white mb-4">Ready to know your skin?</h3>
        <p className="text-rose-100 text-xl mb-8">Join thousands of women who stopped wasting money on the wrong products.</p>
        <a href="/core" className="bg-white text-rose-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-rose-50">
          Scan My Skin — It's Free →
        </a>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm bg-white">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}
