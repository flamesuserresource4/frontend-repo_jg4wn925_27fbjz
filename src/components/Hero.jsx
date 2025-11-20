import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 from-white/0 via-white/10 to-white/20 bg-gradient-to-b pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
            Trusted cleaning for homes and businesses
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow">
            Sparkling spaces, beautifully maintained
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-xl">
            Professional domestic and commercial cleaning with reliable schedules, vetted staff, and a spotless finish every time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-rose-500 px-6 py-3 text-white font-medium shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition">
              Get a Free Quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-white font-medium hover:bg-white/20 transition">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;