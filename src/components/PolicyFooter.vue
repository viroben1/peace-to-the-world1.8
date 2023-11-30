<template>
  <div class="text-center mt-6 py-2 bg-gray-200">
    <p class="text-sm">
      If you have questions, suggestions, or need assistance, please feel free to contact our support team at{' '}
      <a href="mailto:support@internationalflagofpeace.com" class="text-blue-500">
        support@internationalflagofpeace.com
      </a>
      .
    </p>
    <p class="text-xs text-gray-600">Last updated: {{ lastUpdatedDate }}</p>
    <p class="text-xs text-gray-600">
      Return to the{' '}
      <router-link to="/Homepage" class="text-blue-500">
        home page
      </router-link>
      .
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastUpdatedDate: '', // This will be populated with data fetched using Axios
    };
  },
  mounted() {
    // Fetch last updated date from the backend API when the component is mounted
    this.fetchLastUpdatedDate();
  },
  methods: {
    async fetchLastUpdatedDate() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/last-updated');
        this.lastUpdatedDate = response.data.lastUpdatedDate;
      } catch (error) {
        console.error('Error fetching last updated date:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
