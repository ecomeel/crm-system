const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [],
  rules: {
    // basic rules
    'no-console': IS_PRODUCTION ? 'error' : 'warn',
    'no-debugger': IS_PRODUCTION ? 'error' : 'warn',
    'vue/array-bracket-spacing': ['error', 'always'],
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/comma-spacing': 'error',
    'vue/eqeqeq': 'warn',
    'func-call-spacing': 'warn',
    'vue/no-extra-parens': 'warn',
    'vue/prefer-template': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'vue/space-in-parens': ['warn', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/template-curly-spacing': ['warn', 'never'],
    indent: ['error', 2],

    // vue.js 3 rules
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: 1
      }
    ],
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand'
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/block-lang': [
      'error',
      {
        style: {
          lang: 'scss'
        },
        script: {
          lang: 'ts'
        }
      }
    ],
    'vue/component-api-style': ['error'],
    'vue/component-name-in-template-casing': ['error'],
    'vue/component-options-name-casing': ['error'],
    'vue/custom-event-name-casing': ['error'],
    'vue/define-emits-declaration': ['error'],
    'vue/define-props-declaration': ['error'],
    'vue/html-comment-content-newline': ['error'],
    'vue/html-comment-content-spacing': ['error'],
    'vue/html-comment-indent': ['error'],
    'vue/new-line-between-multi-line-property': ['error'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-required-prop-with-default': ['warn'],
    'vue/no-root-v-if': ['error'],
    'vue/no-static-inline-styles': ['error'],
    'vue/no-this-in-before-route-enter': ['warn'],
    'vue/no-template-target-blank': [
      'error',
      {
        allowReferrer: true
      }
    ],
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: [
          'NuxtLayout',
          'NuxtPage',
          'NuxtLink',
          'Icon',
          'client-only',
          'El*',
          'swiper-*',
          'yandex-map',
          'ymap-marker'
        ]
      }
    ],
    'vue/no-undef-properties': ['warn'],
    'vue/no-unused-properties': ['warn'],
    'vue/no-unused-refs': ['warn'],
    'vue/no-useless-mustaches': ['warn'],
    'vue/no-useless-v-bind': ['warn'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/padding-lines-in-component-definition': ['error'],
    'vue/prefer-define-options': ['error'],
    'vue/prefer-separate-static-class': ['warn'],
    'vue/require-macro-variable-name': ['warn'],
    'vue/require-typed-ref': ['warn'],
    'vue/v-for-delimiter-style': ['warn'],
    'vue/no-restricted-syntax': ['error'],
    'sort-imports': 'warn'
  }
}
