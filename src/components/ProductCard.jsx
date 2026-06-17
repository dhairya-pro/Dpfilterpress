import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SendHorizonal } from 'lucide-react'

export default function ProductCard({ product, index = 0 }) {
  const navigate = useNavigate()

  const handleEnquire = () => {
    navigate(`/contact?product=${encodeURIComponent(product.name + ' (' + product.model + ')')}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4) }}
      whileHover={{ y: -6 }}
      className="card card-shine group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
        <motion.img
          src={product.image}
          alt={`${product.name} - Model ${product.model} | DP Filter Press Trading India`}
          className="w-full h-full object-contain p-4"
          loading="lazy"
          width="400"
          height="300"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.06 + 0.3, type: 'spring' }}
            className="absolute top-3 left-3 bg-accent text-primary text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wide"
          >
            {product.badge}
          </motion.span>
        )}

        {/* Model Code */}
        <span className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-accent/30">
          {product.model}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-primary text-base leading-snug mb-2 group-hover:text-accent-dark transition-colors duration-300">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-neutral-800/70 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Specs */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-3 mb-4 space-y-1.5">
            {Object.entries(product.specs).slice(0, 3).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center text-xs gap-2">
                <span className="text-neutral-800/60 capitalize shrink-0">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span className="font-semibold text-primary text-right truncate">{val}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.button
          onClick={handleEnquire}
          whileTap={{ scale: 0.97 }}
          className="btn-primary w-full justify-center text-sm py-2.5 mt-auto rounded-xl"
          aria-label={`Send enquiry for ${product.name} (${product.model})`}
          id={`enquire-${product.model?.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <SendHorizonal size={14} />
          Send Enquiry
        </motion.button>
      </div>
    </motion.div>
  )
}
