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
    // AppNavbar,
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
    this.fetchDynamicData();
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
    async fetchDynamicData() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/dynamicData');
        this.dynamicData = response.data;
      } catch (error) {
        console.error('Error fetching dynamic data:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Styles for the view, if needed */
</style>
