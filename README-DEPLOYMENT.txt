PURIXA WATER SOLUTION — PREMIUM BUSINESS + CATALOGUE WEBSITE V11 — AUDIT FIXES

STATUS
- Review package only. NOT published to GitHub Pages.
- This ZIP contains a proposed upgrade; it does not change the live website until uploaded to the correct GitHub Pages repository.
- Based on the supplied purixa-website-main ZIP and existing files.

PRESERVED
- Existing Purixa logo, product/service images, product gallery and all 18 catalogue PDF pages.
- Call number: 9998267304
- WhatsApp number: 7016715463
- Email: purixawatersolution@gmail.com
- Existing GitHub Pages canonical URL: https://purixawater.github.io/purixa-website/
- Existing page sections, FAQ, WhatsApp service request form, social links, robots.txt and sitemap.

V10 UPGRADE NOTES
- Address standardized to: Madhav Complex, Near SBI Bank, Canal Road, Rajkot, Gujarat.
- Footer now repeats the business address and offers a Google Maps search link.
- Maps buttons use the same address query.
- Fixed visible overlapping/duplicate address overlays on the catalog cover and final page; other catalog pages were retained.
- Existing product visuals were retained; no AI-generated product photos were added.
- The website review CTA clearly says it opens Google Maps, not a direct review form.
- Added a fourth product card for filters and spare parts, with a WhatsApp enquiry action.
- Added a prominent digital catalogue CTA and catalogue link in navigation.
- Refined product cards, keyboard focus styles, reduced-motion support and small-screen catalogue layout.
- Fixed catalogue page HTML that contained literal \n characters instead of actual line breaks.
- Added catalogue PDF download button and generated missing page previews 15–18 from the existing original PDF.
- Updated homepage social preview/structured-data image and preload to use the actual single static hero banner (slide1.webp).
- Added catalogue.html to sitemap.xml.
- Kept product imagery real/existing; no AI-generated product photos were added.

VALIDATION PERFORMED
- JavaScript syntax check passed with Node.js.
- Duplicate HTML IDs: none found.
- Relative local asset references: 14 checked; none missing.
- PDF metadata confirms 18 pages; catalogue viewer now contains 18 page previews.
- Verified catalogue HTML has no literal \n separators and all 18 referenced page images exist.

REMAINING BEFORE PUBLISH
1. Confirm the Google Maps search result opens the exact verified Purixa Business Profile on a real phone.
2. Add the direct Google review URL only after the owner provides/copies it from Google Business Profile.
3. Manually test all buttons/forms, mobile layouts and PDF pages on phone/desktop.
4. Confirm GitHub Pages deployment source and backup the current live files before publishing.
5. Do not replace https://purixawater.github.io/purixa-website/ with purixawater.in until custom-domain DNS and HTTPS are configured and verified.

DEPLOYMENT
Extract this ZIP and upload the CONTENTS of purixa-website-main (not the enclosing folder) to the root of the existing purixa-website repository only after reviewing and approving the package. Keep a copy of the current live files first.

Mobile banner fix v16: mobile viewport uses a taller 280px banner area; wide source image is centered and side-cropped. Desktop remains unchanged.
