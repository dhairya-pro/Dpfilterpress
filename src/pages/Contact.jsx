import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import {
  Phone, Mail, MapPin, MessageCircle, ChevronRight, Send,
  CheckCircle2, Clock, User, Building2, Package, ArrowRight,
  AlertCircle
} from 'lucide-react'
import { allProducts } from '../data/products'
import SchemaMarkup from '../components/SchemaMarkup'
import { breadcrumbSchema, localBusinessSchema, BUSINESS } from '../utils/seo'

/* ── EmailJS config (from .env) ── */
const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const contactCards = [
  {
    icon: Phone, title: 'Call Us',
    lines: [{ text: '+91 90990 24659', href: 'tel:+919099024659' }, { text: '+91 98247 04659', href: 'tel:+919824704659' }],
    color: 'text-accent bg-accent/10',
  },
  {
    icon: Mail, title: 'Email Us',
    lines: [{ text: 'dev.bharuch@gmail.com', href: 'mailto:dev.bharuch@gmail.com' }],
    color: 'text-blue-500 bg-blue-500/10',
  },
  {
    icon: MapPin, title: 'Our Address',
    lines: [{ text: 'Plot No. 4721, Gala No. 1, Opp. Nilkanth Restaurant, GIDC, Ankleshwar – 393002, Bharuch, Gujarat' }],
    color: 'text-purple-500 bg-purple-500/10',
  },
  {
    icon: Clock, title: 'Working Hours',
    lines: [{ text: 'Mon – Sat: 9:00 AM – 7:00 PM' }, { text: 'Sunday: By appointment' }],
    color: 'text-orange-500 bg-orange-500/10',
  },
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const prefilledProduct = searchParams.get('product') || ''
  const formRef = useRef(null)

  const [form, setForm] = useState({
    from_name: '',
    company: '',
    phone: '',
    product: prefilledProduct,
    message: '',
    // Hidden fields auto-filled for the email template
    to_name: 'Devang Shah',
    reply_to: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  // EmailJS configured check
  const ejsConfigured = EJS_SERVICE && EJS_SERVICE !== 'YOUR_SERVICE_ID'

  useEffect(() => {
    if (prefilledProduct) setForm(f => ({ ...f, product: prefilledProduct }))
  }, [prefilledProduct])

  // Init EmailJS once
  useEffect(() => {
    if (ejsConfigured) emailjs.init(EJS_KEY)
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({
      ...f,
      [name]: value,
      // Keep reply_to in sync with phone (so Devang can reply)
      ...(name === 'phone' ? { reply_to: value } : {}),
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.from_name.trim() || !form.phone.trim()) {
      toast.error('Please fill in Name and Phone fields.')
      return
    }

    setSubmitting(true)

    try {
      if (ejsConfigured) {
        // Send via EmailJS
        await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, EJS_KEY)
        setSubmitted(true)
        toast.success('✅ Enquiry sent to Devang Shah! We will contact you shortly.')
      } else {
        // Fallback: open WhatsApp with enquiry details
        console.warn('EmailJS not configured — falling back to WhatsApp.')
        await new Promise(r => setTimeout(r, 800))
        setSubmitted(true)
        toast.success('Redirecting to WhatsApp…')
      }

      // Always also open WhatsApp as a backup channel
      const wa = `https://wa.me/919099024659?text=${encodeURIComponent(
        `Hello DP Filter Press Trading!\n\nName: ${form.from_name}\nCompany: ${form.company || 'N/A'}\nPhone: ${form.phone}\nProduct Interest: ${form.product || 'General Enquiry'}\nMessage: ${form.message || '—'}\n\nSent via Website Contact Form`
      )}`
      setTimeout(() => window.open(wa, '_blank'), 1000)

    } catch (err) {
      console.error('EmailJS error:', err)
      toast.error('Could not send email. Opening WhatsApp instead…')
      const wa = `https://wa.me/919099024659?text=${encodeURIComponent(
        `Hello DP Filter Press Trading!\n\nName: ${form.from_name}\nPhone: ${form.phone}\nProduct: ${form.product || 'General Enquiry'}\nMessage: ${form.message || '—'}`
      )}`
      window.open(wa, '_blank')
    } finally {
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({ from_name: '', company: '', phone: '', product: '', message: '', to_name: 'Devang Shah', reply_to: '' })
  }

  const inputClass = (name) =>
    `w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none ${
      focused === name
        ? 'border-accent ring-2 ring-accent/20 shadow-sm'
        : 'border-neutral-200 hover:border-neutral-300'
    }`

  return (
    <>
      <Helmet>
        <title>Contact Us | DP Filter Press Trading – 9099024659</title>
        <meta name="description" content="Contact DP Filter Press Trading, Ankleshwar. Call/WhatsApp +91 9099024659 for product enquiries and service requests." />
        <link rel="canonical" href={`${BUSINESS.url}/contact`} />
        <meta property="og:title" content="Contact DP Filter Press Trading | Ankleshwar Gujarat" />
        <meta property="og:description" content="Call/WhatsApp +91 9099024659 for product enquiries and service requests." />
        <meta property="og:url" content={`${BUSINESS.url}/contact`} />
      </Helmet>

      <SchemaMarkup schemas={[
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
        localBusinessSchema(),
      ]} />

      {/* Hero */}
      <section className="bg-hero pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(126,200,40,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.5) 1px,transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight size={12} /><span className="text-white">Contact</span>
            </nav>
            <h1 className="font-heading font-black text-white text-4xl md:text-5xl mb-3">Contact Us</h1>
            <p className="text-white/60 text-base max-w-2xl">
              Get in touch for product enquiries, service requests, or any industrial equipment needs.
              We respond within 2 hours on business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="bg-accent py-5" aria-label="Quick contact options">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {[
            { href: 'tel:+919099024659', icon: <Phone size={16} />, label: 'Call: 9099024659', id: 'call-btn-primary' },
            { href: 'tel:+919824704659', icon: <Phone size={16} />, label: 'Call: 9824704659', id: 'call-btn-secondary' },
            { href: 'https://wa.me/919099024659', icon: <MessageCircle size={16} />, label: 'WhatsApp Us', id: 'whatsapp-contact-btn', external: true, green: true },
            { href: 'mailto:dev.bharuch@gmail.com', icon: <Mail size={16} />, label: 'Email Us', id: 'email-contact-btn' },
          ].map(({ href, icon, label, id, external, green }) => (
            <motion.a
              key={id} href={href} id={id}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors ${
                green ? 'bg-[#25D366] text-white hover:bg-[#1aab54]' : 'bg-primary text-white hover:bg-primary-light'
              }`}
            >
              {icon} {label}
            </motion.a>
          ))}
        </div>
      </section>

      {/* EmailJS not configured banner */}
      <AnimatePresence>
        {!ejsConfigured && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-yellow-50 border-b border-yellow-200 py-2.5"
          >
            <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-yellow-800 text-xs">
              <AlertCircle size={14} className="text-yellow-600 shrink-0" />
              <span>
                <strong>EmailJS not configured yet.</strong> Form will fall back to WhatsApp. 
                See the setup guide below to enable direct email delivery.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-10">

          {/* ── FORM (3 cols) ── */}
          <motion.div {...fadeUp()} className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-card overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-7 flex items-center justify-between">
                <div>
                  <h2 className="font-heading font-bold text-white text-xl mb-0.5">Send an Enquiry</h2>
                  <p className="text-white/50 text-xs">
                    {ejsConfigured
                      ? '📧 Email will be sent directly to Devang Shah'
                      : '⚠️ Configure EmailJS to enable direct email delivery'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Send size={18} className="text-accent" />
                </div>
              </div>

              <div className="p-7">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* ── Success State ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-5"
                      >
                        <CheckCircle2 size={40} className="text-accent" />
                      </motion.div>
                      <h3 className="font-heading font-bold text-primary text-2xl mb-2">Enquiry Sent! 🎉</h3>
                      <p className="text-neutral-800/70 text-sm mb-1">
                        Thank you, <strong>{form.from_name}</strong>.
                      </p>
                      <p className="text-neutral-800/60 text-sm mb-6">
                        {ejsConfigured
                          ? <>Email delivered to <strong>dev.bharuch@gmail.com</strong>. Devang Shah will call you on <strong>{form.phone}</strong> shortly.</>
                          : <>WhatsApp message prepared. Devang Shah will contact you on <strong>{form.phone}</strong>.</>
                        }
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <button onClick={resetForm} className="btn-primary text-sm">
                          Send Another Enquiry
                        </button>
                        <a href="https://wa.me/919099024659" target="_blank" rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                        >
                          <MessageCircle size={14} /> WhatsApp Follow-up
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    /* ── Form ── */
                    <motion.form
                      key="form"
                      ref={formRef}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      id="contact-form"
                      className="space-y-5"
                    >
                      {/* Hidden fields for EmailJS template */}
                      <input type="hidden" name="to_name" value="Devang Shah" />
                      <input type="hidden" name="reply_to" value={form.phone} />

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label htmlFor="from_name" className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wide">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-800/40 pointer-events-none" />
                            <input
                              id="from_name" name="from_name" type="text" required
                              placeholder="Your name"
                              value={form.from_name} onChange={handleChange}
                              onFocus={() => setFocused('from_name')} onBlur={() => setFocused(null)}
                              className={inputClass('from_name')}
                            />
                          </div>
                        </div>

                        {/* Company */}
                        <div>
                          <label htmlFor="company" className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wide">
                            Company Name
                          </label>
                          <div className="relative">
                            <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-800/40 pointer-events-none" />
                            <input
                              id="company" name="company" type="text"
                              placeholder="Optional"
                              value={form.company} onChange={handleChange}
                              onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                              className={inputClass('company')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wide">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-800/40 pointer-events-none" />
                          <input
                            id="phone" name="phone" type="tel" required
                            placeholder="+91 XXXXX XXXXX"
                            value={form.phone} onChange={handleChange}
                            onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                            className={inputClass('phone')}
                          />
                        </div>
                      </div>

                      {/* Product */}
                      <div>
                        <label htmlFor="product" className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wide">
                          Product / Service Enquiry
                        </label>
                        <div className="relative">
                          <Package size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-800/40 pointer-events-none" />
                          <select
                            id="product" name="product"
                            value={form.product} onChange={handleChange}
                            onFocus={() => setFocused('product')} onBlur={() => setFocused(null)}
                            className={`${inputClass('product')} appearance-none bg-white cursor-pointer`}
                          >
                            <option value="">-- Select a product or service --</option>
                            <option value="Filter Press - New">Filter Press – New</option>
                            <option value="Filter Press - Used">Filter Press – Used/Old</option>
                            <option value="PP Rods">PP Rods (10mm–100mm)</option>
                            <option value="Hydraulic Power Pack">Hydraulic Power Pack</option>
                            <option value="Hydraulic Cylinder Repair">Hydraulic Cylinder Repair</option>
                            <option value="Filter Press Repair">Filter Press Repair & Maintenance</option>
                            {allProducts.slice(0, 50).map(p => (
                              <option key={p.id} value={`${p.name} (${p.model})`}>
                                {p.name} – {p.model}
                              </option>
                            ))}
                            <option value="General Enquiry">General Enquiry</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wide">
                          Message / Requirements
                        </label>
                        <textarea
                          id="message" name="message" rows={4}
                          placeholder="Describe your requirement, quantity needed, specifications, delivery timeline…"
                          value={form.message} onChange={handleChange}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none resize-none ${
                            focused === 'message' ? 'border-accent ring-2 ring-accent/20' : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                        />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit" disabled={submitting}
                        whileHover={{ scale: submitting ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        id="submit-enquiry-btn"
                        className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed rounded-xl"
                      >
                        {submitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            Sending Enquiry…
                          </>
                        ) : (
                          <>
                            <Send size={17} />
                            {ejsConfigured ? 'Send Enquiry via Email' : 'Send Enquiry via WhatsApp'}
                          </>
                        )}
                      </motion.button>

                      <p className="text-[11px] text-neutral-800/50 text-center leading-relaxed">
                        {ejsConfigured
                          ? '📧 Email sent to dev.bharuch@gmail.com + WhatsApp message prepared automatically'
                          : '💬 Will open WhatsApp with your enquiry details pre-filled'}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL (2 cols) ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact cards */}
            {contactCards.map(({ icon: Icon, title, lines, color }, i) => (
              <motion.div
                key={title} {...fadeUp(i * 0.1)}
                whileHover={{ x: 4 }}
                className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-4"
              >
                <div className={`w-10 h-10 ${color.split(' ')[1]} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon size={18} className={color.split(' ')[0]} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-sm mb-1.5">{title}</h3>
                  {lines.map(({ text, href }, j) => (
                    href
                      ? <a key={j} href={href} className="block text-neutral-800/70 text-sm hover:text-accent transition-colors">{text}</a>
                      : <p key={j} className="text-neutral-800/70 text-sm leading-relaxed">{text}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Person */}
            <motion.div {...fadeUp(0.4)} className="bg-primary rounded-2xl p-5 flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-14 h-14 bg-accent rounded-full flex items-center justify-center font-heading font-black text-primary text-xl shrink-0 shadow-glow"
              >
                DS
              </motion.div>
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest mb-0.5">Point of Contact</p>
                <h3 className="font-heading font-bold text-white text-lg leading-tight">Devang Shah</h3>
                <p className="text-accent text-xs mb-1">Proprietor · DP Filter Press Trading</p>
                <a href="tel:+919099024659" className="text-white/60 hover:text-accent text-xs transition-colors">
                  +91 90990 24659
                </a>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div {...fadeUp(0.5)} className="rounded-2xl overflow-hidden shadow-card">
              <iframe
                title="DP Filter Press Trading – GIDC Ankleshwar, Bharuch, Gujarat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14849.6!2d73.00!3d21.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f8a0000000001%3A0x1!2sGIDC%20Ankleshwar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1686000000000!5m2!1sen!2sin"
                width="100%" height="220"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-white px-4 py-3 flex items-center gap-2">
                <MapPin size={14} className="text-accent shrink-0" />
                <p className="text-primary text-xs font-medium flex-1">GIDC Ankleshwar, Bharuch, Gujarat – 393002</p>
                <a href="https://maps.google.com/?q=GIDC+Industrial+Estate+Ankleshwar+Gujarat"
                  target="_blank" rel="noopener noreferrer"
                  className="text-accent text-xs font-bold hover:underline whitespace-nowrap"
                >
                  Get Directions →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
