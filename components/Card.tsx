type CardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function Card({ title, description, href }: CardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {href && <a href={href} className="card-link">Learn more →</a>}
    </article>
  );
}