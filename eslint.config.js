import globals from 'globals';

import js from '@eslint/js';

import { defineConfig, globalIgnores } from 'eslint/config';
import importX from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

const commonRules = {
  // Disable diabolic rules
  'react-hooks/set-state-in-effect': 'off',
  'react-hooks/immutability': 'off',
  'react-hooks/refs': 'off',
  'react-hooks/purity': 'off',

  'react/react-in-jsx-scope': 'off',
  '@typescript-eslint/no-unused-expressions': 'off',

  'import-x/no-duplicates': ['error', { considerQueryString: true }],

  'padding-line-between-statements': [
    'error',
    // Перед return
    { blankLine: 'always', prev: '*', next: 'return' },

    // Вокруг циклов
    { blankLine: 'always', prev: '*', next: 'for' },
    { blankLine: 'always', prev: 'for', next: '*' },
    { blankLine: 'always', prev: '*', next: 'while' },
    { blankLine: 'always', prev: 'while', next: '*' },
    { blankLine: 'always', prev: '*', next: 'do' },
    { blankLine: 'always', prev: 'do', next: '*' },

    // Вокруг условий
    {
      blankLine: 'always',
      prev: '*',
      next: 'block-like',
    },
    {
      blankLine: 'always',
      prev: 'block-like',
      next: '*',
    },
    {
      blankLine: 'any',
      prev: 'if',
      next: 'if',
    },

    // Вокруг объявлений функций
    { blankLine: 'always', prev: '*', next: 'function' },
    { blankLine: 'always', prev: 'function', next: '*' },

    // Между логическими блоками
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    },
  ],

  'perfectionist/sort-imports': [
    'error',
    {
      partitionByComment: false,
      type: 'natural',
      order: 'asc',
      newlinesBetween: 1,
      customGroups: [
        {
          elementNamePattern: ['^react$', '^react-dom$', '^react-router-dom$'],
          groupName: 'react-core',
        },
        { elementNamePattern: '^@emotion/', groupName: 'emotion-ecosystem' },
        {
          elementNamePattern: ['^react', 'react-', '@.*react'],
          groupName: 'react-ecosystem',
        },
      ],
      groups: [
        'builtin',
        'type',
        'react-core',
        'emotion-ecosystem',
        'react-ecosystem',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'import',
        'style',
      ],
    },
  ],

  'perfectionist/sort-interfaces': [
    'error',
    {
      partitionByNewLine: true,
      partitionByComment: true,
      type: 'natural',
      order: 'asc',
      customGroups: [
        {
          elementNamePattern: '^id$',
          groupName: 'id',
        },
        {
          elementNamePattern: ['^on[A-Z].+', '^handle[A-Z].+'],
          groupName: 'event-handler',
        },
      ],
      groups: ['id', 'property', 'method', 'event-handler'],
    },
  ],

  'perfectionist/sort-objects': [
    'error',
    {
      partitionByNewLine: true,
      partitionByComment: true,
      type: 'natural',
      order: 'asc',
      customGroups: [
        {
          elementNamePattern: '^id$',
          groupName: 'id',
        },
        {
          elementNamePattern: ['^on[A-Z].+', '^handle[A-Z].+'],
          groupName: 'event-handler',
        },
      ],
      groups: ['id', 'property', 'method', 'event-handler', 'unknown'],
    },
  ],

  'perfectionist/sort-jsx-props': [
    'error',
    {
      partitionByNewLine: true,
      type: 'natural',
      order: 'asc',
      customGroups: [
        { elementNamePattern: '^id$', groupName: 'id' },
        { elementNamePattern: '^ref$', groupName: 'ref' },
        { elementNamePattern: '^key$', groupName: 'key' },
        {
          elementNamePattern: ['^on[A-Z].+', '^handle[A-Z].+'],
          groupName: 'callback',
        },
      ],
      groups: ['id', 'ref', 'key', 'unknown', 'callback'],
    },
  ],

  'perfectionist/sort-variable-declarations': [
    'error',
    {
      partitionByNewLine: true,
      partitionByComment: false,
      type: 'natural',
      order: 'asc',
    },
  ],

  'perfectionist/sort-named-imports': [
    'error',
    {
      partitionByNewLine: true,
      partitionByComment: false,
      type: 'natural',
      order: 'asc',
      ignoreAlias: false,
    },
  ],

  'perfectionist/sort-exports': [
    'error',
    {
      partitionByNewLine: true,
      partitionByComment: false,
      type: 'natural',
      order: 'asc',
    },
  ],
};

export default defineConfig([
  // 1. Игноры
  globalIgnores(['dist', 'node_modules', 'coverage', '**/*.cjs', '**/*.js']),

  // 2. Основной конфиг проекта
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      // react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser },
    },
    plugins: {
      'import-x': importX,
      perfectionist,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...commonRules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // 4. Тесты
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.vitest },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },
]);
