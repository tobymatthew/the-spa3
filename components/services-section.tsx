'use client'

import {  Droplet, User, ThermometerSnowflake, Sparkles, Hand, Heart, Package } from 'lucide-react'

const services = [
  { icon: Droplet, name: 'BODY & SOUL' },
  { icon: Droplet, name: 'OIL THERAPY' },
  { icon: User, name: 'DAY SPA' },
  { icon: ThermometerSnowflake, name: 'SAUNA' },
  { icon: Sparkles, name: 'FACIALS' },
  { icon: Hand, name: 'MASSAGE' },
  { icon: Heart, name: 'WELLNESS' },
  { icon: Package, name: 'SPA PACKAGES' },
]

export function ServicesSectionComponent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Service Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <service.icon className="w-7 h-7 text-main-primary mb-2" />
              <span className="text-xs text-center text-gray-600">{service.name}</span>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Relax SPA</h2>
            <p className="text-gray-600 mb-4">Experience ultimate relaxation with our signature spa treatments. Our expert therapists use premium products and techniques to melt away stress and rejuvenate your body and mind.</p>
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <img 
              src="/spa2.jpg" 
              alt="Luxurious citrus spa treatment for skin rejuvenation" 
              className="w-full h-full object-cover"
            />
            </div>
          </div>
          <div>
            <img 
              src="/bgimage.jpg" 
              alt="Luxurious citrus spa treatment for skin rejuvenation" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">SPA Journeys</h2>
            <p className="text-gray-600 mb-4">Embark on a transformative spa journey tailored to your needs. Our curated packages combine multiple treatments for a holistic wellness experience that nurtures body, mind, and spirit.</p>
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <img 
              src="/bgimage.jpg" 
              alt="Luxurious citrus spa treatment for skin rejuvenation" 
              className="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>

        {/* Ambiance Image */}
        <div className="mt-16">
          <img 
            src="/spa2.jpg" 
            alt="Tranquil spa environment with natural elements for ultimate relaxation" 
            className="w-full h-64 object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}