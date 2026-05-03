"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    console.log("Theme changed to:", next);
  }

  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      title="Toggle dark/light mode"
    >
      🌙 Toggle Theme
    </button>
  );
}