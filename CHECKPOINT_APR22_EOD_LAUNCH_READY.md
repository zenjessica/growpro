# GrowPro Checkpoint — Apr 22, 2026 EOD (Launch-Ready)

**Status:** ✅ Configurator + Stripe checkout + promo codes **LIVE** on `launch.kickstartsocial.co`. Ready to distribute link TOMORROW.

---

## 🔥 TOMORROW — ONE-TIME SETUP BEFORE DISTRIBUTING LINK

### 1. Create the Stripe test coupon (1 minute, in Stripe Dashboard — LIVE mode)

**A. Create coupon**
- [dashboard.stripe.com/coupons](https://dashboard.stripe.com/coupons) → **+ New**
- Name: `GrowPro Test 99.99% Off`
- Type: **Percentage discount**
- Percentage off: **99.99**
- Duration: **Once**
- Create

**B. Create promo code for it**
- [dashboard.stripe.com/promotion_codes](https://dashboard.stripe.com/promotion_codes) → **+ New**
- Coupon: the one above
- Code: `GROWPROTEST`
- Max redemptions: **10**
- Create

### 2. End-to-end smoke test (5 min)
- Visit `launch.kickstartsocial.co/launch` → build any package (any options)
- Proceed to Stripe checkout
- Click **"Add promotion code"** → enter `GROWPROTEST` → Apply
- Total should drop to ~$2.50 on a $25K build
- Complete purchase with a real card (LIVE mode)
- Verify Stripe receipt email arrives
- Refund the $2.50 from Stripe Dashboard once confirmed

### 3. After test passes → distribute the link
- **Home (all entry point):** https://launch.kickstartsocial.co/
- **Direct to Launch:** https://launch.kickstartsocial.co/launch
- **Direct to Marketing:** https://launch.kickstartsocial.co/marketing
- **Direct to Operator (VIP):** https://launch.kickstartsocial.co/operator

---

## ✅ WHAT'S LIVE AND WORKING

### Configurator (all 4 pages)
- ✅ Home hub page with 3 path cards (Launch / Marketing / Operator)
- ✅ Launch configurator (5-step wizard with signatures)
- ✅ Marketing configurator (4-step wizard with signatures)
- ✅ Operator configurator (3-step wizard with signatures)
- ✅ Iframe auto-resize (no cut-off, no black bars)
- ✅ Scroll-to-top on every navigation + step change
- ✅ Signature pad preserves drawing across resizes
- ✅ All in-iframe links break out to parent (target=_top + absolute URLs)

### Stripe checkout backend (`growpro-stripe-api.vercel.app`)
- ✅ Pay-in-full mode → one-time Stripe Checkout session
- ✅ Payment plan mode → subscription with down payment + installments
- ✅ Metadata captures: business_name, customer_name, phone, email, package, payment_plan, promo_codes, build_total
- ✅ **NEW (today):** `allow_promotion_codes=True` — promo code field visible on every checkout

### Webflow single-source-of-truth footer script
- Lives in Webflow → Project Settings → Custom Code → Footer
- Handles: scroll-to-top on page load, iframe resize listener, postMessage handler for `growpro-loaded` / `growpro-step-change` / `growpro-resize`

---

## ⏭️ IN PROGRESS — FINISHES TOMORROW AFTER DISTRIBUTION WARMS UP

### Webhook automation (`/api/webhook` on Vercel)
Code is written + deployed. Needs these 6 environment variables added to Vercel (`vercel.com/dashboard` → growpro-stripe-api → Settings → Environment Variables):

| Variable | Value | Source |
|---|---|---|
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Create webhook endpoint in Stripe → copy signing secret |
| `CLICKUP_API_TOKEN` | `pk_...` | ClickUp → avatar → Settings → Apps → Generate API token |
| `CLICKUP_LIST_ID` | `901234567890` | URL of target ClickUp list (last number) |
| `RESEND_API_KEY` | `re_...` | resend.com → free signup → API Keys |
| `TWILIO_SID` + `TWILIO_TOKEN` + `TWILIO_FROM` | from Twilio | twilio.com trial → $15 free credit |

Once those are added + Stripe webhook endpoint registered, every completed checkout auto-creates:
1. ClickUp task (in your chosen list) with all client/purchase metadata
2. Email to `hello@kickstartsocial.co`
3. SMS to `+1-310-903-8546`

---

## 🎯 TOMORROW'S PRIORITIES (ordered)

1. ☐ **Create Stripe test coupon + smoke test** (10 min) ← DO FIRST
2. ☐ **Distribute configurator link** (post to social, DM VIPs, email list)
3. ☐ **Install GA4 + Microsoft Clarity analytics** (10 min)
4. ☐ **Wire webhook env vars** (15 min once ClickUp token is generated)
5. ☐ **Exit-intent email capture popup** (30 min — "save your build as PDF")
6. ☐ **Abandoned checkout recovery email** (15 min — fires on `checkout.session.expired`)

---

## 🧠 KEY CONTEXT FOR TOMORROW (so we don't re-figure anything out)

- **All GrowPro wizard pages host:** `zenjessica.github.io/growpro/` (GitHub Pages)
- **Webflow site host:** `launch.kickstartsocial.co` (Webflow embeds the GitHub Pages pages via iframe)
- **Stripe backend host:** `growpro-stripe-api.vercel.app` (Vercel serverless Python)
- **Stripe mode:** **LIVE** (not test) — use real card, refund after
- **Current iframe versions in Webflow:** `?v=14` or `?v=15` (bump to `?v=16` after any HTML change to force cache refresh)
- **Latest growpro commit:** `17a2384` (68 total)
- **Latest growpro-stripe-api commit:** `c8eff8e` (12 total) — just pushed promo code support

---

## 💾 COMMIT LOG TODAY

- `c8eff8e` — Enable Stripe promo codes (allow_promotion_codes) for test coupon support
- `17a2384` — EOD checkpoint with tomorrow's analytics + email capture roadmap
- `a6352d6` — EOD checkpoint Apr 21
- `301e407` — Fix signature pad across all wizard pages (resize guard)
- `2b933c0` — Add Stripe webhook handler: ClickUp + email + SMS
- `948a200` — Checkpoint #3 (iframe fix lessons learned)

---

**Status: READY TO DISTRIBUTE** ✅
Tomorrow morning = 10-min coupon test → start sending the link.
