import { Linter } from 'eslint';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

/**
 * @type {Linter.FlatConfig[]}
 */
export default [
  {
    ignores: ['**/.next/**', '**/node_modules/**'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
  ),
  {
    rules: {
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];
