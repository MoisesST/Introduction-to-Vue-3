<template>
  <div :class="baseClass">
    {{ test }}
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        default: ''
      },
      test: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
      baseClass() {
        return [
          'alert',
          this.variant ? `alert-${this.variant}`  : ''
        ]
      }
    }
  }
</script>

<style scoped>
  .alert {
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: #ddd;
  }
  .alert-success {
    background: #42b983;
    color: #fff;
  }
  .alert-danger {
    background: #f00;
    color: #fff;
  }
</style>