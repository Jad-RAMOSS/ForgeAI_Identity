import Hero from '@/components/sections/Hero';
import Platform from '@/components/sections/Platform';
import Pillars from '@/components/sections/Pillars';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <hr className="section-divider" />
      <Platform />
      <hr className="section-divider" />
      <Pillars />
      <hr className="section-divider" />
      <Work />
      <hr className="section-divider" />
      <Contact />
      <hr className="section-divider" />
    </>
  );
}
