// payment-utils.js

import { getStripe } from "../services/payment-utils";

// Example function for performing payments
export const performPayment = async () => {
  const stripe = await getStripe();

  // Example: Use the stripe variable in your payment logic
  try {
    const { error } = await stripe.confirmCardPayment('paymentIntentSecret', {
      payment_method: 'paymentMethodId',
    });

    if (error) {
      console.error('Payment failed:', error.message);
      // Handle the error as needed
    } else {
      console.log('Payment succeeded!');
      // Handle the success case
    }
  } catch (error) {
    console.error('Error confirming payment:', error);
    // Handle other errors
  }
};
