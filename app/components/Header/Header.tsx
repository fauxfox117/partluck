import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-brand" href="/" aria-label="Partluck home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="site-brand-name">Partluck</span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          <a href="#how-it-works">How It Works</a>
          <a href="#get-involved">Get Involved</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About</a>
        </nav>

        <a className="greenhouse-link" href="#join-the-greenhouse">
          Join the Greenhouse
        </a>
      </div>
    </header>
  );
}