"use client";
import { useState } from "react";

const persona = {
  name: "Sofía",
  age: "26 years old",
  location: "Mexico City",
  job: "Marketing coordinator",
  pain: "Spends $400 MXN/month on skincare products she sees on TikTok but half of them irritate her skin or don't work for her.",
  goal: "Find a simple, affordable routine that actually works for her skin type without wasting money on trends.",
  quote: "I just want to know what MY skin actually needs, not what an influencer is paid to promote.",
};

const socialPosts = [
  { platform: "Instagram", type: "Reel Hook", content: "POV: You finally stopped buying skincare products that don't work for you 🧴✨ #SkinScanAI #SkincareRoutine" },
  { platform: "TikTok", type: "Hook", content: "I used to spend $500 MXN a month on skincare that literally made my face worse. Then I tried this 👇 #SkincareTips #SkinScanAI" },
  { platform: "Instagram", type: "Carousel Slide 1", content: "Your skin type is unique. Your routine should be too. SkinScan AI analyzes YOUR skin and recommends only what you actually need." },
  { platform: "Instagram", type: "Carousel Slide 2", content: "❌ Stop buying products just because they're trending. ✅ Start buying products your skin actually needs. SkinScan AI — Know your skin." },
  { platform: "TikTok", type: "Educational", content: "Did you know? 68% of Mexican women buy skincare based on social media recommendations — without knowing if their skin can tolerate it. SkinScan AI fixes that." },
  { platform: "Instagram", type: "Story Poll", content: "Have you ever bought a skincare product that broke you out? YES / NO — If yes, SkinScan AI was made for you." },
  { platform: "Twitter/X", type: "Thread Opener", content: "I built an AI that analyzes your skin type and tells you exactly what products you need — no more wasting money on trends that don't work. Here's how it works 🧵" },
  { platform: "Instagram", type: "Quote Card", content: "'The best skincare routine is the one that's made for YOUR skin.' — SkinScan AI" },
  { platform: "TikTok", type: "Before/After", content: "Before SkinScan AI: 12-step routine, $800 MXN/month, constant breakouts. After: 3 steps, $200 MXN/month, actually works. Try it free 👇" },
  { platform: "Instagram", type: "CTA Post", content: "Your skin deserves better than guesswork. Scan your skin, get your personalized routine, and only buy what you actually need. Free plan available. Link in bio 🔗" },
];

const videoScripts = [
  {
    title: "60-Second Product Demo",
    hook: "Most skincare products are designed for everyone. That means they're designed for no one.",
    body: "SkinScan AI analyzes your specific skin type, concerns, and allergies to recommend only the products that will actually work for you. No more breakouts from the wrong cleanser. No more wasted money on serums your skin can't tolerate. Just a simple, personalized routine built for your skin.",
    cta: "Try SkinScan AI free at skinscan-ai-kappa.vercel.app. Know your skin. Use only what you need.",
  },
  {
    title: "Problem-Solution Story",
    hook: "I used to spend $600 MXN a month on skincare. Half of it ended up in the trash.",
    body: "Every week there was a new 'miracle product' on TikTok. I bought everything. Some broke me out. Some did nothing. I had no idea what my skin actually needed. Then I built SkinScan AI — an app that analyzes your skin and tells you exactly what to use. No guessing. No trends. Just what works for your specific skin.",
    cta: "Scan your skin today. It's free. skinscan-ai-kappa.vercel.app",
  },
  {
    title: "Feature Walkthrough",
    hook: "Here's what SkinScan AI actually does in under 60 seconds.",
    body: "You fill in your skin type, your main concerns like acne or redness, any ingredients you want to avoid, and your age range. The AI instantly generates a personalized skincare recommendation. You can save your results and come back anytime. Pro plan users get unlimited scans, ingredient conflict checking, and weekly progress reports.",
    cta: "Start free at skinscan-ai-kappa.vercel.app. Upgrade to Pro for $99 MXN per month.",
  },
];

const calendar = [
  { day: 1, platform: "Instagram", content: "Launch post — brand introduction", type: "Organic" },
  { day: 2, platform: "TikTok", content: "Problem hook video — skincare waste", type: "Organic" },
  { day: 3, platform: "Instagram", content: "Story poll — have you bought wrong products?", type: "Organic" },
  { day: 4, platform: "Twitter/X", content: "Thread — how SkinScan AI works", type: "Organic" },
  { day: 5, platform: "Instagram", content: "Carousel — Stop buying trending products", type: "Organic" },
  { day: 6, platform: "TikTok", content: "Educational — 68% stat video", type: "Organic" },
  { day: 7, platform: "Instagram", content: "Quote card — rest day content", type: "Organic" },
  { day: 8, platform: "Instagram", content: "Reel — POV using SkinScan AI", type: "Organic" },
  { day: 9, platform: "TikTok", content: "Before/After routine video", type: "Organic" },
  { day: 10, platform: "Instagram", content: "Story — free plan CTA", type: "Organic" },
  { day: 11, platform: "Twitter/X", content: "Engagement tweet — skin type poll", type: "Organic" },
  { day: 12, platform: "Instagram", content: "Product demo reel", type: "Organic" },
  { day: 13, platform: "TikTok", content: "Feature walkthrough video", type: "Organic" },
  { day: 14, platform: "Instagram", content: "CTA post — link in bio", type: "Organic" },
];

const headlines = [
  { id: "A", text: "Know your skin. Use only what you need.", votes: 0 },
  { id: "B", text: "Stop guessing. Start scanning. Get your perfect routine.", votes: 0 },
];

export default function Marketing() {
  const [activeTab, setActiveTab] = useState("persona");
  const [abVotes, setAbVotes] = useState({ A: 0, B: 0 });
  const [saved, setSaved] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const vote = (id: string) => {
    setAbVotes(prev => ({ ...prev, [id]: prev[id as keyof typeof prev] + 1 }));
  };

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const saveAsset = (text: string) => {
    if (!saved.includes(text)) setSaved([...saved, text]);
  };

  const winner = abVotes.A > abVotes.B ? "A" : abVotes.B > abVotes.A ? "B" : null;

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
          <a href="/dashboard" className="text-gray-600 hover:text-rose-500">Dashboard</a>
<a href="/demo" className="text-gray-600 hover:text-rose-500">Demo</a>
          <a href="/docs" className="text-gray-600 hover:text-rose-500">Docs</a>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Marketing Engine</h2>
        <p className="text-gray-500 mb-8">Brand system, content strategy, and campaign assets for SkinScan AI.</p>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {["persona", "social", "scripts", "calendar", "ab"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === tab ? "bg-rose-500 text-white" : "bg-white text-gray-600 hover:bg-rose-50"}`}>
              {tab === "persona" ? "👤 Persona" : tab === "social" ? "📱 Social Posts" : tab === "scripts" ? "🎬 Video Scripts" : tab === "calendar" ? "📅 Campaign Calendar" : "🧪 A/B Test"}
            </button>
          ))}
        </div>

        {/* Persona Tab */}
        {activeTab === "persona" && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">👤 Target Persona</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="bg-rose-50 rounded-2xl p-6 mb-4">
                  <p className="text-5xl mb-3">👩</p>
                  <h4 className="text-2xl font-bold text-gray-800">{persona.name}</h4>
                  <p className="text-rose-500 font-semibold">{persona.age} · {persona.location}</p>
                  <p className="text-gray-500 text-sm mt-1">{persona.job}</p>
                </div>
                <div className="bg-rose-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">💬 Her quote:</p>
                  <p className="text-gray-700 italic text-sm">"{persona.quote}"</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-red-600 mb-1">😤 Pain Point</p>
                  <p className="text-gray-700 text-sm">{persona.pain}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-green-600 mb-1">🎯 Goal</p>
                  <p className="text-gray-700 text-sm">{persona.goal}</p>
                </div>
                <div className="bg-rose-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-rose-600 mb-1">🎨 Brand Tone</p>
                  <p className="text-gray-700 text-sm">Honest · Simple · Empowering · Budget-conscious · Science-backed</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Posts Tab */}
        {activeTab === "social" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📱 10 Social Media Posts</h3>
            {socialPosts.map((post, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-semibold mr-2">{post.platform}</span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">{post.type}</span>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => copyText(post.content, `post-${i}`)}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs hover:bg-gray-200">
                      {copied === `post-${i}` ? "✅ Copied!" : "📋 Copy"}
                    </button>
                    <button onClick={() => saveAsset(post.content)}
                      className="bg-rose-100 text-rose-600 px-3 py-1 rounded-lg text-xs hover:bg-rose-200">
                      💾 Save
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{post.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Video Scripts Tab */}
        {activeTab === "scripts" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎬 3 Video Scripts</h3>
            {videoScripts.map((script, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">{script.title}</h4>
                  <button onClick={() => saveAsset(`${script.title}: ${script.hook} ${script.body} ${script.cta}`)}
                    className="bg-rose-100 text-rose-600 px-3 py-1 rounded-lg text-xs hover:bg-rose-200">
                    💾 Save Script
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="bg-rose-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-rose-600 mb-1">🎣 HOOK</p>
                    <p className="text-gray-700 text-sm">{script.hook}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-600 mb-1">📝 BODY</p>
                    <p className="text-gray-700 text-sm">{script.body}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-green-600 mb-1">📣 CTA</p>
                    <p className="text-gray-700 text-sm">{script.cta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === "calendar" && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">📅 14-Day Campaign Calendar</h3>
            <div className="grid grid-cols-1 gap-3">
              {calendar.map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-gray-100 pb-3">
                  <div className="bg-rose-500 text-white rounded-xl w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.day}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{item.content}</p>
                    <p className="text-gray-400 text-xs">{item.platform}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* A/B Test Tab */}
        {activeTab === "ab" && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">🧪 A/B Headline Test</h3>
            <p className="text-gray-500 text-sm mb-6">Vote for the headline that would make you click. Simulated A/B test — labeled as simulated.</p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {headlines.map(h => (
                <div key={h.id} className={`rounded-2xl p-6 border-2 ${winner === h.id ? "border-rose-500 bg-rose-50" : "border-gray-200 bg-white"}`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">Version {h.id}</span>
                    {winner === h.id && <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">🏆 Winner</span>}
                  </div>
                  <p className="text-gray-800 font-semibold text-lg mb-4">"{h.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-rose-500">{abVotes[h.id as keyof typeof abVotes]} votes</p>
                    <button onClick={() => vote(h.id)}
                      className="bg-rose-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-rose-600">
                      Vote →
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {winner && (
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <p className="text-green-700 font-semibold">🏆 Version {winner} is winning with {abVotes[winner as keyof typeof abVotes]} votes!</p>
              </div>
            )}
          </div>
        )}

        {/* Saved Assets */}
        {saved.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💾 Saved Marketing Assets ({saved.length})</h3>
            <div className="space-y-3">
              {saved.map((asset, i) => (
                <div key={i} className="bg-rose-50 rounded-xl p-4 text-sm text-gray-700">
                  {asset.length > 150 ? asset.substring(0, 150) + "..." : asset}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © 2026 SkinScan AI — Built by Karen Toussaint
      </footer>
    </main>
  );
}