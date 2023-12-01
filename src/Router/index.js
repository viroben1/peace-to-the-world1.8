// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomePageViews from '../Views/HomePageViews.vue';
import PrivacyPolicy from '../Views/PrivacyPolicyViews.vue';
import RefundPolicy from '../Views/RefundPolicyViews.vue';
import DeliveryPolicy from '../Views/DeliveryPolicyViews.vue';
import TermsConditionsPolicy from '../Views/TermsConditionsPolicyViews.vue';
import ProductCheckout from '../components/ProductCheckout.vue'
import FlagView from '../Views/FlagViews.vue'; // Import your FlagView
import AboutPage from '../Views/AboutViews.vue';

const routes = [
  
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePageViews,
  },
  
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/refund',
    name: 'RefundPolicy',
    component: RefundPolicy,
  },
  {
    path: '/delivery',
    name: 'DeliveryPolicy',
    component: DeliveryPolicy, // Adjust the component
  },
  {
    path: '/terms',
    name: 'TermsAndConditions',
    component: TermsConditionsPolicy,
  },
  {
    path: '/flag',
    name: 'FlagView',
    component: FlagView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/HomePage',
  },

  {
    path: '/ProductCheckout',
    name: 'ProductCheckout',
    component: ProductCheckout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
