import js from "@eslint/js"
import globals from "globals"
import pluginVue from "eslint-plugin-vue"
import prettierConfig from "eslint-config-prettier"

export default [
    js.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    prettierConfig,
    {
        files: ["**/*.{js,mjs,cjs,vue}"],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "no-unused-vars": "error",
            "no-console": "warn",
            "no-debugger": "error",
        },
    },
]
