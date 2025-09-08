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
import Services from './components/sections/Services';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          {/* <About /> */}
          <Experience />
          <Education />
          {/* <Services /> */}
          <Projects />
          <TechStack />

          {/* <Testimonials /> */}
          {/* <Blog /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
