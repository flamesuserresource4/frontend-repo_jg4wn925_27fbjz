const industries = [
  'Homes & Apartments',
  'Offices & Co-working',
  'Retail & Showrooms',
  'Healthcare & Clinics',
  'Education & Nurseries',
  'Hospitality & Leisure',
]

function Industries() {
  return (
    <section id="industries" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-10 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((name) => (
              <div key={name} className="rounded-xl bg-white/5 border border-white/10 p-6 text-white/90">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries