<template>
  <li v-for="todo in todos" :key="todo.id">
    {{todo.text}}
    <button @click="removeToDo(todo)">Remove</button>
  </li>
</template>

<script>
export default {
  name: "ToDo"
}
</script>

<style scoped>

</style>