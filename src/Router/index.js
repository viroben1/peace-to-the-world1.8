// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../Views/HomePageViews.vue';
import PrivacyPolicy from '../Views/PrivacyPolicyViews.vue';
import RefundPolicy from '../Views/RefundPolicyViews.vue';
import DeliveryPolicy from '../Views/DeliveryPolicyViews.vue';
import TermsAndConditionsViews from '../Views/TermsAndConditionsPolicyViews.vue';
import FlagView from '../Views/FlagViews.vue'; // Import your FlagView
import AboutPage from '../Views/AboutViews.vue';

const routes = [
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
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
    component: TermsAndConditionsViews,
  },
  {
    path: '/flag',
    name: 'FlagView',
    component: FlagView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
