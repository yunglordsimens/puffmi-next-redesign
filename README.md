Обновленный README.md (Копируй это)
Markdown
# PUFFMI // HIGH-PERFORMANCE E-COMMERCE

A speculative e-commerce storefront designed and engineered for the **Puffmi** brand. This project bridges premium streetwear aesthetics with high-conversion UI patterns, focusing on zero-latency interactions, GSAP-powered motion, and a product-first visual hierarchy.

> 🚧 **Status:** Prototype / Work in Progress — Core catalog flow and dynamic product pages are fully functional.

🔗 **[View Live Experience](https://puffmi-next-redesign.vercel.app)**

---

### / SYSTEM PREVIEW

> **The Storefront.** High-contrast product presentation featuring animated marquees and GSAP entrance sequences.
<br>
<img src="preview_main.gif" width="100%" alt="Homepage Interaction" style="border-radius: 8px; margin-bottom: 20px;">

---

### / ARCHITECTURE & TECH STACK

Built with modern React server components to ensure rapid content delivery and smooth client-side micro-interactions.

| Technology | Implementation Role |
| :--- | :--- |
| **Next.js 15** | Core framework (App Router) for SSR/SSG and optimized image delivery. |
| **React 19** | Modern component architecture and state management. |
| **TypeScript** | Strict typing for product data models and cart payload. |
| **Tailwind CSS 4** | Utility-first styling engine tailored for custom design tokens. |
| **GSAP** | Advanced scroll-triggered animations and fluid layout transitions. |
| **Sonner** | Toast notification system for tactile add-to-cart feedback. |

---

### / KEY ENGINEERING FEATURES

1. **Zero-Latency Color Switching:** Client-side state management allows instant product image updates upon color selection without page reloads.
2. **Kinetic Typography:** Smooth, infinite-scroll GSAP marquee components built for performance.
3. **Bento-Grid Collections:** Fully responsive, CSS Grid-based layout for dynamic catalog presentation.
4. **Micro-Interactions:** Tactile UI feedback using Sonner toasts for cart actions, mimicking premium consumer software.

---

### / RESPONSIVE ADAPTATION

> **Mobile-First UX.** Optimized touch targets, fluid typography, and seamless mobile navigation.
<br>
<p align="center">
  <img src="preview_mobile.gif" width="350" alt="Mobile Interaction" style="border-radius: 12px; border: 2px solid #eee;">
</p>

---

### / INTERFACE DETAILS

<table style="border: none; width: 100%;">
  <tr>
    <td width="50%" valign="top">
      <h4 align="center">DYNAMIC PRODUCT PAGE</h4>
      <img src="preview_product.gif" width="100%" style="border-radius: 8px;">
    </td>
    <td width="50%" valign="top">
      <h4 align="center">CATALOG ARCHITECTURE</h4>
      <img src="preview_catalog.png" width="100%" style="border-radius: 8px;">
    </td>
  </tr>
</table>

---

## / DESIGN DIRECTION

The visual identity takes cues from premium consumer electronics and contemporary streetwear — clean, high-contrast, and strictly product-focused.

* **Aesthetic:** Minimal / Editorial Corporate.
* **Palette:** Pure white and deep black base, allowing saturated product colors to act as UI accents.
* **Typography:** Tight-tracked uppercase headings for impact, paired with geometric sans-serif for UI clarity.

---

## / LOCAL DEPLOYMENT

```bash
# Clone the repository
git clone [https://github.com/yunglordsimens/puffmi-redesign.git](https://github.com/yunglordsimens/puffmi-redesign.git)
cd puffmi-redesign

# Install dependencies
npm install

# Start the development server
npm run dev
Navigate to http://localhost:3000 to view the application.

/ ROADMAP
[x] Homepage Architecture (Hero, Marquee, Bento Grid)
[x] Dynamic Product Detail Page (PDP) with color switcher
[x] Toast Notification System integration
[ ] Cart Drawer & Checkout Flow implementation
[ ] Advanced Catalog Filtering logic
[ ] Integration with Headless CMS (Contentful / Sanity)
Architecture & Design by Maria Chernobay, 2026.
