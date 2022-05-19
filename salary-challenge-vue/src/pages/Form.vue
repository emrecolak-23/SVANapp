<template>
  <div class="form offset-3 col-md-6 mt-5 mb-5">
    <form @submit.prevent="addSalaryIncome">
      <div class="mb-3">
        <h4>Yan Haklar</h4>
        <div class="form-check" v-for="(benefit, index) in benefits" :key="index">
          <input
            class="form-check-input"
            v-model="checkedBenefit"
            :value="benefit"
            type="checkbox"
            :id="index"
          />
          <label class="form-check-label" :for="index">
            {{benefit}}
          </label>
        </div>
      </div>
      <div class="mb-3">
        <label for="city" class="form-label"><h4>City</h4></label>
        <input
          type="text"
          class="form-control"
          v-model="city"
          id="city"
        />
      </div>
      <div class="mb-3">
          <h4>Company Type</h4>
          <select v-model="companyType" class="form-select" aria-label="Default select example">
            <option disabled selected>Select Company type</option>
            <option >Institutional</option>
            <option >Start-Up</option>
          </select>
      </div>
      <div class="mb-3">
          <h4>Experience Year</h4>
          <select v-model="experience" class="form-select" aria-label="Default select example">
            <option disabled selected>Select Company type</option>
            <option >0-2</option>
            <option >2-5</option>
            <option >5-10</option>
            <option >10-20</option>
            <option >20+</option>
          </select>
      </div>
      <div class="mb-3">
        <h4>Extra Support</h4>
        <div class="form-check">
            <input class="form-check-input" value="true" v-model="extraSupport" type="radio" id="extraSupportTrue">
            <label class="form-check-label" for="extraSupportTrue">
              True
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" value="false" v-model="extraSupport" type="radio" id="extraSupportFalse" checked>
            <label class="form-check-label" for="extraSupportFalse">
              False
            </label>
          </div>
      </div>
      <div class="mb-3">
        <label for="happyRateId"><h4>Happy Rate</h4></label>
          <select v-model="happyRate" class="form-select" id="happyRateId">
            <option v-for="index in 10" :key="index">{{index}}</option>
          </select>
      </div>
      <div class="mb-3">
        <h4>Number Of Workers</h4>
          <select v-model="numberOfWorkers" class="form-select" aria-label="Default select example">
            <option disabled selected>Select Number of Workers</option>
            <option >0-10</option>
            <option >10-50</option>
            <option >50-100</option>
            <option >100-1000</option>
            <option >1000+</option>
          </select>
      </div>
      <div class="mb-3">
        <h4>Remote Allowed</h4>
        <div class="form-check">
            <input class="form-check-input" value="true" v-model="remoteAllowed" type="radio" id="remoteAllowedTrue">
            <label class="form-check-label" for="remoteAllowedTrue">
              True
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" value="false" v-model="remoteAllowed" type="radio" id="remoteAllowedFalse" checked>
            <label class="form-check-label" for="remoteAllowedFalse">
              False
            </label>
          </div>
      </div>
      <div class="mb-3">
        <h4>Salary</h4>
          <select v-model="salary" class="form-select" aria-label="Default select example">
            <option disabled selected>Select Company type</option>
            <option >5000-10000</option>
            <option >10000-15000</option>
            <option >15000-20000</option>
            <option >20000-30000</option>
            <option >30000+</option>
          </select>
      </div>
      <div class="mb-3">
         <label for="thingsYouKnow" class="form-label"><h4>Things You Know</h4></label>
        <input
          type="text"
          class="form-control"
          v-model="thingsYouKnow"
          id="thingsYouKnow"
        />
      </div>
      <div class="mb-3">
        <h4>Thinks To Change Job</h4>
        <div class="form-check">
            <input class="form-check-input" value="true" v-model="thinksToChangeJob" type="radio" id="thinksToChangeJobTrue">
            <label class="form-check-label" for="thinksToChangeJobTrue">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" value="false" v-model="thinksToChangeJob" type="radio" id="thinksToChangeJobFalse" checked>
            <label class="form-check-label" for="thinksToChangeJobFalse">
              No
            </label>
          </div>
      </div>
      <div class="mb-3">
         <label for="title" class="form-label"><h4>Title</h4></label>
        <input
          type="text"
          class="form-control"
          v-model="title"
          id="title"
        />
      </div>
      <button type="submit" class="btn">Add Salary Info</button>
    </form>
  </div>
</template>

<script> 
import {ref, watch} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {

  setup() {

    const store = useStore()
    const router = useRouter()

    const benefits = ["Özel sağlık sigortası", "Yemek kartı", "Doğum günü izni", "Eğitim Destedi"]

    const checkedBenefit = ref([])
    const city = ref('')
    const companyType = ref('')
    const experience = ref('')
    const extraSupport = ref(false)
    const happyRate = ref(null)
    const numberOfWorkers = ref('')
    const remoteAllowed = ref(false)
    const salary = ref('')
    const thingsYouKnow = ref('')
    const thinksToChangeJob = ref(false)
    const title = ref('')



    async function addSalaryIncome() {
      const data = {
        ID: new Date().getTime(),
        benefits: checkedBenefit.value,
        city: city.value,
        companyType: companyType.value,
        experience: experience.value,
        extraSupport: (extraSupport.value == 'true'),
        happyRate: parseInt(happyRate.value),
        numberOfWorkers: numberOfWorkers.value,
        remoteAllowed: (remoteAllowed.value == 'true'),
        salary: salary.value,
        thingsYouKnow: thingsYouKnow.value,
        thinksToChangeJob: (thinksToChangeJob.value == 'true'),
        title: title.value
      }
      const result = await store.dispatch('addSalary/addSalaryInfo',data)
      router.push({name: 'List'})
    }

    watch([city, thingsYouKnow, title ], ([newValCity, newValYouKnow, newValTitle], [oldValCity,oldValYouKnow, oldValTitle]) => {
      city.value = newValCity.replace(/[&\/\\()$~%.'":*?<>^{}]/g, "")
      thingsYouKnow.value = newValYouKnow.replace(/[&\/\\()$~%.'":*?<>^{}]/g, "")
      title.value = newValTitle.replace(/[&\/\\()$~%.'":*?<>^{}]/g, "")
    })


    return {
      benefits,
      checkedBenefit,
      city,
      companyType,
      experience,
      extraSupport,
      happyRate,
      numberOfWorkers,
      remoteAllowed,
      salary,
      thingsYouKnow,
      thinksToChangeJob,
      title,
      addSalaryIncome
    }
  }

}

</script>


<style scoped>

.btn {
  color: #F8F6EE;
  padding: 16px 24px;
  position: relative;
  text-decoration: none;
  border-radius: 20%;
  font-size: 16px;
  box-shadow: 0 5px darkorange;
}

.btn:hover {
  background-color: #2c3e50;
  cursor: pointer;
  color: #f1c40f;
  font-family: fantasy;
  font-size: 12px;
}

.form {
  border-radius: 25px;
  background-color: #2c3e50;
  padding: 20px;
}

input:enabled {
  background-color: #2c3e50;
  border-radius: 1em;
  color: #F8F6EE;
  border-color: #F8F6EE;
}
input:focus { 
    outline: none !important;
    border-color: #F8F6EE;
    box-shadow: 0 0 10px darkorange;
}
label {
  color: #F8F6EE;
}

h4 {
  color: darkorange
}
select {
  background-color: #2c3e50;
  border-radius: 1em;
  color: #F8F6EE;
}

select:focus {
  outline: none !important;
  border-color: #F8F6EE;
  box-shadow: 0 0 10px darkorange;
}

</style>
