// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylistic/arrow-parens': 'off',
    'vue/multi-word-component-names': 'off',
    '@stylistic/indent': 'off', // Disable ESLint indent rule (Prettier should handle it)
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      { singleline: 'never', multiline: 'never' }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 3, // Allow up to 3 attributes per line in single-line elements
        multiline: { max: 1 } // Force 1 attribute per line in multi-line elements
      }
    ]
  }
})
