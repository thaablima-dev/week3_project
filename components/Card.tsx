type CardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function Card({ title, description, href }: CardProps) {
  return (
    <article style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px auto',
      maxWidth: '600px',
      background: 'var(--card-bg, white)',
      color: 'var(--card-text, black)',
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {href && <a href={href}>Learn more</a>}
    </article>
  );
}