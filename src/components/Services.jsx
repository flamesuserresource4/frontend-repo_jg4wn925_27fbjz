import { Sparkles, Building2, Home, Leaf } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Domestic Cleaning',
    desc: 'Recurring weekly/fortnightly cleans, deep cleans, end-of-tenancy and move-in services.'
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    desc: 'Offices, retail, and hospitality spaces with flexible after-hours scheduling.'
  },
  {
    icon: Sparkles,
    title: 'Specialist Services',
    desc: 'Carpet & upholstery, oven cleaning, window washing, and post-build cleans.'
  },
  {
    icon: Leaf,
    title: 'Eco Options',
    desc: 'Eco-friendly products available upon request at no extra cost.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we clean</h2>
          <p className="mt-2 text-white/70">Tailored packages for every space and schedule</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-black/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/20 text-rose-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services