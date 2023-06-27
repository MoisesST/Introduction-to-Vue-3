<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="updateUser">
    Update profile
  </button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    updateUser() {
      const newUser = {
      first_name: 'Rau',
      last_name: 'Gil',
      email: 'rau@gil.com',
      }
      this.$store.commit('storeUser', newUser)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
