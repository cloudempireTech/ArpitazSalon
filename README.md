# Arpitaz Hair & Beauty Family Salon

A responsive, static, ten-page website built with HTML, CSS and JavaScript. Open `index.html` directly, or serve the folder with `python -m http.server 8000` and visit `http://localhost:8000/`.

## Pages

Home, About, Services, Bridal Makeup, Hair Services, Beauty & Grooming, Gallery, Testimonials, FAQ and Contact. Shared navigation and footer link the pages. The gallery has category filters and a keyboard-accessible native dialog. Motion respects `prefers-reduced-motion`.

## Enquiries

The Contact form requires a name, phone and service. On submit, JavaScript opens a prepared WhatsApp message for **+91 97482 75583**. The visitor reviews and sends the message in WhatsApp. There is no server-side form handler or storage. The phone link is a direct alternative. If the salon wants email submissions or a booking calendar, it needs to supply and configure the destination.

## Imagery and source notes

All photography under `assets/images/` comes from the [Arpitaz Magicpin photo listing](https://magicpin.in/Kolkata/Kalikapur/Restaurant/Arpitaz-Hair-and-Beauty-Family-Salon-Beauty-Salon-In-Kalikapur,-Kolkata/store/1b76800/photos), accessed 24 September 2026. The WebP files are optimized copies of the business listing images. No unrelated stock photography is presented as salon work.

| Local asset | Listing image | Subject |
| --- | --- | --- |
| `bridal-emerald.webp` | `9125493_store_images_0.webp` | Bridal portrait |
| `bridal-classic.webp` | `9125493_store_images_5.webp` | Bengali bridal portrait |
| `bridal-profile.webp` | `9125493_store_images_9.webp` | Bridal makeup profile |
| `bridal-red.webp` | `9125493_store_images_10.webp` | Full-length bridal portrait |
| `bridal-detail.webp` | `9125493_store_images_11.webp` | Bridal preparation detail |
| `bridal-floral.webp` | `9125493_store_images_14.webp` | Bridal beauty portrait |
| `bridal-regal.webp` | `9125493_store_images_18.webp` | Bridal portrait |
| `salon-interior.webp` | `9125493_store_images_6.webp` | Salon styling stations |
| `salon-celebration.webp` | `9125493_store_images_2.webp` | Salon interior |
| `salon-at-work.webp` | `9125493_store_images_1.webp` | Styling in progress |
| `arpitaz-logo.png` | Crop of `9125493_store_images_23.webp` | Arpitaz logo from a salon promotional graphic |

Before public deployment, the salon should confirm it owns or has permission to reuse the listing images and provide original, high-resolution photos for an even sharper portfolio.

## Business details to confirm before launch

- **Domain:** [arpitaganguly.com](https://arpitaganguly.com/) was linked from Magicpin and older listings, but opened an **Account Suspended** page on 24 September 2026. Confirm that it remains the salon's main domain and whether hosting restoration is already underway. The website does not link visitors to it.
- **Address:** Multiple public listings and the salon promotional graphic show **25/9, 1st Floor, Hospital Road, Kalikapur, Kolkata 700078**. The [L’Oréal salon locator](https://hair-salon-en.lorealprofessionnel.com/161027-arpitaz-hair-beauty-family-salon) shows **25/1 Hospital Road**. Confirm the correct street number. The site asks visitors to confirm the location when booking.
- **Phone:** **+91 97482 75583** is from the business brief and [L’Oréal locator](https://hair-salon-en.lorealprofessionnel.com/161027-arpitaz-hair-beauty-family-salon). It has not been call-tested.
- **Service menu, pricing, hours and venue availability:** Confirm current details before publishing any specific claims or rates. The site intentionally omits prices and opening hours.
- **Testimonials:** The public [Magicpin listing](https://magicpin.in/Kolkata/Kalikapur/Restaurant/Arpitaz-Hair-and-Beauty-Family-Salon-Beauty-Salon-In-Kalikapur,-Kolkata/store/1b76800) and [Justdial listing](https://www.justdial.com/Kolkata/Arpitaz-Hair-Beauty-Family-Salon-Haltu/033PXX33-XX33-120412123452-Z8A2_BZDET) can be read directly. No quotation was republished or invented; the dedicated page links to those sources.
- **Social content:** The supplied [Facebook](https://www.facebook.com/ArpitazOfficial/) and [Instagram](https://www.instagram.com/arpitazsalon/) pages could not be reliably retrieved during this build. The supplied Facebook salon tour post, Google share link and Dasalon page were also inaccessible through the research tools. The public Magicpin images supplied the local portfolio. Provide original social media photos or files if they should replace or extend it.

The site uses publicly listed categories described by the [L’Oréal salon locator](https://hair-salon-en.lorealprofessionnel.com/161027-arpitaz-hair-beauty-family-salon), [Magicpin](https://magicpin.in/Kolkata/Kalikapur/Restaurant/Arpitaz-Hair-and-Beauty-Family-Salon-Beauty-Salon-In-Kalikapur,-Kolkata/store/1b76800), and [WeddingWire](https://www.weddingwire.in/makeup-salon/arpitaz-hair-and-beauty-family-salon--e58741). It avoids unverified credentials, prices and review quotes.

## Deployment

Upload all files to any static host. Update DNS only after the salon confirms domain ownership and resolves the suspended hosting account. Once the final domain is known, set absolute Open Graph image URLs for social previews. There is no build step or dependency install.
