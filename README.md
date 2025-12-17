# Frontend Technical Assessment – Green Dream Earth

Author - Saurabh Sharma

This project is a frontend web application using **Next.js (App Router)**, **Zustand**, **Material-UI**, and the **DummyJSON public API**.

---
**App Login Credentials - 
username = emilys
password = emilyspass

## 🚀 Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **Zustand** – State management
- **Material-UI (MUI)** – UI components
- **Axios** – API requests
- **DummyJSON API** – Backend data source

---

## 📦 Features Implemented

### 1️⃣ Authentication
- Admin login using DummyJSON Auth API  
  `POST https://dummyjson.com/auth/login`
- Authentication state managed using **Zustand**
- Token stored in Zustand store
- Protected routes using a custom `AuthGuard` component
- Automatic redirect to login for unauthenticated users
- Logout functionality

---

### 2️⃣ Users Module

#### Users List Page
- Fetch users from:
  `GET https://dummyjson.com/users?limit=100`
- Display users in a responsive **MUI Table**
- Client-side **search filtering** by name
- Displays:
  - Name
  - Email
  - Gender
  - Phone
  - Company
- “View” button navigates to user details page

#### Single User Page
- Fetch single user using:
  `GET https://dummyjson.com/users/{id}`
- Displays full user details in a clean MUI layout
- Back to Users navigation

---

### 3️⃣ Products Module

#### Products List Page
- Fetch products from:
  `GET https://dummyjson.com/products`
- Responsive **MUI Grid** layout
- Client-side:
  - Search filtering
  - Category filtering (derived dynamically from API data)
- Displays:
  - Product image
  - Title
  - Price
  - Category

#### Single Product Page
- Fetch product by ID:
  `GET https://dummyjson.com/products/{id}`
- Displays:
  - Image
  - Title
  - Price
  - Rating
  - Category
  - Description
- Back to Products navigation

---

## 🧠 State Management (Zustand)

Zustand is used to manage:
- Authentication state
- Users data
- Products data

### Why Zustand?
- Minimal boilerplate
- Simple API
- Built-in async support
- Ideal for small to medium applications
- Cleaner alternative to Redux for this use case

Each store contains:
- State
- Async API actions
- Loading handling

---

## ⚠️ Known Limitations / Intentional Omissions

Due to time constraints and to maintain clarity and correctness:

- **Pagination** was not implemented (API supports it, but skipped intentionally)
- **API-side search & category filtering** were replaced with client-side filtering for simplicity
- **NextAuth** was not used; authentication is handled manually via Zustand

All core functionalities (auth, routing, state management, UI, API integration) are fully working and stable.

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/frontend-assessment.git
cd frontend-assessment

npm install
npm run dev
http://localhost:3000

