import Layout from '../components/Layout'

export default function Approach() {
  const steps = [
    { name: 'Discover', text: 'Research, audience insight, and brand diagnostics.' },
    { name: 'Design', text: 'Build the strategy, concept the creative, architect the system.' },
    { name: 'Execute', text: 'Ship content, media, and experiences across channels.' },
    { name: 'Optimize', text: 'Measure, learn, and iterate for compounding results.' },
  ]
  const pillars = [
    {
      title: 'Strategy-first philosophy',
      text: 'We start from truth: audience, category, culture. No guesswork.',
    },
    {
      title: 'Data-informed execution',
      text: 'Signals drive decisions, from creative testing to media allocation.',
    },
    {
      title: 'Culture-relevant creativity',
      text: 'Work that earns attention and feels native to the internet.',
    },
  ]
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Our Approach</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">The Fledge method blends strategy, creativity, and performance into a repeatable system.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-sm text-neutral-400">Step {i + 1}</div>
              <h3 className="text-xl font-bold mt-2">{s.name}</h3>
              <p className="text-neutral-300 mt-2 text-sm">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {pillars.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="text-lg font-bold">{p.title}</h4>
              <p className="text-neutral-300 mt-2 text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
