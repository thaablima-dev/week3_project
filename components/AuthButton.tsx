import { auth, signIn, signOut } from "@/auth";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <span className="auth-name">Hi, {session.user.name}</span>
        <button type="submit" className="auth-btn">Sign out</button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit" className="auth-btn">Sign in with GitHub</button>
    </form>
  );
}
