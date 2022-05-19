<template>
  <Header /> 
  <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from './layout/Footer.vue'
import Header from './layout/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}

</script>
