import Nav from './Nav';
import ThemeToggle from './ThemeToggle';
import AuthButton from './AuthButton';

export default function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <Nav />
      <div className="header-right">
        <ThemeToggle />
        <AuthButton />
      </div>
    </header>
  );
}