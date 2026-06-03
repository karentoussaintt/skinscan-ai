export default function Docs() {
  return (
    <main className="min-h-screen bg-rose-50">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-500">SkinScan AI</h1>
        <div className="flex gap-6">
          <a href="/" className="text-gray-600 hover:text-rose-500">Home</a>
          <a href="/core" className="text-gray-600 hover:text-rose-500">Scan</a>
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
          <a href="/research" className="text-gray-600 hover:text-rose-500">Research</a>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Documentation</h2>
        <p className="text-gray-500 text-lg mb-8">This page contains the technical documentation and prompt library for SkinScan AI.</p>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coding Agent Prompt</h3>
          <p className="text-gray-500 mb-4">The following prompt was used with Claude Code to build the /core page:</p>
          <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700">
            <p>ROLE: You are my disciplined AI-native coding partner building SkinScan AI.</p>
            <p className="mt-2">STACK: Next.js, Tailwind CSS, Supabase, Vercel, GitHub.</p>
            <p className="mt-2">TASK: Build the /core page with an intake form, AI output card, save button, and Supabase integration.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}