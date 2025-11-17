import { motion } from 'framer-motion'

export function WhatWeDo() {
  const items = [
    {
      title: 'Social Media',
      desc: 'Always-on content, community and channel operations across major platforms.',
    },
    {
      title: 'Creative Production',
      desc: 'Agile production for short-form video, campaigns and brand assets.',
    },
    {
      title: 'Influencer',
      desc: 'Creator partnerships that drive reach, relevance and results.',
    },
    {
      title: 'Paid Media',
      desc: 'Full-funnel performance across Meta, TikTok, Google and YouTube.',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold">What We Do</h2>
        <a href="/services" className="text-sm text-neutral-300 hover:text-white">Explore services →</a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="text-lg font-bold mb-2">{it.title}</h3>
            <p className="text-neutral-300 text-sm">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function SelectedWork() {
  const items = new Array(6).fill(0).map((_, i) => ({ id: i + 1 }))
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold">Selected Work</h2>
        <a href="/work" className="text-sm text-neutral-300 hover:text-white">View all →</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-700"
          >
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function WhyFledge() {
  const points = [
    {
      title: 'Strategy-first',
      text: 'Every move anchored in research, data and brand truth.',
    },
    {
      title: 'Culture-relevant',
      text: 'Ideas designed to travel across platforms and communities.',
    },
    {
      title: 'Performance-driven',
      text: 'Relentless optimization from creative to media.',
    },
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-10">Why Fledge</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-neutral-300 text-sm">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-10">What Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2].map((i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-neutral-300 text-sm">“Testimonial placeholder. A short, punchy proof-point about impact and partnership.”</p>
            <p className="mt-4 text-sm text-neutral-400">CMO, Brand Name</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 text-center">
        <h3 className="text-2xl sm:text-4xl font-extrabold">Ready to build a category-leading brand?</h3>
        <p className="mt-3 text-neutral-300">Let’s design the playbook and make the internet care.</p>
        <a href="/start" className="mt-6 inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors">Start a Project</a>
      </div>
    </section>
  )
}
