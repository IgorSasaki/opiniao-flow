// eslint.config.mjs
import globals from "globals";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import importHelpersPlugin from "eslint-plugin-import-helpers";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import svgJsxPlugin from "eslint-plugin-svg-jsx";
import nextPlugin from "@next/eslint-plugin-next"; // Usaremos o plugin direto para maior controle
import { fixupConfigRules } from "@eslint/compat"; // Para compatibilidade com regras de plugins antigos

export default [
  // 1. Configurações base do ESLint
  js.configs.recommended, // Regras recomendadas para JavaScript

  // 2. Configurações de ambiente
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Para código de frontend no navegador
        ...globals.node, // Para Node.js (Next.js server components, APIs, scripts)
        ...globals.commonjs, // Para CommonJS (se ainda usar em algum lugar)
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module", // Usar módulos ES
        ecmaFeatures: {
          jsx: true, // Habilitar suporte a JSX
        },
      },
    },
  },

  // 3. Configurações para Next.js
  {
    files: ["**/*.js", "**/*.jsx"], // Aplicar apenas a arquivos JS/JSX
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Desabilitar regras que podem conflitar com Prettier ou Standard
      "react/react-in-jsx-scope": "off", // Já coberto pelo novo JSX transform
      "react/prop-types": "off", // Não usamos PropTypes com Zod/JSdoc
      "camelcase": "off", // Desabilitado na config anterior
      "space-before-function-paren": "off", // Desabilitado na config anterior
    },
  },

  // 4. Configurações para Prettier
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // 5. Configurações para Import Helpers
  {
    plugins: {
      "import-helpers": importHelpersPlugin,
    },
    rules: {
      "import-helpers/order-imports": [
        "warn",
        {
          "newlinesBetween": "always",
          "groups": [
            ["module", "/^@ant/", "/^@fullstory/"],
            "/^@/",
            ["parent", "sibling", "index"]
          ],
          "alphabetize": { "order": "asc", "ignoreCase": true }
        }
      ],
      // Desabilitar a regra nativa sort-imports para evitar conflito com import-helpers
      "sort-imports": "off",
    },
  },

  // 6. Configurações para Unused Imports
  {
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "none", // Mantido como na sua config anterior
          "argsIgnorePattern": "^_"
        }
      ],
    },
  },

  // 7. Configurações para Perfectionist
  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      "perfectionist/sort-interfaces": "error", // Embora seja JS, pode ser útil para JSDoc ou tipos inline
      "perfectionist/sort-jsx-props": [
        "error",
        {
          "type": "natural",
          "order": "asc",
          "groups": ["multiline", "unknown", "shorthand"]
        }
      ],
    },
  },

  // 8. Configurações para SVG JSX
  {
    plugins: {
      "svg-jsx": svgJsxPlugin,
    },
    rules: {
      "svg-jsx/camel-case-dash": "error",
      "svg-jsx/camel-case-colon": "error",
      "svg-jsx/no-style-string": "error",
    },
  },

  // 9. Regras gerais e overrides
  {
    rules: {
      "no-useless-constructor": "off", // Desabilitado na config anterior
      "no-use-before-define": "off", // Desabilitado na config anterior
    },
  },

  // 10. Configurações para TypeScript (se houver arquivos .ts ou .tsx)
  // Esta seção é opcional, mas recomendada para arquivos como next-env.d.ts
  // ou se você decidir usar TS em partes do projeto.
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json", // Garanta que seu tsconfig.json esteja configurado
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // Overrides específicos para TypeScript
      "@typescript-eslint/no-use-before-define": "off", // Desabilitado na config anterior
      "@typescript-eslint/no-empty-interface": "off", // Desabilitado na config anterior
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "none", // Mantido como na sua config anterior
          "argsIgnorePattern": "^_"
        }
      ],
    },
  },

  // 11. Ignorar arquivos
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts", // Manter ignorado se não for lintar
      "node_modules/",
      "dist/",
      "coverage/",
    ],
  },
];
