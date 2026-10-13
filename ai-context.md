# AI Context: Towny Water Solutions Project

This file contains the technical context, design decisions, and project history for "Towny Water Solutions".
**Purpose:** Provide immediate orientation for any future AI assistant working on this codebase.

## 1. Project Identity & Objective
*   **Client:** Towny Water Solutions (Bengaluru, India).
*   **Service:** Specialized waterproofing using non-invasive FLIR Thermal Scanning and targeted PU injection grouting. They do *not* offer general painting or massive demolition.
*   **Core Message:** "Stop Guessing. Start Fixing." / "Targeted Repair without needless demolition."
*   **Target Audience:** Homeowners in Bangalore dealing with monsoon leaks or persistent wall dampness.

## 2. Technical Architecture
*   **Stack:** React 18, TypeScript, Vite.
*   **Styling:** Pure Vanilla CSS and CSS Modules (`.module.css`). 
    *   *Constraint Check:* The user explicitly requested **NOT** to use TailwindCSS. Do not install or suggest Tailwind.
    *   Design System: Located in `src/index.css` via custom CSS variables (`--bg-primary`, `--accent-blue`, etc.).
    *   Aesthetic: Premium, strictly professional, high-end construction tech. Uses glassmorphism (`backdrop-filter`) and smooth transition animations.
*   **Routing:** `react-router-dom` (v6).
    *   Homepage (`/`) acts as the main landing page with smooth scrolling sections (`#services`, `#contact`).
    *   Blog routes (`/blog/monsoon-waterproofing`, `/blog/early-detection-thermal-scanning`) exist for SEO purposes.
*   **State Management:** React local state (`useState`, `useEffect`). No Redux or Context API needed for current scope.

## 3. Key Implementations & "Gotchas"

### The Hero Section (`src/components/Hero`)
*   **The Effect:** The hero features an interactive flashlight/torchlight effect simulating a thermal camera.
*   **How it works:** 
    *   `.bgNormal` uses `wall_leak.webp` (a standard image of a water-damaged wall).
    *   `.bgThermal` uses `wall_thermal.webp` (a generated thermal map image) layered exactly on top.
    *   A CSS `mask-image` (radial-gradient) tied to CSS variables (`--mx`, `--my`) tracks the user's mouse in `Hero.tsx` to reveal the `.bgThermal` layer.
*   **Important:** Do not apply heavy `brightness()` or `contrast()` filters to `.bgNormal` in `Hero.module.css`; the user explicitly wants the raw `wall_leak.webp` image to be clearly visible as the natural foreground.

### Images and Assets
*   **Format:** All images must be `.webp` for performance.
*   **Compression:** A custom script (`scripts/compress-images.js`) using `sharp` was built to convert `.png` and `.jpg` into `.webp`.
*   **Location:** All images reside in the `public/` directory.

### Form Submission (`ContactCTA.tsx`)
*   There is no backend API.
*   The form captures Name, Phone, and Location, formats them into a URL-encoded string, and redirects the user to the client's direct WhatsApp API link (`wa.me`).

## 4. SEO Infrastructure
*   **Meta Tags:** Hardcoded in `index.html`, including Open Graph (`og:image`) and Twitter cards.
*   **JSON-LD:** A LocalBusiness schema script is embedded in `index.html`.
*   **Crawling:** `public/robots.txt` and `public/sitemap.xml` are generated and configured.
*   **SPA Routing Rules:** A `public/_redirects` file exists to ensure Netlify routes all traffic to `index.html`, preventing 404 errors on direct blog links.

## 5. Development Rules
1.  **NO EMOJIS:** The user strictly requested zero emojis in code, documentation, or the interface.
2.  **No Tailwind:** Strictly stick to CSS Modules.
3.  **High-Quality Design:** Any new components must maintain the premium, modern, glassmorphic design system defined in `index.css`. Look at `ServiceDetails.tsx` or `Process.tsx` for reference on card styling and hover shadows.
