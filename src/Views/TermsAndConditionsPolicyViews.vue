<template>
    <div>
      <PolicyContent :pageTitle="pageTitle" :pageContent="pageContent" />
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
        pageTitle: "Terms and Conditions",
        pageContent: null,
      };
    },
    mounted() {
      // Fetch Terms and Conditions content from the backend when the component is mounted
      this.fetchTermsAndConditions();
    },
    methods: {
      async fetchTermsAndConditions() {
        try {
          // Make an HTTP GET request to your backend API endpoint for Terms and Conditions content
          const response = await this.$axios.get('http://localhost:3000/api/terms-and-conditions');
  
          // Assuming your backend returns Terms and Conditions content in the expected format
          this.pageContent = response.data;
        } catch (error) {
          console.error('Error fetching Terms and Conditions content:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  