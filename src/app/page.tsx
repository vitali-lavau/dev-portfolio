import Header from '@/app/components/Header/Header';
import Hero from '@/app/components/pages/MainPage/Hero/Hero';
import About from '@/app/components/pages/MainPage/About/About';
import Skills from '@/app/components/pages/MainPage/Skills/Skills';
import Projects from '@/app/components/pages/MainPage/Projects/Projects';
import Contact from '@/app/components/pages/MainPage/Contact/Contact';
import Footer from '@/app/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
