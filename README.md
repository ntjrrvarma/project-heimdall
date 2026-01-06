# 🛡️ Heimdall - The Gatekeeper

## 📖 Overview
Heimdall is a production-ready **Identity & Authentication System** built to secure digital applications. It uses OAuth 2.0 (GitHub) to verify user identities and manage secure sessions via cookies, serving as the centralized login portal for the entire project ecosystem.

**[🔗 Live Demo](https://project-heimdall.vercel.app)**

## 🚀 Tech Stack
* **Framework:** Next.js 15 (App Router)
* **Auth Provider:** Supabase Auth (SSR) + GitHub OAuth
* **Deployment:** Vercel (Edge Network)
* **Security:** Middleware Protection

## ✨ Key Features
* **OAuth 2.0 Flow:** One-click secure login using GitHub accounts.
* **Middleware Protection:** Automatically blocks unauthorized access to protected routes (e.g., `/dashboard`) at the server level.
* **Session Management:** Persistent sessions using secure, HTTP-only cookies.
* **Dynamic Dashboard:** Personalizes the UI with the user's real GitHub Avatar and Name.
* **Edge Deployment:** Deployed globally on Vercel for low-latency access.

## 🏗️ Architecture
1.  **User Clicks Login:** Redirects to GitHub Authorization.
2.  **Callback:** GitHub returns a temporary code to `/auth/callback`.
3.  **Exchange:** Server exchanges code for a Session Token via Supabase.
4.  **Cookie Set:** Session token stored in secure cookie.
5.  **Access:** Middleware verifies cookie on every page load.



## 📸 Screenshots
*(Add screenshot of the Login Page and the Asgard Dashboard)*

## 💡 Lessons Learned
* **OAuth Complexity:** Understood the "Request -> Callback -> Exchange" flow of modern auth.
* **Server vs. Client:** Mastered when to use Client Components (Interactivity) vs. Server Components (Security/Cookies).
* **Production Config:** Configured Redirect URLs for both Localhost and Production (Vercel) environments.
