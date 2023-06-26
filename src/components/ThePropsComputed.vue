<template>
  <div>
    {{ fullName }}
  </div> <br>

  <h2>Incomplete Todos</h2>

  <div 
    v-for="(todo, index) in incompleteTodos"
    :key="todo.id"
  >
    To Do - {{ index }} - {{ todo.title }}
  </div>

  <h2>Completed Todos</h2>

  <div 
    v-for="(todo, index) in completeTodos"
    :key="todo.id"
  >
    To Do - {{ index }} - {{ todo.title }}
  </div>

  <h2>Todos</h2>

  <div 
    v-for="(todo, index) in todos"
    :key="todo.id"
  >
    <input 
      v-model="todo.completed"
      type="checkbox"
    >
    To Do - {{ index }} - {{ todo.title }}
  </div>

  <br><br><br>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        user: {
          first_name: 'Moisés',
          last_name: 'Teixeira'
        },
        todos: [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false,
            "imgSrc": 'https://via.placeholder.com/150'
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false,
            "imgSrc": 'https://via.placeholder.com/150'
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          }
        ]
      }
    },
    computed: {
      fullName() {
        return `${this.user.first_name} ${this.user.last_name}`
      },
      incompleteTodos() {
        return this.todos.filter(todo => !todo.completed)
      },
      completeTodos() {
        return this.todos.filter(todo => todo.completed)
      }
    }
  }
</script>

<style></style>
