import { createSignal } from "solid-js";
import logo from "./assets/solid.svg";

const FEATURES = [
  {
    title: "Fine-grained reactivity",
    body: "SolidJS updates only what changed — no virtual DOM, no re-renders. Signals keep your UI fast by default.",
  },
  {
    title: "Vite dev server",
    body: "Instant HMR while you edit. This starter builds to a static dist/ bundle that ngris serves from the edge.",
  },
  {
    title: "One-click deploys",
    body: "Push to your repo and ngris auto-detects Vite, runs the build, and ships dist/ worldwide over HTTPS.",
  },
];

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="page">
      <header class="hero">
        <div class="badge">
          <span class="dot" /> Deployed on ngris
        </div>

        <img src={logo} class="logo" alt="SolidJS" width="72" height="72" />

        <h1>
          Your <span class="accent">SolidJS</span> starter is live.
        </h1>
        <p class="lede">
          This page is a real SolidJS + Vite app, built to <code>dist/</code> and
          served from the ngris edge. Everything you see is yours to change.
        </p>

        <div class="cta-row">
          <button class="counter" onClick={() => setCount(count() + 1)}>
            Reactivity check — clicked {count()} {count() === 1 ? "time" : "times"}
          </button>
          <a
            class="ghost"
            href="https://www.solidjs.com/docs/latest"
            target="_blank"
            rel="noreferrer"
          >
            SolidJS docs →
          </a>
        </div>
      </header>

      <section class="grid" aria-label="Features">
        {FEATURES.map((f) => (
          <article class="card">
            <h2>{f.title}</h2>
            <p>{f.body}</p>
          </article>
        ))}
      </section>

      <section class="edit">
        <h2>Make it yours</h2>
        <ol>
          <li>
            Edit <code>src/App.jsx</code> — this component renders the page.
          </li>
          <li>
            Restyle in <code>src/index.css</code>. The ngris accent is{" "}
            <code>#2567ff</code>.
          </li>
          <li>
            Run <code>npm run dev</code> locally, then push. ngris rebuilds{" "}
            <code>dist/</code> on every commit.
          </li>
        </ol>
      </section>

      <footer class="foot">
        <span>
          Built with SolidJS + Vite · Hosted on{" "}
          <a href="https://ngris.com" target="_blank" rel="noreferrer">
            ngris
          </a>
        </span>
      </footer>
    </main>
  );
}
