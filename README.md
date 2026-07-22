# 🛒 ShopCart - Modern Full-Stack E-Commerce Platform

![ShopCart Banner](https://img.shields.io/badge/ShopCart-Next.js--14--E--Commerce-black?style=for-the-badge&logo=next.js)

ShopCart is a modern, production-ready, full-stack E-Commerce application built with **Next.js** and **Tailwind CSS**, styled using **Shadcn UI**. It features headless content management via **Sanity CMS**, authentication powered by **Clerk**, client-side state management using **Zustand**, secure checkout with **Stripe**, and seamless deployment on **Vercel**.

---

## 🔗 Live Demo & Preview

* **🌐 Live Web Application:** https://shopcart-azure.vercel.app/

### 📸 Application Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/a066efc9-d5cf-4c4b-9268-4ee90e297679" alt="ShopCart Homepage" width="45%" />
  <img src="https://github.com/user-attachments/assets/a0433dc5-16b4-4090-85d0-66d4be846eb8" alt="Product Details" width="45%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/cea148d3-29a6-4eeb-8235-085f9a0b9262" alt="Cart and Checkout" width="45%" />
  <img src="https://github.com/user-attachments/assets/439fa36d-cdc7-4cb2-a4f2-5c2eeff14d7a" alt="Orders and Blog" width="45%" />
</p>

---

## ✨ Key Features

### 👤 User Experience & Storefront
* **Authentication:** Fast, secure user login, registration, and user profiles powered by **Clerk**.
* **Headless CMS Catalog:** Dynamic product catalog, categories, deals, and blogs powered by **Sanity CMS**.
* **State Management:** Ultra-fast shopping cart, wishlist, and app state handled via **Zustand**.
* **Interactive UI:** Responsive, modern design styled with **Tailwind CSS** and **Shadcn UI**.
* **E-Commerce Essentials:** Dedicated pages for Deals, Categories, Single Product, Shop, Cart, Wishlist, Orders, and Custom 404.
* **Content & Blogs:** Built-in blog and article viewing system dynamically synced with Sanity.

### 💳 Payments & Deployment
* **Stripe Integration:** Complete checkout flow with Webhook support for real-time order creation.
* **Production-Ready:** Optimised for production and easily deployable on **Vercel**.

---

## 🛠️ Tech Stack Used

| Domain | Technologies |
| :--- | :--- |
| **Framework** | Next.js (React) |
| **Styling & UI Components** | Tailwind CSS, Shadcn UI |
| **Headless CMS** | Sanity.io |
| **Authentication** | Clerk Auth |
| **State Management** | Zustand |
| **Payment Integration** | Stripe (Webhooks enabled) |
| **Database / Backend API** | Node.js / Express.js / MongoDB |
| **Deployment** | Vercel |

---

## 🔑 Environment Variables Setup

Create a `.env.local` file in your project root directory and configure the following parameters:

### ⚙️ App Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000

### 🔐 Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

### 📝 Sanity CMS Setup
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=version_date
SANITY_API_READ_TOKEN=your_sanity_read_token
SANITY_API_TOKEN=your_sanity_api_token

### 💳 Stripe Payment Setup
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

---

## 🚀 Getting Started (Local Setup)

Follow these steps to run the project locally on your machine.

### Prerequisites
* **Node.js** (v18 or higher) installed
* **npm** or **pnpm** package manager

### 1. Clone the Repository
git clone https://github.com/imesh1224/ShopCart-E-commerce-Web-Application.git
cd ShopCart

### 2. Install Dependencies
npm install

### 3. Run Development Server
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application live!

---

## 🙌 Thank You for Visiting!

Thank you for checking out the **ShopCart** repository! 

If you found this Next.js & Sanity CMS project helpful, please consider giving it a **⭐ Star** on GitHub!

Happy Coding! 🚀
