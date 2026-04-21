# GROWPRO CONFIGURATOR — PROJECT MEMORY

> Single source of truth for the GrowPro Configurator project. Read this first in any new session before making changes.
> Last updated: April 20, 2026

---

## 1. WHAT THIS IS

A three-tier "build-your-own" configurator for **GrowPro by Kickstart Social LLC** (Jessica Ciernia), used to sell turnkey telehealth brand launches, marketing services, and full operator partnerships. Each configurator is embedded in a Webflow page, sends a webhook to Go HighLevel (GHL) on submission, and triggers Stripe Checkout via a serverless API.

**Live URLs (Webflow)**
- Launch configurator: https://launch.kickstartsocial.co/
- (Marketing & Operator: deployed to sister Webflow pages on the same site)

**Brand**
- GROW**PRO** wordmark, primary color `#8B7EC8` (purple), Inter + DM Sans fonts
- Tagline on Launch page: "Build Your Telehealth Brand"
- Footer: growpro.co · kickstartsocial.co · hello@kickstartsocial.co

---

## 2. REPOSITORIES (canonical = `zenjessica`)

| Repo | Purpose | Branch | Notes |
|---|---|---|---|
| **`zenjessica/growpro`** | All 3 configurators + Next.js marketing site | `main` | **Canonical — push everything here** |
| **`zenjessica/growpro-stripe-api`** | Stripe Checkout serverless backend | `main` | Deployed at `growpro-stripe-api.vercel.app` |
| `jessicaciernia-cyber/growpro-configurator` | Legacy version — original full HTML files & CSS | `master` | Reference only; do not push new work here |
| `jessicaciernia-cyber/growpro-stripe-api` | Legacy mirror of Stripe API | — | Reference only |

**Auth state in this sandbox:** GitHub CLI is logged in as `jessicaciernia-cyber` (read-only access to `zenjessica/*`). To push, the Manus GitHub App must be installed on `zenjessica` OR `jessicaciernia-cyber` must be added as a Write collaborator. Until then, deliveries are made by attaching files for manual upload.

---

## 3. FILE INVENTORY (in `zenjessica/growpro`)

### Configurator embed files (paste into Webflow)
| Tier | Embed 1 (HTML + CSS) | Embed 2 (JS) | Total chars |
|---|---|---|---|
| **Launch** | `growpro-launch-embed1-html.html` (~37K) | `growpro-launch-embed2-js.html` (~24K) | both <50K Webflow limit ✓ |
| **Marketing** | `growpro-marketing-embed1-html.html` (~28K) | `growpro-marketing-embed2-js.html` (~18K) | ✓ |
| **Operator** | `growpro-operator-embed1-html.html` (~27K) | `growpro-operator-embed2-js.html` (~22K) | ✓ |

`growpro-marketing.html` is the legacy single-file (~46K) version, kept for reference.

### Next.js site (`my-v0-project`, separate from configurators)
- Stack: Next.js 14.2.35, React 19, Tailwind 4, Radix UI, Vercel Analytics
- Routes: `/` (home), `/login`, `/signup`, `/social-media-management`
- Components: `components/flowai/sections/` (hero, pricing, medication-slider, earnings-calculator, formulary-access, services-breakdown, why-choose-us, how-it-works, features, faq-section, jessica-section, product-categories, product-showcase) + `navbar`, `footer`, `dashboard-preview`
- 80+ images in `public/` (vials, healthcare illustrations, branded logos)

---

## 4. THE THREE CONFIGURATORS

### 4.1 LAUNCH — "Build Your Telehealth Brand"
One-time + monthly fees for a brand launch on the WellieMD telehealth platform.

**5-step flow:** Launch Path → Treatments → Power-Ups → Review → Get Started
*(Step 1 also has a 1B sub-step: "Pick Your Favorites" template gallery — choose up to 3 of 12 designs)*

**Tiers (one-time setup)** — *prices live in `pkgPrices` JS object*
| Tier | Price | Badge | Includes |
|---|---:|---|---|
| Template Launch | **$15,000** | Lower Entry Point | WP template, WellieMD setup, 4 core treatments, LegitScript, payment processing, GHL/Lumi setup, 12-week timeline, no strategy calls |
| Custom Build | **$25,000** | Most Popular | Everything in Template + custom WP/Webflow design, brand identity, kickoff strategy call with Jessica, monthly 1:1 |
| Operator Suite | **$35,000** | Premium — All Bells & Whistles | Everything in Custom + HRT, Branded Meds, Peptide Package included |

> **Recent change (Apr 20, 2026):** Template Launch raised from $8,500 → **$15,000**. Updated in both `embed1` (display HTML, line ~55) and `embed2` (`pkgPrices.template`, line 31).

**Required platform fees (all packages, displayed in step 1)**
- WellieMD Setup: $1,500 one-time
- WellieMD: $1,000/mo

**Step 2 — Treatments (4 core included free)**
Semaglutide GLP-1, Tirzepatide GLP-1/GIP, NAD+, Sermorelin (locked, included)

Optional add-ons (Operator Suite includes all three):
- HRT (Men & Women): +$2,500
- Brand Name Medication Pathway: +$2,500
- Peptide Package: +$5,000 (High Value badge)

**Step 3 — Power-Ups & Add-Ons**
| Add-on | Price | Type | Notes |
|---|---:|---|---|
| Lumi Funnels | +$499/mo | monthly | Recommended badge |
| Fast Track Priority (4-6 wk) | +$10,000 | one-time | Fastest badge; mutex w/ standard |
| Fast Track Standard (8 wk) | +$5,000 | one-time | Mutex w/ priority |
| Elective Labs | +$2,500 | one-time | |
| Additional Product Page | +$500 | one-time | |
| Post-Launch Support Pkg | +$1,000 | one-time | 4 weekly calls in first 30 days |
| GrowPro Consulting | $500/hr | hourly | |

**Step 4 — Review** with three payment plan cards:
- Pay in Full ($25K example)
- $15K Down — 5% fee → 2 × installment
- $10K Down — 15% financing → 2 × installment

**Step 5 — Get Started** — full lead form + signature canvas + agreement checkbox + Stripe Pay Now button.

**Promo codes** (`PROMO_CODES` object in embed2)
- `WELLIE500` — WellieMD setup reduced to $500 (-$1,000)
- `FREELABS` — Free Elective Labs (-$2,500)
- `FREEHRT` — Free HRT (-$2,500)
- `PEPTIDE50` — 50% off Peptide Package (-$2,500)
- `BUILD5K` — $5,000 off main package

---

### 4.2 MARKETING — "Build Your Marketing Plan"
Monthly marketing services. **5-step flow:** Core Package → Add-Ons → Support → Review → Get Started

**Step 1 — Choose Your Marketing Base** (one or both)
| Base | Price | Notes |
|---|---:|---|
| Brand Activation Core | **$3,500/mo** (90-day min) | Full-service marketing through *your brand's* ad account (warm-up required); IG/TikTok 5x/wk + 5 micro-influencers + UGC |
| Meta Marketing — Managed Ads | **$4,000/mo** | Uses *our pre-warmed* ad accounts (faster activation); FB+IG management + ad spend collected separately via ACH (min $3,000/mo) |

**Step 2 — Add-Ons**
| Add-on | Price | Type | Group |
|---|---:|---|---|
| Extra Influencers (+7 more) | $3,250/mo | monthly | full-stack member |
| Secondary Ad Platform | $1,800/mo | monthly | full-stack member |
| Full Funnel Email Marketing | $3,000/mo (or $1,500 one-time) | monthly | full-stack member |
| Comprehensive Social Management | $2,500/mo | monthly | full-stack member |
| SEO Blog Writing (30/mo) | $3,000/mo | monthly | full-stack member |
| Single Lifestyle Quiz | $1,500 | one-time | quiz mutex |
| Dual Quiz Bundle | $3,000 | one-time | quiz mutex |
| Triple Quiz Bundle | $4,000 | one-time | quiz mutex |
| Additional Quiz Form | $1,200 | one-time | |
| Additional Landing Page | $3,500 | one-time | |

**Full Stack toggle:** if all 5 full-stack add-ons selected → bundled at **$16,550/mo** (a savings vs. $13,550 individual? — actually **fullStackMonthly = 16,550** equals straight sum of 3,250+1,800+3,000+2,500+3,000 = $13,550, so check: configurator code shows 16,550 which is *higher* than sum — verify with Jessica whether intentional bundle premium or bug).

**Step 3 — Platform & Support**
- WellieMD: $1,000/mo
- Lumi Funnels: $499/mo

---

### 4.3 OPERATOR — "Choose Your Growth Partnership"
Premium tiers with Jessica embedded as fractional operator. **4-step flow:** Choose Tier → Support → Review → Get Started

**3 tiers** (`TIERS` JS object)
| Tier | Setup | Monthly | Term | Marketing stack value |
|---|---:|---:|---|---:|
| **GrowPro Elite** | $25,000 | **$18,500/mo** | 6-mo minimum | $18,500 (Meta+TikTok+UGC+12 Influencers $3,500 + Google $1,800 + GHL Email $3,000 + Advanced Social $2,500 + Jessica Operator Fee $7,700) |
| **Founder Operator** | $25,000 | **$28,500/mo** | 6-mo commitment | $25,500 (above + Influencer Mgmt 20 total $3,250 + Jessica Fee $11,450) |
| **Accelerator** | $25,000 | **$33,500/mo** | 6-mo commitment | $175,000 ($33k included setup + $85,500 6mo all platforms + $56,500 Jessica intensive) — **Pay-in-Full $195,000 (saves $31K), Split-Pay $113,000, Total Value $208,000**; converts to Founder Operator at month 7 |

**Included support (Mini-tier)** for ALL Operator clients (not upsold)
- WellieMD ($1,000/mo)
- Lumi Funnels ($499/mo)
- Web Support Mini ($499/mo)
- GHL Support Mini ($499/mo)
- Pharmacy Support Mini ($499/mo)

**Step 2 — Optional Max Upgrades** (each +$1,001/mo to upgrade Mini → Max)
- Web Support Max
- GHL Support Max
- Pharmacy Support Max

**Step 4 — $25K Setup Payment Plans** (`payPlan` var: `pif | split15 | split10`)
- Pay in Full: $25,000 (no fees)
- $15K Down (5% fee on balance): 2 × $5,250 = $25,500 total
- $10K Down (15% fee on balance): 2 × $8,625 = $27,250 total

---

## 5. INTEGRATIONS (shared by all 3 configurators)

### 5.1 Go HighLevel (GHL) Webhook
```
WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/us7NjUIDufkMTLkmIPXQ/webhook-trigger/21bc9b49-ec90-4e61-a955-b852244d112f"
```
Fired on form submit (`Submit & Pay`). Payload includes `package`, `package_price`, `treatments_added`, `addons`, `promo_codes`, `payment_plan`, `support_upgrades`, contact details, business name, source, totals.

### 5.2 Stripe Checkout API
```
STRIPE_API_URL = "https://growpro-stripe-api.vercel.app/api/create-checkout"
```
Backend: `zenjessica/growpro-stripe-api/api/create-checkout.py` (Vercel Python serverless). Two modes:
1. **Standard** — pay-in-full or recurring subscription
2. **Payment plan** — down payment line item (one-time) + recurring installment line item with `trial_period_days` to delay first installment charge (used for Operator $15K-down / $10K-down splits)

CORS-enabled, accepts `email`, `metadata`, `description`, `success_url`, `cancel_url`, `payment_plan: { down_payment_cents, installment_cents, installment_count, interval_days, plan_label }`.

### 5.3 Service Agreement
- Inline canvas signature capture in step 5 (`sigCanvas`, `getSigData()` returns base64 PNG)
- Required checkbox: "I have read and agree to the GrowPro Services Agreement"
- Both must be present before "Submit & Pay" enables
- **Jessica's policy:** signed agreement should also flow through DocuSign for double-protection, and the signed PDF + configurator output must be emailed to the customer (not yet implemented in current code — TODO)

---

## 6. WEBFLOW DEPLOYMENT MODEL

Each configurator goes into a Webflow page as **TWO sequential Embed blocks**:
1. **Embed 1** = `*-embed1-html.html` (HTML structure + inline `<style>` block + Google Fonts link)
2. **Embed 2** = `*-embed2-js.html` (`<script>` block with all logic, integrations, totals, Stripe call)

50K char limit per Webflow embed → all current files comfortably under.

**CRITICAL paste rule:** when pasting from a chat/document, copy ONLY the file contents (start at first `<` character, end at last `>` character). Pasting the surrounding chat text in causes the chat prose to render above the configurator (this is what caused the "dude fix" issue earlier).

---

## 7. CURRENT STATE & RECENT WORK

### Completed
- ✅ Launch configurator built, 5-step flow, Stripe + GHL integration working
- ✅ Marketing configurator built, split into 2 embeds for Webflow
- ✅ Operator configurator built, split into 2 embeds (was over 50K limit as single file)
- ✅ Operator: support upgrades section + 3-way payment plans for $25K setup
- ✅ Marketing: 5-step flow with Core/Meta dual-base + ad spend input
- ✅ Stripe API: payment-plan mode (down payment + delayed installments)
- ✅ Live deployment at launch.kickstartsocial.co
- ✅ **Apr 20, 2026:** Template Launch price updated from $8,500 → $15,000 (both display + JS pricing object)
- ✅ **Apr 20, 2026:** Fixed missing `<style>` block in `growpro-launch-embed1-html.html` (was rendering unstyled in Webflow). Restored full canonical CSS (~14.3K chars) from legacy `growpro-launch-css.html` + Inter/DM Sans Google Fonts link.

### Known issues / open items
1. **Marketing Full Stack bundle math:** `fullStackMonthly = 16,550` while sum of components = $13,550. Confirm with Jessica whether this is intentional bundle premium or should be discounted total.
2. **DocuSign double-signature flow** not yet implemented — currently only canvas signature.
3. **PDF email of signed agreement + build summary** not yet implemented.
4. **Push access to `zenjessica/growpro`** is currently blocked from this sandbox (jessicaciernia-cyber has read-only). Need GitHub App install on zenjessica OR collaborator invite.
5. **Eventual TODO:** Add WordPress template gallery to the $15K Template Launch tier (Jessica memory note: "templates need to be added to the cheap product").
6. **Client portal** (separate project) — sleek dashboard for purchase, billing, deliverables, ClickUp integration — not yet built.

---

## 8. JESSICA'S PRODUCT/UX PRINCIPLES (apply to all decisions)

- **Extreme simplicity** — assume non-technical founders; minimize cognitive load
- **Don't nickel-and-dime** new clients — keep core offering tight; surface tech upgrades in the post-purchase client portal, not the initial configurator. Wellie + Lumi stay in initial offering.
- **Service agreement before payment** — always
- **Use Go HighLevel for funnel HTML**
- **Onboarding sequence:** Onboarding → Branding/Logo → Website Build → Compliance → LegitScript → Tech Setup → Payment Processor → Portal Training → Final Setup → Testing → Launch
- **Client approval workflow:** branding/logos/mockups not approved → back to design, review next call
- **Auto-populate task templates** on new client creation (ClickUp integration)
- **Growth Partner Suite** has grouped deliverables and 4–6 week / 8-week expedited pathways

---

## 9. QUICK REFERENCE — FILES TO TOUCH FOR COMMON CHANGES

| Change | Files |
|---|---|
| Tier price (Launch) | `growpro-launch-embed1-html.html` (display) + `growpro-launch-embed2-js.html` (`pkgPrices`) |
| Add/remove a Launch power-up | `growpro-launch-embed1-html.html` (HTML card with `data-addon`, `data-price`, `data-type`) |
| Marketing add-on | `growpro-marketing-embed1-html.html` (HTML card) — JS reads `data-price` automatically |
| Operator tier monthly | `growpro-operator-embed1-html.html` (display `$X,XXX/mo`) + `growpro-operator-embed2-js.html` (`TIERS.{key}.monthly`) |
| Promo code | `growpro-launch-embed2-js.html` `PROMO_CODES` object |
| Stripe behavior | `zenjessica/growpro-stripe-api/api/create-checkout.py` |
| GHL webhook destination | `WEBHOOK_URL` constant at top of each `*-embed2-js.html` |
| Styling | inline `<style>` at top of each `*-embed1-html.html` |

---

## 10. SANITY-CHECK CHECKLIST BEFORE PUSHING ANY CONFIGURATOR CHANGE

1. Both embed1 and embed2 still under 50,000 chars?
2. Tag balance: `<style>:</style>` 1:1 in embed1, `<script>:</script>` 1:1 in embed2?
3. No stray prose / markdown / chat text outside the HTML or JS?
4. Price changes mirrored in **both** display HTML and JS pricing object?
5. Local render test (concatenate embed1 + embed2 in a `<body>`) shows proper layout + correct totals?
6. Stripe `line_items` totals match the on-screen Review summary?
7. GHL webhook payload includes the changed field?

---

## 11. CHECKPOINT — Apr 21, 2026 — WEBFLOW EMBED PATTERN LOCKED ✅

**This is the ONLY pattern to use for GrowPro Webflow embeds going forward.** Confirmed working by Jessica.

### The standard snippet (one per page)

```html
<iframe src="https://zenjessica.github.io/growpro/PAGE.html" style="width:100%;height:2400px;border:0;display:block" allow="payment"></iframe>
```

Where `PAGE` = `launch`, `marketing`, or `operator`.

### Why this is the answer
- Fixed **2400px height** = configurator content (~1400-2000px) fits with safety room → buttons NEVER clip
- **`width:100%`** respects the Webflow container — no viewport-breakout drama
- **`allow="payment"`** lets Stripe Checkout fire from inside the iframe
- Source files served from GitHub Pages → every commit auto-updates the live site (no copy-paste)
- If a future page is taller, bump 2400 → 3000. One number change.

### What did NOT work (do not retry)
- ❌ `width:100vw; margin-left:calc(50% - 50vw)` viewport breakouts → caused button clipping at bottom
- ❌ postMessage height-reporter auto-resize scripts → unreliable inside Webflow Embed blocks
- ❌ Multi-step style+div wrappers with `100vh` math → overcomplicated, fragile

### Delivery rules locked (see DELIVERY_RULES.md)
1. **Simplest working solution first** — no overengineering
2. **One snippet per page**, copy-paste ready, no setup steps required
3. **Inline styles inside the snippet only** — no external CSS
4. **Code blocks formatted as: label + code block** — no essays
5. If something fails, **change one number/character**, never rebuild from scratch
6. **Don't propose alternatives** unless the primary approach fails 3x
7. Jessica is busy — ship code that just works, no instructions she has to interpret



---

## 12. CHECKPOINT — Apr 21, 2026 (Session #2): Operator 4-Card Payment Model + Marketing Ad-Spend Disclosure

**Live as of commit `805e28c` (53 commits on main).**

### Operator: 4-card payment plans on Step 3 (replaced old 3-card setup-only model)

For each tier, standard 6-mo total = `setup ($25K) + monthly × 6`:
- Elite: $25K + $18.5K×6 = $136,000
- Founder: $25K + $28.5K×6 = $196,000
- Accelerator: $25K + $33.5K×6 = $226,000

| # | Plan | Math | Stripe Mode |
|---|---|---|---|
| 1 | 🟡 **PAY IN FULL — Save 14%** (default) | total × 0.86, all today | one-time `payment` |
| 2 | 🔵 **TWO PAYMENTS** (no fee) | total ÷ 2, today + 30 days | one-time `payment` (2nd invoiced manually) |
| 3 | 🟠 **QUARTERLY** (5% on full) | total × 1.05 ÷ 3, every 90 days | one-time `payment` (rest scheduled) |
| 4 | 🟣 **MONTHLY** (15% on full) | setup today + ((total×1.15 − setup)÷6)/mo for 6 mo | `subscription` |

Per-tier Accelerator example numbers:
- PIF: **$194,360** · Two-Pay: **2 × $113,000** · Quarterly: **3 × $79,100 = $237,300** · Monthly: **$25K setup + $37,575/mo × 6 = $250,450**

**Old plan names retired:** `split15`, `split10`, `fullpif` → auto-migrated to `pif` on load (operator embed2 lines 248-249).

### Marketing + Operator: Ad-Spend Disclosure callout

Added gold callout in Step 3/4 above payment plans:
> ⚡ **Ad Spend (Required, Billed Separately)** — required and billed separately up front before launch. **Min $3,000/mo**. Recommended **$10,000–$15,000/mo**. After month 1 converts to **monthly ACH** at chosen amount, increasable anytime.

Ad spend NEVER bundled into Stripe checkout. Configurator only collects setup + monthly (or PIF/twopay/quarterly equivalent).

### Key business decisions captured

1. At $200K+ commitment, payment plans on setup-only felt small-bore — fund the WHOLE 6-mo commitment instead.
2. PIF saves 14% (clean round number, looks generous, doesn't give away too much).
3. Quarterly fee 5%, Monthly fee 15% — both on **full balance** not just setup.
4. Two Payments = no fee (frictionless option for clients who want to split but don't need long financing).
5. Setup-waiver promo codes have $500 minimum (not free) — protects margin.
6. Ad spend always separate from configurator payment.

### Files changed this session

| File | Change |
|---|---|
| `growpro-operator-embed1-html.html` | New 4-card payment plan grid + ad-spend disclosure |
| `growpro-operator-embed2-js.html` | Rewrote `updatePayPlans` / `getPayPlanInfo` / `getFullPifPrice` + Stripe checkout for pif/twopay/quarterly/monthly |
| `growpro-marketing-embed1-html.html` | Ad-spend disclosure callout in Step 4 |
| `operator.html` / `marketing.html` / `launch.html` | Rebuilt via `build-iframe-pages.sh` |

### Still working from earlier checkpoints

- 2400px iframe pattern (Webflow embed snippets in `WEBFLOW-LAUNCH/MARKETING/OPERATOR.html`)
- Anti-scroll fix (`history.scrollRestoration='manual'` injected by build script)
- Promo codes intact: WELLIE500, FREELABS, FREEHRT, PEPTIDE50, BUILD5K, SETUP50, SETUP0, MONTH1FREE, PARTNER10, PARTNER15, VIP5K
- Stripe checkout endpoint, GHL webhook, signature canvas, agreement gating

### Lessons added to DELIVERY_RULES (for future sessions)

- When making payment plan changes, ALWAYS update both `getPayPlanInfo` (math/labels) AND the Stripe checkout block (`payPlan===` branches + `fetchBody.mode`) — they reference each other.
- After plan-name changes, add a migration line at top of `updatePayPlans()` to silently coerce old saved values to current ones (avoid stale localStorage breaks).
- Always rebuild combined `*.html` via `build-iframe-pages.sh` before pushing — never edit combined files directly.
- Validate JS via `node -e "new Function(scriptText)"` before pushing.
