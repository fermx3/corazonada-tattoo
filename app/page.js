import BlogSection from '@/components/blog-section/blog-section';
import EstudioPrivadoSection from '@/components/estudio-privado-section/estudio-privado-section';
import HeroSection from '@/components/hero-section/hero-section';
import QuienesSomosSection from '@/components/quienes-somos-section/quienes-somos-section';
import TatuadoresInvitadosSection from '@/components/tatuadores-invitados-section/tatuadores-invitados-section';

export default function Home() {
  return (
    <main className='text-black'>
      <HeroSection />
      <QuienesSomosSection />
      <EstudioPrivadoSection />
      <TatuadoresInvitadosSection />
      <BlogSection />
    </main>
  );
}
