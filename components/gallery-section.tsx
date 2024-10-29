'use client'

import { useState } from 'react'
import Image from 'next/image'

const beforeAfterImages = [
  {
    id: 1,
    title: 'Facial Rejuvenation',
    before: '/bgimage.jpg',
    after: '/spa2.jpg',
    description: 'Experience the transformative power of our facial treatments, reducing fine lines and restoring youthful glow.'
  },
  {
    id: 2,
    title: 'Body Contouring',
    before: '/bgimage.jpg',
    after: '/spa2.jpg',
    description: 'Achieve your desired silhouette with our advanced body contouring treatments, targeting stubborn areas.'
  },
  {
    id: 3,
    title: 'Skin Brightening',
    before: '/bgimage.jpg',
    after: '/spa2.jpg',
    description: 'Reveal radiant, even-toned skin with our specialized brightening treatments, perfect for all skin types.'
  },
]

export function GallerySectionComponent() {
  const [activeImage, setActiveImage] = useState(beforeAfterImages[0])
  const [showAfter, setShowAfter] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">Transformative Results</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={showAfter ? `${activeImage.after}` : activeImage.before}
                alt={`${showAfter ? 'After' : 'Before'} ${activeImage.title}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{activeImage.title}</h3>
                  <p className="text-sm">{activeImage.description}</p>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => setShowAfter(!showAfter)}
              >
                {showAfter ? 'Show Before' : 'Show After'}
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/3 flex flex-col gap-4">
            {beforeAfterImages.map((image) => (
              <button
                key={image.id}
                className={`flex items-center p-4 rounded-lg transition-colors ${
                  activeImage.id === image.id ? 'bg-blue-100' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setActiveImage(image)}
              >
                <div className="w-20 h-20 relative mr-4">
                  <Image
                    src={image.before}
                    alt={`Before ${image.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">{image.title}</h4>
                  <p className="text-sm text-gray-600">Click to view</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}