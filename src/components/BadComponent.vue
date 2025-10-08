<template>
<div class="bad-component">
<h1>{{title}}</h1>
<p>{{message}}</p>
<button @click="handleClick">Click me</button>
<div v-if="condition">
<span>{{undefinedVar}}</span>
</div>
</div>
</template>

<script>
export default {
name:'BadComponent',
data(){
return {
title:"Hello World",
message:'This is a message',
condition:true,
unusedData:"not used anywhere"
}
},
methods:{
handleClick(){
console.log("Button clicked");
console.log(undefinedVariable);
const unusedVar="not used";
console.log("Multiple logs");
console.warn("Warning");
},
unusedMethod(){
return "unused";
}
},
computed:{
unusedComputed(){
return "unused computed";
}
}
}
</script>

<style>
.bad-component{
color:red;
background-color:blue;
margin:10px;
padding:5px;
}
</style>
