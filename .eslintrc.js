module.exports = {
  env: {
    browser: true,
  },
  extends: [
    // Order is important here

    // Disable these for now as they results in a lot of warnings which are non-essential
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // `react-app` is not included in airbnb-typescript
    // 'react-app',
    // Use the airbnb-typescript with react support, even though we add stricter checking later with plugin:react/all
    // 'airbnb-typescript',
    // 'airbnb/hooks',
    // 'plugin:jsx-a11y/recommended',
    // Re-Enable all react rules (should be after all the others)
    // 'plugin:react/all',
    // Add browser compatability linting
    // 'plugin:compat/recommended',
    // Resolve conflicting prettier formatting rules see: https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/@typescript-eslint',
    // 'prettier/babel',
    // 'prettier/flowtype',
    // 'prettier/react',
    'prettier/standard',
  ],
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        // Disallow default exports from non-jsx files
        'import/no-default-export': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    // 'jsx-a11y',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    // HACK: Temporarily disable some rules to reduce clutter for now
    // 'react/prop-types': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Enforce interface for type definitions
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: 'nu', ignoreRestSiblings: true, varsIgnorePattern: 'nu' },
    ],

    // Require braces in arrow function body as needed
    'arrow-body-style': ['error', 'as-needed'],

    // Allow dev dependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // Enforce import order and no spaces
    'import/order': ['error', { 'newlines-between': 'never' }],

    // Allow named exports from files with a single export
    'import/prefer-default-export': 'off',

    // Prefer arrow functions in callbacks
    'prefer-arrow-callback': 'error',

    // // Enforce function components being defined as arrow functions
    // 'react/function-component-definition': [
    //   'error',
    //   {
    //     namedComponents: 'arrow-function',
    //   },
    // ],

    // 'react/jsx-fragments': ['error', 'element'],

    // // Turn off nested jsx rule
    // 'react/jsx-max-depth': 'off',

    // // Allow text in jsx components
    // 'react/jsx-no-literals': 'off',

    // // TODO: investigate re-enabling
    // 'react/jsx-props-no-spreading': 'off',

    // 'react/jsx-sort-props': [
    //   'error',
    //   {
    //     callbacksLast: true,
    //     ignoreCase: false,
    //     noSortAlphabetically: false,
    //     reservedFirst: true,
    //     shorthandFirst: true,
    //   },
    // ],

    // Sort imports
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],

    // Sort keys in objects etc
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],

    /* eslint-enable sort-keys-fix/sort-keys-fix */
  },
  settings: {
    polyfills: ['Promise'],
  },
};
