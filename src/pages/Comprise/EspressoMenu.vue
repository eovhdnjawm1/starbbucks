<template>
  <div class="flex flex-1 flex-col h-screen w-96" data-test="main">
    <section data-test="head-Line">
      <div class="text-2xl font-bold h-16 fixed bg-white z-10">
        <div class="mx-3 my-3">에스프레소</div>
      </div>
    </section>
    <section data-test="esppresso-Menu">
      <div class="mt-16">
        <div
          v-for="menus in drink.menus"
          :key="menus.entext"
          class="
            h-1/5
            border-b border-gray-100
            flex
            justify-self-start
            space-x-3
            cursor-pointer
            hover:opacity-70
          "
        >
          <img :src="menus.img" alt="#" class="h-24 w-24 rounded-full m-3" />
          <span class="my-3 space-y-2">
            <div class="font-bold text-xl flex gap-x-2 items-center">
              {{ menus.koText }}
              <CompriseComment v-if="menus.hotType" type="Hot" />
              <CompriseComment v-if="menus.newType" type="New" />
            </div>
            <p class="text-gray-500 text-sm">{{ menus.enText }}</p>
            <p>{{ addComma(menus.price) }}</p>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CompriseComment from '@/pages/Comprise/CompriseComment.vue';

export default {
  components: { CompriseComment },
  data() {
    return {
      drink: {
        topname: '에스프레소',
        menus: [
          {
            menuNumber: 1,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[20]_20210415144112678.jpg',
            koText: '에스프레소',
            enText: 'Espresso',
            price: 4000,
            newType: false,
            hotType: false,
          },
          {
            menuNumber: 2,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[41]_20210415133833725.jpg',
            koText: '카페 라떼',
            enText: 'Cafe Latte',
            price: 5000,
            newType: true,
            hotType: false,
          },
          {
            menuNumber: 3,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[94]_20210430103337006.jpg',
            koText: '아메리카노',
            enText: 'Americano',
            price: 4500,
            newType: false,
            hotType: true,
          },
          {
            menuNumber: 4,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2022/02/[9200000000415]_20220210160909365.jpg',
            koText: '슈크림 라떼',
            enText: 'Choux Creame Latte',
            price: 6100,
            newType: true,
            hotType: false,
          },
          {
            menuNumber: 5,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002406]_20210415135507733.jpg',
            koText: '바닐라 플랫 화이트',
            enText: 'Vanilla Flat White',
            price: 5900,
            newType: false,
            hotType: false,
          },
          {
            menuNumber: 6,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128692]_20210426091933665.jpg',
            koText: '스타벅스 돌체 라떼',
            enText: 'Starbucks Doice Latte',
            price: 5900,
            newType: false,
            hotType: false,
          },
          {
            menuNumber: 7,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[46]_20210415134438165.jpg',
            koText: '카페 모카',
            enText: 'Caffe Mocha',
            price: 5500,
            newType: false,
            hotType: false,
          },
          {
            menuNumber: 8,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[38]_20210415154821846.jpg',
            koText: '카푸치노',
            enText: 'Cappuccino',
            price: 5000,
            newType: false,
            hotType: false,
          },
          {
            menuNumber: 9,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128192]_20210415155639126.jpg',
            koText: '화이트 초콜릿 모카',
            enText: 'White Chocolate Mocha',
            price: 5900,
            newType: false,
            hotType: false,
          },
          {
            menuNumber: 10,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154609863.jpg',
            koText: '카라멜 마키아또',
            enText: 'Caramel Macchiato',
            price: 5900,
            newType: false,
            hotType: false,
          },
        ],
      },
    };
  },
  methods: {
    addComma(price) {
      return `${price.toLocaleString('ko-KR')}원`;
    },
  },
};
</script>

<style scoped>
img {
  @apply hover:animate-ping;
}

@keyframes ping {
  75%,
  100% {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>
