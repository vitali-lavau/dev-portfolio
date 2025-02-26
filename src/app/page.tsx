import Header from '@/app/components/Header/Header';
import Hero from '@/app/components/pages/MainPage/Hero/Hero';
import About from '@/app/components/pages/MainPage/About/About';
import Skills from '@/app/components/pages/MainPage/Skills/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
    </>
  );
}
