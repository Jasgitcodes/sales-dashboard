# Sales Dashboard

A modern React dashboard built with Vite, Tailwind CSS, and React Router. The app presents a polished sales overview with responsive layouts, a mobile-friendly sidebar, and an interactive product detail experience.

## Overview

This project was designed as a polished dashboard UI for sales and product management. It includes a responsive layout, a mobile hamburger menu, product cards, a product detail page, and a clean overview experience for monitoring business activity.

## Features

- Responsive dashboard layout for desktop and mobile screens
- Slide-in mobile sidebar menu with smooth transitions
- Overview page with revenue and recent orders views
- Products page with searchable product cards
- Product detail page with image, pricing, description, and order-style actions
- Global Google Fonts styling with Gabriela and Sofia Sans
- Product data fetched from the Fake Store API

## Technologies

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React icons
- ESLint

## Scripts

- `npm install` — install dependencies
- `npm run dev` — start the development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project Structure

- `src/`
  - `App.jsx` — main route configuration
  - `components/` — shared UI pieces such as layout, sidebar, top bar, cards, and charts
  - `context/` — React context for product data
  - `data/` — dashboard mock data and navigation items
  - `pages/` — route pages including overview, products, customers, settings, and product detail
  - `index.css` — Tailwind setup and global font styling
- `public/` — static assets
- `package.json` — project dependencies and scripts

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local Vite URL shown in your terminal.

## Notes

- Product data is currently loaded from the public Fake Store API.
- The UI is designed to be easily extended with real backend services, authentication, or more analytics modules.
