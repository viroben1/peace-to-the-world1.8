<template>
  <div>
    <PolicyContent
      v-if="deliveryPolicy"
      :pageTitle="deliveryPolicy.pageTitle || 'Delivery Policy'"
      :pageContent="deliveryPolicy.pageContent || 'Our delivery policy outlines the terms and conditions for the delivery of products purchased through our platform. We aim to provide timely and secure delivery services to our customers.'"
    />
  </div>
</template>

<script>
import PolicyContent from '@/components/PolicyContent';

export default {
  components: {
    PolicyContent,
  },
  data() {
    return {
      deliveryPolicy: null,
    };
  },
  mounted() {
    // Fetch the delivery policy content from the backend when the component is mounted
    this.fetchDeliveryPolicy();
  },
  methods: {
    async fetchDeliveryPolicy() {
      try {
        // Make an HTTP GET request to your backend API endpoint for delivery policy content
        const response = await this.$axios.get('http://localhost:3000/api/pages/delivery-policy');

        // Assuming your backend returns delivery policy content in the expected format
        this.deliveryPolicy = response.data;
      } catch (error) {
        console.error('Error fetching delivery policy content:', error);
      }
    },
  },
};
</script>
