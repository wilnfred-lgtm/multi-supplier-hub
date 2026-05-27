# MultiHub | Global Curated Marketplace Hub

MultiHub is a multi-page static website designed as a professional affiliate marketplace. It connects global shoppers with high-quality products from top suppliers like Alibaba, AliExpress, and Amazon through a direct-to-supplier affiliate model.

## 🚀 Live Demo
[View MultiHub on GitHub Pages](https://Urhelpinghand.github.io/multi-supplier-hub/)

## ✨ Key Features
- **Affiliate-Only Model**: "Buy" buttons link directly to partner affiliate URLs.
- **Amazon-Style UI**: Professional design featuring a sticky header, category sidebar, and "Amazon Ember" typography.
- **Global Support**: Integrated translation system for 10 languages and multi-currency formatter (USD, PHP, CNY, AED, EUR, GBP).
- **Search & Filter**: Real-time product search and category filtering.
- **Compliance & Trust**: Includes built-in Privacy Policy, Contact Us, and About Us pages to meet affiliate program requirements.
- **Monetization**: Integrated ad spaces with GCash payment support for advertisers.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Data**: Static JSON-based catalog (`products.js`)
- **Hosting**: GitHub Pages

## 📂 Project Structure
- `index.html`: Main marketplace landing page.
- `product.html`: Dynamic product detail view.
- `cart.html` / `checkout.html`: Standard shopping flow (optimized for affiliate tracking).
- `about.html` / `contact.html` / `privacy.html`: Legal and trust-building pages.
- `app.js`: Core logic for product grid and filtering.
- `products.js`: The curated product database.
- `utils.js`: Helper functions for currency conversion and translations.
- `translations.js`: UI strings for multi-language support.
- `style.css`: Centralized Amazon-style design system.

## 📦 How to Add Products
1. Open `products.js`.
2. Add a new product object to the `products` array:
   ```javascript
   {
       id: 12,
       name: "Product Name",
       price: 99.99,
       image: "image_url",
       description: "Product description...",
       category: "Electronics",
       affiliateLink: "your_affiliate_url",
       specs: { "Key": "Value" }
   }
   ```
3. Save the file and push to GitHub.

## 💰 Monetization
- **Affiliate Links**: Earn commissions via Alibaba and Amazon Associate programs.
- **Ad Spaces**: Promote third-party products. Payments are processed via **GCash (09308004394)**.

## 📄 License
This project is for personal affiliate use.

---
*Maintained by [Urhelpinghand](https://github.com/Urhelpinghand)*
