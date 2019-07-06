<template>
  <div class="side-bar">
    <div class="row">
      <div class="col-12 user_name">
        Noah Christensen
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span class="user_contact">
          noah_christensen@xyz.com <br />
          +91 9910602019
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span class="profile_link"><a href="#" >VIEW YOUR PROFILE </a><i class=" fa fa-angle-right pull-right"></i></span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 Sidebar-options">
        <span class="option">
          <a href="/#/" @click="selectOption(null, '')" :class="[(activeTab == '') ? 'active' : 'inactive']">
           <span> <i class="fa fa-pie-chart"></i> DASHBOARD </span>
          </a>
        </span>
        <span class="option">
          <a href="#" @click="toggleMyJars" :class="[(activeTab == 'jars_options') ? 'active' : 'inactive']">
            <span><i class="fa fa-calculator"></i> MY JARS </span> <i :class="[(myJarOptions) ? 'fa fa-angle-down' : 'fa fa-angle-right']"></i>
          </a>
        </span>
        <div class="row" v-show="myJarOptions">
          <div class="col-12 sub-option">
            <a 
              href="/#/option1" 
              @click="selectOption('option1', 'jars_options')" 
              :class="[(activeSubTab == 'option1') ? 'active' : 'inactive']"
            >
              Hello I am option
            </a>
          </div>
        </div>
        <span class="option">
          <a href="#" @click="togglePaymentOptions" :class="[(activeTab == 'payment') ? 'active' : 'inactive']">
            <span><i class="fa fa-google-wallet"></i> PAYMENTS & WITHDRAWLS </span> <i :class="[(paymentOptions) ? 'fa fa-angle-down' : 'fa fa-angle-right']"></i>
          </a> 
        </span>
        <div class="row" v-show="paymentOptions">
          <div class="col-12 sub-option">
            <a 
              href="/#/option1" 
              @click="selectOption('option2', 'payment')" 
              :class="[(activeSubTab == 'option2') ? 'active' : 'inactive']"
            >
              Hello I am option
            </a>
          </div>
        </div>
        <span class="option">
          <a href="/#/activities" @click="selectOption( null, 'activities')" :class="[(activeTab == 'activities') ? 'active' : 'inactive']">
            <span><i class="fa fa-sliders"></i> ACTIVITIES</span> 
          </a>
        </span>
        <span class="option">
          <a href="/#/documents" @click="selectOption( null, 'documents')" :class="[(activeTab == 'documents') ? 'active' : 'inactive']">
            <span><i class="fa fa-file"></i> DOCUMENTS </span>
          </a>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="btn-steps">NEXT STEPS &emsp; <i class="fa fa-angle-down"></i></button>
      </div>
    </div>
    <footer class="sidebar-footer">
      <div class="row">
        <div class="col-3 footer-option">
          <span class="option-icon"><i class="fa fa-sign-out"></i></span><br />
          <span class="option-text">LOG OUT</span>
        </div>
        <div class="col-3 footer-option">
          <span class="option-icon"><i class="fa fa-question-circle-o"></i></span><br />
          <span class="option-text">FAQ</span>
        </div>
        <div class="col-3 footer-option">
          <span class="option-icon"><i class="fa fa-ellipsis-h"></i></span><br />
          <span class="option-text">MORE</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 copyright">
          Copyright <i class="fa fa-copyright"></i> Moneyjar, 2017
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data: function () {
    return {
      activeTab: this.$route.path.substr(1),
      activeSubTab: this.$route.path.substr(1),
      myJarOptions: false,
      paymentOptions: false
    }
  },
  methods: {
    toggleMyJars () {
      this.myJarOptions = !this.myJarOptions
    },
    togglePaymentOptions () {
      this.paymentOptions = !this.paymentOptions
    },
    selectOption (subOption, menuOption) {
      this.activeSubTab = subOption
      console.log(menuOption)
      this.activeTab = menuOption
    }
  }
}
</script>
