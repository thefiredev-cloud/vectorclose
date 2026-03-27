export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Define Your ICP',
      description: 'Tell VectorClose your ideal customer — industry, company size, job title, signals. Takes 10 minutes.',
    },
    {
      number: '02',
      title: 'Watch It Work',
      description: 'VectorClose prospects, reaches out, qualifies, and handles the full conversation. You get a live dashboard.',
    },
    {
      number: '03',
      title: 'Approve and Close',
      description: 'Hot deals land in your inbox with full context. You approve the next step. Sign and collect.',
    },
  ]

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Up and Running in{' '}
            <span className="text-accent">72 Hours</span>
          </h2>
          <p className="text-slate-400 text-lg">No CRM overhaul required. No SDR training. No ramp time.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent/30 to-transparent z-10" />
              )}
              <div className="card p-8">
                <div className="text-5xl font-black text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
