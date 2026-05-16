# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-05-16

### Fixed
- Double text rendering bug caused by gulp not truncating `dist/index.html` before writing

### Security
- Removed `gulp-htmlmin` (ReDoS vulnerability, no upstream fix available)
- Upgraded gulp 4 → 5, resolving all remaining npm audit vulnerabilities

## [1.0.0] - 2026-05-16

### Changed
- Simplified site to a plain HTML "under construction" page — removed JS, CSS, vendor libs (Bootstrap, jQuery, onepage-scroll), and fonts
- Removed unused files: `.htaccess`, `mycomputer.png`
- Streamlined gulp pipeline to just copy and minify HTML
- Pruned unused npm dependencies

### Added
- README with build, Docker, and S3 deployment instructions
- CLAUDE.md with codebase guidance for Claude Code

## [0.1.0] - 2017

### Added
- Initial CV page with onepage-scroll layout, Bootstrap, jQuery
- Gulp build pipeline with CSS purification, minification, and autoprefixer
- Docker setup for local development
- SEO improvements (sitemap, robots.txt, meta tags, encoded email)
- Favicon and web manifest
