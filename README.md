# Hazrid Azad — Portfolio

A static, responsive portfolio for [hazrid93.github.io](https://hazrid93.github.io), plus a small server-side proxy for the portfolio assistant.

## Architecture

```text
GitHub Pages                         Neyobytes server
┌───────────────────────┐            ┌──────────────────────────┐
│ index.html / app.js   │  HTTPS     │ POST /api/chat           │
│ no secrets            │ ─────────► │ rate limit + fixed prompt│
└───────────────────────┘            │ Responses API + .env     │
                                     └──────────────────────────┘
```

GitHub Pages is static and **cannot safely hold an LLM key**. The browser calls the Express proxy, and the proxy reads credentials from `.env` or `~/.codex/auth.json`. If the proxy is unavailable, the interface clearly switches to a limited local knowledge mode rather than breaking.

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

Open <http://localhost:8787>. With the default configuration, authenticate once with `codex login`, or set `CHATGPT_API_KEY` in `.env`.

The proxy uses the OpenAI **Responses API** and defaults to the conventions used by Neyobytes WhatsApp Agent:

```env
LLM_PROVIDER=chatgpt
LLM_MODEL=gpt-5.6-terra
CHATGPT_BASE_URL=https://gateway.neyobytes.com/v1
CHATGPT_REASONING_EFFORT=high
```

## Deploy the static site

The repository is named `hazrid93.github.io`, so pushing `index.html` to `main` publishes it automatically at <https://hazrid93.github.io>.

## Deploy the chat proxy with PM2

On the Neyobytes Node server:

```bash
git clone https://github.com/hazrid93/hazrid93.github.io.git
cd hazrid93.github.io
cp .env.example .env
npm ci --omit=dev
codex login                    # skip when CHATGPT_API_KEY is configured
pm2 start ecosystem.config.cjs
pm2 save
```

Example nginx location for `portfolio-api.neyobytes.com`:

```nginx
server {
    listen 443 ssl http2;
    server_name portfolio-api.neyobytes.com;

    location / {
        proxy_pass http://127.0.0.1:8787;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then update the public-only browser setting in `config.js`:

```js
window.PORTFOLIO_CONFIG = {
  chatEndpoint: 'https://portfolio-api.neyobytes.com/api/chat'
};
```

The endpoint has a fixed server-side prompt, a 10-request/5-minute per-IP limit, an 800-character message limit, a 10-message context limit, a timeout, and a 700-token output cap.

## Motion and accessibility

- Custom routing-graph canvas animation
- Custom local Lottie animation in `assets/network-pulse.json`
- Motion One hero and project choreography
- CSS and native animation fallbacks when CDNs are unavailable
- `prefers-reduced-motion` support
- Desktop, tablet, and mobile layouts
- Semantic landmarks, keyboard navigation, and live-region chat updates