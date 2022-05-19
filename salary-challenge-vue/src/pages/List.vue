<template>
  <suspense>
    <template #default>
      <list-comp />
    </template>
    <template #fallback>
      <div>
          <h3 class="d-flex justify-content-center">Loading...</h3>
      </div>
    </template>
  </suspense>

</template>

<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";


const ListComp = defineAsyncComponent(() => import('../components/ListComp.vue'))

</script>
