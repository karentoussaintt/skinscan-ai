export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-500">SkinScan AI</h1>
        <div className="flex gap-6">
          <a href="/" className="text-gray-600 hover:text-rose-500">Home</a>
          <a href="/core" className="text-gray-600 hover:text-rose-500">Scan</a>
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Know your skin.<br/>Use only what you need.</h2>
        <p className="text-xl text-gray-500 max-w-xl mb-10">SkinScan AI analyzes your skin type and concerns to recommend only the products that truly work for you — no more wasted money on trends that don't fit your skin.</p>
        <a href="/core" className="bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-600">
          Scan My Skin →
        </a>
      </section>
      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}