import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/approach', label: 'Our Approach' },
  { to: '/contact', label: 'Contact' },
  { to: '/start', label: 'Start a Project' },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">Fledge</span>
            <span className="text-neutral-400">.agency</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(0,5).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-white' : 'text-neutral-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/start"
              className="inline-flex items-center rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              Start a Project
            </Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-base ${isActive ? 'text-white' : 'text-neutral-300 hover:text-white'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative">
        {/* subtle gradient accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-cyan-500/20 blur-3xl"></div>
        </div>
        {children}
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:flex md:items-center md:justify-between">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Fledge. All rights reserved.</p>
          <div className="text-neutral-400 text-sm flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
