# GrowPro Repo House Rules
> These rules are IN ADDITION to the top-level CLAUDE.md at C:\Users\jesme\Documents\Claude-Projects\CLAUDE.md.
> Both files apply every session.

---

## Architecture (read this every session before editing)

This repo has FOUR layers. Edits go in different places depending on what you're changing:

**LAYER A — GitHub Pages live pages (auto-generated, DO NOT hand-edit)**
- `launch.html`, `marketing.html`, `operator.html`
- These are BUILT from Layer B source files via `build-iframe-pages.sh`
- Direct edits here will be overwritten by the next build
- Other Layer A files (`home.html`, `avatar.html`, `intake.html`, `book.html`, `thank-you.html`, `agreement.html`, `growpro-agreement.html`, `growpro-home.html`, `index.html`, `copy-helper-v2.html`, `growpro-launch-test.html`) ARE hand-edited directly -- they don't go through the build

**LAYER B — Configurator source files (THIS is where launch/marketing/operator edits happen)**
- `growpro-launch-embed1-html.html` + `growpro-launch-embed2-js.html`
- `growpro-marketing-embed1-html.html` + `growpro-marketing-embed2-js.html`
- `growpro-operator-embed1-html.html` + `growpro-operator-embed2-js.html`
- After editing, MUST run `build-iframe-pages.sh` to regenerate Layer A
- `growpro-launch-css.html` and the older single-file `growpro-*.html` files are legacy/reference only -- don't edit them

**LAYER C — Webflow Code Embed snippets (paste into Webflow, NOT served from GitHub)**
- `WEBFLOW-*.html` files
- These are backups/version-control of code that lives inside Webflow's embed blocks
- If you edit one, you must ALSO paste the updated code into Webflow's embed block manually for the live site to update -- GitHub Pages does not serve these files

**LAYER D — Next.js marketing app (separate concern)**
- `next.config.js`, `package.json`, `app/`, `components/flowai/`
- Different deployment target, leave alone unless explicitly asked

---

## Hard Rules

1. **NEVER redesign, restyle, or restructure** when asked for a content change. If the instruction is "change the date," change ONLY the date characters. No HTML structure, CSS, layout, or copy changes beyond what was asked for.

2. **Before editing ANY file, show a unified diff** of the exact lines to be changed. Wait for explicit approval before writing.

3. **WEBINAR PAGE:** There is no webinar file in this repo. The `/webinar` page on `launch.kickstartsocial.co` is a native Webflow page. If asked to edit it, remind the user: the fix happens in Webflow's editor directly, not here.

4. **Before editing `launch.html`, `marketing.html`, or `operator.html`: STOP.** Those are build outputs. Ask if the edit should go into the Layer B source files with a re-run of the build instead.

5. **After editing Layer B source files**, run `build-iframe-pages.sh` and show the output before pushing.

6. **Never commit and push without explicit approval.** Show the proposed commit message first and wait for the go-ahead.

7. **Cache busting:** bump the `?v=` version number in any URLs referencing repo files. Increment the number -- never change the filename.

8. **Webflow embeds (Layer C) require a manual paste into Webflow after editing here.** Always remind the user to do this when a `WEBFLOW-*.html` file is edited -- the GitHub commit alone does NOT update the live site for those files.

9. **Branding rules from the parent `CLAUDE.md` still apply:** 75+ brands launched, no em dashes, no individual staff names in customer-facing copy.
