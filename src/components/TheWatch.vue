<template>
  <div>
    <input 
      v-model="name"
      type="text"
    >
    {{ name }}

    <br><br><br>

    <input 
      v-model="user.first_name"
      type="text"
    >

    <br><br>

    <input 
      v-model="user.last_name"
      type="text"
    >
    {{ user.first_name }} {{ user.last_name }}

    <br><br><br>

    <select v-model="pageCount">
      <option>5</option>
      <option>10</option>
      <option>15</option>
    </select> <br>
    {{ pageCount }}

    <br><br><br>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'Moisés',
      pageCount: 5,
      user: {
        first_name: 'Mario',
        last_name: 'Bros'
      }
    }
  },
  watch: {
    name(vl) {
      if (vl.length >= 3) {
        this.saveUserName()
      }
    },
    pageCount() {
      this.changePage()
    },
    user: {
      handler() {
        console.log('Editing User')
      },
      deep: true
    }
    // user() { // change object attribute
    //   console.log('Editing User')
    // }
  },
  methods: {
    saveUserName() {
      console.log('Ajax')
      console.log(this.name)
    },
    changePage() {
      console.log('Ajax Change Page')
    }
  }
}
</script>

<style></style>
