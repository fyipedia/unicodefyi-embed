# unicodefyi-embed

[![npm](https://img.shields.io/npm/v/unicodefyi-embed)](https://www.npmjs.com/package/unicodefyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/unicodefyi-embed)
[![Size](https://img.shields.io/badge/size-~11--21KB_gzipped-green)](https://bundlephobia.com/package/unicodefyi-embed)

Embed **UnicodeFYI** widgets — characters, glossary terms, interactive tools, and inline elements — on any website. **8 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, minimal), and live data from the [UnicodeFYI](https://unicodefyi.com) database.

Every widget includes a "Powered by UnicodeFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.unicodefyi.com](https://widget.unicodefyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-unicodefyi="entity" data-slug="characters" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the UnicodeFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-unicodefyi="entity" data-slug="..."></div>` | Entity detail card — color, font, emoji, symbol, or character |
| `glossary` | `<div data-unicodefyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-unicodefyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `compare` | `<div data-unicodefyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `search` | `<div data-unicodefyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `unicode-converter` | `<div data-unicodefyi="unicode-converter" data-slug="..."></div>` | Unicode text converter — codepoints, UTF-8/16 breakdown |
| `analyzer` | `<div data-unicodefyi="analyzer" data-slug="..."></div>` | Text analyzer — character/word/byte count, script detection |
| `tooltip` | `<div data-unicodefyi="tooltip" data-slug="..."></div>` | Glossary tooltip — hover/click shows term definition inline |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-unicodefyi` | entity, compare, glossary, guide, search, tooltip, [tools] | required | Widget type |
| `data-slug` | e.g. "characters" | — | Entity slug from the UnicodeFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-styleVariant` | modern, minimal | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Characters..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-unicodefyi="entity" data-slug="characters" data-theme="light"></div>

<!-- Dark -->
<div data-unicodefyi="entity" data-slug="characters" data-theme="dark"></div>

<!-- Sepia -->
<div data-unicodefyi="entity" data-slug="characters" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-unicodefyi="entity" data-slug="characters" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-unicodefyi="entity" data-slug="characters" data-styleVariant="modern"></div>

<!-- Minimal — subtle borders, flat design, no gradients -->
<div data-unicodefyi="entity" data-slug="characters" data-styleVariant="minimal"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<unicodefyi-entity slug="characters" theme="light"></unicodefyi-entity>
<unicodefyi-compare slugs="characters,other-slug"></unicodefyi-compare>
<unicodefyi-search placeholder="Search Characters..."></unicodefyi-search>

<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-unicodefyi="entity" data-slug="characters" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-unicodefyi="compare" data-slugs="characters,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-unicodefyi="search" data-placeholder="Search Characters..."></div>
<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-unicodefyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/unicodefyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install unicodefyi-embed
```

```javascript
import 'unicodefyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Minimal (flat design)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: UnicodeFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: ~11-21KB gzipped (per-site build — only includes tools available on UnicodeFYI)

## Learn More About Characters

Visit [unicodefyi.com](https://unicodefyi.com) — UnicodeFYI is a comprehensive characters reference with interactive tools, guides, and developer resources.

- **API docs**: [unicodefyi.com/developers/](https://unicodefyi.com/developers/)
- **Widget builder**: [widget.unicodefyi.com](https://widget.unicodefyi.com)
- **npm package**: [npmjs.com/package/unicodefyi-embed](https://www.npmjs.com/package/unicodefyi-embed)
- **GitHub**: [github.com/fyipedia/unicodefyi-embed](https://github.com/fyipedia/unicodefyi-embed)

## Creative FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Creative FYI covers design, typography, characters, and visual encoding.

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| ColorFYI | [colorfyi.com](https://colorfyi.com) | Color conversion, WCAG contrast, harmonies — 16.7M hex colors | [npm](https://www.npmjs.com/package/colorfyi-embed) |
| FontFYI | [fontfyi.com](https://fontfyi.com) | Google Fonts metadata, CSS generation, font pairings | [npm](https://www.npmjs.com/package/fontfyi-embed) |
| EmojiFYI | [emojifyi.com](https://emojifyi.com) | 3,781 emojis, Unicode Emoji 16.0, 8 encodings | [npm](https://www.npmjs.com/package/emojifyi-embed) |
| SymbolFYI | [symbolfyi.com](https://symbolfyi.com) | Symbol encoding in 11 formats, Unicode properties | [npm](https://www.npmjs.com/package/symbolfyi-embed) |
| **UnicodeFYI** | [unicodefyi.com](https://unicodefyi.com) | Unicode characters, 17 encodings, text analysis | **[npm](https://www.npmjs.com/package/unicodefyi-embed)** |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
