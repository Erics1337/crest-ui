# 🏔️ Crest UI — Product Requirements Document (PRD)
**Version:** 1.0  
**Author:** Eric Swanson  
**Last Updated:** 2025-10-31  
**Purpose:** Define the design, structure, and implementation plan for *Crest UI* — a reusable design system that embodies Eric Swanson’s signature aesthetic and development approach across web, mobile, and creative projects.

---

## 🎯 Overview

Crest UI is a **component-driven design system** combining modern SaaS aesthetics, southwestern-inspired natural motifs, and flexible developer experience. It will serve as the unified visual and code foundation for projects like **TeamCrest**, **High Desert Holistic**, **Yoga-Flow**, and future ventures.

This PRD outlines design principles, component structure, theming guidelines, build pipeline, and implementation roadmap — enabling both human developers and agentic AI systems to generate, maintain, and extend the design system consistently.

---

## 🌄 Design Philosophy

| Pillar | Description |
|--------|--------------|
| **Nature + Precision** | Inspired by mountains, desert gradients, and soft natural light—balanced with clean, grid-based modernity. |
| **Functional Beauty** | Every element should serve a purpose while evoking a calm, intentional aesthetic. |
| **Human + Machine Harmony** | Designed for seamless handoff between developers and AI agents; consistent structure, type safety, and clear tokens. |
| **Local Roots, Global Polish** | Crafted from Gunnison Valley spirit — adaptable to modern startups and digital products worldwide. |

---

## 🧩 Core Objectives

1. **Unify Visual Language** across all Eric’s products and brands.
2. **Accelerate Development** through reusable, documented components.
3. **Enable AI-Assisted Generation** of new screens, components, and themes.
4. **Ensure Accessibility** and performance across devices.
5. **Support Multi-Brand Theming** for products under the Crest ecosystem.

---

## 🏗️ System Architecture

### 1. Technology Stack

| Layer | Tech |
|-------|------|
| **Framework** | React + Next.js |
| **Styling** | Tailwind CSS + Radix UI primitives |
| **Components Library** | ShadCN/UI base with Crest tokens |
| **Documentation Site** | Storybook + MDX or Next.js Docs site |
| **Design Assets** | Figma library + SVG token exports |
| **Package Management** | Turborepo Monorepo structure (`packages/ui`, `apps/docs`, etc.) |

---

## 🎨 Design Tokens

Design tokens are the single source of truth for visual consistency.

| Token Category | Examples |
|----------------|-----------|
| **Colors** | `crest-blue-500`, `sand-200`, `mesa-400`, `peak-950` |
| **Typography** | Primary: `League Spartan`; Secondary: `Inter` |
| **Spacing** | `space-xs` = 4px, `space-md` = 16px, etc. |
| **Radius** | `radius-md` = 12px (soft but structured) |
| **Elevation** | `shadow-low`, `shadow-mid`, `shadow-high` |
| **Gradients** | Desert sunrise, mountain dusk palettes |
| **Motion** | Ease-out cubic transitions; light parallax on hover |

All tokens should be stored in `tokens.json` and transformed for:
- Tailwind config  
- Figma variables  
- CSS variables (`:root` level)  
- TypeScript types

---

## 🧱 Component Library

### Component Categories

#### **Base Primitives**
- Button
- Input
- TextArea
- Select
- Checkbox
- Switch
- Badge
- Tooltip
- Avatar

#### **Layout Components**
- Container
- Grid / Flex / Stack
- Card
- Modal
- Drawer
- Sidebar
- Tabs
- Breadcrumbs

#### **Typography**
- Headings (`H1–H6`)
- Paragraph
- Label
- Highlight (accent text with gradients)
- Quote

#### **Data Display**
- Table
- List
- Tag
- Progress Bar
- Alert
- Toast
- Skeleton

#### **Navigation**
- Navbar
- Footer
- Breadcrumb
- Pagination
- Command Palette (`Ctrl+K` style)

#### **Complex UI Patterns**
- Dashboard layout
- Chat interface
- Scheduler block (for TeamCrest)
- Pose player UI (for Yoga-Flow)
- Card grid with dynamic filters
- Form wizard

---

## 🪶 Visual Identity

| Element | Specification |
|----------|----------------|
| **Logo** | Stylized crest / shield with mountain motif |
| **Iconography** | Simple geometric forms; Lucide icons customized with subtle line-weight variance |
| **Color Palette** | Blend of earthy tones (sand, mesa red, pine green) with vibrant accents (sky blue, sunrise coral) |
| **Illustration Style** | Minimal, vector-based; gradients + shadows for depth |
| **Animation** | Smooth fade/slide; physics-based micro-interactions using Framer Motion |

---

## 🔧 Engineering Implementation

### Folder Structure (Monorepo)
```
/crest-ui/
├── apps/
│   ├── docs/               # Documentation site
│   ├── demo/               # Demo Next.js app
├── packages/
│   ├── ui/                 # Core React components
│   ├── tokens/             # Design tokens
│   ├── icons/              # Icon library
│   ├── themes/             # Theme variants
│   ├── config/             # ESLint, Tailwind, tsconfig
├── .turbo/
└── package.json
```

### Component Example

```tsx
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", children }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl font-semibold transition-all",
        variant === "primary" && "bg-crest-blue-500 text-white hover:bg-crest-blue-600",
        size === "lg" && "px-6 py-3 text-lg"
      )}
    >
      {children}
    </button>
  );
}
```

---

## 🧠 AI-Agent Integration

Crest UI should be **agent-friendly**:
- All components and tokens documented via JSON schema (`components.schema.json`).
- Support prompt-to-component generation (“Generate a Crest UI login page”).
- Integrate embeddings for component documentation for natural-language retrieval.
- Include LLM function definitions for auto-composing UI layouts.

---

## 🧩 Multi-Brand Theming

- Base tokens are neutral.
- Each product (TeamCrest, Yoga-Flow, High Desert Holistic) extends with:
  - Color overrides
  - Typography tweaks
  - Animation style
- Themes stored under `/packages/themes/[brand].ts`
- Auto-generated from Figma brand boards.

---

## 🧪 Testing & Quality

| Area | Method |
|------|--------|
| **Visual Regression** | Chromatic / Storybook snapshots |
| **Accessibility** | Axe-core, Lighthouse |
| **Unit Tests** | Vitest + React Testing Library |
| **Linting/Formatting** | ESLint + Prettier |
| **Performance** | Bundle analyzer reports |

---

## 📘 Documentation Standards

- Each component documented in MDX:
  - Usage examples
  - Props table
  - Accessibility notes
  - Variants and states
- Docs built with Next.js and deployed on Vercel.
- Include “Generate with AI” code snippet for every component.

---

## 🚀 Roadmap

| Phase | Goal | Deliverables |
|-------|------|---------------|
| **Phase 1** | Design Tokens + Base Components | Colors, Typography, Buttons, Inputs |
| **Phase 2** | Layout & Navigation | Cards, Navbars, Footers, Modals |
| **Phase 3** | Product-Specific Components | Scheduler (TeamCrest), Pose Player (Yoga-Flow) |
| **Phase 4** | Theming & Documentation | Multi-brand themes, Docs site |
| **Phase 5** | AI Integration | Schema definitions + component retrieval pipeline |

---

## 🧭 Success Criteria

- Consistent visual language across all Eric’s products.
- Components reusable and composable in < 5 lines of code.
- Fully documented design tokens in Figma + JSON.
- Zero accessibility violations (WCAG 2.1 AA).
- AI assistant can generate valid code using component schemas.

---

## 💡 Future Extensions

- Native (React Native) version for mobile apps.
- 3D component motion variants (Framer 3D transforms).
- Plugin for AI-powered style adjustments (“Warmify theme” or “Minimal mode”).
- Crest CLI: `npx create-crest-ui my-app`

---

## 📎 References

- [ShadCN/UI](https://ui.shadcn.com/)
- [Radix Primitives](https://www.radix-ui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Figma Tokens Plugin](https://docs.figmatokens.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Storybook](https://storybook.js.org/)

---

**End of Document**
