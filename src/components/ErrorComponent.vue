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
      title: "Error Component",
      message: 'This component has many errors',
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" }
      ],
      unusedData: 'This will trigger unused-vars error',
      anotherUnusedVar: 42
    }
  },
  methods: {
    handleClick() {
      console.log('Button clicked')
      console.warn('This is a warning')
      console.error('This is an error')
      
      // Undefined variable
      console.log(undefinedVariable)
      
      // Unused variable
      const unusedLocalVar = 'not used'
      
      // Missing semicolon
      const missingSemicolon = 'test'
      
      // Unused function
      function unusedFunction() {
        return 'never called'
      }
      
      // Bad object structure
      const badObject = {
        prop1: 'value1',
        prop2: 'value2'
      }
      
      // Unused array
      const unusedArray = [1, 2, 3]
      
      // Another unused variable
      let anotherVar = 'also unused'
      
      // Debugger statement
      debugger
      
      // More console statements
      console.info('Info message')
      console.debug('Debug message')
    },
    
    // Unused method
    unusedMethod() {
      return 'This method is never called'
    },
    
    // Method with more errors
    anotherMethod() {
      const unusedInMethod = 'unused'
      console.log('Another console statement')
      
      // Undefined variable
      console.log(anotherUndefinedVar)
      
      // Unused arrow function
      const unusedArrow = () => 'unused'
      
      // More unused variables
      let unusedLet = 'unused'
      var unusedVar = 'unused'
      
      // Another unused object
      const anotherObject = { key: 'value' }
      
      // Another unused array
      const anotherArray = ['a', 'b', 'c']
    }
  },
  
  // Unused computed property
  computed: {
    unusedComputed() {
      return 'never used'
    }
  },
  
  // Unused watcher
  watch: {
    title() {
      console.log('Title changed')
    }
  }
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
