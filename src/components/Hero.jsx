import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          We Build Brands That Lead, Not Follow.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-neutral-300 text-lg"
        >
          Fledge is the modern marketing partner for brands that want culture-shaping content, performance-driven campaigns, and measurable growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/start"
            className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Start a Project
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:border-white/40 transition-colors"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 -bottom-40 h-80 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  )
}
