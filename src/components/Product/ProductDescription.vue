<template>
  <div class="relative">
    <button class="button-container left-0" @click="moveBackPage">
      <i data-test="back-button" class="fas fa-angle-left text-xl"></i>
    </button>
    <div class="button-container right-0">
      <i data-test="share-button" class="fas fa-share"></i>
    </div>
    <img data-test="product-img" :src="product.imgUrl" alt="Product Image" />
  </div>
  <div class="flex space-x-2">
    <div class="text-2xl font-bold" data-test="product-name">
      {{ product.nameKr }}
    </div>
    <div v-if="product.isHot" class="text-sm text-red-600">Best</div>
  </div>
  <div class="text-sm text-slate-600" data-test="product-description">
    {{ product.description }}
  </div>
  <div class="text-xl font-bold" data-test="product-price">
    {{ unitPriceForDisplay }}
  </div>
  <table data-test="product-temperature">
    <tr>
      <td
        class="product-temperature"
        :class="productHotClass"
        data-test="product-hot"
      >
        <button class="w-full h-full" @click="changeTemperature('HOT')">
          HOT
        </button>
      </td>
      <td
        class="product-temperature"
        :class="productIceClass"
        data-test="product-ice"
      >
        <button class="w-full h-full" @click="changeTemperature('ICE')">
          ICE
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'ProductDescription',
  emits: ['temperature'],
  props: {
    product: {
      type: Object,
      default() {
        return {
          nameKr: '',
          price: -1,
          description: '',
          isHot: false,
          imgUrl: '',
        };
      },
    },
    selectedTemperature: {
      type: String,
      default: 'HOT',
    },
  },
  computed: {
    unitPriceForDisplay() {
      return `${this.product.price.toLocaleString()}원`;
    },
    isHotSelected() {
      return this.selectedTemperature === 'HOT';
    },
    isIceSelected() {
      return this.selectedTemperature === 'ICE';
    },
    productHotClass() {
      return {
        'product-hot-selected': this.isHotSelected,
        'product-hot': !this.isHotSelected,
      };
    },
    productIceClass() {
      return {
        'product-ice-selected': this.isIceSelected,
        'product-ice': !this.isIceSelected,
      };
    },
  },
  methods: {
    moveBackPage() {
      this.$router.back();
    },
    changeTemperature(value) {
      this.$emit('temperature', value);
    },
  },
};
</script>

<style scoped>
.product-temperature {
  @apply inline-block w-1/2 mx-auto text-center py-2 border border-slate-500;
}

.button-container {
  @apply absolute top-0 w-8 h-8 bg-slate-700 rounded-full;
  @apply text-center text-white align-middle m-2;
}

table {
  @apply border-collapse;
}

.product-hot {
  @apply bg-white text-slate-600 rounded-tl-full rounded-bl-full;
}

.product-hot-selected {
  @apply bg-red-600 text-white border-red-600 rounded-tl-full rounded-bl-full;
}

.product-ice {
  @apply bg-white text-slate-600 rounded-tr-full rounded-br-full;
}

.product-ice-selected {
  @apply bg-blue-600 text-white border-blue-600 rounded-tr-full rounded-br-full;
}
</style>
