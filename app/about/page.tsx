import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hi! I'm Thais Lima, a Brazilian student based in San Diego, California, 
            pursuing a Master's degree in Information Technology at Southern States University.
          </p>
          <br />
          <p>
            I'm passionate about cybersecurity, web development, and understanding how 
            technology shapes our digital world. Through my studies and writing, I explore 
            topics like network security, cloud computing, risk management, and ethical IT practices.
          </p>
          <br />
          <p>
            I also write about IT and cybersecurity on Medium, sharing what I learn as I grow 
            in this field.
          </p>
          <br />
          <div className="about-links">
            <a href="https://www.linkedin.com/in/thaislima12/" target="_blank" rel="noopener noreferrer" className="about-btn linkedin-btn">
              🔗 LinkedIn
            </a>
            <a href="https://medium.com/@thaab.lima" target="_blank" rel="noopener noreferrer" className="about-btn medium-btn">
              ✍️ Medium
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}