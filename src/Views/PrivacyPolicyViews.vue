<template>
  <div>
    <PolicyContent
      v-if="privacyPolicy"
      :pageTitle="privacyPolicy.pageTitle || 'Privacy Policy'"
      :pageContent="privacyPolicy.pageContent || 'Your privacy is important to us. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your personal information. By using our services, you consent to the practices described in this policy.'"
    />
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
    // Fetch the privacy policy content from the backend when the component is mounted
    this.fetchPrivacyPolicy();
    this.fetchLastUpdatedDate();
  },
  methods: {
    async fetchPrivacyPolicy() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/privacy-policy');
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
