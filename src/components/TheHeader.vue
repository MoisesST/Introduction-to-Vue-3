<template>
  <div>
    <h1 :class="{ 'title': false, 'title-home': isHome }">
      My first Vue project
    </h1>

    <p :class="pClass">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio
      consequatur possimus officia dolor eius, labore fugiat temporibus, 
      expedita tempora quae deleniti, doloremque officiis quaerat inventore illo
      ipsam a sapiente!
    </p>

    <p :style="styleClasse">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio
      consequatur possimus officia dolor eius, labore fugiat temporibus, 
      expedita tempora quae deleniti, doloremque officiis quaerat inventore illo
      ipsam a sapiente!
    </p>

    <div
      v-for="(obj, index) in todos"
      :key="obj.id"
      class="todos-item"
    >
      <img
        v-if="obj.imgSrc"
        :src="obj.imgSrc"
      >
      {{ index }} - {{ obj.title }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isHome: true,
        pClass: ['text', 'text-home'],
        styleClasse: { 'color': 'aqua', backgroundColor: '#000' },
        todos: [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false,
            "imgSrc": 'https://via.placeholder.com/150'
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false,
            "imgSrc": 'https://via.placeholder.com/150'
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          }
        ]
      }
    }
  }
</script>

<style>
  .title-home {
    font-size: 40px;
    color: #0f0;
  }
  .title {
    font-size: 20px;
    color: #00f;
  }
  .text {
    color:#f00;
  }
  .text-home {
    color: #42b;
  }
  .todos-item {
    margin: 0 0 5px 0;
    padding: 3px 6px;
    text-align: start;
    color: #fff;
    background: #000;
  }
</style>