<template>
  <div>
    <!-- <AppNavbar :dynamicData="dynamicData" /> -->
    <PrivacyPolicyPage :privacyPolicyData="privacyPolicyData" />
    <PolicyFooter></PolicyFooter>
  </div>
</template>

<script>
// import AppNavbar from '../components/AppNavbar.vue';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage.vue';
import PolicyFooter from '@/components/PolicyFooter.vue';

export default {
  components: {
    // AppNavbar,
    PrivacyPolicyPage,
    PolicyFooter,
  },
  data() {
    return {
      privacyPolicyData: {
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
    this.fetchPrivacyPolicyData();
    this.fetchDynamicData();
  },
  methods: {
    async fetchPrivacyPolicyData() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/pages/privacy-policy');
        this.privacyPolicyData = response.data;
      } catch (error) {
        console.error('Error fetching privacy policy data:', error);
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
