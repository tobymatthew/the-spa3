'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Client',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'The treatments at this spa are absolutely transformative. I leave feeling rejuvenated every single time. The staff is professional, attentive, and truly cares about your well-being.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'First-time Visitor',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'I was amazed by the level of personalization in my treatment. The therapist took the time to understand my needs and tailored the session perfectly. I\'ll definitely be returning!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Spa Enthusiast',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'I\'ve been to many spas, but this one stands out. The ambiance is serene, the treatments are top-notch, and the results are visible. It\'s my go-to place for self-care and relaxation.',
  },
]

export function TestimonialSectionComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">What Our Clients Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <Quote className="absolute top-4 left-4 text-blue-200 w-16 h-16" />
            
            <div className="relative z-10">
              <p className="text-gray-600 text-lg mb-6 italic">
                {testimonials[currentTestimonial].quote}
              </p>
              
              <div className="flex items-center">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}