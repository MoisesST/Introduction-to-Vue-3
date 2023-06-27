<template>
  <div>
    {{ $route.params.id }}
    User <br>

    <button @click="login">
      Login
    </button>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route)
    console.log(this.$router)
  },
  methods: {
    login() {
      // ajax login
      // this.$router.push('/')
      this.$router.push({ name: 'home' })
      console.log('I am here!')
    }
  }
}
</script>