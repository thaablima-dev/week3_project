import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <ThemeToggle />
      </header>

      <main>
        <section>
          <h2>Contact Me</h2>
          <p>Fill out the form below and I will get back to you soon.</p>
          <ContactForm />
        </section>
      </main>

      <footer>
        <p>© 2026 Thais Lima</p>
      </footer>
    </>
  );
}