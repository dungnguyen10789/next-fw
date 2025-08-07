import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import TanStackQueryPlugin from '@tanstack/eslint-plugin-query';
import ESLintPlugin from '@typescript-eslint/eslint-plugin';
import ImportPlugin from 'eslint-plugin-import';
import PrettierPlugin from 'eslint-plugin-prettier';
import ReactPlugin from 'eslint-plugin-react';
import ReactHooksPlugin from 'eslint-plugin-react-hooks';
import UnicornPlugin from 'eslint-plugin-unicorn';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  // Include Next.js core rules via compat
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: true,
        google: true,
        mount: true,
        mountWithRouter: true,
        shallow: true,
        shallowWithRouter: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
      },
    },
    ignores: ['/vendor/*', '**/*.hbs'],
  },

  {
    plugins: {
      prettier: PrettierPlugin,
    },
  },

  {
    plugins: {
      import: ImportPlugin,
    },
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          warnOnUnassignedImports: true,
          groups: [
            'builtin',
            'external',
            'type',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          pathGroups: [
            {
              pattern: '@shared-**/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '../**',
              group: 'sibling',
              position: 'before',
            },
            {
              pattern: './**',
              group: 'sibling',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          distinctGroup: false,
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  {
    plugins: {
      '@tanstack/query': TanStackQueryPlugin,
      '@typescript-eslint': ESLintPlugin,
      'react-hooks': ReactHooksPlugin,
    },
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',

      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-shadow': 'error',

      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  },

  {
    plugins: {
      react: ReactPlugin,
      rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
      },
    },
  },

  {
    rules: {
      'no-alert': 'off',
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'error',

      'max-lines': [
        'error',
        {
          max: 500,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },

  {
    files: ['**/*.tsx'],
    plugins: {
      unicorn: UnicornPlugin,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
          ignore: [
            '^page\\.tsx$',
            '^layout\\.tsx$',
            '^route\\.tsx$',
            '^loading\\.tsx$',
            '^error\\.tsx$',
            '^not-found\\.tsx$',
            '^template\\.tsx$',
          ],
          multipleFileExtensions: true,
        },
      ],
    },
  },

  {
    files: ['src/**/*.{ts,js}'],
    plugins: {
      unicorn: UnicornPlugin,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
          multipleFileExtensions: true,
        },
      ],
    },
  },
];

export default config;
