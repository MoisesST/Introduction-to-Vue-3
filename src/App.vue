<template>
  <TheHeader v-if="showHeader" />

  <TheTitle>
    <!-- <template v-slot:title>
      <h1>App</h1>
    </template> -->
    <template v-slot:description>
      <p>My mango</p>
    </template>
  </TheTitle>

  <TheForm />

  <TheEvents />

  <ThePropsComputed />

  <TheWatch/>

  <TheLifeCycle />

  <div v-show="showName">
    Name: {{ firstName }} <br>
    Last Name: {{ lastName }}
  </div>

  <div v-if="accessLevel === 'admin'">Admin User</div>
  <div v-else-if="accessLevel === 'marketing'">Marketing User</div>
  <div v-else>Simple User</div>

  <img alt="Vue logo" src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <BaseCard />

  <div class="card">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat
    itaque labore, obcaecati dolorum, ipsam ipsa, iure nam minus excepturi
    cumque voluptates provident laboriosam nulla aliquam! Quos eveniet non vel?
  </div>

  <BaseCard />

  <BaseAlert
    :variant="variant"
  >
    {{ text }}
  </BaseAlert>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import TheHeader from '@/components/TheHeader'
import TheTitle from '@/components/TheTitle'
import TheForm from '@/components/TheForm'
import TheEvents from '@/components/TheEvents'
import ThePropsComputed from '@/components/ThePropsComputed'
import TheWatch from '@/components/TheWatch'
import TheLifeCycle from '@/components/TheLifeCycle'
import BaseCard from '@/components/BaseCard'
import BaseAlert from '@/components/BaseAlert'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    TheForm,
    TheEvents,
    ThePropsComputed,
    TheWatch,
    TheLifeCycle,
    TheTitle,
    BaseCard,
    BaseAlert
},
  data() {
    return {
      showHeader: true,
      firstName: 'Moisés',
      lastName: 'Teixeira',
      showName: false,
      accessLevel: 'admin',
      variant: 'success',
      text: 'Your form has been sent successfully! hehe'
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
