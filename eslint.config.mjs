// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylistic/arrow-parens': 'off',
    'vue/multi-word-component-names': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/operator-linebreak': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'semi' },
        singleline: { delimiter: 'semi' }
      }
    ],
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
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }
    ]
  }
})
