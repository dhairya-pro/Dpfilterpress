import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  MapPin, Phone, Mail, CheckCircle2, Award, Users, Package,
  ChevronRight, Target, Eye, Heart, Building2, ShieldCheck, Clock, ArrowRight
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import SchemaMarkup from '../components/SchemaMarkup'
import { PAGE_KEYWORDS, localBusinessSchema, breadcrumbSchema, BUSINESS } from '../utils/seo'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To provide reliable, high-quality industrial equipment and hydraulic solutions to manufacturing businesses across Gujarat and India.', color: 'text-accent bg-accent/10' },
  { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted one-stop industrial equipment supplier in Ankleshwar and Bharuch district.', color: 'text-blue-500 bg-blue-500/10' },
  { icon: Heart, title: 'Our Values', desc: 'Quality, integrity, competitive pricing, prompt service, and building long-term partnerships with our clients.', color: 'text-purple-500 bg-purple-500/10' },
]

const stats = [
  { label: 'Years in Business', end: 15, suffix: '+' },
  { label: 'Products Range', end: 80, suffix: '+' },
  { label: 'Satisfied Clients', end: 500, suffix: '+' },
  { label: 'Repairs Done', end: 1000, suffix: '+' },
]

const strengths = [
  'Strategic location at GIDC Industrial Area, Ankleshwar',
  'Dedicated point of contact: Devang Shah',
  'Ready stock for fast dispatch',
  'Pan-Gujarat service & delivery network',
  'Expertise in hydraulic system troubleshooting',
  'Competitive B2B pricing for bulk orders',
  'After-sales support and spare parts supply',
  'Old equipment buyback available',
]

const industries = [
  'Chemical Manufacturing', 'Pharmaceutical', 'Textile & Dyeing',
  'Food Processing', 'Logistics & Warehousing', 'Construction',
  'Paper & Pulp', 'Ceramics & Minerals',
]

const timeline = [
  { year: '2009', event: 'Company founded at GIDC Ankleshwar' },
  { year: '2013', event: 'Expanded into Material Handling Equipment' },
  { year: '2017', event: 'Hydraulic repair workshop established' },
  { year: '2021', event: 'Electric pallet trucks & stackers added' },
  { year: '2024', event: '500+ satisfied clients across Gujarat' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About DP Filter Press Trading | GIDC Ankleshwar Gujarat</title>
        <meta name="description" content="15+ years of industrial equipment supply from GIDC Ankleshwar, Gujarat. Filter Press, Hydraulic Parts & Material Handling. Call Devang Shah." />
        <link rel="canonical" href={`${BUSINESS.url}/about`} />
        <meta property="og:title" content="About DP Filter Press Trading | GIDC Ankleshwar Gujarat" />
        <meta property="og:description" content="15+ years of industrial equipment supply from GIDC Ankleshwar, Gujarat. Call Devang Shah: +91 9099024659." />
        <meta property="og:url" content={`${BUSINESS.url}/about`} />
      </Helmet>

      <SchemaMarkup schemas={[
        localBusinessSchema(),
        breadcrumbSchema([{ name:'Home', path:'/' }, { name:'About Us', path:'/about' }]),
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Devang Shah',
          jobTitle: 'Proprietor',
          worksFor: { '@type': 'Organization', name: 'DP Filter Press Trading' },
          telephone: '+91-9099024659',
          email: 'dev.bharuch@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ankleshwar',
            addressRegion: 'Gujarat',
            addressCountry: 'IN',
          },
        },
      ]} />

      {/* Hero */}
      <section className="bg-hero pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(126,200,40,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.5) 1px,transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="font-heading font-black text-white text-4xl md:text-5xl mb-3">About Us</h1>
            <p className="text-white/60 text-base max-w-2xl">
              Your trusted industrial equipment partner — 15+ years serving GIDC Ankleshwar, Bharuch &amp; Gujarat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <span className="tag mb-5">Company Overview</span>
            <h2 id="overview-heading" className="section-title mb-2">
              DP Filter Press Trading
            </h2>
            <p className="text-accent font-semibold text-base mb-6">Ankleshwar's Leading Industrial Equipment Hub</p>
            <div className="section-divider mb-6" />
            <div className="space-y-4 text-neutral-800/80 leading-relaxed text-sm">
              <p>
                <strong className="text-primary">DP Filter Press Trading</strong> is a well-established industrial equipment supplier based in the heart of GIDC Industrial Area, Ankleshwar, Bharuch district, Gujarat. We specialize in supplying, servicing, and repairing Filter Press equipment, Hydraulic Parts, and a comprehensive range of Material Handling Equipment.
              </p>
              <p>
                Founded with the vision of becoming a one-stop solution for industrial clients in Gujarat, we have grown into a trusted name across the region. Our strategic location at GIDC Ankleshwar puts us right in the center of one of Gujarat's most active industrial zones.
              </p>
              <p>
                We take pride in maintaining strong relationships with leading manufacturers, ensuring our clients receive the best quality products at competitive B2B prices with fast delivery.
              </p>
            </div>

            <div className="mt-8 p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
              <h3 className="font-heading font-bold text-primary mb-4 flex items-center gap-2 text-sm">
                <Building2 size={16} className="text-accent" /> Business Details
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { icon: MapPin, content: 'Plot No. 4721, Gala No. 1, Opp. Nilkanth Restaurant, GIDC, Ankleshwar – 393002, Bharuch, Gujarat' },
                  { icon: Phone, content: null, links: [{ href: 'tel:+919099024659', text: '+91 90990 24659' }, { href: 'tel:+919824704659', text: '+91 98247 04659' }] },
                  { icon: Mail, content: null, links: [{ href: 'mailto:dev.bharuch@gmail.com', text: 'dev.bharuch@gmail.com' }] },
                ].map(({ icon: Icon, content, links }, i) => (
                  <div key={i} className="flex gap-3">
                    <Icon size={15} className="text-accent mt-0.5 shrink-0" />
                    {content
                      ? <span className="text-neutral-800/70">{content}</span>
                      : <div className="space-y-0.5">{links.map(({ href, text }) => (
                          <a key={href} href={href} className="block text-neutral-800/70 hover:text-accent transition-colors">{text}</a>
                        ))}</div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-card-hover gradient-border mb-6">
              <img
                src="/images/about_banner.webp"
                alt="DP Filter Press Trading industrial facility at GIDC Ankleshwar Gujarat"
                className="w-full h-72 object-cover"
                width="600" height="288"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, end, suffix }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(i * 0.08)}
                  whileHover={{ scale: 1.03 }}
                  className="bg-primary rounded-2xl p-5 text-center cursor-default"
                >
                  <p className="font-heading font-black text-accent text-3xl mb-1 leading-none">
                    <AnimatedCounter end={end} suffix={suffix} />
                  </p>
                  <p className="text-white/60 text-xs mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50 overflow-hidden" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="tag mb-3">Our Journey</span>
            <h2 id="timeline-heading" className="section-title">Company Timeline</h2>
            <div className="section-divider mx-auto mt-3" />
          </motion.div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent hidden md:block" />
            <div className="space-y-8">
              {timeline.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-card inline-block">
                      <p className="text-accent font-black font-heading text-xl mb-1">{year}</p>
                      <p className="text-primary font-medium text-sm">{event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-glow shrink-0 z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 id="values-heading" className="section-title">Our Foundation</h2>
            <div className="section-divider mx-auto mt-3" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.12)}
                whileHover={{ y: -6 }}
                className="card card-shine p-8"
              >
                <div className={`w-14 h-14 ${color.split(' ')[1]} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon size={26} className={color.split(' ')[0]} />
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-3">{title}</h3>
                <p className="text-neutral-800/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-hero relative overflow-hidden" aria-labelledby="strengths-heading">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(126,200,40,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.5) 1px,transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl orb-float pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 id="strengths-heading" className="font-heading font-black text-white text-3xl md:text-4xl">Our Strengths</h2>
            <div className="section-divider mx-auto mt-3" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 glass rounded-xl p-4 cursor-default"
              >
                <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <span className="tag mb-3">Industries</span>
            <h2 id="industries-heading" className="section-title">Industries We Serve</h2>
            <div className="section-divider mx-auto mt-3" />
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-neutral-50 border border-neutral-200 text-primary font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 cursor-default"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(10,22,40,0.8) 0%, transparent 60%)` }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-black text-primary text-3xl mb-4">
              Partner with DP Filter Press Trading
            </h2>
            <p className="text-primary/70 mb-8">Get in touch with us today for all your industrial equipment needs.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link to="/contact" className="bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-light transition-colors inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
