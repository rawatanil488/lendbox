<template>
  <div>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
<style>
/* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/css/font-awesome.min.css';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/css/simple-line-icons.css';
</style>


<style lang="scss">
  // Import Main styles for this application
  @import './scss/style';
</style>
