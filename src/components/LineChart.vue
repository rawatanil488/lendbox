<template>
  <div>
    <GChart
      type="LineChart"
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
  name: 'LineChart',
   data () {
    return {
      chartOptions: {
        title: 'EMI Chart',
        subtitle: ''
      }
    }
  },
  components: {
    GChart
  },
  computed: {
    ...mapGetters({
      emiChartData: 'lineChartDataGetter'
    })
  }
}
</script>
