<template>
  <div class="home">
    <NavBar></NavBar>
    <NavBar2></NavBar2>
    <img alt="Vue logo" src="../assets/logo.png">
    <i class="icon fas fa-user"></i>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import NavBar2 from '@/components/NavBar2.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar,
    NavBar2
  }
}
</script>
