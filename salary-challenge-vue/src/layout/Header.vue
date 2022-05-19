<template>
  <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Salary Challenge</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" :class="{ active: page == 'Home' }" :to="{name: 'Home'}">Home</router-link>
      <router-link class="nav-item nav-link" :class="{ active: page == 'List'}" :to="{name: 'List'}">List</router-link>
      <router-link class="nav-item nav-link" :class="{ active: page == 'Form'}" :to="{name: 'Form'}">Form</router-link>
    </div>
  </div>
</nav>
</template>

<script>
import {useRoute} from 'vue-router'
import {ref, watch} from 'vue'
export default {
    setup() {
    const route = useRoute()
    const page = ref(route.name)

    watch(route, (newValue, oldValue) => {
      page.value = newValue.name
    })

    return {
      page
    }
  }
}
</script>

<style scoped>

.navbar {
  background-color: #34495e;
}
.nav-item {
  cursor: pointer;
  color: #f1c40f;
}

.active {
  position: relative;
  text-decoration: none;
  border-radius: 20%;
  font-size: 18px;
  box-shadow: 0 5px darkorange;
}

.navbar-brand {
  color: #F8F6EE;
}

</style>