<template>
  <div class="bg-yellow-400 text-cyan-600 text-lg">
    <section class="showcase">
      <div class="nes-container with-title">
        <h3>{{ product.name }} {{ product.price }}</h3>
        <div class="img">
          <img :src="product.image" alt="" srcset="" />
        </div>
      </div>
    </section>
    <div class="nes-container with-title is-centered">
      <form @submit.prevent="handleSubmit">
        <fieldset :class="{ dis: loading }" class="fields">
          <div class="nes-field"></div>
          <div class="nes-field">
            <label for="name_field">Name</label>
            <input
              placeholder="Jane Doe"
              type="text"
              name="name"
              id="name_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="email_field">Email</label>
            <input
              placeholder="jane.doe@example.com "
              type="email"
              name="email"
              id="email_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="address_field">Address</label>
            <input
              placeholder="1234 Sycamore Street"
              type="text"
              name="address"
              id="address_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="city_field">City</label>
            <input
              placeholder="Reno"
              type="text"
              name="city"
              id="city_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="state_field">State</label>
            <input
              placeholder="Nevada"
              type="text"
              name="state"
              id="state_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="zip_field">Zip</label>
            <input
              placeholder="89523"
              type="text"
              name="zip"
              id="zip_field"
              class="nes-input"
            />
          </div>
          <div class="nes-field">
            <label for="email_field">email</label>
            <div id="stripe-element-mount-point" class="nes-input" />
          </div>
        </fieldset>
        <div class="nes-field">
          <button
            type="submit"
            class="nes-btn is-primary"
            :class="{ dis: loading }"
          >
            {{ loading ? "Loading..." : "submit" }}
          </button>
        </div>
      </form>
    </div>

    <!-- <div class="nes-field mt"> -->
      <!-- <button type="button" class="nes-btn is-success" @click="redirect"> -->
        <!-- redirect -->
      <!-- </button> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { onMounted, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { loadStripe } from "@stripe/stripe-js";
// Importing the module in another file
import { PaymentService } from '../services/payment-service';
import { performPayment as performPaymentUtil } from "../services/payment-utils";
const style = {
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: "800",
      fontFamily: "Press Start 2P",
      fontSize: "22px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "green",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red",
    },
  },
};

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { product } = toRefs(props);
    // eslint-disable-next-line no-unused-vars
    const router = useRouter();
    let stripe = null;
    let loading = ref(true);
    let elements = null;
    let formData = ref({
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    let cardElement = null;
    let apiResponse = null; // Define apiResponse variable

    onMounted(async () => {
      const ELEMENT_TYPE = "card";

      stripe = await loadStripe(
        "pk_test_51O481TImUxx0P9DAFuUKrU4mPWUfjIFYBROmL8wyzfSUR8RNnQJuhbfxcryZO3J6lL2zP9Sm8gkSu4GkhiKllHWg00hIjQ6GRQ"
      );
      elements = stripe.elements();
      cardElement = elements.create(ELEMENT_TYPE, style);
      console.log(elements, ELEMENT_TYPE, cardElement);
      cardElement.mount("#stripe-element-mount-point");
      loading.value = false;
    });

    async function handleSubmit() {
      if (loading.value) return;
      loading.value = true;

      const billingDetails = {
        name: formData.value.name,
        email: formData.value.email,
        address: {
          city: formData.value.city,
          line1: formData.value.address,
          state: formData.value.state,
          postal_code: formData.value.zip,
        },
      };
      
  try {
    // Step 1: Initiate Payment on the Server
    const { secret, stripe } = await PaymentService.initiatePayment(1999, loadStripe);

    // Step 2: Create Payment Method on the Client
    const paymentMethodId = await PaymentService.createPaymentMethod(
      stripe,
      cardElement,
      billingDetails
    );

    // Step 3: Use the Common Payment Logic
    await PaymentService.performPayment(secret, paymentMethodId);

    // Step 4: Use the performPayment utility
    await performPaymentUtil(); // Add parameters if needed

    // Step 5: Redirect Logic if Needed
    this.$router.push('/success');
  } catch (error) {
    console.error('Error processing payment:', error.message);
    // Handle error scenario
  }
}
function redirect() {
      stripe.redirectToCheckout({
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000",
        lineItems: [
          {
            price: "price_0J1wDR0ADhx7uM8yPL8Wmpoq",
            quantity: 1,
          },
        ],
        mode: "payment",
      });
    }

    // eslint-disable-next-line vue/no-dupe-keys
    return { formData, loading,  handleSubmit, redirect, product, apiResponse };
  }
};
</script>

