import Header from '@/components/Header';
import Footer from '@/components/Footer';

const posts = [
  { title: "Understanding Security in Embedded and Specialized Systems", date: "Nov 21, 2025", url: "https://medium.com/@thaab.lima/understanding-security-in-embedded-and-specialized-systems-what-i-learned-as-a-new-it-student-e08d398105db" },
  { title: "Understanding Virtualization & Cloud Security: The Capital One Case", date: "Nov 15, 2025", url: "https://medium.com/@thaab.lima/understanding-virtualization-cloud-security-what-i-learned-from-the-capital-one-case-800702615175" },
  { title: "Understanding Network-Based Cyber Attacks and How to Prevent Them", date: "Nov 7, 2025", url: "https://medium.com/@thaab.lima/understanding-network-based-cyber-attacks-and-how-to-prevent-them-260820c83fe9" },
  { title: "Understanding Cybersecurity Risk Management", date: "Nov 2, 2025", url: "https://medium.com/@thaab.lima/understanding-cybersecurity-risk-management-why-it-matters-for-every-organization-02958cf4f9e0" },
  { title: "Understanding My Home Network and Its Risks", date: "Oct 24, 2025", url: "https://medium.com/@thaab.lima/understanding-my-home-network-and-its-risks-6bfb814eac17" },
  { title: "Learning the Value of Email Encryption", date: "Oct 19, 2025", url: "https://medium.com/@thaab.lima/learning-the-value-of-email-encryption-146354d4abb7" },
  { title: "My First Steps Understanding the CIA Triad in Cybersecurity", date: "Oct 11, 2025", url: "https://medium.com/@thaab.lima/my-first-steps-understanding-the-cia-triad-in-cybersecurity-e6e25d2d7706" }
];

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section className="posts-section">
          <h2>My Posts</h2>
          <p>Articles I have written on Medium about IT and Cybersecurity.</p>
          <div className="posts-grid">
            {posts.map((post, index) => (
              <a key={index} href={post.url} target="_blank" rel="noopener noreferrer" className="post-card">
                <span className="post-date">{post.date}</span>
                <h3>{post.title}</h3>
                <span className="read-more">Read on Medium →</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}