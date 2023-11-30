<template>
  <div>
    <!-- <AppNavbar :dynamicData="dynamicData" /> -->
    <DeliveryPolicyPage :deliveryPolicyData="deliveryPolicyData" />
    <PolicyFooter></PolicyFooter>
  </div>
</template>

<script>
// import AppNavbar from '../components/AppNavbar.vue';
import DeliveryPolicyPage from '@/components/DeliveryPolicyPage.vue';
import PolicyFooter from '@/components/PolicyFooter.vue';

export default {
  components: {
    // AppNavbar,
    DeliveryPolicyPage,
    PolicyFooter,
  },
  data() {
    return {
      deliveryPolicyData: {
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
    this.fetchDeliveryPolicyData();
    this.fetchDynamicData();
  },
  methods: {
    async fetchDeliveryPolicyData() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/pages/delivery-policy');
        this.deliveryPolicyData = response.data;
      } catch (error) {
        console.error('Error fetching delivery policy data:', error);
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
