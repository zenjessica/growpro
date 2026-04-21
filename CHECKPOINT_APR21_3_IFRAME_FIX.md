# GrowPro Checkpoint — Apr 21, 2026 (#3): Webflow Iframe Architecture LOCKED ✅

## Status
**WORKING.** All 4 GrowPro pages (Home, Launch, Marketing, Operator) embedded via iframes on `launch.kickstartsocial.co` now:
- Render correctly with white backgrounds (no black bars, no peek-through)
- Auto-resize to current step content (no cut-off, no big white gaps)
- Scroll to top of iframe on every page load AND every wizard step change
- Navigate cleanly between pages via `target="_top"` absolute URLs

---

## Architecture (final)

### Source of truth
- **Repo:** `zenjessica/growpro` (main branch)
- **Hosted:** `https://zenjessica.github.io/growpro/{home,launch,marketing,operator}.html`
- **Embedded into:** Webflow site `launch.kickstartsocial.co`

### Three-message protocol (iframe → parent)
Each iframe page sends one of three message types via `window.parent.postMessage(...)`:
1. `growpro-loaded` — fired once on `window.load`. Parent scrolls to iframe top.
2. `growpro-resize` — fired every 500ms + on every click + via ResizeObserver. Carries `height` int. Parent sets `iframe.style.height = height + 20`.
3. `growpro-step-change` — fired when user clicks a button containing nav text (Continue, Next, Back, Choose, →, ←, etc). Parent re-scrolls to iframe top.

### Parent-side handler (Webflow Site Settings → Custom Code → Footer Code)
Single paste-once script, lives ONLY in `Project Settings → Custom Code → Footer code`:

```html
<script>
(function(){
  if("scrollRestoration" in history){history.scrollRestoration="manual"}
  window.addEventListener("load",function(){window.scrollTo(0,0)});
  function scrollToFrame(){
    var f=document.querySelector('iframe[src*="zenjessica.github.io/growpro"]');
    if(!f)return;
    var top=f.getBoundingClientRect().top+window.pageYOffset-20;
    window.scrollTo({top:Math.max(0,top),behavior:"instant"});
  }
  window.addEventListener("message",function(e){
    if(!e.data||!e.data.type)return;
    if(e.data.type==="growpro-loaded"||e.data.type==="growpro-step-change"){
      scrollToFrame();
      setTimeout(scrollToFrame,100);
      setTimeout(scrollToFrame,400);
    }
    if(e.data.type==="growpro-resize"){
      var f=document.querySelector('iframe[src*="zenjessica.github.io/growpro"]');
      if(f)f.style.height=(e.data.height+20)+"px";
    }
  });
})();
</script>
```

### Page-level embeds (Webflow Designer → each page → Code Embed block)
ZERO JavaScript. Just iframe. Use `?v=14` (or higher) in URL to bust cache when scripts change.

| Webflow page | Embed |
|---|---|
| `/` (Home) | `<iframe src="https://zenjessica.github.io/growpro/home.html?v=14" style="width:100%;height:2000px;border:0;display:block;background:#fff" scrolling="no" title="GrowPro Home"></iframe>` |
| `/launch` | `<iframe src="https://zenjessica.github.io/growpro/launch.html?v=14" style="width:100%;height:1500px;border:0;display:block;background:#fff" scrolling="no" title="GrowPro Launch"></iframe>` |
| `/marketing` | `<iframe src="https://zenjessica.github.io/growpro/marketing.html?v=14" style="width:100%;height:1500px;border:0;display:block;background:#fff" scrolling="no" title="GrowPro Marketing"></iframe>` |
| `/operator` | `<iframe src="https://zenjessica.github.io/growpro/operator.html?v=14" style="width:100%;height:1500px;border:0;display:block;background:#fff" scrolling="no" title="GrowPro Operator"></iframe>` |

---

## Iframe-side script (already in all 4 HTML `<head>` sections)

```html
<base target="_top">
<style>html,body{margin:0;padding:0;background:#FFFFFF;font-family:Inter,system-ui,sans-serif}</style>
<script>if("scrollRestoration" in history){history.scrollRestoration="manual"}
(function(){var lastH=0;function reportH(){try{var h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight);if(h!==lastH&&window.parent&&window.parent!==window){lastH=h;window.parent.postMessage({type:"growpro-resize",height:h},"*")}}catch(e){}}
window.addEventListener("load",function(){window.scrollTo(0,0);try{if(window.parent&&window.parent!==window){window.parent.postMessage({type:"growpro-loaded",scrollTop:true},"*")}}catch(e){}reportH();setInterval(reportH,500);if(window.ResizeObserver){new ResizeObserver(reportH).observe(document.body)}document.addEventListener("click",function(ev){var t=ev.target;var btn=t&&t.closest?t.closest("button,a"):null;if(btn){var txt=(btn.textContent||"").toLowerCase();if(txt.indexOf("continue")>-1||txt.indexOf("next")>-1||txt.indexOf("back")>-1||txt.indexOf("add-on")>-1||txt.indexOf("review")>-1||txt.indexOf("get started")>-1||txt.indexOf("choose")>-1||txt.indexOf("submit")>-1||txt.indexOf("→")>-1||txt.indexOf("←")>-1){try{window.parent.postMessage({type:"growpro-step-change"},"*")}catch(e){}}}setTimeout(reportH,50);setTimeout(reportH,300);setTimeout(reportH,600)})});})();</script>
```

Critical pieces:
- `<base target="_top">` — every link breaks OUT of iframe and navigates parent window
- All footer links and CTAs use **absolute URLs** to `https://launch.kickstartsocial.co/{launch,marketing,operator,...}` (NOT relative paths — relative paths resolve to `zenjessica.github.io` and 404)
- `})();` at end of IIFE is REQUIRED to actually invoke it. Missing this was the root bug that wasted ~2 hours.

---

## Lessons learned (DO NOT repeat these mistakes)

1. **IIFE invocation:** `(function(){...})` defines but does NOT execute. Must end with `})();`. ALWAYS lint-check IIFEs before deploying.

2. **Browser cache is a liar:** Always bump `?v=N` in iframe `src` after pushing changes to GitHub Pages. Otherwise users keep getting the cached broken version even when GitHub serves the fixed file.

3. **Cross-origin iframes can NOT read each other's DOM, but CAN postMessage.** All cross-frame coordination MUST go through `postMessage`. Don't try `iframe.contentWindow.document` — it throws SecurityError silently.

4. **Iframe height must accommodate the TALLEST step at MOBILE width.** Wizards have wildly different heights per step (marketing add-ons step is 4,872px on mobile vs 1,386px on review step). Without auto-resize, you must size for the tallest. With auto-resize, set a sensible default (1500px) and let JS handle it.

5. **Webflow Site Settings → Footer Code is the right place for cross-page logic.** Per-page embeds should be dumb iframes. Centralized handler = single source of truth, easier to debug.

6. **`target="_top"` on `<base>` makes ALL links escape the iframe.** Without this, button clicks go to `zenjessica.github.io/launch` (404) instead of `launch.kickstartsocial.co/launch`.

7. **Forced scroll-to-top requires THREE triggers minimum:** (a) parent listens for `growpro-loaded` and scrolls, (b) iframe `window.scrollTo(0,0)` on its own load, (c) iframe sends `growpro-step-change` on wizard nav clicks so parent re-scrolls. Step (c) was missing initially — caused "loads in middle of page" bug.

---

## Files modified in this checkpoint
- `home.html`, `launch.html`, `marketing.html`, `operator.html` — added base+target, white bg, IIFE auto-resize script with step-change message
- `WEBFLOW-PER-PAGE-SNIPPETS.md` — should be updated to use new dumb-iframe + footer-code architecture

## Commits
- `47a197e` — Send growpro-step-change message on wizard nav clicks (HEAD, 64 commits)
- `04ca7e3` — Fix IIFE invocation so auto-resize script actually runs
- `58e7de2` — Initial auto-resize attempt (broken, IIFE not invoked)
- `c01ecac` — White bg + base target=_top in all 4 HTMLs

## Next
- Stripe webhook + ClickUp + SMS integration (as planned before this fire)
