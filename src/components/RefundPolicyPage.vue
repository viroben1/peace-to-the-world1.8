<template>
  <div>
    <h1>{{ dynamicData.pageTitle }}</h1>
    <p v-html="dynamicData.pageContent"></p>
  </div>
</template>

<script>
export default {
  name: 'RefundPolicyPage',  // Assuming this is the correct component name
  data() {
    return {
      dynamicData: {
        pageTitle: '',
        pageContent: '',
      },
    };
  },
  mounted() {
    // Fetch dynamic data using Axios
    this.fetchDynamicData();
  },
  methods: {
    async fetchDynamicData() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/pages/refund-policy');
        this.dynamicData = response.data;
      } catch (error) {
        console.error('Error fetching dynamic data:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
