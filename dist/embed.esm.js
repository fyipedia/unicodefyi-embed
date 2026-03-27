/* unicodefyi-embed v1.0.0 | MIT | https://widget.unicodefyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.creativefyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.creativefyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.creativefyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Image/preview area \u2014 for color swatches, emoji, font previews */
.creativefyi-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.creativefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.creativefyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.creativefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.creativefyi-row:last-child {
  border-bottom: none;
}

.creativefyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.creativefyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.creativefyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.creativefyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.creativefyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.creativefyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.creativefyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.creativefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-stat { text-align:center; flex:1; }
.creativefyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.creativefyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.creativefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:8px; }
.creativefyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.creativefyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.creativefyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.creativefyi-kv-row:last-child { border-bottom:none; }
.creativefyi-kv-label { font-size:11px; color:var(--muted); }
.creativefyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.creativefyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.creativefyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.creativefyi-desc { padding:10px 18px; font-size:11px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.creativefyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.creativefyi-view-link a:hover { text-decoration:underline; }
.creativefyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card domain: color swatch (colorfyi)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-swatch { width:100%; height:80px; border-radius:0; display:block; }
.creativefyi-swatch-row { display:flex; align-items:center; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-swatch-circle { width:36px; height:36px; border-radius:50%; border:2px solid var(--border); flex-shrink:0; }
.creativefyi-swatch-info { font-size:11px; }
.creativefyi-swatch-hex { font-weight:700; font-size:14px; color:var(--text); }
.creativefyi-swatch-name { color:var(--muted); font-size:10px; margin-top:1px; }

/* Card domain: contrast checker (colorfyi) */
.creativefyi-contrast { padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-contrast-ratio { font-size:22px; font-weight:800; color:var(--accent); line-height:1; }
.creativefyi-contrast-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; margin-top:2px; }
.creativefyi-wcag-badges { display:flex; gap:6px; margin-top:8px; flex-wrap:wrap; }
.creativefyi-wcag-badge { font-size:10px; font-weight:700; padding:2px 8px; border-radius:4px; }
.creativefyi-wcag-pass { background:#dcfce7; color:#166534; }
.creativefyi-wcag-fail { background:#fee2e2; color:#991b1b; }
[data-theme="dark"] .creativefyi-wcag-pass { background:#14532d; color:#86efac; }
[data-theme="dark"] .creativefyi-wcag-fail { background:#7f1d1d; color:#fca5a5; }

/* Card domain: font preview (fontfyi) */
.creativefyi-font-preview { padding:14px 18px; border-bottom:1px solid var(--border); text-align:center; }
.creativefyi-font-sample { font-size:28px; line-height:1.2; color:var(--text); margin-bottom:4px; }
.creativefyi-font-sample-sm { font-size:14px; line-height:1.4; color:var(--muted); }

/* Card domain: emoji display (emojifyi) */
.creativefyi-emoji-display { font-size:56px; line-height:1; text-align:center; padding:16px 18px 8px; }
.creativefyi-codepoints { display:flex; flex-wrap:wrap; gap:4px; padding:6px 18px 10px; border-bottom:1px solid var(--border); }
.creativefyi-codepoint { font-family:monospace; font-size:11px; padding:1px 6px; background:var(--surface); border-radius:4px; color:var(--muted); border:1px solid var(--border); }

/* Card domain: symbol display (symbolfyi) */
.creativefyi-symbol-display { font-size:48px; line-height:1; text-align:center; padding:14px 18px 6px; color:var(--text); }
.creativefyi-encoding-row { display:flex; justify-content:space-between; align-items:center; padding:4px 18px; border-bottom:1px dotted var(--border); }
.creativefyi-encoding-row:last-child { border-bottom:none; }
.creativefyi-encoding-name { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; flex-shrink:0; width:70px; }
.creativefyi-encoding-val { font-family:monospace; font-size:11px; color:var(--text); font-weight:600; }

/* Card domain: spectrum bar (for color lightness, saturation) */
.creativefyi-spectrum { padding:12px 18px; border-bottom:1px solid var(--border); }
.creativefyi-spectrum-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted); font-weight:600; margin-bottom:6px; }
.creativefyi-spectrum-bar { height:14px; border-radius:7px; position:relative; }
.creativefyi-spectrum-pointer { position:absolute; top:-3px; width:3px; height:20px; background:var(--text); border-radius:2px; }
.creativefyi-spectrum-labels { display:flex; justify-content:space-between; font-size:8px; color:var(--muted); margin-top:3px; }

/* Inline widget host \u2014 for badge-style inline rendering */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/styles/minimal.ts
function getMinimalCSS() {
  return `
/* Minimal: thin accent border, no gradient */
.creativefyi-widget {
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
}

/* Header \u2014 surface bg with thin accent top border */
.creativefyi-header {
  background: var(--surface);
  border-top: 2px solid var(--accent);
  padding: 8px 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.creativefyi-header-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 2px 0;
  line-height: 1.3;
  font-family: inherit;
}

.creativefyi-header-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 0;
}

/* Image/preview area \u2014 compact */
.creativefyi-img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: var(--badge-bg);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--border);
}

.creativefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
}

/* Body area */
.creativefyi-body {
  padding: 8px 10px;
}

/* Key-value rows \u2014 compact, no extra spacing */
.creativefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px solid var(--border);
}

.creativefyi-row:last-child {
  border-bottom: none;
}

.creativefyi-label {
  font-size: 10px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.creativefyi-value {
  font-size: 11px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
  font-family: inherit;
}

/* Section title */
.creativefyi-section-title {
  font-size: 9px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px 0;
}

/* Tags \u2014 muted, minimal */
.creativefyi-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  border: 1px solid var(--border);
  margin: 1px 2px 1px 0;
}

/* Link */
.creativefyi-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.creativefyi-link:hover {
  text-decoration: underline;
}

.creativefyi-link svg {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}

/* Footer link row */
.creativefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-top: 1px solid var(--border);
  gap: 6px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal overrides for card shared components
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Stats row: smaller, monospace values */
.creativefyi-stats-row { display:flex; gap:8px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-stat { text-align:center; flex:1; }
.creativefyi-stat-value { font-size:14px; font-weight:700; color:var(--accent); font-family:inherit; }
.creativefyi-stat-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Stats grid: outlined boxes instead of filled */
.creativefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-stat-box { padding:4px 6px; background:transparent; border:1px solid var(--border); border-radius:3px; }
.creativefyi-stat-box-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.05em; }
.creativefyi-stat-box-value { font-size:11px; font-weight:700; color:var(--text); margin-top:1px; font-family:inherit; }

/* KV rows: all monospace */
.creativefyi-kv-rows { padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:3px 0; border-bottom:1px dotted var(--border); }
.creativefyi-kv-row:last-child { border-bottom:none; }
.creativefyi-kv-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }
.creativefyi-kv-value { font-size:10px; font-weight:600; color:var(--text); font-family:inherit; }

/* Pills: border outline only */
.creativefyi-pills { display:flex; flex-wrap:wrap; gap:3px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-pill { padding:1px 6px; border-radius:3px; font-size:10px; font-weight:500; background:transparent; border:1px solid var(--border); color:var(--muted); }

/* Section label: plain uppercase monospace */
.creativefyi-section-label { font-size:9px; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted); font-weight:600; margin-bottom:3px; }

/* Description: compact */
.creativefyi-desc { padding:6px 10px; font-size:10px; color:var(--muted); line-height:1.4; border-bottom:1px solid var(--border); }

/* View link */
.creativefyi-view-link { display:block; text-align:left; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-view-link a { color:var(--link); text-decoration:none; font-size:11px; font-weight:500; display:inline-flex; align-items:center; gap:3px; }
.creativefyi-view-link a:hover { text-decoration:underline; }
.creativefyi-view-link svg { width:10px; height:10px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal: copy button \u2014 inline symbol style
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-copy-btn {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  transition: color 0.1s, border-color 0.1s;
  font-family: inherit;
}

.creativefyi-copy-btn:hover {
  color: var(--text);
  border-color: var(--accent);
}

.creativefyi-copy-btn svg {
  width: 10px;
  height: 10px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal: color swatch (colorfyi) \u2014 compact
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-swatch { width:100%; height:48px; border-radius:0; display:block; }
.creativefyi-swatch-row { display:flex; align-items:center; gap:8px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-swatch-circle { width:24px; height:24px; border-radius:4px; border:1px solid var(--border); flex-shrink:0; }
.creativefyi-swatch-info { font-size:10px; }
.creativefyi-swatch-hex { font-weight:700; font-size:12px; color:var(--text); font-family:inherit; }
.creativefyi-swatch-name { color:var(--muted); font-size:9px; margin-top:1px; }

/* Minimal: contrast (colorfyi) */
.creativefyi-contrast { padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-contrast-ratio { font-size:16px; font-weight:800; color:var(--accent); line-height:1; font-family:inherit; }
.creativefyi-contrast-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; margin-top:1px; }
.creativefyi-wcag-badges { display:flex; gap:4px; margin-top:6px; flex-wrap:wrap; }
.creativefyi-wcag-badge { font-size:9px; font-weight:700; padding:1px 6px; border-radius:2px; font-family:inherit; }
.creativefyi-wcag-pass { background:#dcfce7; color:#166534; }
.creativefyi-wcag-fail { background:#fee2e2; color:#991b1b; }
[data-theme="dark"] .creativefyi-wcag-pass { background:#14532d; color:#86efac; }
[data-theme="dark"] .creativefyi-wcag-fail { background:#7f1d1d; color:#fca5a5; }

/* Minimal: font preview (fontfyi) */
.creativefyi-font-preview { padding:10px; border-bottom:1px solid var(--border); text-align:left; }
.creativefyi-font-sample { font-size:20px; line-height:1.2; color:var(--text); margin-bottom:3px; }
.creativefyi-font-sample-sm { font-size:12px; line-height:1.4; color:var(--muted); font-family:inherit; }

/* Minimal: emoji (emojifyi) */
.creativefyi-emoji-display { font-size:36px; line-height:1; text-align:center; padding:10px; }
.creativefyi-codepoints { display:flex; flex-wrap:wrap; gap:3px; padding:4px 10px 8px; border-bottom:1px solid var(--border); }
.creativefyi-codepoint { font-family:inherit; font-size:10px; padding:1px 5px; background:var(--surface); border-radius:3px; color:var(--muted); border:1px solid var(--border); }

/* Minimal: symbol (symbolfyi) */
.creativefyi-symbol-display { font-size:32px; line-height:1; text-align:center; padding:10px 10px 4px; color:var(--text); }
.creativefyi-encoding-row { display:flex; justify-content:space-between; align-items:center; padding:3px 10px; border-bottom:1px dotted var(--border); }
.creativefyi-encoding-row:last-child { border-bottom:none; }
.creativefyi-encoding-name { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; flex-shrink:0; width:60px; }
.creativefyi-encoding-val { font-family:inherit; font-size:10px; color:var(--text); font-weight:600; }

/* Minimal: spectrum bar */
.creativefyi-spectrum { padding:8px 10px; border-bottom:1px solid var(--border); }
.creativefyi-spectrum-label { font-size:9px; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted); font-weight:600; margin-bottom:4px; }
.creativefyi-spectrum-bar { height:10px; border-radius:5px; position:relative; }
.creativefyi-spectrum-pointer { position:absolute; top:-2px; width:2px; height:14px; background:var(--text); border-radius:1px; }
.creativefyi-spectrum-labels { display:flex; justify-content:space-between; font-size:7px; color:var(--muted); margin-top:2px; }

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "minimal":
      return getMinimalCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.creativefyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.creativefyi-widget[data-size="default"] {
  max-width: 420px;
}

.creativefyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.creativefyi-widget *, .creativefyi-widget *::before, .creativefyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.creativefyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: creativefyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes creativefyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.creativefyi-error p {
  margin: 0 0 8px 0;
}

.creativefyi-error a {
  color: var(--link);
  text-decoration: none;
}

.creativefyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-search-wrap {
  padding: 12px 16px;
}

.creativefyi-search-form {
  display: flex;
  gap: 8px;
}

.creativefyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.creativefyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.creativefyi-search-input::placeholder {
  color: var(--muted);
}

.creativefyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.creativefyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.creativefyi-search-results {
  padding: 0 16px 12px;
}

.creativefyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.creativefyi-result-item:last-child {
  border-bottom: none;
}

.creativefyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.creativefyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.creativefyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.creativefyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button (base \u2014 overridden in minimal)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.creativefyi-copy-btn:hover {
  background: var(--copy-hover);
}

.creativefyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.style || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["creativefyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="creativefyi-loading">
      <span class="creativefyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="creativefyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
var copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
var checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
function poweredByHTML(config) {
  return `<span class="creativefyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}
function bindCopyButton(btn, text) {
  btn.addEventListener("click", () => {
    var _a;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(text).then(() => {
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    });
  });
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `creativefyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/widgets/entity.ts
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function renderColor(container, data, config) {
  const hex = data.hex_value.replace(/^#/, "");
  const hexFull = `#${hex.toUpperCase()}`;
  const colorUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/colors/${escapeHTML(data.hex_value.replace(/^#/, "").toLowerCase())}/`;
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img creativefyi-color-swatch"
           style="background-color:${escapeHTML(hexFull)};width:56px;height:56px;border-radius:8px;flex-shrink:0;"
           aria-label="Color preview: ${escapeHTML(hexFull)}"></div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.name)}</p>
        <p class="creativefyi-header-subtitle">${escapeHTML(hexFull)}${data.source ? ` \xB7 ${escapeHTML(data.source)}` : ""}</p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Hex</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(hexFull)}</code>
          <button class="creativefyi-copy-btn" aria-label="Copy hex value">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.source ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Source</span><span class="creativefyi-kv-val"><span class="creativefyi-badge">${escapeHTML(data.source)}</span></span></div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${colorUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyBtn = container.querySelector(".creativefyi-copy-btn");
  if (copyBtn) bindCopyButton(copyBtn, hexFull);
}
function renderFont(container, data, config) {
  var _a, _b;
  const fontUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/fonts/${escapeHTML(data.slug)}/`;
  const desc = (_b = (_a = data.description) != null ? _a : data.meta_description) != null ? _b : "";
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title" style="font-family:'${escapeHTML(data.family)}',sans-serif;font-size:18px;">${escapeHTML(data.family)}</p>
        <p class="creativefyi-header-subtitle">
          ${data.category ? escapeHTML(data.category) : ""}${data.subcategory ? ` \xB7 ${escapeHTML(data.subcategory)}` : ""}
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      ${data.source ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Source</span><span class="creativefyi-kv-val">${escapeHTML(data.source)}</span></div>` : ""}
      ${data.is_variable !== void 0 ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Variable</span><span class="creativefyi-kv-val">${data.is_variable ? '<span class="creativefyi-badge">Variable font</span>' : "\u2014"}</span></div>` : ""}
      ${data.popularity_rank != null ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Popularity</span><span class="creativefyi-kv-val">#${escapeHTML(String(data.popularity_rank))}</span></div>` : ""}
      ${desc ? `<p class="creativefyi-summary">${escapeHTML(desc)}</p>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${fontUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
}
function renderEmoji(container, data, config) {
  const emojiUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/emojis/${escapeHTML(data.slug)}/`;
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img" style="font-size:48px;line-height:1;background:transparent;border:none;"
           aria-label="${escapeHTML(data.cldr_name)}">${data.character}</div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.cldr_name)}</p>
        <p class="creativefyi-header-subtitle">
          <code>${escapeHTML(data.codepoint)}</code>${data.category ? ` \xB7 ${escapeHTML(data.category)}` : ""}
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Codepoint</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(data.codepoint)}</code>
          <button class="creativefyi-copy-btn" aria-label="Copy codepoint">${copyIcon} Copy</button>
        </span>
      </div>
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Character</span>
        <span class="creativefyi-kv-val">
          <span style="font-size:20px;">${data.character}</span>
          <button class="creativefyi-copy-char-btn" aria-label="Copy emoji character">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.category ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Category</span><span class="creativefyi-kv-val"><span class="creativefyi-badge">${escapeHTML(data.category)}</span></span></div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${emojiUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyBtn = container.querySelector(".creativefyi-copy-btn");
  if (copyBtn) bindCopyButton(copyBtn, data.codepoint);
  const copyCharBtn = container.querySelector(".creativefyi-copy-char-btn");
  if (copyCharBtn) bindCopyButton(copyCharBtn, data.character);
}
function renderSymbol(container, data, config) {
  const symbolUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/symbols/${escapeHTML(data.slug)}/`;
  const keywordPills = data.keywords && data.keywords.length > 0 ? data.keywords.slice(0, 6).map((k) => `<span class="creativefyi-badge">${escapeHTML(k)}</span>`).join("") : "";
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img" style="font-size:48px;line-height:1;background:transparent;border:none;"
           aria-label="${escapeHTML(data.name)}">${data.character}</div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.name)}</p>
        <p class="creativefyi-header-subtitle">
          <code>${escapeHTML(data.codepoint)}</code>${data.category_name ? ` \xB7 ${escapeHTML(data.category_name)}` : ""}
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Character</span>
        <span class="creativefyi-kv-val">
          <span style="font-size:20px;">${data.character}</span>
          <button class="creativefyi-copy-char-btn" aria-label="Copy symbol character">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.html_entity ? `
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">HTML Entity</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(data.html_entity)}</code>
          <button class="creativefyi-copy-entity-btn" aria-label="Copy HTML entity">${copyIcon} Copy</button>
        </span>
      </div>` : ""}
      ${data.block ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Block</span><span class="creativefyi-kv-val">${escapeHTML(data.block)}</span></div>` : ""}
      ${data.general_category ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Category</span><span class="creativefyi-kv-val">${escapeHTML(data.general_category)}</span></div>` : ""}
      ${keywordPills ? `<div class="creativefyi-pills-row">${keywordPills}</div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${symbolUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyCharBtn = container.querySelector(".creativefyi-copy-char-btn");
  if (copyCharBtn) bindCopyButton(copyCharBtn, data.character);
  const copyEntityBtn = container.querySelector(".creativefyi-copy-entity-btn");
  if (copyEntityBtn && data.html_entity) bindCopyButton(copyEntityBtn, data.html_entity);
}
function renderUnicode(container, data, config) {
  const unicodeUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/characters/${escapeHTML(data.codepoint_hex)}/`;
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img" style="font-size:48px;line-height:1;background:transparent;border:none;"
           aria-label="${escapeHTML(data.name)}">${data.character}</div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.name)}</p>
        <p class="creativefyi-header-subtitle">
          <code>${escapeHTML(data.codepoint_hex)}</code>
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Character</span>
        <span class="creativefyi-kv-val">
          <span style="font-size:20px;">${data.character}</span>
          <button class="creativefyi-copy-char-btn" aria-label="Copy character">${copyIcon} Copy</button>
        </span>
      </div>
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Codepoint</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(data.codepoint_hex)}</code>
          <button class="creativefyi-copy-btn" aria-label="Copy codepoint">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.block_slug ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Block</span><span class="creativefyi-kv-val">${escapeHTML(data.block_slug.replace(/-/g, " "))}</span></div>` : ""}
      ${data.script_slug ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Script</span><span class="creativefyi-kv-val">${escapeHTML(data.script_slug.replace(/-/g, " "))}</span></div>` : ""}
      ${data.general_category ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Category</span><span class="creativefyi-kv-val"><span class="creativefyi-badge">${escapeHTML(data.general_category)}</span></span></div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${unicodeUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyCharBtn = container.querySelector(".creativefyi-copy-char-btn");
  if (copyCharBtn) bindCopyButton(copyCharBtn, data.character);
  const copyBtn = container.querySelector(".creativefyi-copy-btn");
  if (copyBtn) bindCopyButton(copyBtn, data.codepoint_hex);
}
function initEntityWidget(el, config) {
  var _a, _b, _c, _d, _e, _f;
  const dataset = el.dataset;
  const lang = (_a = dataset.lang) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-entity-widget");
  renderLoading(container);
  const params = {};
  if (lang) params.lang = lang;
  switch (config.site) {
    case "colorfyi": {
      const hex = dataset.hex ? dataset.hex.replace(/^#/, "").toLowerCase() : "";
      const slug = hex || dataset.slug || "";
      if (!slug) {
        renderError(container, "Missing data-slug or data-hex attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `colors/${slug}/`, params).then((data) => renderColor(container, data, config)).catch(() => renderError(container, `Color "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "fontfyi": {
      const slug = (_b = dataset.slug) != null ? _b : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `fonts/${slug}/`, params).then((data) => renderFont(container, data, config)).catch(() => renderError(container, `Font "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "emojifyi": {
      const slug = (_c = dataset.slug) != null ? _c : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `emojis/${slug}/`, params).then((data) => renderEmoji(container, data, config)).catch(() => renderError(container, `Emoji "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "symbolfyi": {
      const slug = (_d = dataset.slug) != null ? _d : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `symbols/${slug}/`, params).then((data) => renderSymbol(container, data, config)).catch(() => renderError(container, `Symbol "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "unicodefyi": {
      const codepoint = (_e = dataset.codepoint) != null ? _e : "";
      if (!codepoint) {
        renderError(container, 'Missing data-codepoint attribute (e.g., data-codepoint="U+0041").', config);
        return;
      }
      const encodedCp = codepoint.replace("+", "%2B");
      fetchAPI(config.apiBase, `characters/${encodedCp}/`, params).then((data) => renderUnicode(container, data, config)).catch(() => renderError(container, `Character "${escapeHTML(codepoint)}" not found.`, config));
      break;
    }
    default: {
      const slug = (_f = dataset.slug) != null ? _f : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(
        config.apiBase,
        `${config.entitySlug}/${slug}/`,
        params
      ).then((data) => {
        const entityUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML(data.slug)}/`;
        container.innerHTML = `
            <div class="creativefyi-header">
              <div class="creativefyi-header-text">
                <p class="creativefyi-header-title">${escapeHTML(String(data.name))}</p>
              </div>
            </div>
            <div class="creativefyi-actions">
              <a class="creativefyi-link" href="${entityUrl}" target="_blank" rel="noopener">
                View on ${escapeHTML(config.name)} ${externalLinkIcon}
              </a>
            </div>
            ${poweredByHTML(config)}
          `;
      }).catch(() => renderError(container, `Entity "${escapeHTML(slug)}" not found.`, config));
    }
  }
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var COMPARE_FIELDS = {
  colorfyi: [
    ["Hex", "hex_value"],
    ["Source", "source"],
    ["R", "red"],
    ["G", "green"],
    ["B", "blue"]
  ],
  fontfyi: [
    ["Category", "category"],
    ["Subcategory", "subcategory"],
    ["Source", "source"],
    ["Variable", "is_variable"],
    ["Popularity Rank", "popularity_rank"]
  ],
  emojifyi: [
    ["Codepoint", "codepoint"],
    ["Category", "category"],
    ["CLDR Name", "cldr_name"]
  ],
  symbolfyi: [
    ["Codepoint", "codepoint"],
    ["Category", "category_name"],
    ["Block", "block"],
    ["General Category", "general_category"],
    ["HTML Entity", "html_entity"]
  ],
  unicodefyi: [
    ["Codepoint", "codepoint_hex"],
    ["Block", "block_slug"],
    ["Script", "script_slug"],
    ["General Category", "general_category"]
  ]
};
var DEFAULT_COMPARE_FIELDS = [
  ["Category", "category"],
  ["Slug", "slug"]
];
function formatValue(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  if (typeof val === "boolean") return val ? "\u2713" : "\u2717";
  if (Array.isArray(val)) return val.join(", ");
  return String(val);
}
function buildEntityUrl(config, entity) {
  const url = entity.url;
  if (url) return `https://${config.domain}${url}`;
  return `https://${config.domain}/${config.entitySlug}/${escapeHTML2(entity.slug)}/`;
}
function initCompareWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slugsRaw = (_a = dataset.slugs) != null ? _a : "";
  const slugs = slugsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  if (slugs.length < 2) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "creativefyi-compare-widget");
    renderError(container2, 'Provide at least 2 slugs in data-slugs="a,b"', config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-compare-widget");
  renderLoading(container);
  const params = {};
  const lang = (_b = dataset.lang) != null ? _b : "";
  if (lang) params.lang = lang;
  Promise.all(
    slugs.map(
      (slug) => fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`, params)
    )
  ).then((entities) => {
    var _a2;
    const fields = (_a2 = COMPARE_FIELDS[config.site]) != null ? _a2 : DEFAULT_COMPARE_FIELDS;
    const presentFields = fields.filter(
      ([, key]) => entities.some(
        (e) => e[key] !== null && e[key] !== void 0 && e[key] !== ""
      )
    );
    const colWidth = Math.floor(100 / (entities.length + 1));
    container.innerHTML = `
        <div class="creativefyi-header">
          <div class="creativefyi-header-text">
            <p class="creativefyi-header-title">Comparison</p>
            <p class="creativefyi-header-subtitle">${entities.length} items \xB7 ${escapeHTML2(config.name)}</p>
          </div>
        </div>
        <div class="creativefyi-compare-scroll">
          <table class="creativefyi-compare-table">
            <thead>
              <tr>
                <th class="creativefyi-compare-th creativefyi-compare-th--label" style="width:${colWidth}%">Field</th>
                ${entities.map(
      (e) => `
                  <th class="creativefyi-compare-th" style="width:${colWidth}%">
                    <a href="${buildEntityUrl(config, e)}" target="_blank" rel="noopener" class="creativefyi-compare-entity-link">
                      ${escapeHTML2(String(e.name))}
                      ${externalLinkIcon}
                    </a>
                  </th>`
    ).join("")}
              </tr>
            </thead>
            <tbody>
              ${presentFields.map(
      ([label, key]) => `
                <tr class="creativefyi-compare-row">
                  <td class="creativefyi-kv-key">${escapeHTML2(label)}</td>
                  ${entities.map((e) => {
        const val = escapeHTML2(formatValue(e[key]));
        return `<td class="creativefyi-compare-td">${val}</td>`;
      }).join("")}
                </tr>`
    ).join("")}
            </tbody>
          </table>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(container, "Failed to load comparison data.", config);
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-creativefyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-creativefyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGlossaryWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "creativefyi-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-glossary-widget");
  renderLoading(container);
  const params = {};
  const lang = (_b = dataset.lang) != null ? _b : "";
  if (lang) params.lang = lang;
  fetchAPI(config.apiBase, `glossary/${slug}/`, params).then((data) => {
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectDefinedTerm(
        { name: data.name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML3(slug)}". Please try again later.`,
      config
    );
  });
}
function renderGlossary(container, data, config) {
  const termUrl = `https://${config.domain}/glossary/${escapeHTML3(data.slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const category = data.category ? escapeHTML3(data.category) : "";
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="creativefyi-pill" href="https://${config.domain}/glossary/${escapeHTML3(rt.slug)}/" target="_blank" rel="noopener">${escapeHTML3(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML3(data.name)}</p>
        <p class="creativefyi-header-subtitle">Glossary term${category ? ` \xB7 ${category}` : ""}</p>
      </div>
      ${category ? `<span class="creativefyi-badge">${category}</span>` : ""}
    </div>

    <div class="creativefyi-summary">
      ${escapeHTML3(data.definition)}
    </div>

    ${relatedPills ? `<div class="creativefyi-pills-row">${relatedPills}</div>` : ""}

    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${termUrl}" target="_blank" rel="noopener">
        ${escapeHTML3(data.name)} ${externalLinkIcon}
      </a>
      <a class="creativefyi-link" href="${glossaryUrl}" target="_blank" rel="noopener">
        Full glossary on ${escapeHTML3(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/guide.ts
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var SITES_WITH_GUIDES = /* @__PURE__ */ new Set(["symbolfyi", "unicodefyi"]);
function initGuideWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "creativefyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-guide-widget");
  if (!SITES_WITH_GUIDES.has(config.site)) {
    container.innerHTML = `
      <div class="creativefyi-header">
        <div class="creativefyi-header-text">
          <p class="creativefyi-header-title">Guides</p>
          <p class="creativefyi-header-subtitle">Creative FYI</p>
        </div>
      </div>
      <div class="creativefyi-summary">
        Guides are available on
        <a href="https://symbolfyi.com/guides/" target="_blank" rel="noopener">SymbolFYI</a>
        and
        <a href="https://unicodefyi.com/guides/" target="_blank" rel="noopener">UnicodeFYI</a>.
      </div>
      ${poweredByHTML(config)}
    `;
    return;
  }
  renderLoading(container);
  const params = {};
  const lang = (_b = dataset.lang) != null ? _b : "";
  if (lang) params.lang = lang;
  fetchAPI(config.apiBase, `guides/${slug}/`, params).then((guide) => {
    var _a2, _b2, _c, _d, _e, _f;
    const guideUrl = guide.url ? `https://${config.domain}${guide.url}` : `https://${config.domain}/guides/${escapeHTML4(guide.slug)}/`;
    const excerpt = (_b2 = (_a2 = guide.excerpt) != null ? _a2 : guide.description) != null ? _b2 : "";
    const readingTime = (_d = (_c = guide.reading_time_minutes) != null ? _c : guide.reading_time) != null ? _d : null;
    const category = (_f = (_e = guide.category_name) != null ? _e : guide.category) != null ? _f : null;
    container.innerHTML = `
        <div class="creativefyi-header">
          <div class="creativefyi-header-text">
            <div class="creativefyi-badges-row">
              ${category ? `<span class="creativefyi-badge">${escapeHTML4(category)}</span>` : ""}
              ${readingTime != null ? `<span class="creativefyi-badge creativefyi-badge--time">${escapeHTML4(String(readingTime))} min read</span>` : ""}
            </div>
            <p class="creativefyi-header-title">${escapeHTML4(String(guide.title))}</p>
          </div>
        </div>
        ${excerpt ? `<p class="creativefyi-summary">${escapeHTML4(excerpt)}</p>` : ""}
        <div class="creativefyi-actions">
          <a href="${guideUrl}" target="_blank" rel="noopener" class="creativefyi-link">
            Read guide on ${escapeHTML4(config.name)}
            ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(container, `Guide "${escapeHTML4(slug)}" not found.`, config);
  });
}

// src/widgets/search.ts
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  color: "Color",
  font: "Font",
  emoji: "Emoji",
  symbol: "Symbol",
  character: "Character",
  glossary: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}\u2026`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="creativefyi-search-wrap">
      <div class="creativefyi-search-form">
        <span class="creativefyi-search-icon" aria-hidden="true">${SEARCH_ICON}</span>
        <input
          class="creativefyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML5(placeholder)}"
          aria-label="Search ${escapeHTML5(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
        >
      </div>
      <div class="creativefyi-search-dropdown" role="listbox" hidden></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".creativefyi-search-input");
  const dropdown = container.querySelector(".creativefyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".creativefyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      if (i === idx) {
        item.classList.add("creativefyi-search-result-item--active");
      } else {
        item.classList.remove("creativefyi-search-result-item--active");
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="creativefyi-search-empty">
          No results for <strong>${escapeHTML5(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : "";
      const href = item.url ? `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML5(item.slug)}/`;
      html += `
        <a
          class="creativefyi-search-result-item"
          href="${href}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
        >
          <div class="creativefyi-search-result-row">
            <span class="creativefyi-result-title">${escapeHTML5(item.name)}</span>
            ${typeLabel ? `<span class="creativefyi-badge">${escapeHTML5(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div class="creativefyi-result-meta">${escapeHTML5(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
}

// src/tools/glossary-tooltip.ts
var CACHE_PREFIX = "creativefyi_tooltip_";
var termCache = {};
async function fetchTerm(apiBase, slug) {
  const cached = termCache[slug];
  if (cached && cached !== "loading" && cached !== "error") return cached;
  if (cached === "error") return null;
  try {
    const stored = sessionStorage.getItem(`${CACHE_PREFIX}${slug}`);
    if (stored) {
      const data = JSON.parse(stored);
      termCache[slug] = data;
      return data;
    }
  } catch (e) {
  }
  termCache[slug] = "loading";
  try {
    const res = await fetch(`${apiBase}glossary/${encodeURIComponent(slug)}/`, {
      headers: { Accept: "application/json" }
    });
    if (!res.ok) {
      termCache[slug] = "error";
      return null;
    }
    const data = await res.json();
    termCache[slug] = data;
    try {
      sessionStorage.setItem(`${CACHE_PREFIX}${slug}`, JSON.stringify(data));
    } catch (e) {
    }
    return data;
  } catch (e) {
    termCache[slug] = "error";
    return null;
  }
}
function createTooltipEl(config) {
  const div = document.createElement("div");
  div.style.cssText = `
    position: fixed;
    z-index: 999999;
    max-width: 320px;
    padding: 10px 13px;
    background: #1e293b;
    color: #f1f5f9;
    border-radius: 7px;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 13px;
    line-height: 1.55;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    border: 1px solid rgba(255,255,255,0.1);
  `;
  div.setAttribute("role", "tooltip");
  div.setAttribute("aria-live", "polite");
  div.dataset.owner = config.site;
  document.body.appendChild(div);
  return div;
}
var sharedTooltip = null;
var currentAnchor = null;
var hideTimer = null;
function getTooltip(config) {
  if (!sharedTooltip) {
    sharedTooltip = createTooltipEl(config);
  }
  return sharedTooltip;
}
function positionTooltip(tip, anchor) {
  const rect = anchor.getBoundingClientRect();
  const tipW = 320;
  const tipH = tip.offsetHeight || 80;
  const gap = 8;
  let top = rect.top - tipH - gap;
  let left = rect.left;
  if (top < 8) top = rect.bottom + gap;
  if (left + tipW > window.innerWidth - 8) left = window.innerWidth - tipW - 8;
  if (left < 8) left = 8;
  tip.style.top = `${top}px`;
  tip.style.left = `${left}px`;
}
function showTooltip(tip, term, anchor, config) {
  const readMoreUrl = `https://${config.domain}/glossary/${encodeURIComponent(term.slug)}/`;
  tip.innerHTML = `
    <strong style="display:block;margin-bottom:4px;font-size:13px;color:#f8fafc">${escapeHTML6(term.name)}</strong>
    <span style="color:#cbd5e1">${escapeHTML6(term.definition.length > 140 ? term.definition.slice(0, 140) + "\u2026" : term.definition)}</span>
    <a href="${readMoreUrl}" target="_blank" rel="noopener" style="
      display:inline-block; margin-top:6px; font-size:11px; color:#93c5fd;
      text-decoration:none; pointer-events:auto;
    ">Read more \u2192</a>
  `;
  positionTooltip(tip, anchor);
  tip.style.opacity = "1";
  tip.style.pointerEvents = "auto";
}
function hideTooltip(tip) {
  tip.style.opacity = "0";
  tip.style.pointerEvents = "none";
  currentAnchor = null;
}
function escapeHTML6(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function applyTermStyle(span) {
  span.style.cssText += `
    cursor: help;
    border-bottom: 1px dotted currentColor;
    text-decoration: none;
  `;
  span.setAttribute("tabindex", "0");
  span.setAttribute("role", "button");
}
function initGlossaryTooltipTool(el, config) {
  var _a;
  const span = el;
  const slug = (_a = span.dataset.slug) != null ? _a : "";
  if (!slug) return;
  applyTermStyle(span);
  const tip = getTooltip(config);
  async function onShow() {
    if (currentAnchor === span) return;
    currentAnchor = span;
    if (hideTimer !== null) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    tip.textContent = "Loading\u2026";
    positionTooltip(tip, span);
    tip.style.opacity = "1";
    tip.style.pointerEvents = "none";
    const term = await fetchTerm(config.apiBase, slug);
    if (currentAnchor !== span) return;
    if (term) {
      showTooltip(tip, term, span, config);
    } else {
      hideTooltip(tip);
    }
  }
  function onHide() {
    hideTimer = setTimeout(() => {
      if (currentAnchor === span) hideTooltip(tip);
    }, 200);
  }
  span.addEventListener("mouseenter", () => {
    void onShow();
  });
  span.addEventListener("mouseleave", onHide);
  span.addEventListener("focus", () => {
    void onShow();
  });
  span.addEventListener("blur", onHide);
  span.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideTooltip(tip);
  });
}

// src/compute/unicode.ts
var SCRIPT_RANGES = [
  // Latin
  { start: 0, end: 127, name: "Latin" },
  { start: 128, end: 255, name: "Latin" },
  { start: 256, end: 591, name: "Latin" },
  { start: 7680, end: 7935, name: "Latin" },
  // Greek
  { start: 880, end: 1023, name: "Greek" },
  { start: 7936, end: 8191, name: "Greek" },
  // Cyrillic
  { start: 1024, end: 1279, name: "Cyrillic" },
  { start: 1280, end: 1327, name: "Cyrillic" },
  // Armenian
  { start: 1328, end: 1423, name: "Armenian" },
  // Hebrew
  { start: 1424, end: 1535, name: "Hebrew" },
  // Arabic
  { start: 1536, end: 1791, name: "Arabic" },
  { start: 1872, end: 1919, name: "Arabic" },
  { start: 2208, end: 2303, name: "Arabic" },
  // Devanagari
  { start: 2304, end: 2431, name: "Devanagari" },
  // Bengali
  { start: 2432, end: 2559, name: "Bengali" },
  // Thai
  { start: 3584, end: 3711, name: "Thai" },
  // Georgian
  { start: 4256, end: 4351, name: "Georgian" },
  // Hangul Jamo
  { start: 4352, end: 4607, name: "Korean" },
  // Hiragana
  { start: 12352, end: 12447, name: "Hiragana" },
  // Katakana
  { start: 12448, end: 12543, name: "Katakana" },
  // CJK Unified Ideographs
  { start: 19968, end: 40959, name: "CJK" },
  { start: 13312, end: 19903, name: "CJK" },
  { start: 131072, end: 173791, name: "CJK" },
  // Hangul Syllables
  { start: 44032, end: 55215, name: "Korean" },
  // Emoji blocks
  { start: 128512, end: 128591, name: "Emoji" },
  { start: 127744, end: 128511, name: "Emoji" },
  { start: 128640, end: 128767, name: "Emoji" },
  { start: 129280, end: 129535, name: "Emoji" },
  { start: 129536, end: 129647, name: "Emoji" },
  { start: 129648, end: 129791, name: "Emoji" },
  { start: 9728, end: 9983, name: "Emoji" },
  { start: 9984, end: 10175, name: "Emoji" },
  { start: 65024, end: 65039, name: "Variation Selector" },
  { start: 8205, end: 8205, name: "ZWJ" }
];
function detectScript(codepoint) {
  for (const range of SCRIPT_RANGES) {
    if (codepoint >= range.start && codepoint <= range.end) {
      return range.name;
    }
  }
  return "Other";
}
function codepointToHex(cp) {
  return `U+${cp.toString(16).toUpperCase().padStart(4, "0")}`;
}
function utf8ByteLength(text) {
  const encoder = new TextEncoder();
  return encoder.encode(text).length;
}
function analyzeText(text) {
  var _a;
  const encoder = new TextEncoder();
  const byteCount = encoder.encode(text).length;
  const wordCount = text.trim().split(/\s+/).filter((w) => w.length > 0).length;
  const codepoints = [];
  const scripts = {};
  let charCount = 0;
  for (const char of text) {
    const cp = char.codePointAt(0);
    if (cp === void 0) continue;
    charCount++;
    codepoints.push({
      char,
      hex: codepointToHex(cp),
      decimal: cp
    });
    const script = detectScript(cp);
    if (script !== "Variation Selector" && script !== "ZWJ") {
      scripts[script] = ((_a = scripts[script]) != null ? _a : 0) + 1;
    }
  }
  return { charCount, byteCount, wordCount, codepoints, scripts };
}

// src/compute/encoding.ts
function toUtf8Hex(char) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(char);
  return Array.from(bytes).map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
}

// src/tools/unicode-converter.ts
function escapeHTML7(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initUnicodeConverterTool(el, config) {
  var _a;
  const dataset = el.dataset;
  const initialText = (_a = dataset.text) != null ? _a : "Hello";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-unicode-converter-tool");
  const style = shadow.querySelector("style");
  if (style) {
    style.textContent += `
      .creativefyi-uc-input-wrap {
        padding: 12px; border-bottom: 1px solid var(--border);
        background: var(--surface);
      }
      .creativefyi-uc-input {
        width: 100%; box-sizing: border-box; padding: 8px 10px;
        border: 1px solid var(--input-border); border-radius: 6px;
        background: var(--input-bg); color: var(--text);
        font-size: 14px; font-family: inherit; outline: none;
      }
      .creativefyi-uc-input:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .creativefyi-uc-stats {
        display: flex; gap: 0; border-bottom: 1px solid var(--border);
      }
      .creativefyi-uc-stat {
        flex: 1; padding: 8px 6px; text-align: center;
        border-right: 1px solid var(--border);
      }
      .creativefyi-uc-stat:last-child { border-right: none; }
      .creativefyi-uc-stat-val {
        display: block; font-size: 18px; font-weight: 700;
        color: var(--accent); line-height: 1.2;
      }
      .creativefyi-uc-stat-lbl {
        display: block; font-size: 10px; color: var(--muted);
        text-transform: uppercase; letter-spacing: 0.04em;
      }
      .creativefyi-uc-table-wrap {
        max-height: 220px; overflow-y: auto;
      }
      .creativefyi-uc-table {
        width: 100%; border-collapse: collapse; font-size: 12px;
      }
      .creativefyi-uc-table th {
        position: sticky; top: 0; background: var(--surface);
        padding: 5px 8px; text-align: left; font-size: 10px;
        font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
        color: var(--muted); border-bottom: 1px solid var(--border);
      }
      .creativefyi-uc-table td {
        padding: 4px 8px; border-bottom: 1px solid var(--border);
        font-family: 'Fira Code', Consolas, monospace; vertical-align: middle;
      }
      .creativefyi-uc-table tr:last-child td { border-bottom: none; }
      .creativefyi-uc-char { font-size: 18px; line-height: 1; }
      .creativefyi-uc-scripts {
        padding: 8px 12px; font-size: 11px; color: var(--muted);
        border-top: 1px solid var(--border); background: var(--surface);
      }
    `;
  }
  container.innerHTML = `
    <div class="creativefyi-uc-input-wrap">
      <input class="creativefyi-uc-input" type="text" value="${escapeHTML7(initialText)}" placeholder="Enter text\u2026" spellcheck="false">
    </div>
    <div class="creativefyi-uc-stats">
      <div class="creativefyi-uc-stat">
        <span class="creativefyi-uc-stat-val" id="stat-chars">0</span>
        <span class="creativefyi-uc-stat-lbl">Chars</span>
      </div>
      <div class="creativefyi-uc-stat">
        <span class="creativefyi-uc-stat-val" id="stat-bytes">0</span>
        <span class="creativefyi-uc-stat-lbl">UTF-8 Bytes</span>
      </div>
      <div class="creativefyi-uc-stat">
        <span class="creativefyi-uc-stat-val" id="stat-words">0</span>
        <span class="creativefyi-uc-stat-lbl">Words</span>
      </div>
    </div>
    <div class="creativefyi-uc-table-wrap">
      <table class="creativefyi-uc-table">
        <thead>
          <tr>
            <th>Char</th>
            <th>Codepoint</th>
            <th>Decimal</th>
            <th>UTF-8 Bytes</th>
          </tr>
        </thead>
        <tbody id="uc-tbody"></tbody>
      </table>
    </div>
    <div class="creativefyi-uc-scripts" id="uc-scripts"></div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".creativefyi-uc-input");
  const statChars = container.querySelector("#stat-chars");
  const statBytes = container.querySelector("#stat-bytes");
  const statWords = container.querySelector("#stat-words");
  const tbody = container.querySelector("#uc-tbody");
  const scriptsDiv = container.querySelector("#uc-scripts");
  function update(text) {
    const analysis = analyzeText(text);
    statChars.textContent = String(analysis.charCount);
    statBytes.textContent = String(analysis.byteCount);
    statWords.textContent = String(analysis.wordCount);
    const rows = analysis.codepoints.slice(0, 200).map(({ char, hex, decimal }) => {
      const utf8 = toUtf8Hex(char);
      const byteLen = utf8ByteLength(char);
      return `<tr>
        <td class="creativefyi-uc-char">${escapeHTML7(char)}</td>
        <td>${escapeHTML7(hex)}</td>
        <td>${decimal}</td>
        <td>${escapeHTML7(utf8)} <span style="color:var(--muted)">(${byteLen}B)</span></td>
      </tr>`;
    }).join("");
    tbody.innerHTML = rows || '<tr><td colspan="4" style="text-align:center;padding:12px;color:var(--muted)">Enter text above</td></tr>';
    const scripts = Object.entries(analysis.scripts).sort(([, a], [, b]) => b - a).map(([name, count]) => `${name} (${count})`).join(" \xB7 ");
    scriptsDiv.textContent = scripts || "";
  }
  input.addEventListener("input", () => update(input.value));
  update(initialText);
}

// src/tools/text-analyzer.ts
function escapeHTML8(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function charCategory(cp) {
  if (cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp >= 192 && cp <= 591 || cp >= 1024 && cp <= 1279 || cp >= 1536 && cp <= 1791 || cp >= 19968 && cp <= 40959 || cp >= 44032 && cp <= 55215) return "Letter";
  if (cp >= 48 && cp <= 57) return "Digit";
  if (cp === 32 || cp === 9 || cp === 10 || cp === 13 || cp === 160) return "Space";
  if (cp >= 128512 && cp <= 128591 || cp >= 127744 && cp <= 128511 || cp >= 128640 && cp <= 128767 || cp >= 129280 && cp <= 129535 || cp >= 9728 && cp <= 10175) return "Emoji";
  if (cp >= 33 && cp <= 47 || cp >= 58 && cp <= 64 || cp >= 91 && cp <= 96 || cp >= 123 && cp <= 126) return "Punctuation";
  return "Symbol";
}
function initTextAnalyzerTool(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : "Type or paste text here\u2026";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-text-analyzer-tool");
  const style = shadow.querySelector("style");
  if (style) {
    style.textContent += `
      .creativefyi-ta-textarea {
        display: block; width: 100%; box-sizing: border-box;
        padding: 10px 12px; min-height: 90px; resize: vertical;
        border: none; border-bottom: 1px solid var(--border);
        background: var(--surface); color: var(--text);
        font-size: 14px; font-family: inherit; outline: none; line-height: 1.6;
      }
      .creativefyi-ta-textarea::placeholder { color: var(--muted); }
      .creativefyi-ta-stats {
        display: grid; grid-template-columns: repeat(4, 1fr);
        border-bottom: 1px solid var(--border);
      }
      .creativefyi-ta-stat {
        padding: 8px 4px; text-align: center;
        border-right: 1px solid var(--border);
      }
      .creativefyi-ta-stat:last-child { border-right: none; }
      .creativefyi-ta-stat-val {
        display: block; font-size: 18px; font-weight: 700;
        color: var(--accent); line-height: 1.2;
      }
      .creativefyi-ta-stat-lbl {
        display: block; font-size: 10px; color: var(--muted);
        text-transform: uppercase; letter-spacing: 0.04em;
      }
      .creativefyi-ta-section {
        padding: 8px 12px; border-bottom: 1px solid var(--border);
      }
      .creativefyi-ta-section:last-of-type { border-bottom: none; }
      .creativefyi-ta-section-label {
        font-size: 10px; font-weight: 600; color: var(--muted);
        text-transform: uppercase; letter-spacing: 0.04em;
        margin-bottom: 6px; display: block;
      }
      .creativefyi-ta-pills { display: flex; flex-wrap: wrap; gap: 5px; }
      .creativefyi-ta-pill {
        display: inline-block; padding: 3px 9px; border-radius: 20px;
        background: var(--badge-bg); color: var(--badge-text);
        font-size: 11px; font-weight: 500;
      }
      .creativefyi-ta-empty {
        font-size: 12px; color: var(--muted); font-style: italic;
      }
    `;
  }
  container.innerHTML = `
    <textarea class="creativefyi-ta-textarea" placeholder="${escapeHTML8(placeholder)}" spellcheck="false"></textarea>
    <div class="creativefyi-ta-stats">
      <div class="creativefyi-ta-stat">
        <span class="creativefyi-ta-stat-val" id="ta-chars">0</span>
        <span class="creativefyi-ta-stat-lbl">Chars</span>
      </div>
      <div class="creativefyi-ta-stat">
        <span class="creativefyi-ta-stat-val" id="ta-words">0</span>
        <span class="creativefyi-ta-stat-lbl">Words</span>
      </div>
      <div class="creativefyi-ta-stat">
        <span class="creativefyi-ta-stat-val" id="ta-bytes">0</span>
        <span class="creativefyi-ta-stat-lbl">Bytes (UTF-8)</span>
      </div>
      <div class="creativefyi-ta-stat">
        <span class="creativefyi-ta-stat-val" id="ta-lines">0</span>
        <span class="creativefyi-ta-stat-lbl">Lines</span>
      </div>
    </div>
    <div class="creativefyi-ta-section">
      <span class="creativefyi-ta-section-label">Script Breakdown</span>
      <div class="creativefyi-ta-pills" id="ta-scripts">
        <span class="creativefyi-ta-empty">Type above to analyze</span>
      </div>
    </div>
    <div class="creativefyi-ta-section">
      <span class="creativefyi-ta-section-label">Category Breakdown</span>
      <div class="creativefyi-ta-pills" id="ta-categories">
        <span class="creativefyi-ta-empty">\u2014</span>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const textarea = container.querySelector(".creativefyi-ta-textarea");
  const elChars = container.querySelector("#ta-chars");
  const elWords = container.querySelector("#ta-words");
  const elBytes = container.querySelector("#ta-bytes");
  const elLines = container.querySelector("#ta-lines");
  const elScripts = container.querySelector("#ta-scripts");
  const elCategories = container.querySelector("#ta-categories");
  function renderPills(record) {
    const entries = Object.entries(record).sort(([, a], [, b]) => b - a);
    if (entries.length === 0) return '<span class="creativefyi-ta-empty">\u2014</span>';
    return entries.map(
      ([name, count]) => `<span class="creativefyi-ta-pill">${escapeHTML8(name)} (${count})</span>`
    ).join("");
  }
  function update(text) {
    var _a2;
    if (!text) {
      elChars.textContent = "0";
      elWords.textContent = "0";
      elBytes.textContent = "0";
      elLines.textContent = "0";
      elScripts.innerHTML = '<span class="creativefyi-ta-empty">Type above to analyze</span>';
      elCategories.innerHTML = '<span class="creativefyi-ta-empty">\u2014</span>';
      return;
    }
    const analysis = analyzeText(text);
    elChars.textContent = String(analysis.charCount);
    elWords.textContent = String(analysis.wordCount);
    elBytes.textContent = String(analysis.byteCount);
    elLines.textContent = String(text.split("\n").length);
    elScripts.innerHTML = renderPills(analysis.scripts);
    const categories = {};
    for (const { decimal } of analysis.codepoints) {
      const cat = charCategory(decimal);
      categories[cat] = ((_a2 = categories[cat]) != null ? _a2 : 0) + 1;
    }
    elCategories.innerHTML = renderPills(categories);
  }
  textarea.addEventListener("input", () => update(textarea.value));
}

// src/_entry_unicodefyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.style || "modern";
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "tooltip":
      initGlossaryTooltipTool(el, config);
      break;
    case "unicode-converter":
      initUnicodeConverterTool(el, config);
      break;
    case "analyzer":
      initTextAnalyzerTool(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"unicodefyi","name":"UnicodeFYI","domain":"unicodefyi.com","accent":"#7C3AED","attribute":"data-unicodefyi","apiBase":"https://unicodefyi.com/api/v1/","searchPath":"/search/","entityName":"Characters","entitySlug":"characters"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"unicodefyi","name":"UnicodeFYI","domain":"unicodefyi.com","accent":"#7C3AED","attribute":"data-unicodefyi","apiBase":"https://unicodefyi.com/api/v1/","searchPath":"/search/","entityName":"Characters","entitySlug":"characters"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"unicodefyi","name":"UnicodeFYI","domain":"unicodefyi.com","accent":"#7C3AED","attribute":"data-unicodefyi","apiBase":"https://unicodefyi.com/api/v1/","searchPath":"/search/","entityName":"Characters","entitySlug":"characters"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"unicodefyi","name":"UnicodeFYI","domain":"unicodefyi.com","accent":"#7C3AED","attribute":"data-unicodefyi","apiBase":"https://unicodefyi.com/api/v1/","searchPath":"/search/","entityName":"Characters","entitySlug":"characters"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"unicodefyi","name":"UnicodeFYI","domain":"unicodefyi.com","accent":"#7C3AED","attribute":"data-unicodefyi","apiBase":"https://unicodefyi.com/api/v1/","searchPath":"/search/","entityName":"Characters","entitySlug":"characters"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-tooltip`, initGlossaryTooltipTool, ["slug", "term"]],
    [`${site}-unicode-converter`, initUnicodeConverterTool, ["slug", "value"]],
    [`${site}-analyzer`, initTextAnalyzerTool, ["slug", "value"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
