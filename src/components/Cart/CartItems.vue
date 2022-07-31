<template>
  <div class="flex flex-col h-screen overflow-y-scroll pb-32">
    <div class="w-full border-b-8 mt-4 border-gray-100"></div>
    <!-- 장바구니 메뉴부분 -->
    <section class="mt-4">
      <img
        :src="item.product.imgUrl"
        alt="Product image"
        class="h-20 w-20 rounded-full border"
      />
      <div class="grow ml-4">
        <p class="text-xl">{{ item.product.nameKo }}</p>
        <div class="float-left space-y-0.5">
          <p>{{ item.cupSize.name }}</p>
          <p
            v-for="(option, idx) in item.options"
            :key="option.optionNo"
            class="text-slate-500"
          >
            {{ optionText(option, idx) }}
          </p>
        </div>
        <div class="float-right text-right space-y-0.5">
          <p class="grow text-right font-bold">{{ finalPrice }}</p>
          <p>{{ quantityText }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default() {
        return {
          quantity: -1,
          cupSize: {
            name: '',
          },
          options: [],
          product: {
            productNo: -1,
            nameKo: '기본 커피',
            nameEng: '',
            imgUrl: '',
            price: -1,
          },
          optionsInfo: [],
        };
      },
    },
  },
  methods: {
    optionText(option, idx) {
      const optionInfo = this.item.optionsInfo[idx];

      return `${optionInfo.name} ${option.quantity.toLocaleString()}원`;
    },
    addComma(price) {
      return `${price.toLocaleString('ko-KR')}원`;
    },
    getProductPrice(product) {
      let price = product.price * product.defaultCount;
      const { option } = product;
      for (let i = 0; i < option.length; i += 1) {
        price += option[i].optionPrice * (option[i].optionCount - option[i].optionDefaultCount);
      }
      return price;
    },
  },
  computed: {
    quantityText() {
      return `${this.item.quantity.toLocaleString()}개`;
    },
    finalPrice() {
      const productPrice = this.item.product.price;
      const { quantity } = this.item;
      return `${((productPrice + this.billedOptionPrice) * quantity).toLocaleString()}원`;
    },
    billedOptionPrice() {
      const optionLength = this.item.options.length;
      let finalBilledOptionPrice = 0;

      for (let i = 0; i < optionLength; i += 1) {
        const { quantity } = this.item.options[i];
        const { baseQuantity, unitprice } = this.item.optionsInfo[i];

        finalBilledOptionPrice += unitprice * (quantity - baseQuantity);
      }

      return finalBilledOptionPrice;
    },
  },
};
</script>

<style>
button:hover {
  @apply opacity-50;
}
</style>
