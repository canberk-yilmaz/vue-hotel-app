<template>
  <div>
    <div class="container">
      <h2>Form Component</h2>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="Shipping Address"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            class="d-flex"
            label="Street:"
            label-for="nested-street"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>

          <b-form-group
            class="d-flex"
            label="City:"
            label-for="nested-city"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>

          <b-form-group
            class="d-flex"
            label="State:"
            label-for="nested-state"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>

          <b-form-group
            class="d-flex"
            label="Country:"
            label-for="nested-country"
            label-cols-sm="2"
            label-align-sm="right"
          >
            <b-form-input id="nested-country"></b-form-input>
          </b-form-group>
        </b-form-group>
        <b-form inline class="mt-2">
          <label class="mr-sm-2" for="inline-form-custom-select-pref"
            >Ship via:</label
          >
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[
              { text: 'Choose...', value: 'null' },
              'Air',
              'Courier',
              'Mail',
            ]"
            :value="null"
          ></b-form-select>

          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
            >Use the same address for reciept</b-form-checkbox
          >

          <b-button @submit.prevent variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
}
</style>
