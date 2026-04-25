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
<iframe src="https://zenjessica.github.io/growpro/operator.html" style="width:100%;height:3600px;border:0;display:block" allow="payment"></iframe>
```
_Bumped from 2400 → 3600 on Apr 25, 2026 after adding Treatments Step 2. Desktop max is ~2422px (Step 4 form), mobile stacks to ~3500px. 3600 gives a small buffer._

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
- ❌ ~~postMessage height-reporter scripts~~ — **REVERSED Apr 25, 2026.** Now the locked solution. See "Apr 25 update" below.
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


---

## ADDITIONS — Apr 21, 2026 (Session #2)

### When changing payment plan logic
1. **Always update BOTH** `getPayPlanInfo()` (math/labels) AND the Stripe checkout block (`payPlan===` branches + `fetchBody.mode`). They reference each other — one without the other = silent breakage at checkout.
2. **Add a migration line** at top of `updatePayPlans()` to coerce old saved values to current names (avoid stale localStorage breaks for prospects who visited before the change):
   ```js
   if(['old1','old2','old3'].indexOf(payPlan)>=0) payPlan='newDefault';
   ```
3. **Always rebuild combined `*.html`** via `bash build-iframe-pages.sh` before pushing — never edit combined files directly. They get overwritten.
4. **Validate JS** before pushing: `node -e "['operator.html','marketing.html','launch.html'].forEach(f=>{var c=require('fs').readFileSync(f,'utf8');var m=c.match(/<script>[\s\S]*?<\/script>/g)||[];m.forEach(s=>new Function(s.replace(/<\/?script>/g,'')))})"`

### When delivering pricing/payment changes
- **Show the user the actual math per tier** before deploying (table of "today / total / savings" per tier). Catches business-logic errors fast.
- **Default to the most generous-looking option** (e.g. PIF saves 14% positions Pay-In-Full as obvious value).
- **Use round-feeling fee numbers** (5%, 15%) — easier to explain to prospects than oddly-precise ones.
- **Apply financing fees on the FULL balance**, not setup-only — at $200K commitment, fee on setup is too small-bore.

### When dealing with required-but-separate fees (like ad spend)
- **Disclose prominently** in a gold callout above the payment plans
- **Never bundle** into Stripe checkout
- **State explicitly**: amount min, recommended target, when it's billed (up-front), how it converts after month 1 (ACH monthly)

### Process lessons
- **Browser upload of duplicate filenames** sometimes drops one — re-add explicitly if file count is short.
- **GH CLI auth** = read-only on `zenjessica/*` (logged in as `jessicaciernia-cyber`). Use browser upload to push.
- **GitHub Pages cache** ~60s after commit. Hard refresh (Ctrl+Shift+R) if user reports stale content.

---

## ADDITIONS — Apr 25, 2026 (iframe auto-resize architecture LOCKED)

### Why the old fixed-height rule was reversed
After adding Treatments Step 2 to operator.html, content height grew past 2400px. Bumping to 3600px buffered desktop but mobile (where 3-column grids stack) overflowed past even that. Manual height management is no longer viable as configurators evolve.

### The new locked architecture
1. **Each configurator broadcasts its content height** via `postMessage({type:'growpro:resize',height:N})` on load, resize, and step change.
2. **Webflow has ONE site-wide listener** in Custom Code Footer that resizes any matching iframe. Paste-once, covers all current and future configurators.
3. **The listener snippet** lives at `WEBFLOW-IFRAME-AUTORESIZE.html` in this repo. Source of truth.
4. **Iframe height in Webflow embeds becomes irrelevant** — the listener overrides it. But keep `height:1500px` as a sensible initial render before the first postMessage arrives.

### The locked Webflow snippet (paste in Project Settings → Custom Code → Footer)
```html
<script>
(function(){
  if (window.__growproResizeInstalled) return;
  window.__growproResizeInstalled = true;
  window.addEventListener('message', function(e){
    if (!e.data || e.data.type !== 'growpro:resize' || typeof e.data.height !== 'number') return;
    document.querySelectorAll('iframe').forEach(function(ifr){
      if (ifr.src && ifr.src.indexOf('zenjessica.github.io/growpro') !== -1) {
        var h = Math.max(1500, Math.min(6000, e.data.height + 40));
        ifr.style.height = h + 'px';
      }
    });
  });
})();
</script>
```

### When adding a new configurator page
- Include `reportHeightToParent()` function (copy from launch/marketing/operator embed2 sources).
- Wire it into: every step transition, `window.load`, `window.resize`, and a `ResizeObserver(document.body)`.
- Once the Webflow Custom Code listener is installed, the iframe will auto-fit. No height tuning needed.

### Why the original "no postMessage" rule existed (and why it doesn't apply now)
- Original concern: postMessage was fragile WITH a parent script that wasn't installed. We were asking users to put scripts in embed blocks (easy to forget/lose).
- Resolution: Project Settings Footer Code is **site-wide and persistent**. One paste, never touch again. The fragility concern was about deployment, not the technique itself.
- Live-tested Apr 25, 2026: iframe successfully auto-grew from 1500px → 6000px on Step 1 of operator.html. 4 height-report messages received. Full content visible without internal scrollbar.
