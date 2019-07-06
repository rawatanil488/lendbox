<template>
  <div>
    <GChart
      type="PieChart"
      :data="emiChartData"
      :options="chartOptions"
      class="chart-height"
    />
  </div>  
</template>
<script>
import { GChart } from "vue-google-charts"
import { mapGetters } from 'vuex';

export default {
  name: 'DoughNutChart',
   data () {
    return {
      chartOptions: {
        title: '',
        subtitle: ''
      }
    }
  },
  components: {
    GChart
  },
  computed: {
    ...mapGetters({
      emiChartData: 'donutChartDataGetter'
    })
  }
}
</script>
