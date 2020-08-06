<template>
<div>
  <Toolbar1/>
  <ul>
    <!-- <v-switch
        v-model="example2"
        inset
      ></v-switch>
      <p color="red--text" > {{ switchTodo }} </p> -->
      <button @click="$store.commit('todos/increment')">
    {{ $store.state.todos.counter }}
  </button>
  <button @click="$store.commit('todos/switch')">
    {{ this.$store.state.todos.example }}
  </button>
  {{ $store.state.drawer.show }}
    <li v-for="todo in todos" :key="todo.id">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">remove</button>
    </li>
    <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
  </ul>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    },
    // example2 () {
    //   return this.$store.commit('todos/switch')
    //   // this.$store.state.todos.example = !this.$store.state.todos.example
    // },
    // switchTodo () {
    //   return this.$store.state.todos.example
    //   // commit('todos/switch')
    // }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    removeTodo (todo){
      this.$store.commit('todos/remove', todo)
    },
    // switchTodo () {
    //   this.$store.commit('todos/switch')
    // }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
