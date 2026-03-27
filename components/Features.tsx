export default function Features() {
  const features = [
    {
      title: 'Auto-Prospecting',
      description: 'Continuously identifies and qualifies ideal customers from 300M+ contacts — zero manual list building.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      ),
    },
    {
      title: 'Smart Outreach',
      description: 'Personalized multi-channel sequences that sound human — email, LinkedIn, phone. Follows up until they respond.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
        </svg>
      ),
    },
    {
      title: 'Objection Handling',
      description: 'Trained on 10,000+ sales calls. Responds to every objection in real-time with battle-tested rebuttals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Deal Closing',
      description: 'Drafts proposals, handles negotiations, and routes warm deals to your calendar. You show up and sign.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c0 1.2-.504 2.317-1.301 3.13M12 21c-1.2 0-2.317-.504-3.13-1.301M3 12c0-1.2.504-2.317 1.301-3.13M12 3c1.2 0 2.317.504 3.13 1.301" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The Full Sales Stack,{' '}
            <span className="text-accent">Automated</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            VectorClose handles every stage of the sales process — from cold outreach to signed contract.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-8">
              <div className="text-accent mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
