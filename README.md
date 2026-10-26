# Saurabh Pandey — Portfolio Website

A clean, minimalist personal portfolio website built with pure HTML5, vanilla CSS3, and vanilla JavaScript. Designed without frameworks, build steps, or dependencies so it deploys directly to GitHub Pages.

---

## Features & Design Direction

- **Strict Monochrome Palette**: Built exclusively with black (`#000000`), white (`#ffffff`), and a single accessible mid-grey (`#767676`) for secondary text.
- **Signature Split Hero**: A 50/50 vertical split (white on the left, black on the right) with a hard edge. The giant name "Saurabh Pandey" and fixed navigation use `mix-blend-mode: difference` so typography dynamically inverts as it crosses the split and alternating sections.
- **Two-Column Alternating Sections**: Alternates full-width sections between white and black backgrounds with thin 1px rules and sticky section titles on desktop viewports.
- **Editorial Typography**: Google Fonts featuring **Bricolage Grotesque** (weights 500 and 800) for headings/UI and **Newsreader** for body text.
- **Accessible & Responsive**: Semantic HTML, skip link, visible focus outlines, labeled form controls, zero layout-shift, and full support for `prefers-reduced-motion`.
- **Working Contact Form**: Integrated with Web3Forms for direct email delivery with asynchronous AJAX handling and accessible `aria-live` status messages.

---

## File Structure

```text
portfolio-site/
├── .gitignore                      # Git ignore rules
├── .nojekyll                       # Bypasses Jekyll processing on GitHub Pages
├── README.md                       # Documentation & deployment guide
├── index.html                      # Semantic HTML structure & content
├── css/
│   └── style.css                   # Custom CSS design system & tokens
├── js/
│   └── main.js                     # Vanilla JavaScript for form & year
└── assets/
    └── Saurabh_Pandey_Resume.pdf   # Resume PDF for direct download
```

---

## How to Preview Locally

Because this is a static site with no build step, you can preview it locally in seconds:

### Option 1: Using Python (Recommended)
Open a terminal in the project root directory and run:
```bash
python -m http.server 8080
```
Then visit:
```text
http://localhost:8080
```

### Option 2: Using Node.js
If you prefer Node.js:
```bash
npx serve .
```

### Option 3: Direct Browser File
Double-click `index.html` or open it directly in any modern web browser.

---

## Where to Put Your Web3Forms Access Key

The contact form is pre-configured to use [Web3Forms](https://web3forms.com/) for receiving emails without a backend server:

1. Visit [https://web3forms.com](https://web3forms.com) and enter your email address (`sauraxh@gmail.com`) to generate a free Access Key.
2. Open `index.html` in your code editor.
3. Locate line 147 (inside the `#contact-form`):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
4. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key string:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
   ```
5. Save `index.html`. Your contact form will now securely route incoming messages to your inbox.

---

## How to Deploy on GitHub Pages

1. **Commit and Push Your Code**:
   Initialize git if you haven't already, commit your changes, and push to your GitHub repository:
   ```bash
   git add .
   git commit -m "Build portfolio site for Saurabh Pandey"
   git branch -M main
   git remote add origin https://github.com/sauraxh-007/<your-repo-name>.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**:
   - Go to your repository on GitHub.
   - Click the **Settings** tab near the top right.
   - In the left sidebar, click **Pages** (under "Code and automation").
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and set the folder to `/ (root)`.
   - Click **Save**.

3. **Visit Your Live Site**:
   GitHub Pages will publish the site within 1–2 minutes at:
   ```text
   https://sauraxh-007.github.io/<your-repo-name>/
   ```

---

## Maintenance & Updates

- **Updating Resume**: Replace `assets/Saurabh_Pandey_Resume.pdf` with your new PDF while preserving the exact file name.
- **Updating Project Links**: In `index.html`, locate the `TODO` comments in the `#projects` section and replace `https://github.com/sauraxh-007` with the specific repository URLs once available.
