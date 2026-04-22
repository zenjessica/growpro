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
