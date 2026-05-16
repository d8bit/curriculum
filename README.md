## Curriculum Vitae D8bit

Personal CV/portfolio website for [David Oliva](http://www.d8bit.com), built with a Gulp 4 pipeline. The source lives in `src/` and the compiled output is served from `dist/`.

**Stack:** HTML, CSS, JavaScript — with Bootstrap, jQuery, and onepage-scroll as vendor libs. Uses a VT323 monospace font for the retro terminal aesthetic.

---

## Setup

```bash
npm install
```

## Development

Starts an Apache container serving `dist/` on port 8080 and watches `src/` for changes, rebuilding automatically:

```bash
make dev
```

Stop the container when done:

```bash
make stop
```

## Production build

Runs the full Gulp pipeline (purify + minify CSS/HTML/JS, copy assets):

```bash
make prod
```

Output goes to `dist/`.

## Docker

Two options for local serving:

| Command | Port | Notes |
|---|---|---|
| `make dev` | 8080 | bare `httpd:latest`, also starts `gulp watch` |
| `docker-compose up` | 8081 | uses `web.docker` |

Both mount `dist/` as the Apache document root, so any rebuild is reflected immediately without restarting the container.

## Deployment

Deploy by copying the contents of `dist/` to the web server. The `dist/.htaccess` file is included in the build.
