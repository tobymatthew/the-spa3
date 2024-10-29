import AboutSection from "@/components/about-section";
import { GallerySectionComponent } from "@/components/gallery-section";
import { HeaderComponent } from "@/components/header";

import { ServicesSectionComponent } from "@/components/services-section";
import { TestimonialSectionComponent } from "@/components/testimonial-section";


export default function Home() {
  return (
  <div>
    <HeaderComponent/>
    <ServicesSectionComponent/>
    <AboutSection/>
    <GallerySectionComponent/>
    <TestimonialSectionComponent/>
  </div>
  );
}
