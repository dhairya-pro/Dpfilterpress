import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ChevronRight, X, ArrowRight, Truck } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import SchemaMarkup from '../components/SchemaMarkup'
import { categories, products, allProducts } from '../data/products'
import {
  PAGE_KEYWORDS, CAT_SEO_DATA, categoryItemListSchema, breadcrumbSchema,
  productSchema, BUSINESS
} from '../utils/seo'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeCat = searchParams.get('cat') || 'all'
  const activeCategory = categories.find(c => c.id === activeCat)

  useEffect(() => { setSearch('') }, [activeCat])

  const activeProducts = useMemo(() => {
    let list = activeCat === 'all' ? allProducts : (products[activeCat] || [])
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q))
      )
    }
    return list
  }, [activeCat, search])

  const setCat = (id) => { id === 'all' ? setSearchParams({}) : setSearchParams({ cat: id }); setSidebarOpen(false) }

  /* ── Dynamic SEO meta from centralised CAT_SEO_DATA ── */
  const catSeo = activeCat !== 'all' ? CAT_SEO_DATA[activeCat] : null

  const metaTitle = catSeo
    ? `${catSeo.h1} | DP Filter Press Trading`
    : 'Industrial Equipment – 80+ Products | DP Filter Press Trading'

  const metaDesc = catSeo
    ? catSeo.desc.slice(0, 155)
    : 'Browse 80+ industrial products — Filter Press, Pallet Trucks RE 101–111, Stackers, Scissor Lifts & more. Pan-India delivery. Call +91 9099024659.'

  /* ── Schema objects ── */
  const schemas = useMemo(() => {
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }]
    if (activeCategory) crumbs.push({ name: activeCategory.name, path: `/products?cat=${activeCat}` })

    const schemaList = [breadcrumbSchema(crumbs)]
    if (activeCat !== 'all' && activeProducts.length) {
      schemaList.push(categoryItemListSchema(activeCategory?.name || activeCat, activeProducts))
      activeProducts.slice(0, 10).forEach(p => schemaList.push(productSchema(p)))
    }
    return schemaList
  }, [activeCat, activeProducts])

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`${BUSINESS.url}/products${activeCat !== 'all' ? `?cat=${activeCat}` : ''}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`${BUSINESS.url}/products${activeCat !== 'all' ? `?cat=${activeCat}` : ''}`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>

      <SchemaMarkup schemas={schemas} />

      {/* Hero */}
      <section className="bg-hero pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(126,200,40,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(126,200,40,0.5) 1px,transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
              {activeCategory && <><ChevronRight size={12} /><span className="text-accent">{activeCategory.name}</span></>}
            </nav>

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-heading font-black text-white text-4xl md:text-5xl mb-3">
                  {catSeo ? catSeo.h1 : 'Industrial Products'}
                </h1>
                <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
                  {catSeo
                    ? catSeo.desc.slice(0, 160) + '…'
                    : '80+ industrial products — Filter Press, Hydraulic Parts, Pallet Trucks, Stackers, Scissor Lifts & more. Pan-India delivery available.'}
                </p>
              </div>

              {/* Pan-India badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-xl px-4 py-2.5 shrink-0"
              >
                <Truck size={16} className="text-accent" />
                <div>
                  <p className="text-accent font-bold text-sm leading-none">Pan-India Delivery</p>
                  <p className="text-white/50 text-[10px] mt-0.5">3–10 business days</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex gap-8">

          {/* Mobile overlay */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}
          </AnimatePresence>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block flex-shrink-0 w-60">
            <div className="sticky top-24 bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="p-4 bg-primary">
                <h2 className="font-heading font-bold text-white text-sm">Product Categories</h2>
                <p className="text-white/40 text-[10px] mt-0.5">Pan-India supply available</p>
              </div>
              <div className="p-2 max-h-[70vh] overflow-y-auto">
                <button onClick={() => setCat('all')}
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeCat === 'all' ? 'bg-accent text-primary shadow-sm' : 'text-neutral-800 hover:bg-neutral-50 hover:pl-4'}`}
                >
                  <span>🗂️</span><span className="flex-1">All Products</span>
                  <span className="text-xs font-normal opacity-50">{allProducts.length}</span>
                </button>
                {categories.map(cat => (
                  <motion.button key={cat.id} onClick={() => setCat(cat.id)} whileTap={{ scale: 0.97 }}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeCat === cat.id ? 'bg-accent text-primary shadow-sm' : 'text-neutral-800 hover:bg-neutral-50 hover:pl-4'}`}
                  >
                    <span className="shrink-0">{cat.icon}</span>
                    <span className="flex-1 text-left leading-tight">{cat.name}</span>
                    <span className="text-xs font-normal opacity-50 shrink-0">{(products[cat.id] || []).length}</span>
                  </motion.button>
                ))}
              </div>
              {/* Pan India note */}
              <div className="p-3 border-t border-neutral-100 bg-accent/5">
                <p className="text-[10px] text-neutral-800/60 leading-relaxed flex items-start gap-1">
                  <Truck size={11} className="text-accent mt-0.5 shrink-0" />
                  <span>All products available with pan-India delivery.</span>
                </p>
              </div>
            </div>
          </aside>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed left-0 top-0 bottom-0 w-72 z-50 bg-white shadow-2xl overflow-y-auto lg:hidden"
              >
                <div className="p-4 bg-primary flex items-center justify-between">
                  <h2 className="font-heading font-bold text-white text-sm">Categories</h2>
                  <button onClick={() => setSidebarOpen(false)} className="text-white"><X size={18} /></button>
                </div>
                <div className="p-3">
                  <button onClick={() => setCat('all')} className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 ${activeCat === 'all' ? 'bg-accent text-primary' : 'text-neutral-800 hover:bg-neutral-50'}`}>
                    <span>🗂️</span><span className="flex-1">All Products</span><span className="text-xs opacity-50">{allProducts.length}</span>
                  </button>
                  {categories.map(cat => (
                    <button key={cat.id} onClick={() => setCat(cat.id)} className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 ${activeCat === cat.id ? 'bg-accent text-primary' : 'text-neutral-800 hover:bg-neutral-50'}`}>
                      <span className="shrink-0">{cat.icon}</span><span className="flex-1 text-left">{cat.name}</span>
                      <span className="text-xs opacity-50 shrink-0">{(products[cat.id] || []).length}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-3 items-center mb-6">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium">
                <Filter size={14} /> Categories
              </button>
              <div className="relative flex-1 min-w-52">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-800/40" />
                <input type="search"
                  placeholder="Search by name or model number (e.g. RE 101, RE 106, chain hoist)…"
                  value={search} onChange={e => setSearch(e.target.value)}
                  id="product-search" aria-label="Search products"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-800/40 hover:text-primary transition-colors">
                    <X size={14} />
                  </button>
                )}
              </div>
              <p className="text-sm text-neutral-800 font-medium">
                <span className="text-primary font-bold">{activeProducts.length}</span> result{activeProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Category header */}
            <AnimatePresence mode="wait">
              {activeCategory && catSeo && (
                <motion.div key={activeCat} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="flex items-start gap-4 mb-7 p-4 bg-gradient-to-r from-accent/8 to-transparent border border-accent/15 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-2xl">{activeCategory.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-primary text-lg">{catSeo.h1}</h2>
                    <p className="text-neutral-800/60 text-xs mt-1">
                      {(products[activeCat] || []).length} products · Pan-India delivery available · Call{' '}
                      <a href="tel:+919099024659" className="text-accent font-medium">+91 9099024659</a>
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 bg-accent/10 rounded-lg px-3 py-1.5 shrink-0">
                    <Truck size={12} className="text-accent" />
                    <span className="text-accent text-[10px] font-bold">Pan-India</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Product Grid */}
            <AnimatePresence mode="wait">
              {activeProducts.length > 0 ? (
                <motion.div key={activeCat + search} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                  className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  {activeProducts.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-24">
                  <div className="text-6xl mb-5">🔍</div>
                  <h3 className="font-heading font-bold text-primary text-xl mb-2">No products found</h3>
                  <p className="text-neutral-800/60 text-sm mb-5">Try searching by model number (e.g. RE 101) or category name</p>
                  <button onClick={() => setSearch('')} className="btn-primary text-sm">Clear Search</button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SEO footer text — crawlable keyword-rich content */}
            {catSeo && (
              <div className="mt-10 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-3">
                <h3 className="font-heading font-bold text-primary text-sm">
                  {catSeo.h1} — Available Pan-India
                </h3>
                <p className="text-neutral-800/60 text-xs leading-relaxed">
                  {catSeo.desc}
                </p>
                <p className="text-neutral-800/50 text-xs leading-relaxed">
                  We supply {activeCategory?.name} to customers across India including{' '}
                  Ahmedabad, Mumbai, Delhi, Pune, Hyderabad, Chennai, Bengaluru, Kolkata,
                  Surat, Vadodara, Jaipur, Indore, Ludhiana, Nagpur, Coimbatore and all major
                  industrial cities. Visit our showroom at{' '}
                  <strong>Plot No. 4721, Gala No. 1, GIDC, Ankleshwar – 393002, Bharuch, Gujarat</strong>{' '}
                  or call{' '}
                  <a href="tel:+919099024659" className="text-accent font-medium">+91 9099024659</a>{' '}
                  /{' '}
                  <a href="tel:+919824704659" className="text-accent font-medium">+91 9824704659</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-primary py-14 mt-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Truck size={20} className="text-accent" />
              <span className="text-accent font-bold">Pan-India Delivery Available</span>
            </div>
            <h2 className="font-heading font-bold text-white text-2xl mb-3">Don't see what you need?</h2>
            <p className="text-white/60 mb-6 text-sm">We source specialised industrial equipment for B2B clients across India. Send us your requirement.</p>
            <Link to="/contact" className="btn-primary">Send Your Requirement <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
