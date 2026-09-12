import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default defineConfig([
    globalIgnores([
        "**/node_modules",
        "**/dist",
        "**/.git",
        "**/.github",
        "**/.vscode",
        "**/coverage",
    ]),

    js.configs.recommended,

    {
        files: ["**/*.ts"],

        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },

        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        rules: {
            ...typescriptEslint.configs.recommended.rules,

            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-require-imports": "warn",
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/no-unused-vars": "off",
            "no-case-declarations": "off",
            "no-fallthrough": "off",
            "no-undef": "warn",
        },
    },
]);