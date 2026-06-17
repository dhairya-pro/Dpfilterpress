import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Settings, Wrench, ShoppingBag, CheckCircle2, ChevronRight,
  ArrowRight, Zap, Shield, Clock, Phone
} from 'lucide-react'
import SchemaMarkup from '../components/SchemaMarkup'
import { PAGE_KEYWORDS, serviceSchema, breadcrumbSchema, BUSINESS } from '../utils/seo'

const SERVICE_SCHEMAS = [
  serviceSchema('Hydraulic Power Pack Sales & Service', 'Supply, servicing and overhauling of hydraulic power packs for industrial machinery in Ankleshwar, Bharuch, Gujarat.', '/services'),
  serviceSchema('Hydraulic Cylinder Repair & Reconditioning', 'Seal kit replacement, piston rod re-chroming, barrel honing, leak detection and pressure testing for hydraulic cylinders. Ankleshwar, Gujarat.', '/services'),
  serviceSchema('Filter Press Repair & Maintenance', 'Complete filter press maintenance, repair and reconditioning including plate replacement, hydraulic system repair, seal and gasket replacement. Ankleshwar, Gujarat.', '/services'),
  serviceSchema('Used Filter Press Buying & Selling', 'We buy and sell old/used filter press machines and hydraulic equipment. Equipment valuation and refurbishment available. Pan-India sourcing.', '/services'),
  breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const services = [
  {
    icon: Zap, title: 'Hydraulic Power Pack', subtitle: 'Sales & Service',
    desc: 'We supply new hydraulic power packs for industrial machinery and provide complete servicing, overhauling, and troubleshooting. Custom units built to specification.',
    features: ['New power pack supply', 'Servicing & overhauling', 'Custom specifications', 'Same-day diagnosis', 'Replacement parts supply'],
    image: '/images/hydraulic_parts.png',
    color: 'from-accent/15 to-transparent', accentColor: '#7EC828',
  },
  {
    icon: Wrench, title: 'Cylinder Repair', subtitle: '& Repairing Works',
    desc: 'Expert hydraulic cylinder repair and reconditioning. We replace seals, re-chrome piston rods, hone barrels, and restore full operating pressure and performance.',
    features: ['Seal kit replacement', 'Piston rod re-chroming', 'Barrel honing', 'Leak detection & repair', 'Pressure testing'],
    image: '/images/hydraulic_parts.png',
    color: 'from-blue-500/15 to-transparent', accentColor: '#3B82F6',
  },
  {
    icon: Settings, title: 'Filter Press Repair', subtitle: '& Maintenance',
    desc: 'Complete filter press maintenance, repair, and reconditioning. We replace plates, repair hydraulic systems, fix leaks, and restore full operational efficiency.',
    features: ['Hydraulic system repair', 'Plate replacement', 'Seal & gasket replacement', 'Frame inspection & repair', 'Preventive maintenance'],
    image: '/images/filter_press.png',
    color: 'from-purple-500/15 to-transparent', accentColor: '#A855F7',
  },
  {
    icon: ShoppingBag, title: 'Old Equipment', subtitle: 'Buying & Selling',
    desc: 'We buy and sell used/old filter press machines and hydraulic equipment. Get the best value for your old equipment or find quality pre-owned machinery at competitive prices.',
    features: ['Used filter press purchase', 'Hydraulic equipment resale', 'Equipment valuation', 'Refurbishment available', 'Pan-India sourcing'],
    image: '/images/filter_press.png',
    color: 'from-orange-500/15 to-transparent', accentColor: '#F97316',
  },
]

const whyUs = [
  { icon: Clock, title: 'Fast Turnaround', desc: 'Quick diagnosis and repair with minimal downtime for your operations.' },
  { icon: Shield, title: 'Quality Assured', desc: 'All repaired equipment is tested to full pressure and performance specifications.' },
  { icon: Phone, title: 'Expert Support', desc: 'Devang Shah personally handles all technical queries and service requirements.' },
  { icon: CheckCircle2, title: 'Genuine Parts', desc: 'Only genuine or OEM-compatible spare parts used in all repairs and servicing.' },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Hydraulic Repair & Filter Press Service | DP Filter Press</title>
        <meta name="description" content="Hydraulic power pack service, cylinder repair, filter press maintenance & used equipment buy/sell. Ankleshwar, Gujarat. Call +91 9099024659." />
        <link rel="canonical" href={`${BUSINESS.url}/services`} />
        <meta property="og:title" content="Hydraulic Repair & Filter Press Service | DP Filter Press" />
        <meta property="og:description" content="Hydraulic power pack service, cylinder repair, filter press maintenance & used equipment buy/sell. Call +91 9099024659." />
        <meta property="og:url" content={`${BUSINESS.url}/services`} />
      </Helmet>

      <SchemaMarkup schemas={SERVICE_SCHEMAS} />

      {/* Hero */}
      <section className="bg-hero pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(126,200,40,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.5) 1px,transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight size={12} /><span className="text-white">Services</span>
            </nav>
            <h1 className="font-heading font-black text-white text-4xl md:text-5xl mb-3">Our Services</h1>
            <p className="text-white/60 text-base max-w-2xl">Expert industrial services for hydraulic systems, filter press equipment, and material handling machinery across Gujarat.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-neutral-50" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="services-list-heading" className="sr-only">Our Service Offerings</h2>
          <div className="space-y-14">
            {services.map((service, i) => {
              const Icon = service.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.65 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 grid lg:grid-cols-2"
                >
                  {/* Image side */}
                  <div className={`relative min-h-[280px] bg-gradient-to-br ${service.color} flex items-center justify-center overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                    <motion.img
                      src={service.image} alt={service.title}
                      className="w-full h-full object-contain p-10 max-h-64"
                      whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }}
                    />
                    <div className="absolute top-5 left-5">
                      <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg" style={{ border: `2px solid ${service.accentColor}40` }}>
                        <Icon size={22} style={{ color: service.accentColor }} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${service.accentColor}, transparent)` }} />
                  </div>
                  {/* Content side */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                    <span className="tag mb-3">{service.subtitle}</span>
                    <h2 className="font-heading font-bold text-primary text-2xl md:text-3xl mb-4">{service.title}</h2>
                    <p className="text-neutral-800/70 leading-relaxed mb-6 text-sm">{service.desc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((f, fi) => (
                        <motion.li
                          key={f}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fi * 0.07 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 size={15} style={{ color: service.accentColor }} className="shrink-0" />
                          <span className="text-neutral-800 text-sm">{f}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary self-start">
                      Get a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="tag mb-3">Why Choose Us</span>
            <h2 id="why-heading" className="section-title">Service Excellence</h2>
            <div className="section-divider mx-auto mt-3" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)} whileHover={{ y: -6 }} className="card card-shine p-7 text-center">
                <motion.div whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }}
                  className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-accent" />
                </motion.div>
                <h3 className="font-heading font-bold text-primary mb-2">{title}</h3>
                <p className="text-neutral-800/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(10,22,40,0.8) 0%, transparent 60%)` }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-black text-primary text-3xl mb-4">Ready to Get Your Equipment Serviced?</h2>
            <p className="text-primary/70 mb-8">Call us directly or fill out the contact form. We respond promptly on all working days.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-light transition-colors inline-flex items-center gap-2">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a href="tel:+919099024659" className="bg-white/40 hover:bg-white/60 text-primary font-bold px-10 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
                  <Phone size={16} /> 9099024659
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
