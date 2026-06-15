import { PrismaClient } from '@prisma/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const revalidate = 0;

const prisma = new PrismaClient();

export default async function MessagesPage() {
  const session = await auth();
  if (!session?.user) redirect("/api/auth/signin");

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Messages</h2>
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <ul className="messages-list">
              {messages.map(m => (
                <li key={m.id} className="message-item">
                  <strong>{m.name}</strong> — {m.email}
                  <p>{m.body}</p>
                  <time>{new Date(m.createdAt).toLocaleString()}</time>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}