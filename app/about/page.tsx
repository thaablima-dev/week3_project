import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hi! I am Thais Lima, a student learning web development with Next.js and React.</p>
          <p>This website was built as part of my coursework, starting from HTML and CSS and evolving into a full React component architecture.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}