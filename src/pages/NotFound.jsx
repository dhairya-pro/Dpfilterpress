import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home, ArrowRight, Search, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | DP Filter Press Trading</title>
        <meta name="description" content="The page you're looking for doesn't exist. Visit DP Filter Press Trading for Filter Press, Pallet Trucks, Hydraulic Parts & Material Handling Equipment." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(126,200,40,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.5) 1px,transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl orb-float" />

        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 404 Number */}
            <h1 className="font-heading font-black text-accent text-[120px] md:text-[180px] leading-none mb-0 select-none">
              404
            </h1>
            <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4 -mt-4">
              Page Not Found
            </h2>
            <p className="text-white/60 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/"
                  className="btn-primary text-sm px-6 py-3"
                >
                  <Home size={16} /> Go to Homepage
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/products"
                  className="btn-secondary text-sm px-6 py-3"
                >
                  <Search size={16} /> Browse Products
                </Link>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="glass rounded-2xl p-5 inline-block">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                Need help? Contact us
              </p>
              <a
                href="tel:+919099024659"
                className="flex items-center justify-center gap-2 text-accent font-bold text-sm hover:text-accent-light transition-colors"
              >
                <Phone size={14} /> +91 90990 24659 — Devang Shah
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
