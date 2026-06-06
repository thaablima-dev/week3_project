import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createMessage } from '@/app/actions';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Contact Me</h2>
          <p>Fill out the form below and I will get back to you soon.</p>
          <form action={createMessage}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div>
              <label htmlFor="body">Message</label>
              <textarea id="body" name="body" placeholder="Your message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}