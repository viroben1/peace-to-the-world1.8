<template>
  <nav class="bg-green-500 p-4">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-white text-2xl font-bold">PeaceToTheWorld-Flag</router-link>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/Homepage" class="text-white" active-class="active">
              HomePage
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white" active-class="active">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/flag" class="text-white" active-class="active">
              Flag
            </router-link>
          </li>
          <li>
            <router-link to="/privacy" class="text-white" active-class="active">
              Privacy Policy
            </router-link>
          </li>
          <li>
            <router-link to="/refund" class="text-white" active-class="active">
              Refund Policy
            </router-link>
          </li>
          <!-- AppNavbar.vue -->
          <li>
            <router-link to="/delivery" class="text-white" active-class="active">
              Delivery Policy
            </router-link>
          </li>

          <li>
            <router-link to="/terms" class="text-white" active-class="active">
              Terms and Conditions
            </router-link>
          </li>
          <!-- Include a dropdown item for dynamically fetched data -->
          <li v-show="dynamicData">
            {{ dynamicData }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      dynamicData: null,
    };
  },
  mounted() {
    // Fetch dynamic data using Axios
    this.fetchDynamicData();
  },
  methods: {
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
/* Add your styling here */
.active {
  background-color: white;
  color: black;
}
</style>
