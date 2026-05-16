## Curriculum Vitae D8bit

Personal CV/portfolio website for [David Oliva](http://www.d8bit.com), built with a Gulp 5 pipeline. The source lives in `src/` and the compiled output is served from `dist/`.

**Stack:** Plain HTML with inline styles — no external CSS, JS, or vendor libs.

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

Runs the full Gulp pipeline (copy assets + minify HTML):

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

Build first, then sync `dist/` to the S3 bucket:

```bash
make prod
aws s3 sync dist/ s3://d8bit.com
```
