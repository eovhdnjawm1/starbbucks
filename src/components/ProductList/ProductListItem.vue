<template>
  <div class="product-list-item">
    <div class="shrink-0">
      <img
        :src="imageUrl"
        alt="Product image"
        data-test="product-image"
        class="h-24 w-24 rounded-full border"
      />
    </div>
    <div class="ml-auto space-y-1">
      <div class="flex space-x-2">
        <div data-test="product-name" class="text-xl font-bold">{{ name }}</div>
        <div
          data-test="product-is-new"
          class="text-sm text-green-600"
          v-if="isNew"
        >
          New
        </div>
        <div
          data-test="product-is-new"
          class="text-sm text-red-600"
          v-if="isHot"
        >
          Hot
        </div>
      </div>
      <div data-test="product-name-eng" class="text-sm text-slate-600">
        {{ englishName }}
      </div>
      <div data-test="product-price" class="text-lg">
        {{ unitPriceForDisplay }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    productNo: {
      type: Number,
      default: -1,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    englishName: {
      type: String,
      default: '',
    },
    unitPrice: {
      type: Number,
      default: -1,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    isHot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    unitPriceForDisplay() {
      return `${this.unitPrice.toLocaleString()}원`;
    },
  },
};
</script>

<style scoped>
.product-list-item {
  @apply py-4 mx-auto flex items-center space-x-4 w-full;
}
</style>
