import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JustaKartik | Portfolio',
  description: 'The portfolio of JustaKartik.',
  metadataBase: new URL('https://justakartik.com/'),
  icons : new URL('https://avatars.githubusercontent.com/u/125666491?v=4'),
};

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white scroll-smooth">
      <TopBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

