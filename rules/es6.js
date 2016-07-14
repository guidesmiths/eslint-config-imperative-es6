module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'constructor-super': 0,
    'generator-star-spacing': 0,
    'no-class-assign': 0,
    'no-confusing-arrow': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
    'no-this-before-super': 0,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': [2, {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-var': 0,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': [2, {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'prefer-reflect': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 0,
    'prefer-template': 2,
    'require-yield': 0,
    'rest-spread-spacing': [2, 'never'],
    'sort-imports': 0,
    'template-curly-spacing': 2,
    'yield-star-spacing': [2, 'after']
  }
};
