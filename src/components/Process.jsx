const steps = [
  { number: '01', title: 'Get a fast quote', desc: 'Tell us about your space and preferred schedule. We respond within hours.' },
  { number: '02', title: 'Tailored plan', desc: 'We build a cleaning plan that matches your needs and budget.' },
  { number: '03', title: 'Reliable clean', desc: 'Vetted, insured staff arrive on time with all supplies—every visit.' },
  { number: '04', title: 'Consistent results', desc: 'Quality checks and feedback loops keep your space sparkling.' },
]

function Process() {
  return (
    <section id="process" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-2 text-white/70">Simple steps to a spotless space</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.number} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-rose-300 font-mono text-sm">{s.number}</div>
              <h3 className="mt-2 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process