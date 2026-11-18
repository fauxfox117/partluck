import "./HowItWorks.css";

const steps = [
  {
    title: "Pledge Your Plants or Adopt a Seedling",
    description:
      "Register what you’re growing and pledging. New to gardening? We’ll match you with a starter plant suited for your home based on current co-op demand.",
    tone: "brown",
  },
  {
    title: "Track Progress With a Village Behind You",
    description:
      "Post photo updates, access tracking tools, and get troubleshooting advice from local experts. Going out of town? We’ll even help you find a plant-sitter.",
    tone: "rust",
  },
  {
    title: "Gather for Our Bi-Weekly Harvest Picnic",
    description:
      "Bring your yield to our community picnic! We gather to pool our harvests, share food, and connect with neighbors. Afterward, take home a custom box of fresh produce you reserved in advance. Can’t make it? Proxy pick-ups are always available.",
    tone: "blush",
  },
  {
    title: "Earn Cash for Your Excess Harvest",
    description:
      "We sell surplus produce at local farmers markets. All profits are redistributed directly back to members, proportional to your overall contribution to the co-op.",
    tone: "gold",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <div className="how-inner">
        <div className="how-intro">
          <h2 id="how-it-works-title">
            The Digital Hub That Keeps Our Community Growing
          </h2>
          <p>
            Our platform brings our scattered gardens together into one digital
            hub. Track your progress, cheer on friends, and see exactly what the
            co-op needs you to grow next.
          </p>
        </div>

        <ol className="how-steps">
          {steps.map((step, index) => (
            <li key={step.title} className={`how-step how-step-${step.tone}`}>
              <span className="how-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="how-preview" role="img" aria-label="App preview">
          [App preview: pledge dashboard / plant tracker screenshots]
        </div>
      </div>
    </section>
  );
}
