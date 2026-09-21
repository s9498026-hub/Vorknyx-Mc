VORKNYX MC - compiled production build

This site renders pages on the server, so it runs as a Cloudflare Worker
(Cloudflare Pages "static only" upload is not enough).

Deploy:
  1. Extract this folder.
  2. Run:  npx wrangler deploy
     (in the Cloudflare dashboard: Workers > Create > Upload this folder,
      keeping wrangler.json as the configuration file)

Contents:
  client/  - static assets (JS, CSS, images, favicon)
  server/  - server bundle (entry: server/index.mjs)
  wrangler.json - Cloudflare deployment configuration
