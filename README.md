# Nubis

**Cloud infrastructure built for developers**

Nubis is a cloud platform that enables developers and organizations to deploy applications without managing physical hardware. Our platform provides compute, storage, networking, and related services through a web console and REST API.

[![Website](https://img.shields.io/badge/Website-usenubis.com-blue)](https://usenubis.com)
[![Status](https://img.shields.io/badge/Status-Closed%20Beta-orange)](https://status.usenubis.com)
[![Documentation](https://img.shields.io/badge/Docs-docs.usenubis.com-green)](https://docs.usenubis.com)

---

## Overview

Nubis provides scalable cloud infrastructure services designed for modern application deployment. Whether you're running a small project or enterprise workloads, our platform offers the compute, storage, and networking capabilities you need.

### Key Services

| Service | Description |
|---------|-------------|
| **Compute** | Virtual machines with configurable CPU, memory, and storage |
| **Storage** | Block volumes and object storage for persistent data |
| **Networking** | Virtual networks, load balancers, and firewall rules |
| **API & Console** | RESTful API and web-based management interface |

---

## Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/usenubis/landv3.git
cd landv3

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

---

## Project Structure

```
landv3/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy
│   ├── security/           # Security information
│   ├── terms/              # Terms of service
│   └── acceptable-use/     # Acceptable use policy
├── components/             # React components
│   ├── ui/                 # UI component library
│   └── ...                 # Feature components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── types/                  # TypeScript type definitions
```

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 16](https://nextjs.org) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| UI Components | [Radix UI](https://www.radix-ui.com) |
| Animations | [Motion](https://motion.dev) |
| Icons | [Lucide React](https://lucide.dev) |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Resources

- **Website**: [usenubis.com](https://usenubis.com)
- **Console**: [console.usenubis.com](https://console.usenubis.com)
- **Documentation**: [docs.usenubis.com](https://docs.usenubis.com)
- **Status**: [status.usenubis.com](https://status.usenubis.com)

---

## Connect

- [Twitter/X](https://x.com/usenubis)
- [GitHub](https://github.com/usenubis)

---

## License

© 2025 Nubis. All rights reserved.

---

<p align="center">
  <a href="https://startupfa.me/s/nubis" target="_blank">
    <img src="https://startupfa.me/badges/featured/default-rounded.webp" alt="Nubis - Featured on Startup Fame" width="171" height="54" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.producthunt.com/products/nubis" target="_blank">
    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1035834&theme=light" alt="Nubis - Product Hunt" width="200" height="54" />
  </a>
  &nbsp;&nbsp;
  <a href="https://nxgntools.com/tools/nubis" target="_blank">
    <img src="https://nxgntools.com/api/embed/nubis?type=FEATURED_ON" alt="NextGen Tools Badge" height="48" />
  </a>
</p>
