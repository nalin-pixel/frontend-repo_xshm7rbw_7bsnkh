import { useState } from 'react'
import Layout from '../components/Layout'

export default function StartProject() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: data.business_name,
          contact_name: data.contact_name,
          email: data.email,
          phone: data.phone,
          project_type: data.project_type,
          budget: data.budget,
          timeline: data.timeline,
          message: data.message,
        }),
      })
      const json = await res.json()
      if (res.ok) setStatus({ ok: true })
      else setStatus({ ok: false, error: json.detail || 'Something went wrong' })
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Start a Project</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">Tell us about your goals, constraints, and timelines. We\'ll come prepared.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <form onSubmit={handleSubmit} className="rounded-2xl border border_white/10 bg-white/[0.02] p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="business_name" placeholder="Business name" required />
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="contact_name" placeholder="Your name" required />
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="email" type="email" placeholder="Email" required />
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="phone" placeholder="Phone" />
          <select className="bg-white/5 rounded-md px-3 py-2 outline-none" name="project_type" defaultValue="" required>
            <option value="" disabled>Project type</option>
            <option>Social Media Management</option>
            <option>Creative Production</option>
            <option>Influencer Marketing</option>
            <option>Paid Advertising</option>
            <option>PR & Digital Press</option>
            <option>Training & Coaching</option>
            <option>Strategy & Consulting</option>
          </select>
          <select className="bg-white/5 rounded-md px-3 py-2 outline-none" name="budget" defaultValue="" required>
            <option value="" disabled>Budget range</option>
            <option>$5k - $10k</option>
            <option>$10k - $25k</option>
            <option>$25k - $50k</option>
            <option>$50k - $100k</option>
            <option>$100k+</option>
          </select>
          <select className="bg-white/5 rounded-md px-3 py-2 outline-none" name="timeline" defaultValue="" required>
            <option value="" disabled>Timeline</option>
            <option>ASAP</option>
            <option>1-2 months</option>
            <option>3-6 months</option>
            <option>6+ months</option>
          </select>
          <textarea className="bg-white/5 rounded-md px-3 py-2 outline-none sm:col-span-2 min-h-[140px]" name="message" placeholder="Tell us about the project" />
          <button className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors">Submit & Start</button>
          {status && (
            <p className={`sm:col-span-2 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>
              {status.ok ? 'Thanks — we\'ll reach out shortly.' : status.error}
            </p>
          )}
        </form>
      </section>
    </Layout>
  )
}
