import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Contact Me</h2>
          <p>Fill out the form below and I will get back to you soon.</p>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}