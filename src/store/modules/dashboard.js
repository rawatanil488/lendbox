import axios from 'axios'

const state = {
  dashboardData: {},
  lineChartData: [],
  donutChartData: []
}

const getters = {
  dashboardDataGetter: state => state.dashboardData,
  lineChartDataGetter: state => state.lineChartData,
  donutChartDataGetter: state => state.donutChartData
}

const actions = {
  getDashboardData ({ commit }) {
    axios.get('http://13.126.66.83:3000/dashboard-data').then((res) => {
      let dashboardData = res.data.body.data
      commit('dashboardDataRecieved', dashboardData)

      let lineArr = []
      let lineData = res.data.body.data.graph.emiChartData
      lineArr = lineData.map(element => [
        element.emiDate = element.emiDate,
        element.emiAmount = element.emiAmount,
        element.noOfemis = element.noOfemis,
        element.emiRecvAmnt = element.emiRecvAmnt,
        element.noOfRecvEmis = element.noOfRecvEmis
      ]) 
      lineArr.unshift([ 'EMI Date', 'Emi Amount', 'No. of EMIs', 'Amount Recieved', 'No. of EMIs Recieved' ])
      commit('lineChartDataRecieved', lineArr)

      let pieArr = []
      pieArr.push(['', ''])
      let donutData = res.data.body.data.creditChart
      for (const value in donutData) {
        pieArr.push([ value, donutData[value]])
      }

      commit('donutChartDataRecieved', pieArr)
    })
    .catch((err) => {
      console.error(err)
    })
  }
}

const mutations = {
  dashboardDataRecieved (state, data) {
    state.dashboardData = data
  },
  lineChartDataRecieved (state, data) {
    state.lineChartData = data
  },
  donutChartDataRecieved (state, data) {
    state.donutChartData = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}