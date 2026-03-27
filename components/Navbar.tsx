'use client'

export default function Navbar() {
  const scrollToCTA = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">
            <span className="text-accent">Vector</span>Close
          </span>
        </div>
        <button onClick={scrollToCTA} className="btn-primary text-sm py-2 px-5">
          Join Waitlist
        </button>
      </div>
    </nav>
  )
}
