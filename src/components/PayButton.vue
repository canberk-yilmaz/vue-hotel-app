<template>
  <div class="container">
    <!-- Button trigger modal -->
    <b-button id="show-btn" @click="showPayment">Pay</b-button>
    <!-- Modal -->

    <b-modal
      class="modal-dialog modal-dialog-centered"
      id="my-modal"
      hide-footer
      title="Payment Processing"
    >
      <div class="d-block text-center">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      </div>
      <div v-show="loading">
        <div class="d-flex justify-content-center">Loading...</div>
        <div class="d-flex justify-content-center">Do not refresh page</div>
      </div>
      <div v-show="paymentProcessing">
        <div class="d-flex justify-content-center">Payment Processing</div>
      </div>
      <div v-show="paymentCompleted">
        <div class="d-flex justify-content-center">Payment Succeed</div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return { loading: true, paymentProcessing: false, paymentCompleted: false };
  },
  methods: {
    showPayment() {
      let self = this;
      self.$bvModal.show("my-modal");

      this.paymentLoading();
      this.paymentProcess();
      this.paymentComplete();

      setTimeout(function () {
        self.$bvModal.hide("my-modal");
      }, 10000);
    },

    paymentLoading() {
      setTimeout(() => {
        this.loading = !this.loading;
      }, 4000);
    },
    paymentProcess() {
      setTimeout(() => {
        this.paymentProcessing = !this.paymentProcessing;
      }, 4000);

      setTimeout(() => {
        this.paymentProcessing = !this.paymentProcessing;
      }, 8000);
    },
    paymentComplete() {
      setTimeout(() => {
        this.paymentCompleted = !this.paymentCompleted;
      }, 8000);
    },

    // redirectSuccessPage() {},
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
