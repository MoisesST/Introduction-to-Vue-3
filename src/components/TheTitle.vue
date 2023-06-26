<template>
  <header>
    <h1 v-if="$slots.title">
      <slot name="title" />
    </h1>
    <div class="container">
      <slot name="description" />
    </div>
    <div>
      <slot />
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      console.log(this.$el)
      console.log(this.$slots)
    }
  }
</script>

<style>
  .container {
    color: #fff;
    background: #000;
  }
</style>