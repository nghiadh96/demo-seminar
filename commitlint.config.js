export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"],
        ],
        "scope-empty": [2, "always"],
        "scope-case": [2, "always", "lower-case"],
        "subject-case": [2, "always", "lower-case"],
        "subject-max-length": [2, "always", 72],
        "header-max-length": [2, "always", 100],
    },
};
