<template>
    <div>
      <PolicyContent :policyData="refundPolicyData" />
    </div>
  </template>
  
  <script>
  import PolicyContent from '@/components/PolicyContent.vue'; // Adjust the path based on your project structure
  
  export default {
    components: {
      PolicyContent
    },
    data() {
      return {
        refundPolicyData: null,
      };
    },
    mounted() {
      // Fetch refund policy data from the backend when the component is mounted
      this.fetchRefundPolicyData();
    },
    methods: {
      async fetchRefundPolicyData() {
        try {
          // Make an HTTP GET request to your backend API endpoint for refund policy data
          const response = await this.$axios.get('http://localhost:3000/api/refund-policy');
  
          // Assuming your backend returns refund policy data in the expected format
          this.refundPolicyData = response.data;
        } catch (error) {
          console.error('Error fetching refund policy data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  