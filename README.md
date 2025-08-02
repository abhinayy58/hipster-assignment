# 🧠 Hipster Assignment – React + TypeScript + Vite

This is a minimal and production-ready React application using **TypeScript**, **Vite**, and **ESLint**. It is built as part of the **Hipster Assignment**.

---

## ⚙️ Tech Stack

- 🚀 **React** with functional components & hooks
- ✨ **TypeScript** for static typing
- ⚡ **Vite** for fast bundling and dev server
- 📏 **ESLint** with extended type-aware rules
- 🔄 **HMR** (Hot Module Replacement) with Fast Refresh

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/hipster-assignment.git

# Install dependencies
cd hipster-assignment
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview


// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);



---

Would you like me to generate this as a downloadable `README.md` file or help push it to GitHub with your project?
