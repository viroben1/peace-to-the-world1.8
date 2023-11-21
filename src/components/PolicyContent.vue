<template>
  <div>
    <div v-if="privacyPolicy">
      <PolicyContent
        :pageTitle="privacyPolicy.pageTitle || 'Privacy Policy'"
        :pageContent="privacyPolicy.pageContent || 'Your privacy is important...'"
      />
    </div>
    <div v-else>
      <p>Loading privacy policy...</p>
    </div>
    <PolicyFooter :lastUpdatedDate="lastUpdatedDate" />
  </div>
</template>

<script>
import PolicyContent from '@/components/PolicyContent';
import PolicyFooter from '@/components/PolicyFooter';

export default {
  components: {
    PolicyContent,
    PolicyFooter,
  },
  data() {
    return {
      privacyPolicy: null,
      lastUpdatedDate: null,
    };
  },
  mounted() {
    this.fetchPrivacyPolicy();
    this.fetchLastUpdatedDate();
  },
  methods: {
    async fetchPrivacyPolicy() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/pages/privacy-policy');
        this.privacyPolicy = response.data;
      } catch (error) {
        console.error('Error fetching privacy policy content:', error);
      }
    },
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
