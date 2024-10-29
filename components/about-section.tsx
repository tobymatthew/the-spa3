import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <Image
            src="/public/bgimage.jpg"
            alt="Decorative dandelion seed"
            width={64}
            height={64}
            className="opacity-30"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 relative">
          {/* Background "EXCEPTIONAL" text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="text-gray-100 text-[150px] font-bold leading-none whitespace-nowrap transform -rotate-45">
              EXCEPTIONAL
            </span>
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-6">Beauty & Spa</h2>
            <p className="text-gray-600 mb-6">
              Experience the pinnacle of relaxation and rejuvenation at our premier Beauty & Spa center. 
              Our expert therapists combine time-honored techniques with cutting-edge treatments to provide 
              a truly exceptional spa experience. From soothing massages to revitalizing facials, we offer 
              a comprehensive range of services designed to nurture your body, mind, and spirit.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Luxurious treatments using premium, organic products
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Personalized spa journeys tailored to your needs
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                State-of-the-art facilities for ultimate relaxation
              </li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 relative">
          <div className="bg-main-primary absolute inset-0 -m-8 z-0"></div>
          <div className="relative z-10">
            <Image
              src="/bgimage.jpg"
              alt="Relaxing spa treatment with aromatherapy candles"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}