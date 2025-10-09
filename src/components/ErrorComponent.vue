<template>
  <div class="error-component">
    <h1>{{ title }}</h1>
    <button @click="handleClick">Click me</button>
    <p>{{ message }}</p>
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
  data() {
    return {
      title: 'Error Component',
      message: 'This component has many errors',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
      unusedData: 'This will trigger unused-vars error',
      anotherUnusedVar: 42,
      color: ['red', 'blue', 'green'],
    }
  },
  methods: {
    handleClick() {
      // Undefined variable
      // Unused variable
      // Missing semicolon
      // Unused function
      // Bad object structure
      // Unused array
      // Another unused variable
      // Debugger statement
      // More console statements
    },

    // Unused method
    unusedMethod() {
      return 'This method is never called'
    },

    // Method with more errors
    anotherMethod() {
      // Undefined variable
      // Unused arrow function
      // More unused variables
      // Another unused object
      // Another unused array
    },
  },

  // Unused computed property
  computed: {
    unusedComputed() {
      return 'never used'
    },
  },

  // Unused watcher
  watch: {
    title() {},
  },
}
</script>

<style scoped>
.error-component {
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
}

h1 {
  color: red;
  font-size: 24px;
}

button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}
</style>
