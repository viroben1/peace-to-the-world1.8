// stripe.js


import { loadStripe } from "@/services/stripe";


const stripePromise = loadStripe("pk_test_51O481TImUxx0P9DAFuUKrU4mPWUfjIFYBROmL8wyzfSUR8RNnQJuhbfxcryZO3J6lL2zP9Sm8gkSu4GkhiKllHWg00hIjQ6GRQ");

export const getStripe = async () => {
  const stripe = await stripePromise;
  return stripe;
};
