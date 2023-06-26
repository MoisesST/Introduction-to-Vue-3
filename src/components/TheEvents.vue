<template>
  <div>
    <button @click.once="onClick">
      Send1
    </button> <br><br>
    
    <div @mouseover="onMouseOver">
      Mouse over
    </div> <br>

    <form 
      action="https://google.com"
      @submit.prevent="onSubmit"
    >
      <input 
        type="text"
        @keyup="onKeyUp"
      >
      <button>Send2</button> 
    </form>

    <br><br><br>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      onClick(e) {
        alert('click')
        console.log(e)
      },
      onMouseOver() {
        alert('mouse over')
      },
      onSubmit() {
        console.log('submit')
      },
      onKeyUp(e) {
        console.log('onKeyUp', e)
      }
    }
  }
</script>

<style></style>