# khs-ctl

**Hema Sundharam Kolla — Cloud & DevOps Engineer Portfolio**

A single-page, terminal/pipeline-themed developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site frames the projects on GitHub as stages of a CI/CD pipeline (`Foundation → Build → Deploy → Harden`), alongside skills, work experience, certifications, and technical blog posts.

🔗 Live: [hsctl.in](https://khsctl.vercel.app/) &nbsp;|&nbsp; 📄 Resume: [hsctl.in/resume](https://khsctl.vercel.app/resume.pdf)

## ✨ Features

- **Terminal-style hero** — an animated `$ whoami` boot sequence introducing the developer
- **Pipeline view** — real GitHub repos grouped into four stages (Foundation, Build, Deploy, Harden), each with a narrative, tech tags, and links
- **Skills grid** — Cloud, IaC, CI/CD & Security, Containers, Scripting, Observability, Databases
- **Experience timeline** — current and past roles with impact bullet points
- **Certifications panel** — AWS, Salesforce, Red Hat, Aviatrix, and Automation Anywhere credentials with verification links
- **Articles feed** — technical writing pulled from [Hashnode](https://hashnode.com/@hemasundharamkolla)
- **Contact block** — JSON-styled contact card (email, LinkedIn, GitHub, blog, location, resume)
- Dark, dot-grid, amber-accented aesthetic throughout

## 🧱 Tech Stack

| Layer | Tech |
|---|---|
| UI | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` plugin) |
| Formatting | oxfmt |
| Hosting/build target | Figma Make (see `vite.config.ts` Figma plugins) |

> Originally scaffolded as a **Figma Make** app (`figma-make-app` in `package.json`) — the Vite config includes Figma-specific plugins for site metadata injection, HMR error-overlay replay, and a stories/kit route used by the Figma Make preview surface.

## 📁 Project Structure

```
khs-ctl/
├── index.html              # Vite HTML shell (Figma slot comments for title/meta injection)
├── package.json             # Scripts & dependencies
├── vite.config.ts           # Vite + React + Tailwind + Figma Make plugins, "@/*" → "./src/*" alias
├── tsconfig.json             # Strict TypeScript config
├── AGENTS.md                 # Notes for AI coding agents working in this repo
├── public/
│   └── resume.pdf            # Resume served at /resume.pdf ( /resume redirects here)
└── src/
    ├── main.tsx               # React entrypoint
    ├── index.css              # Tailwind v4 import + global styles
    ├── vite-env.d.ts
    └── App.tsx                # Entire single-page app: Hero, Skills, Experience,
                                # Pipeline, Articles, Certs, Contact sections
```

## 🚀 Getting Started

```bash
git clone https://github.com/hemasundharGit/khs-ctl.git
cd khs-ctl

# Install dependencies (pnpm — see pnpm-lock.yaml)
pnpm install

# Start the dev server (binds to 0.0.0.0, default port 8443)
pnpm dev

# Production build
pnpm build

# Preview the production build
pnpm preview

# Format code
pnpm format
```

## 🛠️ Content Sections (in `src/App.tsx`)

| Section | Data source | What it shows |
|---|---|---|
| `Hero` | inline `lines` array | Animated terminal intro, name, role, quick links, stat counters |
| `Skills` | `SKILLS_FLAT` | Cloud, IaC, CI/CD & Security, Containers, Scripting, Observability, Databases |
| `Experience` | `EXPERIENCE` | Millennium Software Solutions, NextCX.ai roles |
| `Pipeline` | `PIPELINE` | GitHub projects grouped into Foundation / Build / Deploy / Harden stages |
| `Articles` | `HASHNODE_ARTICLES` | Hashnode blog post feed |
| `Certs` | `CERTS` | AWS, Salesforce, Red Hat, Aviatrix, Automation Anywhere certifications |
| `Contact` | inline `links` array | Email, LinkedIn, GitHub, blog, location, resume |

To update the portfolio's content, edit the corresponding constant near the top of `src/App.tsx` — no other files need to change for text/data updates.

## 🗺️ Ideas to Add

- [ ] Move the data arrays (`PIPELINE`, `SKILLS_FLAT`, `EXPERIENCE`, `HASHNODE_ARTICLES`, `CERTS`) into separate `src/data/*.ts` files for easier editing
- [ ] Add a `robots.txt` / `sitemap.xml` and basic SEO meta tags for the live domain
- [ ] Add a dark/light theme toggle
- [ ] Pull Hashnode articles dynamically via the Hashnode public API instead of a hardcoded list
- [ ] Add unit/UI tests (e.g. Vitest + React Testing Library)
- [ ] Add a GitHub Actions workflow to build and deploy on push
- [ ] Add analytics (the Figma site-config plugin already supports a Google Analytics ID)

## 📄 License

No license currently specified — add one (e.g. MIT) if you'd like others to reuse this template.

## 📬 Contact

- **Email:** kollahemasundharam.tech9@gmail.com
- **LinkedIn:** [linkedin.com/in/kollahemasundharam9](https://linkedin.com/in/kollahemasundharam9)
- **GitHub:** [github.com/hemasundharGit](https://github.com/hemasundharGit)
- **Blog:** [hashnode.com/@hemasundharamkolla](https://hashnode.com/@hemasundharamkolla)
- **Location:** Vijayawada, Andhra Pradesh, India
