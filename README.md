# Towny Water Solutions

Towny Water Solutions is a premium, single-page web application designed for a waterproofing specialist based in Bengaluru, India. The application focuses exclusively on their core service: Thermal Scanning and Targeted Waterproofing Repair.

The website is designed to be high-performance, SEO-optimized, and visually compelling to convert visitors into leads.

## Key Features

*   **Interactive Thermal Scanning Hero:** The hero section features a unique interactive torchlight effect that simulates a FLIR thermal camera revealing hidden water moisture (a teal/yellow thermal map) behind a water-damaged wall.
*   **Before & After Slider:** A responsive, interactive image slider demonstrating the effectiveness of the waterproofing service.
*   **Optimized Performance:** All image assets use the modern, highly compressed WebP format.
*   **SEO Ready:** Includes a generated `sitemap.xml`, `robots.txt`, meta tags, and dedicated SEO-optimized blog routes.
*   **Client-Side Routing:** Built with React Router for seamless navigation between the main landing page and detailed blog articles.
*   **Mobile Responsive:** Fully responsive design utilizing a modern glassmorphism aesthetic (Tailwind-inspired utility structure written in pure CSS modules).
*   **WhatsApp Integration:** Direct call-to-action buttons that format user input into a pre-filled WhatsApp message for lead generation.

## Technology Stack

*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** CSS Modules with custom variables for a systematic design approach. No external CSS frameworks were used.
*   **Routing:** React Router v6
*   **Icons:** Lucide React

## Getting Started

### Prerequisites

Ensure you have Node.js (version 16 or higher) installed on your machine.

### Installation

1.  Clone the repository or navigate to the project directory.

2.  Install the project dependencies:
    ```bash
    npm install
    ```

### Development Server

To start the local development server:

```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production Build

To create an optimized production build:

```bash
npm run build
```
The compiled assets will be placed in the `dist` directory.

### Preview Local Build

To preview the production build locally before deployment:

```bash
npm run preview
```

## Project Structure

*   `public/`: Contains static assets like the `robots.txt`, `sitemap.xml`, `_redirects` (for Netlify), and all optimized `.webp` images.
*   `src/components/`: Reusable UI components (Hero, Header, Process, Contact, etc.), each with their own isolated `.module.css` file.
*   `src/pages/`: Top-level route components (`Home.tsx`, `BlogMonsoon.tsx`, etc.).
*   `src/App.tsx`: The main application shell containing the router configuration.
*   `src/index.css`: Contains global CSS reset, typography, and the central design system variables (colors, spacing, shadows).

## Deployment

This application is configured as a Single Page Application (SPA). If deploying to platforms like Netlify, Vercel, or AWS Amplify, ensure that all unknown routes fallback to `index.html`. 

A `public/_redirects` file is included specifically for Netlify deployments to handle SPA routing correctly.
