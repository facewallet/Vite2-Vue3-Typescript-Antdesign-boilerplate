module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    camelcase: 'off',
    eqeqeq: 'off',
    quotes: 'off',
    semi: ['error', 'always'],
    'no-case-declarations': 'off',
    'new-cap': 'off',
    'no-unused-expressions': 'off',
    'no-prototype-builtins': 'off',
    'standard/no-callback-literal': 'off',
    'prefer-promise-reject-errors': 'off',
    'space-before-function-paren': ['error', 'never'],
    'no-new': 'off',
    'no-mixed-operators': 'off',
    'promise/param-names': 'off',
    'no-useless-escape': 'off',

    "vue/no-v-html": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off"
    // "vue/max-attributes-per-line": ["error", {
    //   singleline: 5,
    //   multiline: {
    //     max: 1,
    //     allowFirstLine: true
    //   }
    // }]

  },
  globals: {
    // "$": "readonly",
    // "FB": "readonly",
    // "fbq": "readonly",
    // "gtag": "readonly",
    // "grecaptcha": "readonly",
    // "VConsole": "readonly",
    // "mobsocket": true,
    // "googletag": true,
    // "gaEvent": true,
    // "zoomSize": true,
    // "fbEvent": true,
    // "dataLayer": true
  }
};
