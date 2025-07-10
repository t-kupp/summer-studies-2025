> Source: https://github.com/aridanpantoja/eslint-prettier-nextjs (edited for personal use)

**This setup includes:**

- A fresh Next.js project with Typescript and Tailwind
- Conflict free ESLint and Prettier configuration
- Formatting plugins for Typescript, a11y, and Tailwind classes
</aside>

1. **Start a new Next.js project**
   - `npx create-next-app@latest .`
   - Enable Typescript, ESLint, Tailwind, src folder and App Router during the installation process
2. **Configure ESLint**

   - `npm install -D eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier prettier prettier-plugin-tailwindcss`
   - Edit `eslint.config.mjs`

   ```
   import { FlatCompat } from "@eslint/eslintrc";

   const compat = new FlatCompat({
     // import.meta.dirname is available after Node.js v20.11.0
     baseDirectory: import.meta.dirname,
   });

   const eslintConfig = [
     {
       ignores: [".next/**", "out/**", "node_modules/**", ".git/**", "*.config.js", "*.config.mjs"],
     },
     ...compat.config({
       extends: [
         "next",
         "next/core-web-vitals",
         "next/typescript",
         "plugin:prettier/recommended",
         "plugin:jsx-a11y/recommended",
       ],
       plugins: ["prettier", "jsx-a11y"],
       rules: {
         "prettier/prettier": [
           "error",
           {
             trailingComma: "all",
             semi: true,
             tabWidth: 2,
             singleQuote: false,
             printWidth: 100,
             endOfLine: "auto",
             arrowParens: "always",
             plugins: ["prettier-plugin-tailwindcss"],
           },
           {
             usePrettierrc: false,
           },
         ],
         "react/react-in-jsx-scope": "off",
         "jsx-a11y/alt-text": "warn",
         "jsx-a11y/aria-props": "warn",
         "jsx-a11y/aria-proptypes": "warn",
         "jsx-a11y/aria-unsupported-elements": "warn",
         "jsx-a11y/role-has-required-aria-props": "warn",
         "jsx-a11y/role-supports-aria-props": "warn",
       },
     }),
   ];

   export default eslintConfig;

   ```

   1. **Make sure you have:**

      - Set Prettier as the default formatter for all languages in VSCode settings
      - Set the `printWidth` in your VSCode settings to the same value as in the eslint config
      - Added the following to your VSCode `settings.json`

      ```
        "editor.codeActionsOnSave": {
          "source.fixAll.eslint": "always"
        },
      ```

   1. **Start linting!**

   <aside>

   **🚨 Ignore “Next.js plugin was not detected” warning, false positive.**

   </aside>

- Your code should now automatically format on save and ESLint should give you extensive warnings and errors, leading to better compliance with code quality standards
- Run `npm run lint` to lint the whole project
