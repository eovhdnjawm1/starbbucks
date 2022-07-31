<template>
  <div data-test="product-single-option">
    <div class="text-sm float-left">{{ option.name }}</div>
    <div class="float-right flex space-x-2 text-center">
      <button
        class="border border-black rounded-full w-7"
        @click="removeShot(option.optionNo)"
      >
        -
      </button>
      <div>
        <slot name="optionQuantity"></slot>
      </div>
      <button
        class="border border-black rounded-full w-7"
        @click="addShot(option.optionNo)"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductOption',
  emits: ['option'],

  props: {
    option: {
      type: Object,
      default() {
        return {
          optionNo: -1,
          name: '',
          unitPrice: -1,
        };
      },
    },
  },
  methods: {
    addShot(optionNo) {
      this.$emit('option', {
        optionNo,
        delta: 1,
      });
    },
    removeShot(optionNo) {
      this.$emit('option', {
        optionNo,
        delta: -1,
      });
    },
  },
};
</script>

<style scoped></style>
