import Layout from '../components/Layout'

export default function Work() {
  const items = new Array(9).fill(0).map((_, i) => ({ id: i + 1 }))
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Work</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">Selected client work and experiments. Built for performance, designed for culture.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-neutral-800">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-700 to-neutral-900 relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_40%)]" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Case Study Title</p>
                  <p className="text-xs text-neutral-400">Brand • Platform • Result</p>
                </div>
                <a href="#" className="text-sm text-neutral-300 hover:text-white">Open →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-800">
            <div className="aspect-video bg-neutral-900 flex items-center justify-center text-neutral-500">Video Embed</div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-800">
            <div className="aspect-video bg-neutral-900 flex items-center justify-center text-neutral-500">Video Embed</div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/start" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors">Work With Us</a>
        </div>
      </section>
    </Layout>
  )
}
