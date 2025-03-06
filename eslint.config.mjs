// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    '@stylistic/indent': 'off' // Disable ESLint indent rule (Prettier should handle it)
    // 'prettier/prettier': ['error', { tabWidth: 2, useTabs: false }], // Enforce Prettier rules
  }
})
