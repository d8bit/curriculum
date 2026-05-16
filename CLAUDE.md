# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal CV/portfolio website for David Oliva (D8bit). Live at [d8bit.com](http://www.d8bit.com). Currently the live page (`src/index.html`) shows an "under construction" placeholder; the original full CV page is preserved at `src/_index.html`.

## Build system

Gulp 4 pipeline: `src/` → `dist/`.

- **Install deps:** `npm install`
- **Development:** `make dev` — starts an Apache Docker container serving `dist/` on port 8080, then runs `gulp watch` (rebuilds on CSS/HTML/JS changes)
- **Production build:** `make prod` — runs `gulp all` (move-files → purify-css → minify-css → minify-html → minify-js)
- **Stop dev container:** `make stop`

Gulp tasks can also be run directly via `./node_modules/gulp/bin/gulp.js <task>`.

There are no tests.

## Source layout

- `src/index.html` — active page (currently "under construction")
- `src/_index.html` — archived full CV page (processed by htmlmin into dist but served as `_index.html`)
- `src/css/style.css` — single stylesheet; purified and minified → `dist/css/style.min.css`
- `src/js/functions.js` — single JS file; minified → `dist/js/functions.js` (debug copy → `dist/js/functions-debug.js`)
- `src/vendor/` — Bootstrap, jQuery, onepage-scroll (copied as-is to dist)
- `src/fonts/` — VT323 monospace font (the retro terminal aesthetic)

## Docker

Two equivalent ways to serve locally:
- `make dev` uses a bare `httpd:latest` container on port **8080**
- `docker-compose up` uses `web.docker` on port **8081**

Both mount `dist/` as the Apache document root, so a `gulp all` or `gulp watch` rebuild is reflected immediately without restarting the container.
