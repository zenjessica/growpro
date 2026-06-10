# GrowPro Configurator Overhaul, Chunk 1 of 3
## Front Page + Pricing + Growth Partner Suite + WellieMD FYI + Ticker

Build this chunk, test it, confirm every item in TEST CRITERIA is green, then move to chunk 2. Do not start chunk 2 until chunk 1 is verified.

---

## WHAT THIS CHUNK DOES
Updates the landing page and the build entry flow: tier prices, WellieMD repricing and repositioning, Growth Partner Suite remodel, removal of marketing and avatar cards from the front, ticker fix, Founding 15 Template bonus, em dash sweep. It also wires the front-page build cards so clicking one drops the prospect straight into the configurator at Treatments with the tier locked, no double pick. Finally it adds the trust stack (media bar, founder authority, certification badges, testimonials, client logo wall), a Build Guarantee section (wording compliance-gated), and a no-claims FAQ.

## WHAT THIS CHUNK DOES NOT TOUCH
- Treatments grid and Power-Ups content (HRT, peptides, branded meds, elective labs). That is chunk 2.
- Submit for Review action and Lumi wiring. That is chunk 3.
- The line-item transform, the payment action, or the checkout itself. This chunk may pass build_type into the configurator to pre-select a tier, but it must use the existing build_type values and must not change how line items are built or sent to Stripe.

---

## HARD RULES (do not violate)
1. Edit the SOURCE embed files (the growpro-*-embed source files), never hand-edit the auto-generated GitHub Pages files. Rerun build-iframe-pages.sh after edits so the generated files regenerate from source.
2. Obey the existing CLAUDE.md rules at repo root.
3. No em dashes anywhere, in copy or comments. Use commas, colons, or periods.
4. "75+ Brands Launched" only. Never 70+, never 50+.
5. You MAY pass build_type into the configurator to pre-select a tier from the front page. Do NOT change the build_type values themselves, the line-item IDs, the line-item transform, or the payment action. Use the values the configurator already uses.
6. After every pricing edit, load the configurator and confirm the build summary recalculates to the correct totals.
7. Search the whole repo for the OLD price values to catch every instance before declaring done.
8. NO income, earnings, or revenue-projection claims anywhere: no calculators, no "earn $X," no implied results. This is a hard compliance line.
9. The Build Guarantee wording and any legality or compliance statements are DRAFT only. Do not publish them live until Jessica's compliance review approves the exact wording. Build the section and placement, stage the copy, keep it unpublished until cleared.

---

## 1. TIER PRICING UPDATE
Change everywhere each appears (card display, configurator step 1, build summary calculation, any pricing constant or config object):

- Template Launch: 15000 becomes 18000
- Custom Build: 25000 becomes 27000
- Operator Suite: 35000 becomes 40000

Search the repo for 15000, 25000, 35000 (and the formatted strings $15,000, $25,000, $35,000) to confirm no instance is missed.

---

## 2. REQUIRED PLATFORM COSTS: WELLIEMD + LUMI FUNNELS (FYI, NOT TALLIED)
Two mandatory platform costs. Both repriced/repositioned, both shown as FYI, both removed from the build total.

- WellieMD: was $1,500 setup and $1,000/mo. Now $2,000 setup and $1,500/mo.
- Lumi Funnels: $499/mo. Was an optional add-on. Now MANDATORY. It is removed as an optional card in step 3 (see chunk 2) and lives here as a required platform cost instead.

Remove both from the One-Time and Monthly tally in the build summary. The summary total must not include either.

Add this FYI block under the build summary, visually distinct from the total:

> Required platform, billed separately, not included in today's total:
> WellieMD: $2,000 one-time setup, then $1,500/mo. Activates as your build begins.
> Lumi Funnels (CRM, funnels, automations): $499/mo. Activates around week 5 when your site build is complete and you are preparing to launch.

Reason: it lowers the number the prospect stares at while deciding, but stays unmissable so nobody is surprised by recurring fees after signing. Combined recurring is roughly $2,000/mo, so do not bury it. Both platform costs, plus A2P phone verification, also go on the onboarding and compliance verbal checklist (see parked).

Mechanism note for the build team: Lumi Funnels is provisioned as an auto-subscription that fires inside Lumi when the GHL snapshot deploys around week 5. It is not collected by the configurator. The configurator only displays it in this FYI block.

---

## 3. THREE BUILD CARDS (exact copy)
Keep all three cards. Operator stays as the visible ceiling on purpose.

### Card 1: Template Launch, $18,000 one-time
Badge: LOWER ENTRY POINT
Subhead: Get to market fast with a proven framework.
Bullets:
- Pre-built WordPress template
- WellieMD platform setup
- 5 core treatments included
- LegitScript application management
- Payment processing setup
- GHL/Lumi Funnels setup
- Up to 12-week launch timeline
- No strategy calls included
Footer line: Perfect for operators who are ready to move fast.

### Card 2: Custom Build, $27,000 one-time
Badge: MOST POPULAR
Subhead: Full white-glove brand launch with strategy.
Bullets:
- Everything in Template Launch
- Custom WordPress or Webflow site design
- Brand identity (logo, colors, typography)
- Kickoff strategy call with Jessica
- Monthly 1:1 check-ins
Footer line: For founders who want a strategic partner, not just a vendor.

### Card 3: Operator Suite, $40,000 one-time
Badge: PREMIUM, ALL BELLS AND WHISTLES
Subhead: VIP launch with everything included, built for scale.
Bullets:
- Everything in Custom Build
- HRT Program (Men and Women), with included clinical labs
- Lifestyle quiz
- 30 days of SEO-optimized blogs
- 90 days of social graphics, 20 per month
- Priority build slot
Footer line: For operators who want it all, fast, branded, and fully loaded.

ASSUMPTION FLAG A: I bundled Branded Meds and the Peptide Package into Operator at no extra charge, so Operator out-values any à la carte stack built from chunk 2 Power-Ups. If you want Operator buyers to pay for those as add-ons too, tell me and I will pull them off this card. Default as written is bundled-in.

NOTE: the live card currently says "4 core treatments included" but the Treatments step shows 5 (Semaglutide, Tirzepatide, NAD+, Sermorelin, Glutathione). I standardized to 5. Confirm 5 is correct.

---

## 4. GROWTH PARTNER SUITE BAND (remodel into one offer)
This stops being a multi-option block. It becomes one offer, one number, application only. Keep it as its own dark band, separate from and visually above or below the three build cards, NOT a fourth column in the build row.

Headline: Growth Partner Suite
Eyebrow: EXCLUSIVE
Subhead: One partnership. We run your growth with you.
Body: For operators who need more than a build to scale. This is the person who launched 75+ brands, in the room with you, every month.
Price line: $18,500/mo. 6-month minimum. Limited partnership slots.

Included (present as grouped value, NOT priced line items):
- Everything in the Operator Suite
- Continuous content engine: blogs and social, refreshed every month for the life of the engagement
- Quarterly brand and offer strategy
- Conversion and funnel optimization on your patient acquisition
- Direct strategic access to Jessica: monthly working sessions plus quarterly deep-dives
- Priority on everything: builds, support, pharmacy, turnaround
- Managed compliance and pharmacy relationships

Stated as a feature, not a gap:
- No managed ad spend. We build the engine that converts your traffic. Your ad budget stays yours.

CTA button: Apply for Partnership
Do NOT wire this to any checkout. It routes to an application or a contact step only. (Application capture is chunk 3.)

Scarcity line under the CTA: Limited to a small number of partners per quarter.

---

## 5. REMOVE MARKETING AND AI AVATARS FROM THE FRONT PAGE
Remove the "Scale with Marketing" card and the "AI Avatar Studio" card from the landing page. They already live on their own pages (/marketing and the avatars page). The front page focuses on the build only, so prospects make one decision and do not talk themselves out of the build by browsing options.

Do not delete the destination pages. Only remove the two cards from the front.

---

## 6. TICKER FIX
In the scrolling ticker, change "70+ Brands Launched" to "75+ Brands Launched". Fix every occurrence in the marquee loop.

---

## 7. FOUNDING 15 BONUS (Template card only)
Add the bonus as a highlighted callout on the Template Launch card. It does NOT appear on Custom or Operator.

> Founding 15 bonus: lock your Template build now and receive the AI Avatar Starter pack, a $3,500 value, free. First 15 operators only.

Template only is intentional. A bonus does the most work at the entry point where a buyer is on the fence. A $40K Operator buyer does not need a $3,500 avatar pack to commit, and spreading the bonus across all tiers cheapens it. Custom and Operator carry their own pull through the Most Popular and Premium framing.

Do not add a live numeric counter unless it is real. A fake "4 spots left" with a sophisticated buyer is a trust killer. The closer names remaining spots verbally on the call.

---

## 8. FRONT PAGE IS THE BUILD, NO DOUBLE PICK
After this chunk the front page is: hero images and videos, the three build cards, the Growth Partner Suite band, nothing else. Marketing and avatars are gone from the front (section 5).

Wire the click-through cleanly. When a prospect clicks a build card on the front page, they drop straight into the configurator at the Treatments step with that tier already selected and locked. They do NOT see a separate tier-selection step and pick again. The front-page card IS the tier selection.

Implementation notes:
- Set build_type from the clicked card and carry it into the configurator using whatever the configurator already supports (URL param or shared state). Do not invent a new mechanism if one already exists.
- The configurator opens on Treatments, not the old standalone tier-selection step. That old step is bypassed when a tier arrives pre-selected.
- Do NOT change the line-item transform or the payment action. This is tier pre-selection and entry routing only. The only Stripe-adjacent value touched is build_type, and it must resolve to the same values the configurator already uses.
- Verify by watching the build summary: clicking each card must open Treatments with the correct tier name and the correct price already in the summary.

CAUTION: the end of the configurator is still the OLD checkout until chunk 3. When testing this chunk, exercise the front door, the tier lock, and the price, but do not run all the way through to payment. The clean Submit for Review ending is built in chunk 3.

---

## 9. TRUST STACK (front-page credibility, ship it)
Principle: place these at the decision points, beside the build cards and the Submit and Apply buttons, not only in the top ticker. They do the most work right before the click, and they have to win the solo browser who arrives with no closer present.

### 9a. As Featured In bar
A logo strip. Lead with the strongest-looking outlets, then the shows.
- Press: Grit Daily, KTLA, Yahoo Finance, Benzinga, Fox 5 San Diego, AP News, Voyage LA, American Business Times.
- Video and TV: Legacy Makers TV, Dropping Bombs with Brad Lea, Double Down with DeAndre Woodson, Redlife with Rudy Mawer, The Medspa Club, The Digital Coach with Dr. Dolcecore, Inside Success TV.
Header: As Featured In
Placement: a slim logo bar directly under the hero, plus a condensed repeat near the build cards.
Use official outlet logos. Link each to its coverage.
Confirmed links:
- Marquis Who's Who: https://gritdaily.com/marquis-whos-who-honors-jessica-l-white/ (Grit Daily article on the Marquis honor; also use Grit Daily as an outlet logo)
- Legacy Makers TV: https://celebritynews.com/jessica-lynne-white-featured-on-legacy-makers-tv/
- Podcast feature (Apple): https://podcasts.apple.com/us/podcast/telehealth-founder-reveals-the-exact-system-to-launch/id1662990704?i=1000746078210
- Additional release: https://www.24-7pressrelease.com/press-release-service/529456
- Remaining press links are in the growpro.co press section.
Honesty note: several placements are syndicated press releases, not earned editorial. "As Featured In" is the accurate framing, so do not label this "editorial coverage." Lead the visible bar with the strongest marks (KTLA, Yahoo Finance, Grit Daily, Legacy Makers TV) and keep wire placements secondary.

### 9b. Founder authority block
Photo: the founder image (pink-to-purple scrubs, "Jessica L. White, PT"), file founder-jessica-white.png.
Headline: Built by a clinician, not a dropshipper.
Copy: Jessica Lynne White, BS, MSPT. A 27-year licensed physical therapist and former Director of Rehabilitation who crossed into telehealth and has launched 75+ brands. She bridges clinical operations and growth, so your build is compliant first and sellable second.
Placement: its own band between the build cards and the Growth Partner Suite.

### 9c. LegitScript and certification marks
Use the LegitScript wordmark logo, file legitscript-logo.png (the clean full wordmark, not the Certified badge, and not the cropped or watermarked files). Also show SOC2.
Framing must be accurate and represents what you deliver, not a credential the marketing entity holds: state that you get each brand LegitScript certified, with a 100% approval record across 75+ launches, and that fulfillment runs through a LegitScript-certified pharmacy and physician network. Do NOT imply the GrowPro marketing entity itself carries a Certified badge.
Brand use: display the LegitScript mark within LegitScript's brand-use guidelines.
Placement: beside the build cards and again near Submit.

### 9d. Testimonials (cleared for use)
Embed the testimonial video at https://youtu.be/F6z-MirFawU. A second cleared client testimonial exists at https://www.youtube.com/embed/QZl1pG6vtD0.
Caption each with the client first name and brand.
Placement: near the pricing and the Submit button.
COMPLIANCE: confirm no income or earnings claims are spoken in the videos before publishing.

### 9e. Client brand logo wall (curated)
Header: 75+ brands launched
Show these eight curated brands by logo and brand name. The "75+ brands launched" number carries the volume, the logos carry credibility. Display only, links optional. If any logo is made clickable, link only to a live, on-brand site.

Delivered logo files (clean-named bundle in the growpro-assets folder, place in the repo):
- mdmeds.png = MDmeds
- apex-longevity.png = Apex Longevity
- wellspring.png = Wellspring Longevity Clinic
- remi.png = Remi (Find Your Remi)
- ignite-meds.png = Ignite Meds
- avara-rx.png = AVARA Rx
- genesis.png = Genesis (Genesis Lifestyle Medicine)
- kin-meds.png = KIN Meds (black on white, same as MDmeds)

Treatment (build-time styling, not Jessica's job): the eight logos have mixed original backgrounds. Two are black on white (MDmeds, KIN Meds), the rest are built for dark backgrounds. Put each logo in its own equal-size tile with consistent padding so the row reads as one set. The designer or Claude Code picks the tile background and, for any logo that washes out against it, renders that logo in a single neutral tone. Do not require Jessica to re-export anything. Normalize at build time.

Eight is the clean upper limit for this wall. Do not add more, the 75+ number carries the rest.

---

## 10. THE GROWPRO BUILD GUARANTEE (DRAFT, do not publish wording until compliance approves)
Build the section and placement now. Stage the copy unpublished. Insert final wording only after Jessica's compliance review. All three guarantees are deliverable-based, never results-based. No income or outcome promises.

1. Launch and Approval: We guarantee your brand launches and secures LegitScript and merchant processing approval, or we keep working at no additional cost until it does.
2. Timeline: Your build goes live within 12 weeks of completing your onboarding milestones, or you receive 20 SEO-optimized blogs at no charge. Applies only if you complete your onboarding steps on schedule.
3. Build Satisfaction: We revise each deliverable until you approve it, with two rounds of revisions per phase. You sign off on each phase before we build the next. Once a phase is approved it is locked, and changes requested after sign-off are handled as separate change orders.

Eligibility fine print (asterisk on the Launch and Approval guarantee):
Approval guarantees apply to eligible operators with a compliant business model. They do not cover ineligible cases, including convicted felons, research-only peptide or cannabis brands, or applicants with a MATCH or TMF (terminated merchant) listing or other disqualifying processing history. A brand name and availability check and an eligibility review are completed during onboarding before your build begins. GrowPro is not responsible for rebuilds caused by a name or trademark conflict the client did not disclose or check.

Placement: a Guarantee band near the build cards, eligibility detail as a footnote or expandable. Remedy set at 20 blogs. COMPLIANCE GATE on all wording.

Visible disclaimer (separate from the guarantee fine print, always shown near the offer and in the footer): GrowPro works with eligible, compliant business models only. We do not work with research-only peptide brands. This one is not a results claim, so it can ship with the front end, but keep the wording exactly this plain.

---

## 11. FAQ (DRAFT, no income claims; legality answers pending compliance read)
A front-page or linked FAQ section. Answers avoid all earnings and outcome claims. Department names only, never individual staff.

Q: Do I need to be a medical provider?
A: No. You own the brand and the business. Patients are served by board-certified telehealth providers in our network, and fulfillment runs through a LegitScript-certified pharmacy network.

Q: How long does a build take?
A: Up to 12 weeks from the time you complete onboarding, depending on your tier. The Build Guarantee covers the timeline.

Q: Is this compliant? [COMPLIANCE TO CONFIRM WORDING]
A: We manage your LegitScript certification and operate within a LegitScript-certified pharmacy and physician network, with a 100% approval record across 75+ launches, for eligible, compliant business models.

Q: What do I need to provide?
A: Your brand direction, timely sign-offs at each phase, and the onboarding items we request. Faster sign-offs mean a faster launch.

Q: Can I customize the brand and treatments?
A: Yes. Custom and Operator tiers include custom design and brand identity. Your treatment menu is built from the core five, with optional add-ons.

Q: What are the ongoing costs?
A: The build is one-time. The WellieMD platform is billed separately at $2,000 setup and $1,500/mo, starting once your build begins and you are ready to launch.

Q: What if I am not happy with the build?
A: We revise each deliverable until you approve it, two rounds per phase, with sign-off at each gate. See the Build Guarantee.

Q: Do you run my ads?
A: Marketing is a separate track you can qualify for later. The build gets you launched and compliant first.

Deliberately omitted: any "how much can I earn" question. Do NOT add an earnings or revenue-projection FAQ to this page.

---

## EM DASH SWEEP
While in these files, strip em dashes from all touched copy. Replace with commas or periods. Known offenders in the current live copy: the Operator description, the "not just a vendor" line, the AI Avatar text (being removed anyway), any treatment descriptions visible on the front. Do a find for the em dash character across the touched files.

---

## TEST CRITERIA (all must be green before chunk 2)
1. Landing page loads with no console errors.
2. Three build cards show $18,000 / $27,000 / $40,000. No old prices anywhere on the page or in the configurator.
3. Build summary total no longer includes WellieMD or Lumi Funnels. Both show only in the Required Platform Costs FYI block.
4. FYI block reads WellieMD $2,000 setup and $1,500/mo, and Lumi Funnels $499/mo, billed separately at launch readiness.
5. Growth Partner Suite shows as one offer at $18,500/mo, 6-month minimum, Apply for Partnership CTA, no checkout, scarcity line present.
6. "Scale with Marketing" and "AI Avatar Studio" cards are gone from the front page. Their destination pages still load.
7. Ticker reads "75+ Brands Launched" in every loop.
8. Founding 15 bonus callout is present on the Template card only, not on Custom or Operator.
9. Clicking each build card on the front page opens the configurator directly at Treatments, with that tier locked and the correct price already in the summary. No separate tier-pick step appears, and the prospect never picks the tier twice.
10. No em dashes remain in any touched copy.
11. Auto-generated pages were regenerated from source via build-iframe-pages.sh, not hand-edited.
12. As Featured In bar is present with real outlet logos, under the hero and repeated near the build cards.
13. Founder authority block is present with the founder photo and the accurate credential line.
14. Certification badges are present and NOT watermarked. LegitScript framing is accurate, not overclaimed.
15. Testimonial video is embedded near pricing and Submit.
16. No income, earnings, or revenue-projection claims anywhere on the page. No earnings FAQ, no revenue calculator.
17. The Build Guarantee section exists but its live wording is the compliance-approved version, or the section stays staged and unpublished until approval.

---

## OUT OF SCOPE, PARKED FOR LATER
- Chunk 2, step 2 Treatments: HRT greyed out as Operator Only (upsell hook), Peptides and Branded Meds buyable add-ons.
- Chunk 2, step 3 Launch Upgrades: keep Fast Track Priority (+$10,000) and Fast Track Standard (+$5,000) with guardrails (accelerated timeline runs only while the client hits onboarding and sign-off milestones, pauses on client delay, paid in full at signing; if WE miss through our own delay, remedy is a refund of the Fast Track premium only, not the build, pending Jessica's confirmation). Keep Additional Product Page (+$500). Change Elective Labs from buyable +$2,500 to Coming Soon with a waitlist capture. Remove Lumi Funnels as an optional card (it is now a required platform cost, see section 2).
- Submit for Review action on all paths, Lumi tag and field schema, submit notifications, Growth Partner application capture: chunk 3.
- OLD post-payment cleanup, do in chunk 3 and only AFTER the new Submit for Review path tests green: disable (do not delete) the legacy self-serve chain. That means the old Stripe webhook for the old configurator (the legacy webhook.py path, not the new stripe-webhook.py), the old tagging, the old welcome email, and any old contact-create mapped to dead agreement fields. Disable and leave dormant so it is instantly reversible. Never delete until the new path is proven.
- Post-Sale Acknowledgment Flow (Mo and Jenny style scope confirmation): builds with onboarding, not now. The onboarding and compliance verbal checklist must include the brand name and availability check, the platform-cost acknowledgment (WellieMD and Lumi Funnels recurring), Lumi Funnels activation around week 5, and A2P 10DLC phone verification for SMS.
- On-call payment link automation: later, manual for launch.
- DWY pivot, Marketing-as-unlock and Avatars returning to Power-Ups: future.
