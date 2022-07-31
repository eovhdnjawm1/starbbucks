<template>
  <div class="flex flex-col pb-32">
    <!-- 상단 장바구니 텍스트 -->
    <section
      class="bg-slate-600 w-full h-12 text-white flex justify-start fixed z-10"
    >
      <button data-test="back-Btn" class="mt-1 ml-2 w-10 h-10">
        <ChevronLeftIcon class="text-white h-10 w-10" />
      </button>
      <div class="mt-3 mx-auto font-bold">장바구니</div>
    </section>
    <!-- 주문 메뉴 부분 -->
    <section class="flex justify-between mt-16 mx-4">
      <div class="text-xl font-bold">주문 메뉴</div>
      <div class="flex justify-end space-x-2 text-sm text-yellow-900">
        총 주문 가능 수량
        <div class="text-green-700 ml-2 font-bold mr-1">{{ baseCount }}</div>
        개
        <button class="mb-2">
          <InformationCircleIcon class="h-6 w-6" />
        </button>
      </div>
    </section>
    <!-- 삭제 부분 -->
    <section class="flex justify-between mx-4 text-sm mt-4">
      <div class="flex space-x-2">
        <label for="select-all-box">
          <input type="checkbox" class="w-4 h-4 mt-1" />
        </label>
        <div class="text-gray-300">전체선택</div>
      </div>
      <div class="cursor-pointer">
        <span class="text-green-700">선택 삭제</span>
        |
        <span class="text-gray-500">전체 삭제</span>
      </div>
    </section>
    <div>
      <CartItem
        v-for="item in cart"
        :key="item.product.productNo"
        :item="item"
      />
    </div>
    <!-- 총 금액 -->
    <section class="h-1/5 font-bold w-full text-center">
      <router-link to="/order">
        <button id="order-btn">주문하기</button>
      </router-link>
    </section>
  </div>
</template>

<script>
import { ChevronLeftIcon, InformationCircleIcon } from '@heroicons/vue/solid';

import CartItem from '@/components/Cart/CartItems.vue';
import CartApi from '@/api/Cart';

export default {
  name: 'CartView',
  components: {
    ChevronLeftIcon,
    InformationCircleIcon,
    CartItem,
  },

  data() {
    return {
      cart: [],
      baseCount: 20,
    };
  },
  methods: {
    async getCartList() {
      const cartApi = new CartApi(this.apiClient);
      const response = await cartApi.getCartList();

      this.cart = response.cart;
    },
  },
  created() {
    this.getCartList();
  },
};
</script>

<style>
button:hover {
  @apply opacity-50;
}

#order-btn {
  @apply bg-green-500 text-white rounded-3xl w-1/3 h-12 mt-8;
  @apply drop-shadow-md hover:drop-shadow-lg active:drop-shadow-none mx-auto;
}
</style>
