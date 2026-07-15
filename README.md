# Byung Jun Kim — Academic + Photography Website

This is a static personal website with a stylish split landing page:

- `index.html` — landing page with two interactive choices: Academic and Photography
- `academic.html` — academic profile with bio, research, publications, teaching, CV, and contact
- `photography.html` — photography portfolio with hero section, featured image grid, collections, and contact
- `styles.css` — responsive styling for all pages
- `script.js` — mobile navigation, publication toggle, and subtle hover interactions

## Customize

1. Replace placeholder academic text in `academic.html`.
2. Replace photography placeholders in `photography.html` with real photos. You can change each `.shot` into an image tile, for example:

```html
<figure class="shot" style="background-image: url('photos/my-photo.jpg');">
  <span>Photo title</span>
  <figcaption>Zurich, 2026</figcaption>
</figure>
```

3. Add your own `cv.pdf` if you want the CV link to work.
4. Update social links, Google Scholar, GitHub, Instagram, or portfolio links.

## Deploy

Upload these files to GitHub Pages, Netlify, Vercel, or a university web server. Keep all files in the same folder unless you update the paths.
