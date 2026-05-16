# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal CV/portfolio website for David Oliva (D8bit). Live at [d8bit.com](http://www.d8bit.com). Currently a plain "under construction" page — no external CSS, JS, or vendor libs.

## Build system

Gulp 4 pipeline: `src/` → `dist/`.

- **Install deps:** `npm install`
- **Development:** `make dev` — starts an Apache Docker container serving `dist/` on port 8080, then runs `gulp watch` (rebuilds on HTML changes)
- **Production build:** `make prod` — runs `gulp all` (move-files → minify-html)
- **Stop dev container:** `make stop`

Gulp tasks can also be run directly via `./node_modules/gulp/bin/gulp.js <task>`.

There are no tests.

## Source layout

- `src/index.html` — the only page; all styles are inline
- `src/img/` — favicons and web manifest (copied as-is to dist)

## Docker

Two equivalent ways to serve locally:
- `make dev` uses a bare `httpd:latest` container on port **8080**
- `docker-compose up` uses `web.docker` on port **8081**

Both mount `dist/` as the Apache document root, so a `gulp all` or `gulp watch` rebuild is reflected immediately without restarting the container.
