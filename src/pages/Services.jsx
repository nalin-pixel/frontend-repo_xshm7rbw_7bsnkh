import Layout from '../components/Layout'

const services = [
  {
    title: 'Social Media Management',
    description: 'Always-on content, community management, and channel operations.',
    outcome: 'Consistent growth in reach, engagement, and brand affinity.',
    bullets: [
      'Platform strategy & editorial calendars',
      'Community management',
      'Content scheduling & posting',
      'Monthly reporting',
    ],
  },
  {
    title: 'Creative Production',
    description: 'Agile production for short-form video, campaigns, and brand assets.',
    outcome: 'Best-in-class content shipped at the speed of culture.',
    bullets: ['Short-form video', 'Brand design', 'Campaign toolkits', 'UGC production'],
  },
  {
    title: 'Influencer Marketing',
    description: 'Creator sourcing, contracting, and performance tracking.',
    outcome: 'High-impact creators aligned with brand and objectives.',
    bullets: ['Creator mapping', 'Contracts & usage', 'Briefing & QA', 'Performance dashboard'],
  },
  {
    title: 'Paid Advertising (Meta, TikTok, Google, YouTube)',
    description: 'Full-funnel paid strategy and execution across major platforms.',
    outcome: 'Efficient CAC and measurable revenue growth.',
    bullets: ['Account structure', 'Creative testing', 'Attribution & pixels', 'Weekly optimizations'],
  },
  {
    title: 'PR & Digital Press Features',
    description: 'Narratives that travel across media and culture.',
    outcome: 'Earned visibility and credibility with your audiences.',
    bullets: ['Story angles', 'Press outreach', 'Thought leadership', 'Press kits'],
  },
  {
    title: 'Training & Coaching',
    description: 'Upskill internal teams with modern social and content practices.',
    outcome: 'Faster execution and higher content quality in-house.',
    bullets: ['Workshops', 'Playbooks', '1:1 coaching', 'Team audits'],
  },
  {
    title: 'Strategy & Consulting',
    description: 'Brand, content, and growth strategy guided by research and data.',
    outcome: 'Clear direction and a prioritized roadmap to scale.',
    bullets: ['Audience research', 'Positioning', 'Content architecture', 'Measurement plan'],
  },
]

export default function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Services</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">Structured, senior-led services built to create momentum and measurable outcomes.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid gap-6">
        {services.map((s, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="mt-2 text-neutral-300">{s.description}</p>
                <p className="mt-3 text-neutral-200 text-sm"><span className="text-neutral-400">Key outcome: </span>{s.outcome}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-neutral-300 list-disc pl-5">
                  {s.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
              <a href="/start" className="shrink-0 inline-flex items-center rounded-full bg-white text-neutral-900 px-5 py-2 text-sm font-semibold hover:bg-neutral-200 transition-colors">Start a Project</a>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
