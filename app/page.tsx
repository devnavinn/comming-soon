const features = [
  { icon: "🧀", title: "Artisan selection", text: "Hand-picked cheeses from small dairies and master cheesemakers." },
  { icon: "🚚", title: "Fresh delivery", text: "Packed cold and shipped fast, so every wedge arrives at its best." },
  { icon: "🎁", title: "Gift boxes", text: "Curated boards and hampers for parties, holidays and cheese lovers." },
];

export default function Home() {
  return (
    <main>
      <div className="construction" role="status">
        🚧 <strong>Under construction</strong> — our store is being built. Check back soon! 🚧
      </div>

      <div className="holes" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </div>

      <header className="nav">
        <span className="logo">Chee<b>Cheese</b></span>
      </header>

      <section className="hero">
        <p className="badge">Online store · Coming soon</p>
        <h1>
          Something <em>cheesy</em> is on its way.
        </h1>
        <p className="lead">
          CheeCheese is a new online cheese shop — artisan cheeses, perfect pairings and gift boxes,
          delivered fresh to your door.
        </p>
      </section>

      <section className="features">
        {features.map((f) => (
          <article key={f.title} className="feature">
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} CheeCheese. All rights reserved.</span>
        <nav>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="mailto:hello@cheecheese.com">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
