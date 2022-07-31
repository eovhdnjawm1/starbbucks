<template>
  <div>
    <div class="font-bold pb-2">사이즈</div>
    <div class="grid grid-cols-4 text-center text-slate-500 space-x-1.5">
      <button
        v-for="size in cupSize"
        :key="size.optionNo"
        class="flex-auto border rounded-md py-2"
        :class="cupSizeClass(size.optionNo)"
        data-test="product-size"
        @click="changeSize(size.optionNo)"
      >
        <div class="h-8 align-middle">
          <i class="fa-solid fa-mug-saucer" :class="size.iconSize"></i>
        </div>
        <div>{{ size.name }}</div>
      </button>
    </div>
  </div>
  <div data-test="product-cup">
    <div class="font-bold pb-2">컵 선택</div>
    <div class="grid grid-cols-3 divide-x text-slate-500">
      <button
        class="text-center border rounded-tl-full rounded-bl-full py-1"
        :class="cupTypeClass('MALL')"
        @click="changeCupType('MALL')"
      >
        매장컵
      </button>
      <button
        class="text-center border py-1"
        :class="cupTypeClass('PERSONAL')"
        @click="changeCupType('PERSONAL')"
      >
        개인컵
      </button>
      <button
        class="text-center border rounded-tr-full rounded-br-full py-1"
        :class="cupTypeClass('ONETIME')"
        @click="changeCupType('ONETIME')"
      >
        일회용컵
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSize',
  emits: ['cup-size', 'cup-type'],
  props: {
    cupSize: {
      type: Array,
      default() {
        return [
          {
            optionNo: -1,
            name: '',
            iconSize: '',
          },
        ];
      },
    },
    selectedCupSize: {
      type: Number,
      default: 1,
    },
    selectedCupType: {
      type: String,
      default: 'MALL',
    },
  },
  methods: {
    changeSize(value) {
      this.$emit('cup-size', value);
    },
    cupSizeClass(optionId) {
      const isSelected = this.selectedCupSize === optionId;

      return {
        'option-selection': isSelected,
      };
    },
    changeCupType(value) {
      this.$emit('cup-type', value);
    },
    cupTypeClass(cupType) {
      const isSelected = this.selectedCupType === cupType;

      return {
        'option-selection': isSelected,
      };
    },
  },
};
</script>

<style scoped>
.option-selection {
  @apply bg-green-400 border-green-400 text-white;
}
</style>
