import axios from "axios"

const addSalary = {
  namespaced: true,
  state: {
    workersInfo: []
  },
  getters: {
    _workersInfo: state => state.workersInfo
  },
  mutations: {
    setWorkersInfo(state, data) {
      state.workersInfo = data
    },
    addWorkersInfo(state, data) {
      state.workersInfo = state.workersInfo.push(data)
    }
  },
  actions: {
    async addSalaryInfo(VuexStore, data) {     
        await axios.post(`https://nvts5jq5la.execute-api.us-east-1.amazonaws.com/dev/create-item/${data.ID}`, data)
              .then(response => {
                VuexStore.commit('addWorkersInfo', response.data)
        }).catch(error => {
          console.log(error)
        })
    },
    async getWorkersInfo(VuexStore) {
       await axios.get('https://nvts5jq5la.execute-api.us-east-1.amazonaws.com/dev/get-items')
            .then(response => {
              VuexStore.commit('setWorkersInfo', response.data)
            }).catch(error => {
              console.log(error)
            })
    }
  }
}

export default addSalary