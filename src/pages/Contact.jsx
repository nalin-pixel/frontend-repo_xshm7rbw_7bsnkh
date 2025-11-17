import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          topic: data.topic,
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
        <h1 className="text-3xl sm:text-5xl font-extrabold">Contact</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">Tell us about your ambitions. We’ll get back within 1 business day.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm text-neutral-400">Email</p>
            <p className="mt-1">hello@fledge.agency</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm text-neutral-400">Phone</p>
            <p className="mt-1">+1 (555) 000-0000</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm text-neutral-400">Office</p>
            <p className="mt-1">123 Fledge Street, City, Country</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="name" placeholder="Your name" required />
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="email" type="email" placeholder="Email" required />
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="phone" placeholder="Phone" />
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none" name="company" placeholder="Company" />
          <input className="bg-white/5 rounded-md px-3 py-2 outline-none sm:col-span-2" name="topic" placeholder="Topic (optional)" />
          <textarea className="bg-white/5 rounded-md px-3 py-2 outline-none sm:col-span-2 min-h-[140px]" name="message" placeholder="Message" required />
          <button className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors">Book a Consultation</button>
          {status && (
            <p className={`sm:col-span-2 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>
              {status.ok ? 'Message received. We\'ll be in touch shortly.' : status.error}
            </p>
          )}
        </form>
      </section>
    </Layout>
  )
}
