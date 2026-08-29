export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-border">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          Roblox Gameplay Scripter — Portfolio
        </p>
        <div className="flex items-center gap-6">
          <a href="#contact" className="text-xs text-ink-dim transition-colors hover:text-ink">
            Contact
          </a>
          <p className="text-xs text-ink-faint">&copy; {year}</p>
        </div>
      </div>
    </footer>
  );
}
