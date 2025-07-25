import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '1rem', background: '#f5f5f5' }}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Home Section */}
      <section id="home" data-aos="fade-up" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Hello, I’m Amuthu</h1>
        <p>Front-End Web Developer</p>
      </section>

      
      <section id="about" data-aos="fade-up" style={{ padding: '100px 20px', backgroundColor: '#f0f0f0' }}>
        <h2>About Me</h2>
        <p>I’m passionate about learning React and building cool websites!</p>
      </section>

      {/* Projects Section */}
      <section id="projects" data-aos="fade-up" style={{ padding: '100px 20px' }}>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '30px'
        }}>
          {/* Project Card 1 */}
          <div data-aos="zoom-in" style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <h3>🌐 Portfolio Website</h3>
            <p>Built with React, AOS, and Netlify</p>
          </div>

          {/* Project Card 2 */}
          <div data-aos="zoom-in" style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <h3>☁ Weather App</h3>
            <p>Fetches live weather using an API</p>
          </div>

          {/* Project Card 3 */}
          <div data-aos="zoom-in" style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <h3>📝 To-Do List</h3>
            <p>Task manager with add & delete features</p>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up" style={{ padding: '100px 20px', backgroundColor: '#f0f0f0' }}>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>


        {/* Import icons */}
        <div style={{ marginTop: '20px', fontSize: '2rem' }}>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" style={{ margin: '0 15px' }}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" style={{ margin: '0 15px' }}>
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" style={{ margin: '0 15px' }}>
            <MdEmail />
          </a>
        </div>

      </section>
    </div>
  );
}

export default App;