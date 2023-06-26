<template>
  <TheHeader v-if="showHeader" />

  <TheForm />

  <TheEvents />

  <div v-show="showName">
    Name: {{ firstName }} <br>
    Last Name: {{ lastName }}
  </div>

  <div v-if="accessLevel === 'admin'">Admin User</div>
  <div v-else-if="accessLevel === 'marketing'">Marketing User</div>
  <div v-else>Simple User</div>

  <img alt="Vue logo" src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheForm from './components/TheForm.vue'
import TheEvents from './components/TheEvents.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    TheForm,
    TheEvents
  },
  data() {
    return {
      showHeader: true,
      firstName: 'Moisés',
      lastName: 'Teixeira',
      showName: false,
      accessLevel: 'admin'
    }
  }
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
