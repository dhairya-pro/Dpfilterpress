import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Phone, CheckCircle2, Settings, Truck, Wrench,
  Award, Users, Package, Zap, ChevronRight, MessageCircle,
  Star, ShieldCheck, Clock, MapPin, ChevronDown
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import ProductCard from '../components/ProductCard'
import SchemaMarkup from '../components/SchemaMarkup'
import { featuredProducts, categories } from '../data/products'
import {
  PAGE_KEYWORDS, localBusinessSchema, breadcrumbSchema, faqSchema,
  categoryItemListSchema, BUSINESS
} from '../utils/seo'

/* ── animation helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

/* ── page data ── */
const highlights = [
  {
    icon: Settings, title: 'Filter Press',
    desc: 'New & Used Filter Press Sales, PP Rods 10mm–100mm, complete filter press solutions for chemical and industrial use.',
    link: '/products?cat=filter-press',
    gradient: 'from-blue-500/15 via-blue-400/5 to-transparent', accent: '#3B82F6',
  },
  {
    icon: Wrench, title: 'Hydraulic Parts',
    desc: 'Power Packs, Cylinders, Valves, Gauges, Hose & Fittings – Sales, Service & Repair by expert technicians.',
    link: '/products?cat=hydraulic-parts',
    gradient: 'from-accent/15 via-accent/5 to-transparent', accent: '#7EC828',
  },
  {
    icon: Truck, title: 'Material Handling',
    desc: 'Pallet Trucks, Stackers, Scissor Lifts, Cranes, Drum Handling & Trolleys – 60+ models in stock.',
    link: '/products?cat=pallet-trucks',
    gradient: 'from-purple-500/15 via-purple-400/5 to-transparent', accent: '#A855F7',
  },
]

const stats = [
  { label: 'Years of Experience', end: 15, suffix: '+', icon: Award, color: 'text-yellow-400' },
  { label: 'Products in Range', end: 80, suffix: '+', icon: Package, color: 'text-blue-400' },
  { label: 'Happy Clients', end: 500, suffix: '+', icon: Users, color: 'text-green-400' },
  { label: 'Repairs Done', end: 1000, suffix: '+', icon: Zap, color: 'text-accent' },
]

const trustPoints = [
  'Authorized dealer for leading brands',
  'GIDC-based industrial location, Ankleshwar',
  'Same-day dispatch for spare parts',
  'Expert hydraulic repair service',
  'Competitive B2B pricing',
  'Serving Bharuch, Vadodara & all Gujarat',
]

const testimonials = [
  { name: 'Rajesh Patel', company: 'Petrochemical Plant, Bharuch', text: 'Excellent quality hydraulic parts. Fast delivery and competitive pricing. Devang Shah is very responsive.', rating: 5 },
  { name: 'Suresh Mehta', company: 'Chemical Industry, Ankleshwar', text: 'Our filter press was repaired perfectly. The service team is knowledgeable and professional.', rating: 5 },
  { name: 'Amit Joshi', company: 'Logistics Company, Vadodara', text: 'Best pallet truck supplier in Gujarat. Got RE 106 Electric model at best price with full support.', rating: 5 },
]

const tickerItems = [
  '🔩 Filter Press Supplier Ankleshwar',
  '⚙️ Hydraulic Power Pack Sales & Service',
  '🚛 Hand Pallet Trucks RE 101–RE 111',
  '🏗️ Electric Stackers RE 112–RE 118',
  '🛢️ Drum Handling Equipment',
  '⬆️ Scissor Lift Tables & AWP',
  '🔧 Hydraulic Cylinder Repair',
  '📦 Material Handling – GIDC Ankleshwar',
  '🏭 Industrial Equipment Bharuch Gujarat',
]

/* ── FAQ DATA (drives both UI and FAQ Schema) ── */
const FAQS = [
  {
    q: 'Do you supply products across India (pan-India delivery)?',
    a: 'Yes. DP Filter Press Trading supplies products pan-India. We deliver to all major cities including Mumbai, Delhi, Pune, Hyderabad, Chennai, Bengaluru, Kolkata, Ahmedabad, Surat, Jaipur, Indore, Ludhiana, Nagpur, Coimbatore and more. Delivery takes 3–10 business days depending on location.',
  },
  {
    q: 'Where is DP Filter Press Trading located?',
    a: 'DP Filter Press Trading is located at Plot No. 4721, Gala No. 1, Opp. Nilkanth Restaurant, GIDC Industrial Area, Ankleshwar – 393002, Bharuch, Gujarat, India.',
  },
  {
    q: 'Which pallet truck models are available?',
    a: 'We stock 11 pallet truck models: RE 101 (Standard 2.5T), RE 102 (3T), RE 103 (5T), RE 104 (Low Profile), RE 105 (Scissor Type), RE 106 (Electric 2T), RE 107 (Electric 3T), RE 108 (Reel Type), RE 109 (With Weighing Scale), RE 110 (Stainless Steel Food Grade), RE 111 (Long Fork). All available with pan-India delivery.',
  },
  {
    q: 'Which electric stacker models do you supply?',
    a: 'We supply: RE 112 (Manual 500kg), RE 113 (Manual 1T), RE 114 (Semi-Electric), RE 115 (Walkie Electric), RE 116 (Fully Battery Operated), RE 117 (Reach Truck up to 6m), RE 118 (Counter Balance Stacker). Available across India.',
  },
  {
    q: 'Do you repair hydraulic cylinders and power packs?',
    a: 'Yes. We provide complete hydraulic repair services including seal kit replacement, piston rod re-chroming, barrel honing, leak detection, and pressure testing for hydraulic cylinders. We also service and overhaul hydraulic power packs for customers across Gujarat and India.',
  },
  {
    q: 'Do you sell new and used filter press machines?',
    a: 'Yes, we sell both new and used/old filter press machines with pan-India supply. We also buy old filter press units. We supply PP Rods in sizes from 10mm to 100mm for filter press components.',
  },
  {
    q: 'Do you supply scissor lift tables and aerial work platforms (AWP)?',
    a: 'Yes. We supply RE 126 (Hydraulic Scissor Lift Table 1T), RE 127 (Mobile Scissor Lift), RE 128 (Single Mast AWP up to 6m), RE 129 (Double Mast AWP up to 10m), and RE 130 (Self-Propelled Scissor Lift up to 8m). Pan-India delivery available.',
  },
  {
    q: 'What chain hoists and cranes do you supply?',
    a: 'We supply RE 131 (Hydraulic Floor Crane 2T), RE 132 (Electric Wire Rope Hoist), RE 133 (Magnetic Lifter), RE 139 (Manual Chain Block up to 10T), RE 140 (Electric Chain Hoist), RE 141 (Lever Chain Block), RE 142 (Digital Crane Scale). All available pan-India.',
  },
  {
    q: 'Do you supply pallet truck spare parts across India?',
    a: 'Yes. We supply complete pallet truck spare parts including hydraulic pumps (SP-001), seal kits — NBR (SP-002) and PU (SP-003), PP/Nylon/PU load wheels, steer wheels, bearings, relief valves, lowering valves, springs, and 24V battery chargers (SP-030). Pan-India delivery available.',
  },
  {
    q: 'How can I get a price quote?',
    a: 'Call Devang Shah at +91 9099024659 or +91 9824704659, send a WhatsApp message, fill the contact form on our website, or email dev.bharuch@gmail.com. We respond within 2 hours on business days and supply across India.',
  },
]

/* ── FAQ Accordion item ── */
function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-neutral-200 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-primary text-sm md:text-base">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-accent"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 pt-1 text-neutral-800/70 text-sm leading-relaxed border-t border-neutral-100 bg-neutral-50">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  /* ── Schema.org objects ── */
  const schemas = [
    localBusinessSchema(),
    faqSchema(FAQS),
    breadcrumbSchema([{ name: 'Home', path: '/' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BUSINESS.url}/#website`,
      url: BUSINESS.url,
      name: BUSINESS.name,
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BUSINESS.url}/products?cat={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <>
      <Helmet>
        <title>Filter Press & Pallet Truck Supplier India | DP Filter Press</title>
        <meta name="description" content="Pan-India B2B supplier of Filter Press, Pallet Trucks, Stackers, Hydraulic Parts & Material Handling Equipment. GIDC Ankleshwar, Gujarat. Call 9099024659." />
        <link rel="canonical" href={BUSINESS.url} />
        <meta property="og:title" content="DP Filter Press Trading | Industrial Equipment Supplier India" />
        <meta property="og:description" content="Filter Press, Pallet Trucks, Stackers, Hydraulic Parts & Material Handling Equipment. Pan-India B2B supply. Call +91 9099024659." />
        <meta property="og:url" content={BUSINESS.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={BUSINESS.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DP Filter Press Trading | Ankleshwar Gujarat" />
        <meta name="twitter:description" content="Pan-India supplier of Filter Press, Pallet Trucks, Stackers & Hydraulic Parts. Call +91 9099024659." />
      </Helmet>

      <SchemaMarkup schemas={schemas} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-hero flex items-center overflow-hidden pt-20" aria-label="Hero section">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl orb-float" />
          <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-3xl orb-float-slow" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(126,200,40,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.6) 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 text-accent text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              GIDC Industrial Area · Ankleshwar, Gujarat
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-white text-4xl md:text-5xl xl:text-6xl leading-[1.1] mb-5"
            >
              DP Filter Press<motion.span className="block text-gradient" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>Trading</motion.span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg border-l-2 border-accent/40 pl-4"
            >
              A House of Filter Press Material &amp; All Type of Hydraulic Parts &amp; Repairing Works — GIDC Ankleshwar, Bharuch, Gujarat
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="btn-primary text-base px-8 py-3.5">Enquire Now <ArrowRight size={18} /></Link>
              <Link to="/products" className="btn-secondary text-base px-8 py-3.5">View Products <ChevronRight size={16} /></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-3">
              {[
                { href: 'tel:+919099024659', label: 'Call Devang Shah', value: '+91 90990 24659', bg: 'bg-white/8 border-white/15', icon: <Phone size={15} className="text-primary" />, iconBg: 'bg-accent' },
                { href: 'https://wa.me/919099024659', label: 'WhatsApp', value: 'Chat instantly', bg: 'bg-[#25D366]/10 border-[#25D366]/30', icon: <MessageCircle size={15} className="text-white" />, iconBg: 'bg-[#25D366]', external: true },
              ].map(({ href, label, value, bg, icon, iconBg, external }) => (
                <motion.a key={href} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 ${bg} border rounded-xl px-4 py-3 transition-colors`}
                >
                  <div className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center shrink-0`}>{icon}</div>
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-wide">{label}</p>
                    <p className="text-white font-semibold text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] gradient-border">
              <img src="/images/hero_banner.webp" alt="Industrial filter press and hydraulic equipment at DP Filter Press Trading Ankleshwar Gujarat" className="w-full h-[480px] object-cover" width="600" height="480" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-sm">📍 GIDC Industrial Area, Ankleshwar</p>
                <p className="text-white/60 text-xs">Bharuch District, Gujarat – 393002</p>
              </div>
            </div>
            <motion.div animate={{ y: [0,-12,0] }} transition={{ repeat:Infinity, duration:3.5, ease:'easeInOut' }} className="absolute -bottom-8 -left-10 glass rounded-2xl px-5 py-4 shadow-glow-lg">
              <p className="text-accent font-black text-3xl font-heading leading-none">15+</p>
              <p className="text-white/70 text-xs mt-1">Years Experience</p>
            </motion.div>
            <motion.div animate={{ y: [0,12,0] }} transition={{ repeat:Infinity, duration:4, ease:'easeInOut' }} className="absolute -top-6 -right-6 glass rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-accent font-black text-3xl font-heading leading-none">80+</p>
              <p className="text-white/70 text-xs mt-1">Products</p>
            </motion.div>
            <motion.div animate={{ y: [0,-8,0] }} transition={{ repeat:Infinity, duration:5, ease:'easeInOut', delay:1 }} className="absolute top-1/2 -right-12 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex text-yellow-400 mb-1">{'★★★★★'.split('').map((s,i) => <span key={i} className="text-xs">{s}</span>)}</div>
              <p className="text-white/70 text-[10px]">500+ Clients</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:2.2 }}>
          <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" animate={{ y:[0,16,0] }} transition={{ repeat:Infinity, duration:2.2 }} />
          </div>
        </motion.div>
      </section>

      {/* ── TICKER ── */}
      <div className="bg-accent py-3 overflow-hidden" aria-hidden="true">
        <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-primary font-semibold text-sm shrink-0">{item}</span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="bg-primary-light py-16" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ label, end, suffix, icon: Icon, color }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.1)}
              className="group text-center bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-colors duration-300 border border-white/5 hover:border-accent/20"
            >
              <div className="w-12 h-12 bg-white/8 group-hover:bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Icon size={22} className={color} />
              </div>
              <p className="font-heading font-black text-accent text-4xl mb-1 leading-none"><AnimatedCounter end={end} suffix={suffix} /></p>
              <p className="text-white/60 text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-24 bg-white" aria-labelledby="offerings-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="tag mb-4">What We Offer</span>
            <h2 id="offerings-heading" className="section-title">Our Core Offerings</h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">Comprehensive industrial solutions for manufacturing, chemical, and logistics industries across Gujarat and India.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map(({ icon: Icon, title, desc, link, gradient, accent }, i) => (
              <motion.div key={title} initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.15 }} whileHover={{ y:-8 }}
                className="group relative card card-shine p-8 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
                <div className="relative">
                  <motion.div whileHover={{ rotate:[0,-10,10,0] }} transition={{ duration:0.4 }} className="w-14 h-14 bg-neutral-100 group-hover:bg-primary rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon size={26} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-primary text-xl mb-3">{title}</h3>
                  <p className="text-neutral-800/70 text-sm leading-relaxed mb-6">{desc}</p>
                  <Link to={link} className="inline-flex items-center gap-2 text-accent font-semibold text-sm group/link" aria-label={`Explore ${title} products`}>
                    <span className="animated-underline">Explore Products</span>
                    <ChevronRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 id="categories-heading" className="section-title">Browse by Category</h2>
            <div className="section-divider mx-auto mt-3" />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.04 }} whileHover={{ y:-4 }}>
                <Link to={`/products?cat=${cat.id}`} className="group flex flex-col items-center gap-3 bg-white rounded-2xl p-4 shadow-card hover:shadow-glow transition-all duration-300 text-center border border-transparent hover:border-accent/30" aria-label={`Browse ${cat.name}`}>
                  <motion.div whileHover={{ rotate:[0,-15,15,0] }} transition={{ duration:0.4 }} className="w-12 h-12 bg-neutral-50 group-hover:bg-accent/10 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <span className="text-2xl">{cat.icon}</span>
                  </motion.div>
                  <span className="text-primary text-xs font-bold leading-tight">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 bg-white" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14">
            <div>
              <span className="tag mb-3">Top Products</span>
              <h2 id="featured-heading" className="section-title">Featured Products</h2>
              <div className="section-divider mt-3" />
            </div>
            <Link to="/products" className="btn-secondary text-sm mt-6 sm:mt-0">View All 80+ Products <ArrowRight size={15} /></Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 bg-hero relative overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage:`linear-gradient(rgba(126,200,40,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.5) 1px,transparent 1px)`, backgroundSize:'50px 50px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl orb-float" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <span className="tag mb-5">About Us</span>
            <h2 id="about-heading" className="font-heading font-black text-white text-3xl md:text-4xl mb-6 leading-tight">
              Your Trusted Industrial<br /><span className="text-gradient">Equipment Partner</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-5 text-sm">
              <strong className="text-white">DP Filter Press Trading</strong> is a leading supplier of industrial filter press equipment, hydraulic parts, and material handling solutions based at <strong className="text-white">GIDC Industrial Area, Ankleshwar, Bharuch, Gujarat</strong>.
            </p>
            <p className="text-white/70 leading-relaxed mb-8 text-sm">We serve manufacturing plants, chemical industries, and logistics companies across Gujarat and India with quality products, competitive pricing, and reliable service.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {trustPoints.map((point, i) => (
                <motion.div key={point} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">Learn More <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] gradient-border">
              <img src="/images/about_banner.webp" alt="DP Filter Press Trading industrial facility at GIDC Ankleshwar Gujarat" className="w-full h-80 object-cover" width="600" height="320" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[{ icon:MapPin, label:'GIDC Ankleshwar' }, { icon:ShieldCheck, label:'Quality Assured' }, { icon:Clock, label:'Fast Response' }].map(({ icon:Icon, label }) => (
                <div key={label} className="glass rounded-xl p-3 text-center">
                  <Icon size={16} className="text-accent mx-auto mb-1" />
                  <p className="text-white/70 text-[10px] font-medium">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-neutral-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="tag mb-3">What Clients Say</span>
            <h2 id="testimonials-heading" className="section-title">Client Testimonials</h2>
            <div className="section-divider mx-auto mt-3" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, company, text, rating }, i) => (
              <motion.div key={name} {...fadeUp(i*0.12)} whileHover={{ y:-5 }} className="card card-shine p-7">
                <div className="flex gap-0.5 mb-4">{Array(rating).fill(0).map((_,j) => <Star key={j} size={14} fill="#7EC828" color="#7EC828" />)}</div>
                <p className="text-neutral-800 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center font-heading font-bold text-primary text-sm shrink-0">{name[0]}</div>
                  <div>
                    <p className="font-semibold text-primary text-sm">{name}</p>
                    <p className="text-neutral-800/60 text-xs">{company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="tag mb-3">Common Questions</span>
            <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto mt-3 mb-4" />
            <p className="text-neutral-800/60 text-sm">Everything you need to know about DP Filter Press Trading, our products, and services.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}>
                <FaqItem q={faq.q} a={faq.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.3)} className="mt-10 bg-accent/8 border border-accent/20 rounded-2xl p-6 text-center">
            <p className="text-primary font-semibold mb-2">Still have questions?</p>
            <p className="text-neutral-800/70 text-sm mb-4">Call Devang Shah directly or send an enquiry and we'll respond within 2 hours.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+919099024659" className="btn-primary text-sm py-2.5"><Phone size={14} /> +91 90990 24659</a>
              <Link to="/contact" className="btn-secondary text-sm py-2.5">Send Enquiry <ArrowRight size={14} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-accent py-20 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage:`radial-gradient(circle at 20% 50%, rgba(10,22,40,0.8) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(10,22,40,0.6) 0%, transparent 60%)` }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 id="cta-heading" className="font-heading font-black text-primary text-3xl md:text-4xl mb-4">Need a Custom Quote or Technical Advice?</h2>
            <p className="text-primary/70 text-lg mb-10">Contact <strong>Devang Shah</strong> today — we respond within 2 hours on business days.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                <Link to="/contact" className="bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-light transition-colors inline-flex items-center gap-2 shadow-lg">
                  Get a Quote <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                <a href="tel:+919099024659" className="bg-white/40 hover:bg-white/60 text-primary font-bold px-10 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
