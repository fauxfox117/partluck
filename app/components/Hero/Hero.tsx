import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">A hybrid co-op &amp; platform</p>
          <h1>
            Stop Paying for Produce. Start Growing Your Groceries Together.
          </h1>
          <p className="hero-description">
            Join Greenville’s first decentralized food co-op. We meet
            bi-weekly to pool our harvests and share the bounty. No hidden fees
            or price tags—just grow one plant to participate.
          </p>
          <div className="hero-actions">
            <a className="hero-primary-link" href="#join-the-greenhouse">
              Join the Greenhouse
            </a>
            <a className="hero-secondary-link" href="#how-it-works">
              See How It Works
            </a>
          </div>
        </div>

        <div
          className="hero-photo-placeholder"
          role="img"
          aria-label="Hero photo showing neighbors at a harvest picnic with boxes of produce"
        >
          <Image
            src="/images/annie-spratt-trDyGuXI9YM-unsplash.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 60rem) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
