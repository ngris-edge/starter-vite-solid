# SolidJS + Vite starter

A minimal, good-looking [SolidJS](https://www.solidjs.com/) + [Vite](https://vite.dev/) starter, ready to deploy on [ngris](https://ngris.com) in one click. It builds to a static `dist/` bundle that ngris auto-detects and serves worldwide over HTTPS.

- Fine-grained reactivity with SolidJS signals — no virtual DOM.
- Instant HMR dev server via Vite.
- Clean, responsive, on-brand landing page you can make your own.

## Deploy to ngris

[![Deploy to ngris](https://ngris.com/deploy-badge.svg)](https://dashboard.ngris.com/deploy?repo=https%3A%2F%2Fgithub.com%2Fngris-edge%2Fstarter-vite-solid)

Click the button, point ngris at your fork, and it will:

1. Detect **Vite** from `package.json`.
2. Run `npm install && npm run build`.
3. Publish the `dist/` output to the ngris edge.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
npm run build    # produce the production bundle in dist/
npm run preview  # preview the built dist/ locally
```

Requires Node.js 18+.

## Where to edit

| What | File |
| --- | --- |
| Page markup & logic | `src/App.jsx` |
| Styles (accent is `#2567ff`) | `src/index.css` |
| App entry / mount | `src/index.jsx` |
| HTML shell & `<title>` | `index.html` |
| Build config & output dir | `vite.config.js` |

Static assets in `public/` are copied as-is to the root of `dist/`.

## How ngris builds it

ngris inspects `package.json`, sees Vite, runs the `build` script, and serves the resulting `dist/` directory. No configuration needed — commit and push, and every change redeploys automatically.

Connect the repo with **Import from GitHub** in the ngris dashboard and the ngris GitHub App delivers every push for you: no webhook to add, no access token to paste, and ngris can read only the repositories you pick.

## License

[MIT](./LICENSE)
