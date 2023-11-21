<template>
    <div>
      <HomeContent v-if="isPolicyPage" :policyData="policyData" />
      <HomePage v-else />
    </div>
  </template>
  
  <script>
  import HomeContent from '@/components/HomeContent.vue';
  import HomePage from '@/components/HomePage.vue';
  
  export default {
    name: 'HomeView',
    components: {
      HomeContent,
      HomePage,
    },
    data() {
      return {
        isPolicyPage: this.$route.path.includes('/privacy') ||
                      this.$route.path.includes('/refund') ||
                      this.$route.path.includes('/delivery') ||
                      this.$route.path.includes('/terms'),
        policyData: null,
      };
    },
    mounted() {
      // Fetch policy data from the backend when the component is mounted
      if (this.isPolicyPage) {
        this.fetchPolicyData();
      }
    },
    methods: {
      async fetchPolicyData() {
        try {
          // Make an HTTP GET request to your backend API endpoint for policy data
          const response = await this.$axios.get('http://localhost:3000/api/policy');
  
          // Assuming your backend returns policy data in the expected format
          this.policyData = response.data;
        } catch (error) {
          console.error('Error fetching policy data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your view-specific styles here */
  </style>
  