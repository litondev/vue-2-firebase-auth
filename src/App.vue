<template>
  <div id="app">
   <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from "./components/NavBar.vue"

export default {
  components: {
   navbar
  }
}
</script>