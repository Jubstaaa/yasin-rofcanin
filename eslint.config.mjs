import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import astro from 'eslint-plugin-astro'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
    { ignores: ['dist', '.astro'] },
    js.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    // Includes the jsx-a11y rules for .astro templates.
    astro.configs['jsx-a11y-recommended'],
    {
        files: ['**/*.{js,mjs,ts,astro}'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    eslintConfigPrettier,
)
