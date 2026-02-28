import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Activities } from './components/Activities';
import { Stats } from './components/Stats';
import { Departments } from './components/Departments';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Activities />
        <Stats />
        <Departments />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
