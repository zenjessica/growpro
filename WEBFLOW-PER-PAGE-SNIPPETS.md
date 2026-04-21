# GrowPro Webflow Per-Page Snippets (No-Clip Version)

Paste ONE snippet per Webflow page. These replace the previous iframe approach and auto-size to the full viewport so buttons never clip.

---

## 1. LAUNCH PAGE — launch.kickstartsocial.co/launch

Replace the existing Embed block with this single snippet:

```html
<style>
  .gp-frame-wrap{position:relative;width:100vw;margin-left:calc(50% - 50vw);height:calc(100vh - 80px);min-height:900px;background:#fff}
  .gp-frame-wrap iframe{width:100%;height:100%;border:0;display:block}
  @media(max-width:768px){.gp-frame-wrap{height:calc(100vh - 60px);min-height:800px}}
</style>
<div class="gp-frame-wrap">
  <iframe src="https://zenjessica.github.io/growpro/launch.html" allow="payment" loading="eager"></iframe>
</div>
```

---

## 2. MARKETING PAGE — launch.kickstartsocial.co/marketing

```html
<style>
  .gp-frame-wrap{position:relative;width:100vw;margin-left:calc(50% - 50vw);height:calc(100vh - 80px);min-height:900px;background:#fff}
  .gp-frame-wrap iframe{width:100%;height:100%;border:0;display:block}
  @media(max-width:768px){.gp-frame-wrap{height:calc(100vh - 60px);min-height:800px}}
</style>
<div class="gp-frame-wrap">
  <iframe src="https://zenjessica.github.io/growpro/marketing.html" allow="payment" loading="eager"></iframe>
</div>
```

---

## 3. OPERATOR PAGE — launch.kickstartsocial.co/operator

```html
<style>
  .gp-frame-wrap{position:relative;width:100vw;margin-left:calc(50% - 50vw);height:calc(100vh - 80px);min-height:900px;background:#fff}
  .gp-frame-wrap iframe{width:100%;height:100%;border:0;display:block}
  @media(max-width:768px){.gp-frame-wrap{height:calc(100vh - 60px);min-height:800px}}
</style>
<div class="gp-frame-wrap">
  <iframe src="https://zenjessica.github.io/growpro/operator.html" allow="payment" loading="eager"></iframe>
</div>
```

---

## WHY THIS FIXES THE CLIPPING

- **`width:100vw; margin-left:calc(50% - 50vw)`** — iframe breaks out of Webflow container and spans the full browser width
- **`height:calc(100vh - 80px)`** — iframe fills the browser viewport minus the Webflow nav (80px). Subtract less or set a fixed height if you have no nav
- **`min-height:900px`** — guarantees at least 900px even on very short screens
- The configurator page itself scrolls internally, so buttons are always reachable — no more Windows-taskbar clipping

## ALTERNATIVE: Direct Links (No Embed At All)

If you'd rather skip iframes entirely and just have buttons go straight to the configurator:

- Launch: https://zenjessica.github.io/growpro/launch.html
- Marketing: https://zenjessica.github.io/growpro/marketing.html
- Operator: https://zenjessica.github.io/growpro/operator.html

These are self-contained, fully branded, and the buttons ALWAYS fit the screen because there's no iframe wrapping them.
