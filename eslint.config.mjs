import globals from "globals";
import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import jquery from "eslint-plugin-jquery"

const ignores = ["public/*.js", "!public/script.js", "eslint.config.js"];

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores,
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        plugins: {
            'prettier-config': prettierConfig,
            'prettier': prettierPlugin,
            'js': pluginJs,
            jquery

        },

        languageOptions: {
            env: {
                jquery: true
            },
            globals: {
                ...globals.browser, ...globals.node, "$": true
            },
        },
        ...pluginJs.configs.recommended
    },
];
