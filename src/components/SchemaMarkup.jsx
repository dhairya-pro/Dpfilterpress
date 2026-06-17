import { Helmet } from 'react-helmet-async'

/**
 * Injects one or more Schema.org JSON-LD blocks into <head>.
 * Usage:
 *   <SchemaMarkup schemas={[productSchema(p), breadcrumbSchema(crumbs)]} />
 */
export default function SchemaMarkup({ schemas = [] }) {
  if (!schemas.length) return null
  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
