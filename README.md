# Smart Parking Finder 🚗

## Problem Statement

In crowded Indian cities, discovering available parking spaces is chaotic and time-consuming. This project aims to build a **digital parking discovery platform** that optimizes parking availability using **crowd-sourced data** and **simulated IoT updates**.

The system allows users to search nearby parking garages, view real-time availability, and update parking status collaboratively.

---

## Sprint #1 Goal

Build a **minimum viable full-stack application** using **Next.js** that:

* Displays parking locations on a map
* Allows users to view and update parking availability
* Uses a clean, scalable folder structure
* Is deployable and demo-ready

---

## Tech Stack

### Frontend

* Next.js (TypeScript)
* Tailwind CSS
* Mapbox / Google Maps

### Backend

* Next.js API Routes
* REST + GraphQL (future-ready)

### Database

* MongoDB Atlas (initial)

### Authentication (Later in Sprint)

* NextAuth.js

### Deployment

* Vercel (Frontend)
* MongoDB Atlas (Database)

---

## High-Level Features (Sprint 1 – MVP)

* View parking garages
* Search garages by location
* View availability (Available / Limited / Full)
* Update parking slot count (crowd-sourced)
* Real-time feel using timestamps

---

## Folder Structure

```bash
smart-parking-finder/
│
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   ├── globals.css          # Global styles
│   │
│   ├── (auth)/              # Auth routes (future)
│   │   ├── login/
│   │   └── register/
│   │
│   ├── garages/             # Parking garages pages
│   │   ├── page.tsx         # List garages
│   │   └── [id]/page.tsx    # Garage details
│   │
│   └── api/                 # Backend API routes
│       ├── garages/
│       │   ├── route.ts     # GET / POST garages
│       │
│       └── bookings/
│           └── route.ts     # (future)
│
├── components/              # Reusable UI components
│   ├── Map.tsx
│   ├── GarageCard.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── lib/                     # Utilities & configs
│   ├── db.ts                # Database connection
│   ├── constants.ts
│   └── utils.ts
│
├── models/                  # Database models
│   └── Garage.ts
│
├── services/                # API & data services
│   └── garage.service.ts
│
├── public/                  # Static assets
│
├── README.md
├── package.json
├── tsconfig.json
├── next.config.js
└── .env.example
```

---

## Database Schema (Initial)

```ts
Garage {
  id: string
  name: string
  latitude: number
  longitude: number
  totalSlots: number
  availableSlots: number
  status: "AVAILABLE" | "LIMITED" | "FULL"
  lastUpdated: Date
}
```

---

## Sprint 1 Deliverables

* ✅ Working Next.js app
* ✅ CRUD APIs for garages
* ✅ Map with rendered garages
* ✅ Deployed app
* ✅ Clean README & repo structure

---

## Definition of Done

* Application runs without errors
* Parking garages can be viewed & updated
* Data persists in database
* App is deployed
* Demo-ready with clear explanation

---

## Future Scope (Post Sprint 1)

* GraphQL integration
* Booking system
* Valet management
* Admin dashboard
* IoT sensor integration
* Analytics & prediction

---

## Team

**Team 01 – Sprint #1**

---

## How to Run Locally

```bash
npm install
npm run dev
```

Create a `.env` file using `.env.example` and add required environment variables.

---

## Demo Strategy

* Open app
* Search garages
* Update availability
* Refresh / open another tab to show live updates

---

Built as part of **Sprint #1 – Full-Stack Development with Next.js & Cloud** 🚀


