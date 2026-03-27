'use client'

import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen grid-bg flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block"></span>
              Now in private beta
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Autonomous Sales,{' '}
              <span className="text-accent">Real Revenue</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed animate-fade-in-up delay-100">
              AI that prospects, qualifies, engages, handles objections, and closes — you just approve the deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <button onClick={scrollToCTA} className="btn-primary text-base animate-pulse-glow">
                Join the Waitlist
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline text-base"
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* 3D Scene */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-[520px] animate-fade-in">
            <Scene3D />
          </div>
        </div>
      </div>
    </section>
  )
}
