<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink :to="dynamicRoute">Services</RouterLink>
    <RouterView />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dynamicRoute: { name: 'services'}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 30px;
}
nav a {
  margin: 3px;
  font-weight: bold;
  color: #2c3e50;
}
</style>
