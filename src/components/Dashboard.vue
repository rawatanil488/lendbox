<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-12 updated-time">
        Last Update Thu 9th February, 2017 <span class="time-icon"><i class="fa fa-clock-o"></i></span>
      </div>
    </div>
    <div class="bg-green">
      <div class="row">
        <div class="col-3 container">
          <span class="info-icon"><i class="fa fa-database"></i></span>
          <span class="info-text">
            Total Funded value <i class="fa fa-line-chart"></i>
            <span class="info-value">{{dashboardData.amountToInvest}}</span>
          </span>
        </div>
        <div class="col-3 container">
          <span class="info-icon"><i class="fa fa-database"></i></span>
          <span class="info-text">
            Amount Invested
            <span class="info-value">{{dashboardData.amountDisbursed}}</span>
          </span>
        </div>
        <div class="col-3 container">
          <span class="info-icon"><i class="fa fa-database"></i></span>
          <span class="info-text">
            Total gain <i class="fa fa-line-chart"></i> 
            <span class="info-value">{{dashboardData.interestReceived}}</span>
          </span>
        </div>
        <div class="col-2 container">
          <span class="info-icon"><i class="fa fa-database"></i></span>
          <span class="info-text">
            Average Investment <i class="fa fa-angle-down"></i>
            <span class="info-value">{{dashboardData.avgInvestment}}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="row bg-white">
      <div class="col-7">
        <lineChart />
      </div>
      <div class="col-4">
        <pieChart />
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from './PieChart'
import lineChart from './LineChart'
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {
      
    }
  },
  components: {
    lineChart,
    pieChart
  },
  computed: {
    ...mapGetters({
      dashboardData: 'dashboardDataGetter'
    })
  },
  created () {
    this.$store.dispatch('getDashboardData')
  }
}
</script>
