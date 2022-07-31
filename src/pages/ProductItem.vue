<template>
  <div id="product-info-page" class="h-full mb-14">
    <div class="grid grid-cols-1 gap-2">
      <ProductDescription
        :product="product"
        :selected-temperature="order.temperature"
        @temperature="changeTemperature"
      />
      <ProductCup
        :cup-size="product.cupSizes"
        :selected-cup-size="order.cupSize"
        :selected-cup-type="order.cupType"
        @cup-size="changeCupSize"
        @cup-type="changeCupType"
      />

      <div data-test="product-personal-option">
        <div class="grid grid-cols-1 space-y-2">
          <div class="font-bold pb-2">퍼스널 옵션</div>
          <ProductOption
            v-for="option in product.options"
            :key="option.optionNo"
            :option="option"
            @option="changeOption"
          >
            <template v-slot:optionQuantity>
              {{ currentOptionQuantity(option.optionNo) }}
            </template>
          </ProductOption>
        </div>
      </div>

      <ProductFooter
        @quantity="changeQuantity"
        @cart="addCart"
        @order="orderInstantly"
      >
        <template v-slot:finalPrice>
          {{ finalPrice }}
        </template>
        <template v-slot:quantity>
          {{ order.quantity }}
        </template>
      </ProductFooter>
    </div>
  </div>
</template>

<script>
import ProductApi from '@/api/Product';
import CartApi from '@/api/Cart';
import ProductDescription from '@/components/Product/ProductDescription.vue';
import ProductCup from '@/components/Product/ProductCup.vue';
import ProductOption from '@/components/Product/ProductOption.vue';
import ProductFooter from '@/components/Product/ProductFooter.vue';

export default {
  name: 'ProductItem',
  components: {
    ProductDescription,
    ProductCup,
    ProductOption,
    ProductFooter,
  },
  data() {
    return {
      product: {
        productNo: -1,
        nameKr: '',
        description: '',
        isBest: false,
        imageUrl: '',
        price: -1,
        category: 1,
        options: [],
        cupSizes: [],
      },
      order: {
        quantity: 1,
        cupSize: 1,
        cupType: 'MALL',
        temperature: 'HOT',
        options: [],
      },
    };
  },
  methods: {
    async getProductInfo() {
      const { productNo } = this.$route.params;
      const productApi = new ProductApi(this.apiClient);
      const response = await productApi.getProductInfo(productNo);

      this.product = response.product;
      this.backFillOrderOptions();
    },
    async addCart() {
      let orderInfo = this.order;
      const cartApi = new CartApi(this.apiClient);

      orderInfo = Object.assign(orderInfo, { productNo: this.product.productNo });

      await cartApi.addCart(orderInfo);
      // eslint-disable-next-line no-alert
      alert('장바구니에 담겼습니다');
      await this.$router.push('/product');
    },
    backFillOrderOptions() {
      const optionsLength = this.product.options.length;

      for (let i = 0; i < optionsLength; i += 1) {
        const currentOption = this.product.options[i];
        this.order.options.push({
          optionNo: currentOption.optionNo,
          quantity: currentOption.baseQuantity,
        });
      }

      this.order.cupSize = this.product.cupSizes[0].optionNo;
    },
    isOptionChangeable(orderOptionIndex, productOptionIndex, increment) {
      const currentQuantity = this.order.options[orderOptionIndex].quantity;
      const { baseQuantity } = this.product.options[productOptionIndex];

      return increment > 0 || (increment < 0 && currentQuantity > baseQuantity);
    },
    changeOption(e) {
      const { optionNo, delta } = e;
      const orderOptionIndex = this.order.options.findIndex(
        (option) => option.optionNo === optionNo,
      );
      const productOptionIndex = this.product.options.findIndex(
        (option) => option.optionNo === optionNo,
      );

      if (this.isOptionChangeable(orderOptionIndex, productOptionIndex, delta)) {
        this.order.options[orderOptionIndex].quantity += delta;
      }
    },
    isQuantityChangeable(increment) {
      return increment > 0 || (increment < 0 && this.order.quantity > 1);
    },
    changeQuantity(e) {
      if (this.isQuantityChangeable(e)) {
        this.order.quantity += e;
      }
    },
    currentOptionQuantity(optionNo) {
      return this.order.options.find((option) => option.optionNo === optionNo).quantity;
    },
    findOptionInOrder(optionNo) {
      return this.order.options.find((option) => option.optionNo === optionNo);
    },
    changeTemperature(temperature) {
      this.order.temperature = temperature;
    },
    changeCupSize(size) {
      this.order.cupSize = size;
    },
    changeCupType(type) {
      this.order.cupType = type;
    },
  },
  computed: {
    billedOptionPrice() {
      let totalBilledOptionPrice = 0;
      for (let i = 0; i < this.product.options.length; i += 1) {
        const currentOption = this.product.options[i];
        const currentOrder = this.findOptionInOrder(currentOption.optionNo);

        if (currentOrder !== undefined) {
          totalBilledOptionPrice
            += (currentOrder.quantity - currentOption.baseQuantity) * currentOption.unitprice;
        }
      }

      return totalBilledOptionPrice;
    },
    finalPrice() {
      return ((this.product.price + this.billedOptionPrice) * this.order.quantity).toLocaleString();
    },
  },
  async created() {
    await this.getProductInfo();
  },
};
</script>

<style scoped></style>
