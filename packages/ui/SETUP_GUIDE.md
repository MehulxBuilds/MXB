# UI Package Setup Guide

This guide documents the complete process of creating a shared UI package in a Turborepo monorepo without initializing a new Next.js project.

## Overview

We created `@repo/ui` as a shared component library that can be used across multiple apps in the monorepo. The package contains all UI components, utilities, and hooks that were previously in individual apps.

---

## Step 1: Create Package Structure

### 1.1 Create Directory

```bash
mkdir -p packages/ui/src/ui
mkdir -p packages/ui/src/hooks
```

### 1.2 Initialize package.json

Create `packages/ui/package.json` using bun:

```bash
cd packages/ui

# Initialize package.json with bun
bun init -y
```

Then edit `package.json` to match the following structure, or create it directly:

```bash
{
  "name": "@repo/ui",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    },
    "./utils": {
      "types": "./dist/utils.d.ts",
      "default": "./dist/utils.js"
    }
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint .",
    "check-types": "tsc --noEmit"
  },
  "dependencies": {
    "@base-ui-components/react": "^1.0.0-rc.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.559.0",
    "react": "19.2.1",
    "react-dom": "19.2.1",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  },
  "peerDependencies": {
    "react": "^19.2.1",
    "react-dom": "^19.2.1"
  }
}
```

### 1.3 Install Dependencies

Install all required packages:

```bash
cd packages/ui

# Install runtime dependencies
bun add @base-ui-components/react class-variance-authority clsx lucide-react react react-dom tailwind-merge

# Install dev dependencies
bun add -d @types/react @types/react-dom typescript
```

**Packages Installed:**

**Runtime Dependencies:**

- `@base-ui-components/react` - Base UI component primitives
- `class-variance-authority` - For component variants
- `clsx` - Utility for conditional classNames
- `lucide-react` - Icon library
- `react` & `react-dom` - React framework
- `tailwind-merge` - Merge Tailwind classes

**Dev Dependencies:**

- `@types/react` & `@types/react-dom` - TypeScript types for React
- `typescript` - TypeScript compiler

**Key Points:**

- `name`: Use `@repo/ui` (or your org scope)
- `main` and `types`: Point to the `dist` folder (built output)
- `exports`: Define entry points for the package
- `dependencies`: All packages needed by components
- `peerDependencies`: React versions that consuming apps must provide

---

## Step 2: Configure TypeScript

### 2.1 Create tsconfig.json

Create `packages/ui/tsconfig.json`:

```bash
{
  "extends": "../../packages/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "jsx": "react-jsx",
    "declaration": true,
    "declarationMap": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "target": "ES2022"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**Key Points:**

- `extends`: Uses your base TypeScript config
- `outDir`: Where compiled files go (`dist/`)
- `rootDir`: Source files location (`src/`)
- `declaration`: Generate `.d.ts` files for TypeScript support
- `jsx`: React JSX mode

**Note:** Make sure you have a base TypeScript config at `packages/typescript-config/base.json`. If not, you may need to adjust the `extends` path or create the base config first.

---

## Step 3: Move Components and Files

### 3.1 Copy UI Components

```bash
# Copy all UI components from the app to the package
cp -r apps/web/src/components/ui/*.tsx packages/ui/src/ui/
```

### 3.2 Copy Utilities

```bash
# Copy utils file
cp apps/web/src/lib/utils.ts packages/ui/src/utils.ts
```

### 3.3 Copy Hooks (if needed)

```bash
# Copy hooks that are used by components
cp apps/web/src/hooks/use-mobile.ts packages/ui/src/hooks/
```

---

## Step 4: Fix Imports

### 4.1 Update Utils Imports

All components import `cn` from `@/lib/utils`. We need to change these to relative imports:

```bash
# Update all imports from @/lib/utils to ../utils
find packages/ui/src/ui -name "*.tsx" -exec sed -i '' 's|from "@/lib/utils"|from "../utils"|g' {} \;
```

**Before:**

```tsx
import { cn } from "@/lib/utils";
```

**After:**

```tsx
import { cn } from "../utils";
```

### 4.2 Update Cross-Component Imports

Components that import other components need relative paths:

```bash
# Update imports from @/components/ui/* to ./*
find packages/ui/src/ui -name "*.tsx" -exec sed -i '' 's|from "@/components/ui/|from "./|g' {} \;
```

**Before:**

```tsx
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
```

**After:**

```tsx
import { Input } from "./input";
import { ScrollArea } from "./scroll-area";
```

### 4.3 Update Hook Imports

```bash
# Update hook imports
find packages/ui/src/ui -name "*.tsx" -exec sed -i '' 's|from "@/hooks/use-mobile"|from "../hooks/use-mobile"|g' {} \;
```

**Before:**

```tsx
import { useIsMobile } from "@/hooks/use-mobile";
```

**After:**

```tsx
import { useIsMobile } from "../hooks/use-mobile";
```

### 4.4 Fix Type Errors

If you encounter type errors (like implicit `any`), fix them:

```tsx
// Example: Fix onClick handler type
onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
  onClick?.(event);
  toggleSidebar();
}}
```

---

## Step 5: Create Index File (Barrel Exports)

### 5.1 Create src/index.ts

Create `packages/ui/src/index.ts` to export all components:

```typescript
// Export all UI components
export * from "./ui/accordion";
export * from "./ui/alert-dialog";
export * from "./ui/alert";
export * from "./ui/autocomplete";
export * from "./ui/avatar";
export * from "./ui/badge";
export * from "./ui/breadcrumb";
export * from "./ui/button";
export * from "./ui/card";
export * from "./ui/checkbox-group";
export * from "./ui/checkbox";
export * from "./ui/collapsible";
export * from "./ui/combobox";
export * from "./ui/dialog";
export * from "./ui/empty";
export * from "./ui/field";
export * from "./ui/fieldset";
export * from "./ui/form";
export * from "./ui/frame";
export * from "./ui/group";
export * from "./ui/input-group";
export * from "./ui/input";
export * from "./ui/kbd";
export * from "./ui/label";
export * from "./ui/menu";
export * from "./ui/meter";
export * from "./ui/number-field";
export * from "./ui/pagination";
export * from "./ui/popover";
export * from "./ui/preview-card";
export * from "./ui/progress";
export * from "./ui/radio-group";
export * from "./ui/scroll-area";
export * from "./ui/select";
export * from "./ui/separator";
export * from "./ui/sheet";
export * from "./ui/sidebar";
export * from "./ui/skeleton";
export * from "./ui/slider";
export * from "./ui/spinner";
export * from "./ui/switch";
export * from "./ui/table";
export * from "./ui/tabs";
export * from "./ui/textarea";
export * from "./ui/toast";
export * from "./ui/toggle-group";
export * from "./ui/toggle";
export * from "./ui/toolbar";
export * from "./ui/tooltip";

// Export utils
export * from "./utils";

// Export hooks
export * from "./hooks/use-mobile";
```

**Note:** Handle export conflicts carefully. For example, if both `toggle.tsx` and `toggle-group.tsx` export `Toggle`, use explicit exports:

```typescript
// Export toggle first
export { Toggle, toggleVariants } from "./ui/toggle";
// Then toggle-group (which re-exports Toggle as ToggleGroupItem)
export {
  ToggleGroup,
  Toggle as ToggleGroupItem,
  ToggleGroupSeparator,
} from "./ui/toggle-group";
```

---

## Step 6: Configure CSS for Tailwind v4

### 6.1 Update Global CSS

In your consuming app (e.g., `apps/web/src/app/globals.css`), add the `@source` directive:

```css
@import "tailwindcss";
@import "tw-animate-css";

/* Add this line to scan the UI package */
@source "../../../../packages/ui/src";

@custom-variant dark (&:is(.dark *));
/* ... rest of your CSS ... */
```

**Why this is needed:**

- Tailwind CSS v4 uses the `@source` directive to know where to scan for class names
- Without it, Tailwind only scans files in the consuming app
- The path is relative to the CSS file location

**Path calculation:**

- From: `apps/web/src/app/globals.css`
- Up 4 levels: `../../../../` (app → src → web → apps → root)
- Then: `packages/ui/src`

---

## Step 7: Update Consuming App

### 7.1 Add Package Dependency

In `apps/web/package.json`, add:

```json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```

The `workspace:*` protocol tells the package manager to use the local package.

### 7.2 Update Imports

Replace imports in your app files:

**Before:**

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

**After:**

```tsx
import { Button, cn } from "@repo/ui";
```

### 7.3 Update Turbo Configuration

In `turbo.json`, ensure build outputs include the UI package:

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    }
  }
}
```

The `dist/**` ensures Turborepo caches the UI package build output.

---

## Step 8: Install Dependencies

```bash
# From the root of your monorepo
bun install
```

This will:

- Install all dependencies for the UI package
- Link the workspace package to consuming apps
- Update the lockfile

---

## Step 9: Build and Verify

### 9.1 Build the UI Package

```bash
cd packages/ui
bun run build
```

This compiles TypeScript and generates:

- `dist/index.js` - Compiled JavaScript
- `dist/index.d.ts` - TypeScript definitions
- `dist/ui/*.js` - Individual component files
- `dist/utils.js` - Utils file

### 9.2 Verify the Consuming App Builds

```bash
# From root
bun run build --filter=web
```

Or:

```bash
cd apps/web
bun run build
```

---

## Step 10: Clean Up

### 10.1 Remove Old Component Files

```bash
# Remove the old UI components folder from the app
rm -rf apps/web/src/components/ui
```

### 10.2 Remove Unused Dependencies

Remove dependencies from `apps/web/package.json` that are now provided by `@repo/ui`:

**Remove:**

- `@base-ui-components/react` (now in UI package)
- `class-variance-authority` (now in UI package)
- `clsx` (if not used directly)
- `tailwind-merge` (if not used directly)

**Keep:**

- `lucide-react` (if used directly in app components)
- `@repo/ui` (the shared package)

### 10.3 Remove Unused Utils

If you moved `utils.ts` to the package, remove the old one:

```bash
rm apps/web/src/lib/utils.ts
```

---

## Step 11: Test Everything

### 11.1 Check TypeScript

```bash
cd packages/ui
bun run check-types
```

### 11.2 Test the App

```bash
cd apps/web
bun run dev
```

Verify that:

- Components render correctly
- Styles are applied
- No console errors
- TypeScript is happy

---

## Final Structure

```
packages/ui/
├── src/
│   ├── ui/              # All UI components (49 files)
│   ├── hooks/           # Shared hooks
│   │   └── use-mobile.ts
│   ├── utils.ts        # Utility functions
│   └── index.ts        # Barrel export file
├── dist/               # Built output (generated)
├── package.json
├── tsconfig.json
└── SETUP_GUIDE.md     # This file
```

---

## Common Issues and Solutions

### Issue: "Cannot find module '@/lib/utils'"

**Solution:** Make sure you updated all imports to use relative paths (`../utils`).

### Issue: "Module has already exported a member"

**Solution:** Use explicit exports in `index.ts` instead of `export *` for conflicting names.

### Issue: Styles not applying

**Solution:** Ensure you added `@source "../../../../packages/ui/src"` to your `globals.css`.

### Issue: Type errors in consuming app

**Solution:** Make sure the UI package builds successfully and generates `.d.ts` files.

### Issue: "Cannot find module '@repo/ui'"

**Solution:** Run `bun install` from the root to link workspace packages.
