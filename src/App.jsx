import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(244,63,94,0.2),transparent_25%),radial-gradient(circle_at_90%_10%,rgba(244,63,94,0.15),transparent_25%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Industries />
        <Process />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} PristineClean. All rights reserved.</p>
          <div className="text-white/60">Domestic & Commercial Cleaning</div>
        </div>
      </footer>
    </div>
  )
}

export default App