# Dialgood Website Redesign - Development Documentation

## 1. Project Overview
**Objective**: Redesign the Dialgood platform website to reflect a premium, AI-native brand identity similar to Markopolo.ai. The goal was to communicate the core value proposition: *"One Agent, Multi Skills"* — emphasizing orchestration, model agnosticism, and enterprise readiness.

**Tech Stack**:
- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS v3, PostCSS
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **State Management**: React Context API (Theme)

---

## 2. Design System Architecture

### 2.1 Theme Strategy
We implemented a dual-theme system with a "Cinematic Dark Mode" as the default.
- **Dark Mode**: Pitch-black background (`#050505`) with Lime Green accents (`#BDFE65`) and subtle glows.
- **Light Mode**: Clean white/gray background with Deep Teal accents (`#0D9488`).
- **Glassmorphism**: Extensive use of `backdrop-blur-xl` and semi-transparent borders to create depth.

### 2.2 Typography
- **Headlines**: *Playfair Display* (Serif) — chosen for its sophisticated, authoritative editorial feel.
- **Body**: *Inter* (Sans-serif) — chosen for maximum readability and modern UI standard.

---

## 3. Development Process Steps

### Phase 1: Analysis & Foundation
1.  **Site Audit**: Analyzed the existing Dialgood.com structure (8 pages) and content strategy.
2.  **Repo Setup**: initialized a Git repository at `https://github.com/MThakkar121/DG-`.
3.  **Dependency Installation**: Installed Tailwind CSS, shadcn/ui dependencies (`clsx`, `cva`, `tailwind-merge`), and Framer Motion.
4.  **Configuration**:
    - Configured `tailwind.config.js` with custom colors (`--primary`, `--background`, etc.) and animations (`glow-pulse`, `fade-in`).
    - Fixed PostCSS configuration compatibility issues by downgrading to Tailwind v3 stable.
    - Set up path aliases (`@/*`) in `vite.config.js` for cleaner imports.

### Phase 2: Core Components
Built reusable UI components to ensure consistency:
- **`PageHeader.jsx`**: Standardized hero section for internal pages with animated badges and descriptions.
- **`Navbar.jsx`**: Responsive navigation with mobile menu and theme toggle.
- **`Footer.jsx`**: Multi-column footer with newsletter signup and social links.
- **`ThemeContext.jsx`**: Context provider to persist user theme preference in `localStorage`.
- **Shadcn Primitives**: Implemented `Button`, `Card`, `Badge`, `Input`, `Textarea`, `Tabs`, and `Accordion`.

### Phase 3: Page Implementation
We built 13 pages total, organized into 4 categories:

#### A. Core Product Pages
1.  **Home (`/`)**: 
    - Hero section with abstract neural network background.
    - Feature grid using glassmorphism cards.
    - "Orchestration Engine" visualization showing multi-model handoffs.
2.  **Voice Agent Builder (`/voice-agent-builder`)**:
    - Visual mockups of the drag-and-drop editor.
    - Deep-dive into specific builder features (e.g., Logic Nodes, Custom Functions).
3.  **Features (`/features`)**:
    - Interactive **Tabs** component switching between Orchestration, Voice Engine, and Developer Tools.
4.  **Integrations (`/zapier`)**:
    - Interactive app selector (Slack, Salesforce, etc.) that dynamically updates a workflow preview.

#### B. Business Pages
5.  **Pricing (`/pricing`)**: 3-tier comparison cards (Starter, Pro, Enterprise).
6.  **Case Studies (`/case-studies`)**: Success stories with metric highlights (e.g., "45% cost reduction").

#### C. Support & Resources
7.  **Contact (`/contact`)**: Split layout with contact form and direct info.
8.  **FAQ (`/faq`)**: Accordion-style Q&A section.
9.  **Resources (`/resources`)**: Hub linking to external docs, API references, and webinars.
10. **Blog (`/blogs`)**: Grid layout for articles with categories and read times.

#### D. Corporate & Legal
11. **About Us (`/about`)**: Company mission statement and leadership team bios.
12. **Terms of Service (`/terms`)** & **Privacy Policy (`/privacy`)**: Clean, readable legal text layouts.

### Phase 4: Verification & Polish
- Validated all routes using a browser subagent.
- Verified light/dark mode switching on every page.
- Confirmed interactive elements (tabs, forms, hover states) function correctly.
- Ensured WCAG 2 accessibility (focus rings, semantic HTML, alt text).

---

## 4. How to Run Locally

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/MThakkar121/DG-.git
    cd DG-/client
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start development server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

4.  **Build for production**:
    ```bash
    npm run build
    ```

---

## 5. Future Roadmap
- [ ] Connect Contact form to backend logic (e.g., EmailJS or Node.js API).
- [ ] Replace placeholder "Case Study" images with real assets.
- [ ] Add CMS integration for the Blog section (e.g., Sanity or Contentful).
- [ ] Implement authentication for the "Login" buttons.
