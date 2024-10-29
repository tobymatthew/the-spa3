import Head from 'next/head'

export default function SpaServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Relaxation Massage",
    "description": "A 60-minute full body massage designed to reduce stress and promote relaxation.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Reina Spa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Relaxation Ave",
        "addressLocality": "Serenity",
        "addressRegion": "CA",
        "postalCode": "90210",
        "addressCountry": "US"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "85.00",
      "priceCurrency": "USD"
    },
    "duration": "PT1H"
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      {/* Rest of your page content */}
    </>
  )
}