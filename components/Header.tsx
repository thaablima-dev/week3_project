"use client";

import Nav from './Nav';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <Nav />
      <ThemeToggle />
    </header>
  );
}