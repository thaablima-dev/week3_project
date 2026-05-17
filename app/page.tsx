import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Card from '@/components/Card';

export default function Home() {
  const cards = [
    {
      title: "About Me",
      description: "I am a student learning web development with Next.js and React.",
      href: "/about"
    },
    {
      title: "My Projects",
      description: "Check out the projects I have built so far in this course.",
      href: "/projects"
    },
    {
      title: "Contact Me",
      description: "Want to get in touch? Send me a message anytime.",
      href: "/contact"
    },
  ];

  return (
    <>
      <Header />
      <main className="home-main">
        <Hero />
        <div className="cards-grid">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}