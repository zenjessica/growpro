# ClickUp AI Avatar Intake — Form Build Spec

**Purpose:** Single source of truth for everything the creative team needs to build a brand's AI avatar library. Replaces the real-influencer intake. Triggered automatically when a client purchases on `avatar.html`.

**Where it lives in ClickUp:**
- Workspace: GrowPro by Kickstart Social
- Space: Marketing Operations
- Folder: AI Avatar Studio
- List: **AI Avatar Intakes** (new list — every form submission = a new task)
- Form name: **AI Avatar Brand Intake**
- Default assignee: **Ashley (Creative Coordinator)** — `ashley@kickstartsocial.co`
- Default tags: `ai-avatar`, `intake`, `[tier-name]` (auto-applied via automation)

---

## Form structure — 9 sections, ~45 fields

Designed to be filled in <12 minutes. Conditional logic hides fields that don't apply to the buyer's tier. Mark **(R)** for required, **(O)** for optional, **(A)** for auto-populated from configurator webhook.

---

### SECTION 1 — Client Identifiers (Auto-filled)
*Hidden from client, populated by webhook from avatar.html on purchase.*

| Field | Type | Notes |
|---|---|---|
| Submission ID (A) | Short text | UUID from configurator |
| Stripe Session ID (A) | Short text | for billing reconciliation |
| Tier Purchased (A) | Dropdown | Starter / Growth / Authority |
| One-Time Total (A) | Currency | $ |
| Monthly Recurring (A) | Currency | $/mo |
| Add-Ons Selected (A) | Long text | JSON dump from cart |
| Purchase Date (A) | Date | |
| Signed Agreement URL (A) | URL | link to PDF in S3 |

---

### SECTION 2 — Brand Basics (R)
*Visible to client. The "tell us about your brand" opener.*

1. **Brand / Business Name** — Short text (R)
2. **Brand Website URL** — URL (R)
3. **Primary Contact Name** — Short text (R)
4. **Primary Contact Email** — Email (R)
5. **Primary Contact Phone** — Phone (R)
6. **Best way to reach you** — Dropdown: Email / Text / Slack / Loom (R)
7. **Treatment Vertical** — Multi-select: GLP-1 / HRT / Peptides / NAD+ / Hair Loss / ED / Mental Health / Skincare / Other (R)
8. **If "Other" selected, describe** — Short text (conditional)

---

### SECTION 3 — Brand Voice & Positioning (R)
*Critical for script writing. Don't skip.*

9. **In one sentence, what does your brand do?** — Long text (R)
10. **Who is your ideal patient?** — Long text (age range, gender, life stage, pain point, transformation desired) (R)
11. **3 brands you admire (and why)** — Long text (R)
12. **3 words that describe your brand voice** — Short text (R) *(e.g., "trusted, warm, no-BS")*
13. **What words/phrases should we NEVER use?** — Long text (O) *(compliance triggers, banned claims, competitor names)*
14. **Are there compliance restrictions we must follow?** — Multi-select: FDA disclaimers required / No before-after photos / Telehealth-specific / Other (R)
15. **If "Other" — describe compliance needs** — Long text (conditional)

---

### SECTION 4 — Avatar Persona Specs (R, repeatable)
*This is the core. Repeats N times based on tier (4 / 6 / 12).*

**Per persona (repeat block):**

16. **Persona name (internal nickname)** — Short text (R) *(e.g., "Sarah the Skeptic")*
17. **Avatar role** — Dropdown: Patient / Authority Figure (Doctor/Nurse) / Casual Creator / Spokesperson (R)
18. **Funnel stage this persona targets** — Dropdown: TOF (cold) / MOF (warming) / BOF (closing) (R)
19. **Apparent age range** — Dropdown: 18–24 / 25–34 / 35–44 / 45–54 / 55+ (R)
20. **Gender presentation** — Dropdown: Female / Male / Non-binary / No preference (R)
21. **Ethnicity** — Multi-select: White / Black / Latina/o / Asian / South Asian / Middle Eastern / Mixed / No preference (R)
22. **Vibe / energy** — Multi-select: Polished pro / Girl-next-door / Soft-spoken expert / High-energy hype / Quiet authority / Real & raw (R)
23. **Wardrobe direction** — Long text (R) *(e.g., "scrubs + stethoscope" or "athleisure, no-makeup look")*
24. **Setting / background** — Dropdown: Home (kitchen/living room) / Bathroom mirror / Clinic exam room / Office / Outdoors / Studio neutral (R)
25. **Voice direction** — Long text (R) *(accent, pace, warmth — or paste a YouTuber's name as reference)*
26. **Optional reference photo URL** — URL (O) *(real person they want avatar to resemble in feel — NOT for cloning, just direction)*

---

### SECTION 5 — Content Bucket Selection (R)
*Buyer chooses N buckets based on tier (3 / 5 / 7).*

27. **Which content buckets do you want covered?** — Multi-select (R):
    - Problem & Solution
    - Health Education
    - Statistics
    - Before & After Logic
    - Product Breakdowns
    - UGC Style
    - Unboxings
28. **For each selected bucket, any specific topic angles you want?** — Long text (O) *(e.g., "for Statistics: focus on the 87% in 12-week study")*

---

### SECTION 6 — Product & Offer Details (R)
*The team needs this to write CTAs and product breakdowns.*

29. **Primary product/offer being promoted** — Short text (R)
30. **Price point of primary offer** — Currency (R)
31. **Hero benefit (the #1 reason patients buy)** — Long text (R)
32. **Top 3 objections you hear from prospects** — Long text (R)
33. **Your highest-converting offer or promo** — Long text (O)
34. **Primary CTA** — Short text (R) *(e.g., "Start My Free Visit", "Get My Plan")*
35. **Destination URL for ad clicks** — URL (R)

---

### SECTION 7 — Brand Assets (R)
*File uploads. Mark anything they don't have so the team can flag.*

36. **Logo (PNG with transparency preferred)** — File upload (R)
37. **Brand color palette** — Long text or file upload (hex codes or brand guide PDF) (R)
38. **Brand fonts** — Long text or file upload (R)
39. **Existing product photography** — File upload (multiple) (O)
40. **Existing video assets we can reference** — URL or file (O)
41. **Compliance / legal disclaimers to include** — Long text (R)

---

### SECTION 8 — Landing Page & Quiz Funnel (Conditional)
*Only shows for Growth + Authority tiers (and Starter which now includes 1 LP + 1 quiz).*

42. **Landing page goal** — Dropdown: Lead capture / Quiz entry / Direct checkout / Book consult (R)
43. **Existing landing page URL to model after** — URL (O)
44. **Quiz funnel topic** — Short text (R) *(e.g., "Find Your GLP-1 Dose")*
45. **Quiz output should route to** — Dropdown: Telehealth intake / Product purchase / Email capture only (R)

---

### SECTION 9 — Final Logistics
46. **Anything else we should know?** — Long text (O)
47. **Preferred delivery format** — Multi-select: 9:16 (TikTok/Reels) / 1:1 (Feed) / 16:9 (YouTube) (R) — *default: 9:16*
48. **Who should receive delivery notifications?** — Email (multiple, comma-separated) (R)

---

## ClickUp Automations to set up

| Trigger | Action |
|---|---|
| New form submission | Create task in **AI Avatar Intakes** list, assign to Ashley |
| Tier = Starter | Set due date = +10 business days, apply tag `tier-starter` |
| Tier = Growth | Set due date = +21 business days, apply tag `tier-growth` |
| Tier = Authority | Set due date = +21 business days, apply tag `tier-authority`, also create recurring monthly subtask "20 fresh videos — [Month]" |
| Status = Intake Complete | Auto-create subtasks: Persona designs / Script writing / Voice selection / Video generation / QA / Delivery |
| Status = Delivered | Send Slack notification + email to client with delivery link |
| Add-on contains "Monthly Refresh" | Create recurring monthly task "Refresh batch — [Brand]" |

---

## Webhook payload mapping (avatar.html → ClickUp)

When the configurator submits, GHL receives the webhook then forwards to ClickUp via Zapier or direct API. The fields in **SECTION 1** are populated automatically from this payload:

```json
{
  "submissionId": "uuid",
  "stripeSessionId": "cs_test_...",
  "tier": "growth",
  "tierLabel": "Avatar Growth",
  "oneTimeTotal": 12000,
  "monthlyRecurring": 3500,
  "addOns": [
    {"id": "extra_videos", "label": "Extra Avatar Videos (10-pack)", "qty": 1, "price": 2500, "type": "onetime"},
    {"id": "refresh_pro", "label": "Monthly Refresh — Pro (30 vids)", "price": 3500, "type": "monthly"}
  ],
  "client": {
    "firstName": "...",
    "lastName": "...",
    "email": "...",
    "phone": "...",
    "brandName": "...",
    "niche": "GLP-1",
    "source": "Brad Lea Podcast"
  },
  "agreement": {
    "signedAt": "2026-05-05T14:57:00Z",
    "signaturePngUrl": "https://s3.../sig.png",
    "agreementPdfUrl": "https://s3.../agreement.pdf"
  }
}
```

---

## Recommended client-facing flow

1. Client buys on `avatar.html` → Stripe payment confirmed
2. Stripe success page redirects to ClickUp form pre-filled with their submission ID
3. Client fills 12-min intake form
4. Ashley reviews within 24 hrs, confirms persona briefs on a 30-min kickoff call
5. Creative team executes
6. Delivery via shared Drive folder + dashboard link in client portal

This keeps the configurator focused on **pricing + payment** (where speed matters most for conversion) and pushes detailed creative briefing into the post-purchase intake form (where the client is now committed and willing to spend 12 min).
