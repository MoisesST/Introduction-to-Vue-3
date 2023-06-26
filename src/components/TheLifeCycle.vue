<template>
  <div>
    <TheHeader v-if="showHeader" />
    <h1>Hello Wold</h1>
    {{ name }} <br>

    <input
      v-model="name"
      type="text"
    > <br><br><br>

    <button @click="showHeader = !showHeader">
      Turn on and turn off
    </button>

    <br><br><br>
  </div>
</template>

<script>
  import TheHeader from './TheHeader'

  export default {
    name: 'App',
    components: { TheHeader },
    data() {
      return {
        name: 'Moisés',
        showHeader: true
      };
    },
    // beforeUpdate() {
    //   console.log('beforeUpdate', this.name);
    // },
    // updated() {
    //   console.log('updated', this.name);
    // },
    // beforeCreate() {
    //   console.log("beforeCreate");
    //   console.log("State:", this.name);
    //   console.log("DOM:", this.$el);
    // },
    // created() {
    //   console.log("created");
    //   console.log("State:", this.name);
    //   console.log("DOM:", this.$el);
    // },
    // beforeMount() {
    //   console.log("beforeMount");
    //   console.log("State:", this.name);
    //   console.log("DOM:", this.$el);
    // },
    // mounted() {
    //   console.log("mounted");
    //   console.log("State:", this.name);
    //   console.log("DOM:", this.$el);
    // },
    // beforeUnmount() {
    //   console.log("beforeUnmount");
    //   console.log("State:", this.name);
    //   console.log("DOM:", this.$el);
    // },
    // unmounted() {
    //   console.log("unmounted");
    //   console.log("State:", this.name);j
    //   console.log("DOM:", this.$el);
    // },
  }
</script>

<style></style>
