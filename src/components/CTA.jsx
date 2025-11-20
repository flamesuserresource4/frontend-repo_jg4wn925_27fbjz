function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-rose-400/20 bg-gradient-to-br from-rose-500/10 to-rose-400/10 p-10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white">Ready for a spotless space?</h3>
              <p className="mt-2 text-white/80">Get a personalized quote today. No obligation.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input type="text" placeholder="Your name" className="col-span-1 sm:col-span-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50" />
              <input type="email" placeholder="Email or phone" className="col-span-1 sm:col-span-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50" />
              <button type="submit" className="col-span-1 rounded-lg bg-rose-500 px-6 py-3 text-white font-medium shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition">Request Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA