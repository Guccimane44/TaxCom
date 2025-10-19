import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 1️⃣ Ignore build artifacts
  { ignores: ['.next', 'node_modules', 'dist'] },

  // 2️⃣ Tell ESLint what kind of files to lint
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    settings: { react: { version: 'detect' } },
  },

  // 3️⃣ Base recommended rules from ESLint itself
  js.configs.recommended,

  // 4️⃣ TypeScript recommended rules
  ...tseslint.configs.recommended,

  // 5️⃣ React and Next.js recommended rules
  react.configs.flat.recommended,
  next.flatConfig.coreWebVitals,

  // 6️⃣ React Hooks plugin rules
  {
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // 👇 Add this line to disable the outdated rule
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off'

    },
  },
]);
