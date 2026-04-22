# CHECKPOINT — Apr 21, 2026 (End of Day #4)

Status: **Iframe + configurator fully working.** Stripe → ClickUp/email/SMS webhook **50% built, awaiting credentials from user.**

---

## ✅ What's DONE and LIVE today

### 1. Webflow iframe system — WORKS
- All 4 GrowPro pages (home, launch, marketing, operator) embedded in Webflow via iframe
- **Root cause of earlier bugs:** IIFE `(function(){...})` was missing trailing `()` → auto-resize script never executed. Fixed in commit `04ca7e3`.
- **Final architecture:** ONE site-wide script in Webflow → Project Settings → Custom Code → Footer Code. Four dumb iframe embeds (no JS) on each page.
- Site-wide script handles: scroll-to-top on page load, scroll-to-top on iframe load, scroll-to-top on wizard step change, iframe auto-resize to content height.
- Message protocol between iframe and parent: `growpro-loaded`, `growpro-resize`, `growpro-step-change`
- Full snippets saved in `CHECKPOINT_APR21_3_IFRAME_FIX.md`

### 2. Signature pad fix — DEPLOYED
- Signature pad was getting wiped every 500ms because iframe resize fired the signature pad's own resize listener which reinited the canvas
- **Fix (commit `301e407`):** signature pad's `resize()` now:
  - Bails if user is currently drawing (`sigDrawing` guard)
  - Only reinits if width actually changed (`newW === lastSigW`)
  - Preserves existing drawing by saving to PNG → resizing → restoring
- User needs to bump `?v=14` → `?v=15` on the 4 Webflow embeds to force cache bust

### 3. Pill card visual fix — DEPLOYED
- 3 hero cards on home now match in size, gradient, corners
- Pill image was re-cropped to remove rounded white border baked into original PNG

---

## 🚧 IN PROGRESS — Stripe Webhook → ClickUp + Email + SMS

### Code written and pushed
- `webhook.py` committed to `zenjessica/growpro-stripe-api` repo (`/api/webhook.py`)
- `vercel.json` updated to route `/api/webhook`
- `requirements.txt` updated: `stripe>=7.0.0` + `requests>=2.31.0`
- Vercel auto-deploys on push (already configured)

### What the webhook does
1. Receives `checkout.session.completed` event from Stripe (LIVE mode)
2. Verifies Stripe signature using `STRIPE_WEBHOOK_SECRET`
3. Extracts metadata: `business_name`, `customer_name`, `phone`, `email`, `source` page, `payment_plan`, `promo_codes`, `build_total`
4. Creates ClickUp task in designated list with all details in description
5. Sends email to `hello@kickstartsocial.co` via Resend
6. Sends SMS to `+1-310-903-8546` via Twilio

### ⏭️ TOMORROW — to finish this, user needs to provide:

**ClickUp (REQUIRED)**
- [ ] API token — ClickUp → avatar → Settings → Apps → Generate (starts with `pk_`)
- [ ] List ID — URL of list where new purchase tasks should land (e.g. `https://app.clickup.com/2345678/v/li/901234567890` → last number is list ID)

**Twilio for SMS (OPTIONAL — can skip for now)**
- [ ] Account SID
- [ ] Auth Token
- [ ] Twilio phone number (FROM number)
- If user doesn't have: twilio.com/try-twilio → free trial ~$15 credit

**Email (I'll set up — user only verifies domain later)**
- Resend API key (Manus creates) → will use onboarding@resend.dev default sender until `kickstartsocial.co` domain verified
- User adds 2 DNS TXT records when ready (takes 2 min)

**Stripe webhook registration (I do after deploy)**
- Stripe Dashboard → Developers → Webhooks → Add endpoint: `https://growpro-stripe-api.vercel.app/api/webhook`
- Listen to: `checkout.session.completed`
- Copy webhook signing secret → add to Vercel env as `STRIPE_WEBHOOK_SECRET`

---

## 🗂️ Files committed today

### zenjessica/growpro (65 commits total)
- `home.html` — white bg, target=_top, auto-resize
- `launch.html` — auto-resize IIFE fix + signature pad guard
- `marketing.html` — same
- `operator.html` — same
- `hero-pill-hand.png` — re-cropped
- `CHECKPOINT_APR21_3_IFRAME_FIX.md` — iframe architecture doc
- `CHECKPOINT_APR21_4_EOD.md` — this file

### zenjessica/growpro-stripe-api
- `api/webhook.py` — NEW Stripe webhook handler (`2b933c0`)
- `vercel.json` — added `/api/webhook` route
- `requirements.txt` — added `requests`

---

## 🎯 Tomorrow's 30-min sprint

1. User pastes ClickUp API token + list URL (2 min)
2. User decides: Twilio now or skip SMS? (1 min)
3. Manus adds env vars to Vercel dashboard (2 min)
4. Manus triggers redeploy on Vercel (1 min)
5. Manus registers webhook in Stripe Dashboard (2 min)
6. Manus tests end-to-end with a real $0.50 test charge (5 min)
7. Verify ClickUp task appears, email arrives, SMS arrives (2 min)
8. If any failures: inspect Vercel logs, fix, redeploy (up to 15 min)

**Total: ~30 min tomorrow morning and we're done with post-purchase automation.**

---

## 💤 Sleep tight, Jessica.

All the working code is locked in GitHub. Iframes work, signature pad works, site flows correctly. Webhook code is written and deployed waiting only for credentials. Pick this up tomorrow with: **"I'm back — here's my ClickUp token: pk_..."**


---

## 📋 TOMORROW'S ROADMAP — Analytics + Email Capture (added end of day)

Resume in this exact order:

### 🥇 PRIORITY 1 — Finish Stripe webhook (30 min)
Already written and deployed. Just needs credentials from Jess:
1. ClickUp API token + list URL
2. Twilio SID / Token / From number (or skip SMS for now)
3. Manus adds env vars to Vercel
4. Manus registers webhook in Stripe
5. Test with real $0.50 charge

### 🥈 PRIORITY 2 — Analytics install (10 min)

**Google Analytics 4** — paste GA4 measurement ID tracking script in Webflow → Project Settings → Custom Code → Head Code.
- Setup: [analytics.google.com](https://analytics.google.com) → create property for `launch.kickstartsocial.co`
- Gives: page views, traffic sources, device breakdown, scroll depth, funnel drop-offs

**Microsoft Clarity** — paste Clarity tracking script in same Head Code.
- Setup: [clarity.microsoft.com](https://clarity.microsoft.com) → new project
- Gives: **session recordings** (watch real users click through), heatmaps, rage click detection, dead click detection
- **This is the highest-ROI tool — literally watch 3 prospects and you'll know exactly where conversion breaks**

### 🥉 PRIORITY 3 — Funnel event tracking inside iframes (15 min)

Add `window.parent.postMessage({type:"gp-event",name:"...",data:{...}})` inside launch/marketing/operator HTMLs at key moments:
- `gp-event: page-viewed`
- `gp-event: package-selected` (with tier + price)
- `gp-event: addons-selected` (with list + total)
- `gp-event: signed`
- `gp-event: checkout-initiated`
- `gp-event: checkout-completed` (from Stripe webhook)

Parent Webflow footer script catches these and fires `gtag('event', ...)` to GA4 + Clarity. Result: full conversion funnel visibility.

### 🎁 PRIORITY 4 — Email Capture (45 min total)

Three strategic moments, not an annoying front-end popup:

**A) Exit-intent modal on home + pricing pages**
- Triggers when mouse moves toward closing the tab
- Copy: "Not ready? Grab a free 10-min strategy call with Jessica"
- Captures email + phone → creates ClickUp lead task + adds to email list

**B) Slide-in on wizard after 60s idle**
- Copy: "Save your configuration? I'll email you the PDF so you can come back later"
- Captures email only → generates PDF from current wizard state → emails via Resend

**C) Abandoned checkout recovery (FREE - uses Stripe built-in)**
- Stripe webhook on `checkout.session.expired` event
- We already have their email from Stripe session
- Automated email: "Still want to launch your telehealth brand? Your build is saved — finish in 2 minutes" + one-click resume link
- Also creates ClickUp task for Jess to follow up if no action in 48h

### 🏗️ PRIORITY 5 — Email list tool decision

**Option A: ConvertKit** — $0 up to 1K subs, direct Webflow integration, drip campaigns
**Option B: Beehiiv** — $0 up to 2.5K subs, modern, creator-focused, great analytics
**Option C: Just ClickUp leads** — free, tasks auto-created from email captures, Jess works them manually (fine for first 50 leads while brand is new)

Recommendation: **Start with Option C** (ClickUp leads only) since we're building the webhook infrastructure anyway. Graduate to ConvertKit when we cross 50 captured leads and need drip automation.

### 🎯 PRIORITY 6 — "Strategy call" booking CTA

Most exit-intent captures will offer a free strategy call. Need a booking link:
- **Cal.com** (free, better than Calendly) or **Calendly** (you may already have one)
- Embed as button in Webflow + as auto-reply in capture emails
- Calendar syncs to Google Calendar → ClickUp task auto-created for Jess

### 💎 STRETCH — Jessica's personal touch

Post-purchase email template ideas to write tomorrow:
- **Immediate auto:** "Welcome! Here's what's next + your ClickUp portal link" (from Resend)
- **Day 1:** "Hey, Jessica here — just recorded you a Loom walkthrough of next steps" (personal, manual Loom)
- **Day 3:** "Your kickoff call is scheduled. Here's what to bring."
- **Day 7:** Progress update with screenshot from ClickUp

---

## 🗓️ Tomorrow's time estimate

| Priority | Time |
|---|---|
| Finish Stripe webhook | 30 min |
| GA4 + Clarity install | 10 min |
| Funnel event tracking | 15 min |
| Email capture (3 moments) | 45 min |
| Cal.com booking link | 15 min |
| Email template copy | 20 min |
| **Total** | **~2.5 hours** |

**By tomorrow evening: full acquisition funnel live, analytics tracking every step, every lead captured, every purchase triggers ClickUp + email + SMS.**

Sleep tight. 🌙
