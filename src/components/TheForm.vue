<template>
  <div>
    <br><br>

    <div>
      Two-way data binding
      v-model -> forms
    </div>

    <br><br>

    <div>
      <label>Name</label> <br>
      <input
        v-model="name"
        type="text"
      > <br>
      {{ name }}
    </div>

    <br><br>

    <div>
      <label>Classification</label> <br>
      <select v-model="classification">
        <option value="">Choice</option>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select> <br>
      {{ classification }}
    </div>

    <br><br>

    <div>
      <label>NewsLetter</label> <br>
      <input
        v-model="newsLetter"
        type="radio"
        value="yes"
      > Yes
      <input
        v-model="newsLetter"
        type="radio"
        value="no"
      > No <br>
      {{ newsLetter }}
    </div>

    <br><br>

    <div>
      <label>You agree to our contract?</label>
      <input
        v-model="contract"
        type="checkbox"
      > <br>
      {{ contract }}
    </div>

    <br><br>

    <div>
      <label>Choose the color you like</label>
      <input
        v-model="colors"
        type="checkbox"
        value="Blue"
      > Blue
      <input
        v-model="colors"
        type="checkbox"
        value="Yellow"
      > Yellow <br>
      {{ colors }}
    </div>

    <br><br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Moisés',
        classification: '',
        newsLetter: 'no',
        contract: 'yes',
        colors: []
      }
    }
  }
</script>

<style></style>