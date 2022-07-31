<template>
  <div
    id="product-footer"
    class="grid grid-cols-1 space-y-2 border-t z-50 bg-white p-4"
  >
    <div class="flex flex-row">
      <div
        data-test="product-quantity"
        class="grow flex flex-row space-x-2 text-center"
      >
        <button
          class="border border-black rounded-full w-7 h-7"
          @click="decrementQuantity"
        >
          -
        </button>
        <div>
          <slot name="quantity"></slot>
        </div>
        <button
          class="border border-black rounded-full w-7 h-7"
          @click="incrementQuantity"
        >
          +
        </button>
      </div>
      <div data-test="product-final-price" class="grow text-2xl text-right">
        <div class="text-bold">
          <slot name="finalPrice"></slot>
          원
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div data-test="product-wish" class="grow text-left text-xl">
        <i class="fas fa-heart"></i>
      </div>
      <div class="grow text-right space-x-2">
        <button
          data-test="btn-product-cart"
          class="rounded-full border border-green-600 py-1 w-16"
          @click="addCart"
        >
          담기
        </button>
        <button
          data-test="btn-product-order"
          class="
            rounded-full
            border border-green-600
            bg-green-600
            text-white
            py-1
            w-32
          "
          @click="orderInstantly"
        >
          주문하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductFooter',
  emits: ['quantity', 'order', 'cart'],
  methods: {
    incrementQuantity() {
      this.$emit('quantity', 1);
    },
    decrementQuantity() {
      this.$emit('quantity', -1);
    },
    addCart() {
      this.$emit('cart');
    },
    orderInstantly() {
      this.$emit('order');
    },
  },
};
</script>

<style scoped></style>
