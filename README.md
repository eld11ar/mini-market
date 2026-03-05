# 🛍️ Mini Marketplace

A mini marketplace built on top of the [Fake Store API](https://fakestoreapi.com/)

## 🚀 Demo

> [Deployment link](https://mini-market-pied.vercel.app/) · [GitHub](https://github.com/eld11ar/mini-market)

---

## 📦 Stack

| Layer              | Technology                   |
|--------------------|------------------------------|
| Framework          | Next.js (App Router)         |
| Language           | JavaScript/TypeScript        |
| State management   | Zustand                      |
| Client requests    | TanStack Query               |
| UI components      | shadcn/ui                    |
| Styling            | Tailwind CSS                 |
| Architecture       | Feature‑Sliced Design (FSD)  |

---

## 🗂️ Architecture (FSD)

The project is organized according to the [Feature‑Sliced Design](https://feature-sliced.design/) methodology:

```
src/
├── app/                        # Next.js App Router: layout, pages
│   ├── layout.tsx
│   ├── products/
│   │   ├── page.tsx            # Catalog (client page)
│   │   └── [id]/
│   │       └── page.tsx        # Product page (SSR)
│   └── cart/
│       └── page.tsx            # Cart
│
├── widgets/                    # Self‑contained UI blocks
│   ├── productList/            # Grid of cards with filters & sorting
│   └── cartList/               # Cart
│
├── features/                   # User scenarios
│   ├── cart/
│   │   ├── addToCartButton.tsx          # Add item to cart
│   │   ├── removeCartFromCardButton.tsx # Remove item from cart
│   │   └── changeCartQuantity.tsx       # Change quantity
│   └── filters/
│       ├── categoryFilter.tsx           # Filter by category
│       └── sortFilter.tsx               # Sort by price / rating / name
│
├── entities/                   # Business entities
│   ├── category/               # Category type, API, query hooks
│   ├── product/                # Product type, API, card, query hooks
│   └── cart/                   # CartItem type, store
│
└── shared/                     # Re‑usable code
    ├── api/                    # Base API configuration
    ├── ui/                     # Base UI components (button, badge, skeleton)
    └── lib/                    # Utilities (cn)
```

### Key decisions

- **SSR on product page** – server‑side rendering.
- **TanStack Query on client** – catalog and categories managed with TanStack Query.
- **Zustand + Immer for cart** – the store is persisted with `zustand/middleware/persist` to `localStorage`; state mutations use Immer for readable code without boilerplate.
- **Pre‑commit and pre‑push hooks** – Lefthook + Biome run linting/formatting automatically before every commit/push to prevent unformatted code from entering the repository.

---

## ⚙️ Running locally

### Requirements

- Node.js ≥ 18
- npm / pnpm / yarn

### Install

```bash
git clone https://github.com/eld11ar/mini-market
cd mini-marketplace
pnpm install
```

### Development mode

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## 🔍 Features

### `/products` – Catalog

- Product list with image, title, price and rating
- Category filtering (data from API, no hard‑coding)
- Sorting by price and rating, alphabetically (asc/desc)
- Skeleton loader and error display

### `/products/[id]` – Product page

- SSR: data arrives ready, no flicker
- Full product information
- Button to add to cart

### Cart

- Global store (Zustand + persist)
- Change item quantities
- Remove items
- Display total sum
- Access via icon in header

---

## 📁 Environment variables

The project doesn’t require API keys – Fake Store API is public. You can override the base URL if needed:

```env
# .env.local
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

---

## 📝 Notes

- All network requests are typed – `any` is not used.
- Components are split into server and client (`'use client'` only where necessary).
- Responsive layout: mobile → tablet → desktop.