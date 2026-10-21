# Ecommerce-Solutions

A storefront-and-admin project for an online shop, split into a Vite and Tailwind store, a Vite admin app and an Express API. Most of it is still scaffolding.

**Status:** In progress. The store has a home page, category listing and product detail screens, but the cart and about pages are placeholders, the admin app renders only the word "hello", and the API responds with "Hello World!" on its root route.

## The problem

The repo is set up for a shop with two faces: a customer-facing store that shows products by category, and an admin app for managing them. The code shows the store layout and the first screens for that; the admin side and the data layer have not been built yet.

## What it does

- **Home page (`store/src/screens/Home.jsx`)**: a landing page with a set of banner-style sections, each linking to the `/listing` page.
- **Category listing (`store/src/screens/CategoryDetails.jsx`)**: a listing page of about 300 lines, the largest screen in the store.
- **Product page (`store/src/screens/ProductDetails.jsx`)**: a product detail view with a horizontally draggable row (`react-indiana-drag-scroll`) and an "Add to cart" button.
- **Routing (`store/src/main.jsx`)**: React Router data routes for `/`, `/listing`, `/product`, `/about` and `/cart`, plus a not-found page.
- **API (`api/src/index.js`)**: an Express app with CORS and JSON parsing that listens on `PORT` (default 9000).

## How it's built

- **Store**: React 18, Vite, Tailwind CSS and React Router 6, with axios in its dependencies.
- **Admin**: React 18 and Vite, with axios in its dependencies. Its entry point only renders text.
- **API**: Express 4 with Mongoose 7 and dotenv listed as dependencies. Nothing connects to the database yet; the "db config" section of the server file is empty.
- **Layout**: one root `package.json` runs the three apps together with `concurrently`, so each app keeps its own dependencies and lockfile.

## Running it locally

Install dependencies in `admin/`, `api/` and `store/`, then from the repository root:

```bash
npm run dev     # runs admin, api and store dev servers together
npm run build   # builds all three
```

The store and admin apps use Vite's default dev server. The API reads `PORT` from its environment.

## What's left

- The cart and about pages are placeholders.
- The admin app renders only "hello" and has no screens.
- The API has no routes beyond the root route, and no database connection.
- The store does not fetch products from any source; the listing and detail pages use static content.
- The admin and store Tailwind setups are not tested, and there are no tests in any folder.
