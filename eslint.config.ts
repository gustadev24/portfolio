import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';
import astroEslint from 'eslint-plugin-astro';
import prettierEslint from 'eslint-plugin-prettier/recommended';
import js from '@eslint/js';

export default defineConfig([
  js.configs.recommended,
  tsEslint.configs.recommended,
  prettierEslint,
  astroEslint.configs.recommended,
]);
