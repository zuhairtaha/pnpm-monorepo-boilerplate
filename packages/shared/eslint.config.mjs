import pluginJs from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";
import { eslintBaseRules } from "../../eslintBaseRules.mjs";

export default tseslint.config(
  { files: ["src/**/*.ts"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      unicorn: eslintPluginUnicorn
    }
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: eslintBaseRules
  }
);
