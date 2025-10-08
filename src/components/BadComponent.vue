<template>
    <div class="bad-component">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <button @click="handleClick">Click me</button>
        <div v-if="condition">
            <span>{{ undefinedVar }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "BadComponent",
    data() {
        return {
            title: "Hello World",
            undefinedVariable: "not defined",
            message: "This is a message",
            condition: true,
            unusedData: "not used anywhere",
            unusedLet: "not used",
            unusedArray: [1, 2, 3, 4, 5],
        };
    },
    methods: {
        handleClick() {},
        unusedMethod() {
            return "unused method";
        },
    },
    computed: {
        unusedComputed() {
            return "unused computed";
        },
    },
};
</script>

<style>
.bad-component {
    color: red;
    background-color: blue;
    margin: 10px;
    padding: 5px;
}
</style>
// test comment
