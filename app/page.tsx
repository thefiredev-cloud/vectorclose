import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Stats Banner */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '340%', label: 'Average Pipeline Increase' },
              { value: '12x', label: 'Faster Close Rate' },
              { value: '94%', label: 'Objection Handle Rate' },
              { value: '24/7', label: 'Always Prospecting' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-number">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
