<template>
  <div class="flex flex-1 flex-col px-6 h-screen overflow-y-scroll container">
    <!-- 상단 이미지 -->
    <div data-test="drinkImg" class="mx-auto relative">
      <img src="../img/coffee_1.jpg" alt="coffee" class="mx-auto" />
      <div class="absolute left-2 top-2 cursor-pointer active:opacity-70">
        <button data-test="back-Btn" class="w-10 h-10 rounded-full bg-sky-900">
          <ChevronLeftIcon class="text-white h-10 w-10 text-center" />
          <!-- <i class="fa-solid fa-angle-left fa-2x text-white"></i> -->
        </button>
      </div>
      <div class="absolute right-2 top-2 cursor-pointer active:opacity-70">
        <button data-test="share-Btn" class="w-10 h-10 rounded-full bg-sky-900">
          <i class="fa-solid fa-share fa-lg text-white"></i>
        </button>
      </div>
    </div>
    <div data-test="best-Menu" class="font-bold text-3xl mt-3 relative">
      {{ drink.name }}
      <span v-if="drink.isBest" class="text-sm text-red-400 absolute left-32">{{
        drink.BestIntro
      }}</span>
    </div>
    <div class="text-gray-500 mt-2" data-test="drink-Intro">
      {{ drink.drinkIntro }}
    </div>
    <div data-test="drink-Price" class="font-bold text-3xl mt-3">
      {{ addComma(drink.defaultPrice) }}
    </div>
    <!-- HOT, ICE BTN -->
    <div data-test="select-Hot-ICE" class="flex mt-4 text-xl">
      <button
        class="w-1/2 border border-gray-500 rounded-l-full h-16 lg:h-32"
        ref="HotColor"
        @click="changeHotColor"
      >
        HOT
      </button>
      <button
        ref="IceColor"
        @click="changeIceColor"
        class="w-1/2 border border-gray-500 rounded-r-full h-16 lg:h-32"
      >
        ICE
      </button>
    </div>
    <!-- 커피사이즈 -->
    <div class="font-bold text-2xl mt-3 mb-3">사이즈</div>
    <div data-test="select-Coffee-Size" class="space-x-2 flex justify-around">
      <button
        v-for="(size, i) in drink.size"
        :key="size"
        :class="
          selectVolumeSize === drink.size[i].name
            ? 'text-green-600 font-bold border-green-600 border-2'
            : ''
        "
        @click="selectVolumeSizeFun(i)"
        class="
          w-1/4
          text-xl text-gray-500
          border border-gray-300
          h-28
          rounded-lg
        "
      >
        <p>
          <i :class="size.icon" class="mb-4"></i>
        </p>
        {{ size.text }}
        <p class="text-sm">
          {{ size.Volume }}
        </p>
      </button>
    </div>
    <!-- 컵 종류 -->
    <div class="font-bold text-2xl mt-3 mb-3">컵 선택</div>
    <div
      data-test="select-Cup"
      class="flex justify-between text-gray-500 text-xl"
    >
      <button
        v-for="(cupType, i) in cupTypes"
        :key="cupType"
        :class="
          selectCupSize === cupTypes[i]
            ? 'text-green-600 font-bold border-green-600 border-2 rounded'
            : ''
        "
        class="w-1/3 border border-gray-200 rounded h-12 bg-white text-black"
        @click="selectCupSize = cupTypes[i]"
      >
        <p>
          {{ cupType }}
        </p>
      </button>
    </div>
    <!-- 퍼스널 옵션 -->
    <div data-test="personal-Option" class="font-bold text-2xl mt-3 mb-3">
      퍼스널 옵션
    </div>
    <div class="flex justify-between">
      <div class="text-lg">{{ drink.personalOption.espressoShot.name }}</div>
      <div data-test="add-Shot">
        <div class="flex space-x-3">
          <button
            @click="DownEspressoShot()"
            class="w-8 h-8 border border-black rounded-full"
          >
            -
          </button>
          <div class="text-xl">{{ personalOptionCount }}</div>
          <button
            @click="UpEspressoShot()"
            class="w-8 h-8 border border-black rounded-full"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <!-- 최종 오더 창 -->
    <div class="mt-6 border-t border-gray-300 mb-24">
      <div data-test="menu-Add-Minus" class="mt-8 ml-4 flex justify-between">
        <div class="flex space-x-3">
          <button
            @click="DownOrderCount()"
            class="w-8 h-8 border border-black rounded-full"
          >
            -
          </button>
          <div data-test="menu-result" class="text-xl">
            {{ totalDrinkCount }}
          </div>
          <button
            @click="UpOrderCount()"
            class="w-8 h-8 border border-black rounded-full"
          >
            +
          </button>
        </div>
        <div data-test="price-Result" class="text-3xl">
          {{ totalPrice }}
        </div>
      </div>
      <!-- 찜하기 -->
      <div class="flex justify-between mt-3 pl-6 pr-3">
        <div data-test="heart-Menu">
          <button @click="HeartBtn">
            <HeartIcon i ref="HeartOff" class="h-5 w-5" />
            <HeartIcon i ref="HeartOn" class="h-5 w-5 text-red-600 hidden" />
          </button>
        </div>
        <div class="text-xl space-x-4">
          <button
            data-test="basket-Menu"
            class="
              w-24
              h-12
              border border-green-600
              rounded-full
              hover:bg-green-600 hover:text-white
            "
            href="#"
          >
            담기
          </button>
          <button
            data-test="order-Menu"
            class="
              w-48
              h-12
              text-white
              bg-green-600
              rounded-full
              hover:bg-white hover:text-green-600
              border border-green-600
            "
            href="#"
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
    <div data-test="NavMenu" class="container fixed bottom-0 pr-10">
      <NavMenu />
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, HeartIcon } from '@heroicons/vue/solid';

import NavMenu from '@/components/Base/NavMenu.vue';

export default {
  components: {
    NavMenu,
    ChevronLeftIcon,
    HeartIcon,
  },
  data() {
    return {
      drink: {
        image: '../img/coffee_1.jpg',
        name: '카페라떼',
        isBest: true,
        BestIntro: 'Best',
        drinkIntro:
          '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
        defaultPrice: 5000,
        size: [
          {
            icon: 'fa-solid fa-mug-saucer fa-xs',
            name: 'Short',
            Volume: '236ml',
            defaultPrice: 4500,
          },
          {
            icon: 'fa-solid fa-mug-saucer fa-sm',
            name: 'Tall',
            Volume: '354ml',
            defaultPrice: 5000,
          },
          {
            icon: 'fa-solid fa-mug-saucer fa-lg',
            name: 'Grande',
            Volume: '473ml',
            defaultPrice: 5500,
          },
          {
            icon: 'fa-solid fa-mug-saucer fa-xl',
            name: 'Venti',
            Volume: '591ml',
            defaultPrice: 6000,
          },
        ],
        personalOption: {
          espressoShot: {
            name: '에스프레소 샷',
            defaultCount: 1,
            price: 500,
          },
        },
        orederCount: 1,
      },
      cupTypes: ['매장 컵', '개인 컵', '일회용 컵'],
      selectVolumeSize: 'Tall',
      selectCupSize: '매장 컵',
      HeartState: false,
    };
  },
  methods: {
    selectVolumeSizeFun(i) {
      this.selectVolumeSize = this.drink.size[i].name;
      this.drink.defaultPrice = this.drink.size[i].defaultPrice;
    },
    addComma(price) {
      return `${price.toLocaleString('ko-KR')}원`;
    },

    UpEspressoShot() {
      this.drink.personalOption.espressoShot.defaultCount += 1;
    },
    DownEspressoShot() {
      if (this.drink.personalOption.espressoShot.defaultCount >= 1) {
        this.drink.personalOption.espressoShot.defaultCount -= 1;
      }
    },
    UpOrderCount() {
      this.drink.orederCount += 1;
    },
    DownOrderCount() {
      if (this.drink.orederCount >= 2) {
        this.drink.orederCount -= 1;
      }
    },
    changeHotColor() {
      this.$refs.HotColor.style.background = 'red';
      this.$refs.HotColor.style.color = 'white';
      this.$refs.IceColor.style.background = 'white';
      this.$refs.IceColor.style.color = 'black';
    },
    changeIceColor() {
      this.$refs.IceColor.style.background = 'blue';
      this.$refs.IceColor.style.color = 'white';
      this.$refs.HotColor.style.background = 'white';
      this.$refs.HotColor.style.color = 'black';
    },
    HeartBtn() {
      if (this.HeartState === false) {
        this.$refs.HeartOff.style.display = 'none';
        this.$refs.HeartOn.style.display = 'block';
        this.HeartState = true;
      } else if (this.HeartState === true) {
        this.$refs.HeartOff.style.display = 'block';
        this.$refs.HeartOn.style.display = 'none';
        this.HeartState = false;
      }
    },
  },
  computed: {
    personalOptionCount() {
      return this.drink.personalOption.espressoShot.defaultCount;
    },
    totalDrinkCount() {
      return this.drink.orederCount;
    },
    totalPrice() {
      const price = this.drink.defaultPrice;
      const count = this.drink.orederCount;
      const optionPrice = this.drink.personalOption.espressoShot.price;
      const optionCount = this.drink.personalOption.espressoShot.defaultCount;
      const optionDefault = optionPrice * 1;

      const totalPrice = (price + optionPrice * optionCount - optionDefault) * count;

      return `${totalPrice.toLocaleString('ko-KR')}원`;
    },
  },
};
</script>

<style>
</style>
