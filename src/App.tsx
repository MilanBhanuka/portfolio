import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import About from './components/sections/About';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
