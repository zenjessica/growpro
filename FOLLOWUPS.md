# GrowPro Followups

Items flagged during active sessions but not fixed in-session. Clear each one when resolved.

---

## 1. Checkout smoke test (HIGH PRIORITY)

**What:** Add a pre-deploy smoke test that hits the Stripe API with a test-mode payload and verifies a checkout session URL comes back before any configurator deploy goes live.

**Why:** The `amount_cents` bug lived in production until a real customer (Cristal) hit it mid-checkout. No automated check caught it. That is unacceptable for a payment flow.

**Scope:** `growpro-stripe-api` repo. One test script, wired into the deploy pipeline or run manually as a pre-push checklist item.

---

## 2. Add rel="noopener" to agreement links (security hardening)

**What:** All 6 "View Full Services Agreement" links across the 3 embed source files use `target="_blank"` but are missing `rel="noopener"`. Add `rel="noopener"` to all 6.

**Files:**
- `growpro-launch-embed1-html.html` (2 links)
- `growpro-marketing-embed1-html.html` (2 links)
- `growpro-operator-embed1-html.html` (2 links)

**Why:** `target="_blank"` without `rel="noopener"` allows the opened tab to access `window.opener` on the parent. Low-risk here but a known security pattern worth closing.

**After edit:** run `build-iframe-pages.sh` to rebuild Layer A files.

---

## 3. localStorage persistence for configurator form state

**What:** Configurator form state lives entirely in JS memory. An accidental refresh, browser crash, or tab close wipes everything. Add `localStorage` autosave so customers can resume where they left off.

**Why:** Customers spend significant time in the configurator (multi-step: package, add-ons, treatment, personal info, agreement, checkout). Losing that state is a churn event.

**Scope:** All 3 JS embed source files (`growpro-launch-embed2-js.html`, `growpro-marketing-embed2-js.html`, `growpro-operator-embed2-js.html`). Save on each step advance, clear on successful Stripe redirect.

---

## 4. Investigate why Webflow lost the /agreement page content

**What:** The `/agreement` page on `launch.kickstartsocial.co` was completely blank during Cristal's checkout session. It presumably had content at some point.

**Questions to answer:**
- Was it a Webflow autosave/publish accident?
- Was the page built with a Webflow CMS reference that got unpublished?
- Was it manually cleared by someone (Codex, Perry, other)?
- Or was it never fully built and just fell through?

**Fix already in place:** `/agreement` now loads `agreement.html` from GitHub Pages via iframe embed (v1.1 with print button). That is the permanent solution.

**Why investigate anyway:** Need to know if there is a process gap -- someone should not be able to accidentally nuke a live checkout-flow page without a review step.

---

## 5. USD hardcoded in Vercel transform

**What:** `transform_line_items()` in `growpro-stripe-api/api/create-checkout.py` hardcodes `"currency": "usd"`.

**When it matters:** If GrowPro ever goes international and accepts CAD, GBP, or other currencies.

**Current status:** Fine for now. Flag when first international customer signs.

---

## 6. Recurring interval hardcoded to "month"

**What:** `transform_line_items()` hardcodes `"recurring": {"interval": "month"}` for any item with `recurring: true`.

**When it matters:** If annual billing is ever offered (e.g., annual subscription discount for the marketing package).

**Current status:** Fine for now. Flag if annual billing is added to the configurator.

---

*Last updated: 2026-06-03*
