# GrowPro Configurator — Session Update (Apr 20, 2026)

## What changed today

### 1. Template Launch price: $8,500 → $15,000
Updated in:
- `growpro-launch-embed1-html.html` (display HTML + payment plan card)
- `growpro-launch-embed2-js.html` (pricing logic: `pkgPrices.template=15000`)
- `legacy/growpro-home.html` (home/landing card "Starting at $15,000")
- All legacy Webflow paste helper files (`PASTE-2-EMBED-HTML.html`, `growpro.js`, etc.)

### 2. Missing CSS in Launch embed1 — FIXED
The file had no `<style>` block and was rendering unstyled in Webflow.
Restored the full canonical CSS (~14.3 KB) from `growpro-launch-css.html` + Inter/DM Sans fonts.

### 3. All files consolidated under `zenjessica/growpro`
Migrated 15 legacy files from `jessicaciernia-cyber/growpro-configurator` into `zenjessica/growpro/legacy/`.
Nothing GrowPro-related should ever go into jessicaciernia-cyber again.

### 4. NEW: GitHub → Webflow auto-sync via GitHub Pages
**No more manual copy-paste between GitHub and Webflow.**

#### Architecture
```
GitHub commit → GitHub Pages auto-deploy (~30s) → Webflow iframe reloads → live site updated
```

#### GitHub Pages enabled on `zenjessica/growpro` (main / root)
Live URLs:
- https://zenjessica.github.io/growpro/home.html
- https://zenjessica.github.io/growpro/launch.html
- https://zenjessica.github.io/growpro/marketing.html
- https://zenjessica.github.io/growpro/operator.html
- https://zenjessica.github.io/growpro/ (index with links to all 4)

Each page is a self-contained HTML file that combines embed1 + embed2 into one wrapped page with proper `<head>`, Google Fonts, and viewport meta.

#### Webflow integration
Jessica pastes 4 `<iframe>` snippets (once) into the existing Webflow Embed blocks on `launch.kickstartsocial.co`.
After that paste, all future updates flow from GitHub → Pages → Webflow automatically.

See `WEBFLOW-PASTE-ONCE.html` for the exact snippets to paste.

## Commits added today (on zenjessica/growpro main)

| SHA | Message |
|---|---|
| `c589a24` | Launch: $8,500 → $15,000 + restore CSS + add PROJECT_MEMORY |
| `dd1e9b7` | Migrate legacy GrowPro files from jessicaciernia-cyber + apply $15K update |
| `2fd66cb` | Add growpro-agreement.html (service agreement page) |
| `9b5ba7c` | Add iframe-ready pages for Webflow auto-sync |

Repo now at 44 commits.

## Going forward — how to update prices/content

1. Edit files in `zenjessica/growpro` (via Manus, GitHub web editor, or local git push)
2. Commit to `main`
3. Wait ~60 seconds
4. Refresh `launch.kickstartsocial.co` → update is live

**Zero Webflow action required** after the one-time iframe paste.

## Still TODO (unchanged from main PROJECT_MEMORY.md)

- WordPress templates for $15K Template Launch tier
- DocuSign integration for double-signed agreements (canvas sig + DocuSign + PDF email)
- Marketing Full Stack bundle math discrepancy ($16,550 vs $13,550 sum)
- Client portal (purchases / billing history / deliverables dashboard / ClickUp integration)
- LegitScript application auto-management workflow
