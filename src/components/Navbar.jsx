import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll() // run once on mount so SSR/initial state is correct
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A1628] shadow-[0_4px_40px_rgba(0,0,0,0.6)] border-b border-white/10'
          : 'bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/60 to-transparent backdrop-blur-sm'
      }`}
    >
      {/* Top info bar — only when not scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-primary-mid border-b border-white/10 hidden md:block"
          >
            <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-xs text-white/60">
              <span>📍 Plot No. 4721, GIDC, Ankleshwar, Gujarat, India</span>
              <div className="flex items-center gap-4">
                <a href="tel:+919099024659" className="flex items-center gap-1 hover:text-accent transition-colors">
                  <Phone size={11} /> 9099024659
                </a>
                <a href="tel:+919824704659" className="flex items-center gap-1 hover:text-accent transition-colors">
                  <Phone size={11} /> 9824704659
                </a>
                <a href="mailto:dev.bharuch@gmail.com" className="hover:text-accent transition-colors">
                  dev.bharuch@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-heading font-black text-primary text-lg shadow-glow"
          >
            DP
          </motion.div>
          <div>
            <div className="font-heading font-bold text-white text-base leading-tight">DP Filter Press</div>
            <div className="text-accent text-xs font-medium leading-tight">Trading · Ankleshwar</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link text-sm font-medium ${isActive ? 'nav-link-active text-accent' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919099024659"
            className="flex items-center gap-2 text-white/80 hover:text-accent text-sm transition-colors font-medium"
          >
            <Phone size={14} /> Call Now
          </a>
          <Link to="/contact" className="btn-primary text-sm py-2 px-5">
            Enquire Now
          </Link>
        </div>

        {/* Mobile burger */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <AnimatePresence mode="wait">
            {open
              ? <motion.span key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}><X size={22} /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}><Menu size={22} /></motion.span>
            }
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-primary-light/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                        isActive ? 'bg-accent text-primary' : 'text-white/80 hover:bg-white/10 hover:text-white hover:pl-6'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <a href="tel:+919099024659" className="flex items-center gap-2 text-accent text-sm px-4 py-2 hover:bg-white/5 rounded-xl">
                  <Phone size={14} /> +91 90990 24659
                </a>
                <a href="tel:+919824704659" className="flex items-center gap-2 text-accent text-sm px-4 py-2 hover:bg-white/5 rounded-xl">
                  <Phone size={14} /> +91 98247 04659
                </a>
                <Link to="/contact" className="btn-primary text-sm justify-center mt-1">
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
