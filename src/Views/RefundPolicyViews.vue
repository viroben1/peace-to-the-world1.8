<template>
  <div>
    <!-- <AppNavbar :dynamicData="dynamicData" /> -->
    <RefundPolicyPage :refundPolicyData="refundPolicyData" />
    
    <PolicyFooter></PolicyFooter>
  </div>
</template>

<script>
// import AppNavbar from '../components/AppNavbar.vue';

import RefundPolicyPage from '@/components/RefundPolicyPage.vue';
import PolicyFooter from '@/components/PolicyFooter.vue';

export default {
  components: {
    
    RefundPolicyPage,
    PolicyFooter,
    
  },
  data() {
    return {
      refundPolicyData: {
        pageTitle: '',
        pageContent: '',
      },
      dynamicData: {
        pageTitle: '',
        pageContent: '',
      },
      
    };
  },
  mounted() {
    this.fetchRefundPolicyData();
   
  },
  methods: {
    async fetchRefundPolicyData() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/pages/refund-policy');
        this.refundPolicyData = response.data;
      } catch (error) {
        console.error('Error fetching refund policy data:', error);
      }
    },
    
    }
  }
</script>


