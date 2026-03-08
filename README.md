<div align="center">

# 🎬 Claudinary-AI

**A Modern AI-Powered Media Management SaaS Platform**

Built with Next.js 15, Cloudinary, Prisma ORM, and Clerk Authentication

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.16-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

![Claudinary-AI Screenshot](./public/Claudinary1.png)

[Live Demo](#) • [Documentation](#-documentation) • [Report Bug](https://github.com/dev0jha/Claudinary-AI/issues) • [Request Feature](https://github.com/dev0jha/Claudinary-AI/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [Database Setup](#-database-setup)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Claudinary-AI** is a full-stack SaaS application that leverages Cloudinary's powerful media APIs to provide intelligent video compression, image transformations, and social media content optimization. The platform enables users to upload, process, and manage media assets with AI-powered optimizations and real-time transformations.

### What Makes It Different?

- **Automatic Video Compression**: Reduce video file sizes by up to 70% while maintaining quality
- **Social Media Format Presets**: One-click image resizing for Instagram, Twitter, Facebook, and more
- **Real-time Transformations**: URL-based image transformations with instant preview
- **Secure Authentication**: Enterprise-grade auth with Clerk's OAuth 2.0 implementation

---

## ✨ Key Features

### 🎥 Video Management
- **Smart Compression**: AI-driven quality optimization with automatic format selection
- **Upload & Storage**: Secure video uploads with progress tracking
- **Metadata Tracking**: Duration, original/compressed size, timestamps
- **Streaming Ready**: Optimized delivery via Cloudinary's global CDN

### 🖼️ Image Processing
- **Social Media Presets**: Pre-configured dimensions for all major platforms
  - Instagram Square (1080×1080), Portrait (1080×1350)
  - Twitter Post (1200×675), Header (1500×500)
  - Facebook Cover (820×312)
- **Real-time Preview**: Instant visualization of transformations
- **One-Click Download**: Export processed images in optimal formats

### 🔐 Authentication & Security
- **Clerk Integration**: OAuth 2.0, magic links, and social sign-in
- **Protected Routes**: Server-side authentication middleware
- **Session Management**: Secure token-based sessions

### 💎 User Experience
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark Theme UI**: Modern aesthetic with smooth animations
- **Intuitive Navigation**: Sidebar-based dashboard layout

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.5.12 | React framework with App Router |
| **React** | 19.1.0 | UI component library |
| **TypeScript** | 5.9.3 | Type-safe development |
| **Tailwind CSS** | 4.0 | Utility-first styling |
| **DaisyUI** | 5.1.27 | Tailwind component library |
| **Framer Motion** | 12.23.22 | Animation library |
| **Lucide React** | 0.544.0 | Icon library |

### Backend & Services
| Technology | Version | Purpose |
|------------|---------|---------|
| **Prisma ORM** | 6.16.3 | Database toolkit & type-safe queries |
| **Cloudinary** | 2.7.0 | Media storage & transformations |
| **Next-Cloudinary** | 6.16.0 | Cloudinary React components |
| **Clerk** | 6.33.2 | Authentication & user management |
| **Axios** | 1.12.2 | HTTP client |

### UI Components
| Technology | Purpose |
|------------|---------|
| **Radix UI** | Accessible primitives (Checkbox, Select, Switch, Label, Slot) |
| **Class Variance Authority** | Component variant management |
| **tailwind-merge** | Tailwind class conflict resolution |
| **tw-animate-css** | Animation utilities |

### Development Tools
| Tool | Purpose |
|------|---------|
| **Turbopack** | Next.js dev server bundler |
| **ESLint** | Code linting |
| **tsx** | TypeScript execution |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                        │
├─────────────────────────────────────────────────────────────────┤
│  Next.js App Router │ React 19 │ Tailwind CSS │ Framer Motion   │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     NEXT.JS SERVER (API Routes)                 │
├─────────────────────────────────────────────────────────────────┤
│  /api/video-upload  │  /api/image-upload  │  /api/videos        │
└──────────┬──────────────────────┬──────────────────────┬────────┘
           │                      │                      │
           ▼                      ▼                      ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│    Cloudinary    │   │   Clerk Auth     │   │   Prisma ORM     │
│  (Media Storage) │   │  (User Mgmt)     │   │   (SQLite DB)    │
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

### Data Flow

1. **Authentication**: Clerk handles user sign-up/sign-in with OAuth 2.0
2. **Media Upload**: Files are uploaded via API routes to Cloudinary
3. **Database**: Prisma stores video metadata (title, sizes, duration)
4. **Transformations**: Cloudinary processes images/videos on-the-fly
5. **Delivery**: Content served via Cloudinary's global CDN

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or **yarn** 1.22+
- **Cloudinary Account** ([Sign up free](https://cloudinary.com))
- **Clerk Account** ([Sign up free](https://clerk.com))

### Installation

```bash
# Clone the repository
git clone https://github.com/dev0jha/Claudinary-AI.git
cd Claudinary-AI

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Generate Prisma client
npx prisma generate

# Initialize database
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🔧 Environment Configuration

Create a `.env.local` file in the root directory:

```env
# ═══════════════════════════════════════════════════════════════
# CLERK AUTHENTICATION
# Get credentials: https://dashboard.clerk.com
# ═══════════════════════════════════════════════════════════════
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Optional: Custom routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# ═══════════════════════════════════════════════════════════════
# CLOUDINARY CONFIGURATION
# Get credentials: https://console.cloudinary.com
# ═══════════════════════════════════════════════════════════════
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ═══════════════════════════════════════════════════════════════
# DATABASE (Prisma)
# SQLite for development, PostgreSQL for production
# ═══════════════════════════════════════════════════════════════
DATABASE_URL="file:./dev.db"

# For PostgreSQL (production):
# DATABASE_URL="postgresql://user:password@host:5432/database"
```

---

## 🗄️ Database Setup

The project uses **Prisma ORM** with SQLite by default for development.

### Schema Overview

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Video {
  id             String   @id @default(cuid())
  title          String
  description    String?
  publicId       String   // Cloudinary public ID
  originalSize   String   // Original file size
  compressedSize String   // Compressed file size
  duration       Float    // Video duration in seconds
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

### Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# Open Prisma Studio (GUI)
npx prisma studio

# Create migration (for PostgreSQL)
npx prisma migrate dev --name init
```

### Production Database Options

| Provider | Connection String Example |
|----------|---------------------------|
| **Neon** | `postgresql://user:pass@ep-xxx.neon.tech/neondb` |
| **Supabase** | `postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres` |
| **PlanetScale** | `mysql://user:pass@aws.connect.psdb.cloud/database` |
| **Railway** | `postgresql://postgres:pass@xxx.railway.app:5432/railway` |

---

## 📡 API Reference

### Video Upload

```http
POST /api/video-upload
Content-Type: multipart/form-data
Authorization: Bearer <clerk_session_token>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | File | Yes | Video file to upload |
| `title` | string | Yes | Video title |
| `description` | string | No | Video description |
| `originalSize` | string | Yes | Original file size in bytes |

**Response:**
```json
{
  "id": "clxxxx",
  "title": "My Video",
  "publicId": "video-uploads/xxxxx",
  "originalSize": "10485760",
  "compressedSize": "3145728",
  "duration": 120.5
}
```

### Image Upload

```http
POST /api/image-upload
Content-Type: multipart/form-data
Authorization: Bearer <clerk_session_token>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | File | Yes | Image file to upload |

**Response:**
```json
{
  "publicId": "next-cloudinary-uploads/xxxxx"
}
```

### Get All Videos

```http
GET /api/videos
```

**Response:**
```json
[
  {
    "id": "clxxxx",
    "title": "Video Title",
    "description": "Description",
    "publicId": "video-uploads/xxxxx",
    "originalSize": "10485760",
    "compressedSize": "3145728",
    "duration": 120.5,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

## 📁 Project Structure

```
claudinary-ai/
├── prisma/
│   └── schema.prisma          # Database schema definition
├── public/
│   ├── Claudinary.png         # App preview image
│   └── Claudinary1.png        # Hero screenshot
├── src/
│   ├── app/
│   │   ├── (app)/             # Protected app routes
│   │   │   ├── home/          # Dashboard home page
│   │   │   ├── social-share/  # Image transformation tool
│   │   │   ├── video-upload/  # Video upload page
│   │   │   ├── layout.tsx     # App layout with sidebar
│   │   │   ├── hero.tsx       # Landing hero section
│   │   │   ├── Features.tsx   # Features grid
│   │   │   ├── Benefits.tsx   # Benefits section
│   │   │   ├── Pricing.tsx    # Pricing cards
│   │   │   ├── CTA.tsx        # Call-to-action section
│   │   │   ├── Contact.tsx    # Contact form
│   │   │   └── Footer.tsx     # Site footer
│   │   ├── (auth)/            # Authentication routes
│   │   │   ├── sign-in/       # Sign in page
│   │   │   └── sign-up/       # Sign up page
│   │   ├── api/               # API route handlers
│   │   │   ├── image-upload/  # Image upload endpoint
│   │   │   ├── video-upload/  # Video upload endpoint
│   │   │   └── videos/        # Videos list endpoint
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dark-gradient-pricing.tsx
│   │   │   └── infinite-moving-cards.tsx
│   │   ├── VideoCard.tsx      # Video display card
│   │   ├── contact-card.tsx   # Contact form card
│   │   └── hero-section-demo-1.tsx
│   └── lib/
│       ├── prisma.ts          # Prisma client singleton
│       └── utils.ts           # Utility functions (cn)
├── types/                     # TypeScript type definitions
├── .env.local                 # Environment variables
├── components.json            # shadcn/ui configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── setup.sh                   # Setup helper script
└── package.json               # Dependencies & scripts
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npx prisma studio` | Open Prisma database GUI |
| `npx prisma generate` | Regenerate Prisma client |
| `npx prisma db push` | Sync schema to database |

---

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dev0jha/Claudinary-AI)

1. Connect your GitHub repository to Vercel
2. Add environment variables in project settings
3. Deploy!

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `DATABASE_URL` (Use PostgreSQL for production)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

<div align="center">

**Dev Hari Ojha** ([@dev0jha](https://github.com/dev0jha))

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev0jha)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dev0jha)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/devhariojha)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ojha6773@gmail.com)

</div>

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Cloudinary](https://cloudinary.com/) - Media management platform
- [Clerk](https://clerk.com/) - Authentication and user management
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [DaisyUI](https://daisyui.com/) - Tailwind CSS component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [dev0jha](https://github.com/dev0jha)

</div>
