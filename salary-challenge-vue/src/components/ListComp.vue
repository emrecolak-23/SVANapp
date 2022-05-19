<template>
  <div class="offset-1 col-md-10 mt-4">
    <table class="table table-striped">
    <thead>
        <tr>
            <th>#ID</th>
            <th>Experience</th>
            <th>Remote Allowed</th>
            <th>Salary</th>
            <th>Extra Support</th>
            <th>Thinks To Change Job</th>
            <th>Happy Rate</th>
            <th>City</th>
            <th>Company Type</th>
            <th>Number of Workers</th>
        </tr>
    </thead>
    <tbody v-if="workersInfo.length">
        <tr class="info" v-for="worker in workersInfo" :key="worker.ID">
            <td>{{worker.ID}}</td>
            <td>{{worker.experience}}</td>
            <td>{{worker.remoteAllowed}}</td>
            <td>{{worker.salary}}</td>
            <td>{{worker.extraSupport}}</td>
            <td>{{worker.thinksToChangeJob}}</td>
            <td>{{worker.happyRate}}</td>
            <td>{{worker.city}}</td>
            <td>{{worker.companyType}}</td>
            <td>{{worker.numberOfWorkers}}</td>
        </tr>                 
    </tbody>
    <tbody v-else>
          <td colspan="8"><h4>Workers data not found</h4></td>
    </tbody>
</table>
  </div>
</template>

<script>
import { computed } from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {

    const store = useStore()

    store.dispatch('addSalary/getWorkersInfo')

    const workersInfo = computed(() => store.getters['addSalary/_workersInfo'])

    return {
      workersInfo
    }

  }
}
</script>

<style scoped>

table {
  background-color: #34495e;
  border-radius: 25px;
}

table th {
  color: #f1c40f;
  background-color: #5C6D7E;
  
}

table td {
  color: #F8F6EE;
}

tr:nth-child(even){background-color: #99A4AE;}
tr:hover {background-color: #5C6D7E;}


</style>