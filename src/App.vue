<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
    <router-view/>
    {{ count }}
    <br>
    <!-- {{ $store.getters.doubleCount }} -->
    <button @click="$store.commit('increment')">commit</button>
    <!-- <button @click="$store.dispatch('increment')">dispatch</button> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count(){
      return this.$store.state.count
    }
  },

}
</script>


<style lang="scss">

</style>
