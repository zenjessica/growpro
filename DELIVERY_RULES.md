# GrowPro Delivery Rules — LOCKED CHECKPOINT (Apr 21, 2026)

## CORE PRINCIPLE
**Simplest working solution first.** No viewport math, no postMessage handshakes, no multi-step instructions when a one-liner does the job. Jessica is a busy founder. Ship code that just works.

## WEBFLOW EMBED CODE — THE STANDARD PATTERN

For any GrowPro configurator (or future) Webflow page, deliver ONE iframe per page using this exact pattern:

```html
<iframe src="https://zenjessica.github.io/growpro/PAGE.html" style="width:100%;height:2400px;border:0;display:block" allow="payment"></iframe>
```

### The 3 current configurator snippets (CONFIRMED WORKING)

**LAUNCH** (`launch.kickstartsocial.co/launch`):
```html
<iframe src="https://zenjessica.github.io/growpro/launch.html" style="width:100%;height:2400px;border:0;display:block" allow="payment"></iframe>
```

**MARKETING** (`launch.kickstartsocial.co/marketing`):
```html
<iframe src="https://zenjessica.github.io/growpro/marketing.html" style="width:100%;height:2400px;border:0;display:block" allow="payment"></iframe>
```

**OPERATOR** (`launch.kickstartsocial.co/operator`):
```html
<iframe src="https://zenjessica.github.io/growpro/operator.html" style="width:100%;height:2400px;border:0;display:block" allow="payment"></iframe>
```

## DELIVERY RULES (apply to every future request)

1. **One snippet per page.** Don't bundle multiple pages into one file unless asked.
2. **Inline styles only inside the snippet.** No external CSS, no `<style>` blocks unless required.
3. **Fixed tall iframe height (2400px).** Bump to 3000px if a longer page needs it. Never use `100vh` math, never use postMessage auto-resize — both are fragile in Webflow.
4. **`width:100%`** so it respects whatever Webflow container it's pasted into. No `100vw` breakouts.
5. **Always include `allow="payment"`** so Stripe Checkout can launch from inside the iframe.
6. **Source files live at `https://zenjessica.github.io/growpro/{name}.html`** — single source of truth, auto-updates on commit.
7. **Code blocks must be copy-paste ready.** No placeholders, no "fill in your URL here", no comments inside the snippet that need to be removed.
8. **When delivering, format = label + code block.** No multi-paragraph essays. Jessica scans for the code, copies, pastes.
9. **If something fails, change ONE number/character at a time** (e.g. height 2400 → 3000). Never rebuild from scratch.
10. **No iframe alternatives unless asked.** Direct-link buttons are an option but only mention if the iframe approach fails three times.

## WHAT NOT TO DO
- ❌ `width:100vw; margin-left:calc(50% - 50vw)` viewport breakouts (caused last bug)
- ❌ postMessage height-reporter scripts (fragile, unreliable in Webflow embeds)
- ❌ Multiple files for one fix
- ❌ Long instructions when a snippet will do
- ❌ Asking the user to choose between options when one is clearly better

## STATUS AS OF THIS CHECKPOINT
- Repo: zenjessica/growpro (48+ commits, main branch)
- GitHub Pages: live at https://zenjessica.github.io/growpro/
- All 3 configurators have responsive CSS for narrow viewports
- The 3 fixed-2400px iframe snippets above are CONFIRMED working in Webflow
- Pricing locked: Template Launch $15K, Custom $25K, Operator $35K, Google Ads $1K/mo
- Stripe backend live at growpro-stripe-api.vercel.app

## CARRY-OVER TODOs (lower priority)
1. WordPress template gallery for $15K Template Launch tier
2. Full Stack bundle math discrepancy ($16,550 vs $13,550)
3. DocuSign double-sig + PDF email
4. WellieMD $1,500 setup + $1,000/mo prominence on tally
5. Client portal (purchases/billing/deliverables/ClickUp)
