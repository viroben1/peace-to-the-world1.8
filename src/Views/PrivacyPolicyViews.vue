<template>
  <div>
    <!-- <AppNavbar :dynamicData="dynamicData" /> -->
    <PrivacyPolicyPage :privacyPolicyData="privacyPolicyData" />
    <ProductCheckout :product="currentProduct" @checkout="checkout" />
    <PolicyFooter></PolicyFooter>
  </div>
</template>

<script>
import * as api from '../services/api.js';
import { performPayment } from '../services/payment-utils.js';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage.vue';
import PolicyFooter from '@/components/PolicyFooter.vue';
import ProductCheckout from '@/components/ProductCheckout.vue';

export default {
  components: {
    PrivacyPolicyPage,
    PolicyFooter,
    ProductCheckout,
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
      currentProduct: {
        name: "Your Product Name",
        price: "$19.99",
        image: "https://example.com/your-product-image.jpg",
        // ... other product properties ...
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
        const response = await api.getPrivacyPolicyData();
        this.privacyPolicyData = response.data;
      } catch (error) {
        console.error('Error fetching privacy policy data:', error);
      }
    },

    async fetchDynamicData() {
      try {
        const response = await api.getDynamicData();
        this.dynamicData = response.data;
      } catch (error) {
        console.error('Error fetching dynamic data:', error);
      }
    },

    async checkout() {
      await performPayment();
    },
  },
};
</script>
