// src/App.jsx
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Impact from './components/impact';
import Contact from './components/contact';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Impact />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
