<template>
  <div id="product-list-page" class="h-full mb-14">
    <div class="grid grid-cols-1 gap-2">
      <div data-test="product-category" class="py-4 text-2xl">
        {{ category }}
      </div>
      <router-link
        v-for="product in response.products"
        :key="product.productNo"
        :to="productLink(product.productNo)"
      >
        <ProductListItem
          :productNo="product.productNo"
          :name="product.nameKr"
          :isNew="product.isNew"
          :isHot="product.isHot"
          :englishName="product.nameEng"
          :unitPrice="product.price"
          :imageUrl="product.imgUrl"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductApi from '@/api/Product';
import ProductListItem from '@/components/ProductList/ProductListItem.vue';

export default {
  name: 'ProductListPage',
  components: { ProductListItem },
  data() {
    return {
      category: '에스프레소',
      response: {
        products: [],
      },
    };
  },
  methods: {
    productLink(productNo) {
      return `/product/${productNo}`;
    },
  },
  async created() {
    const productApi = new ProductApi(this.apiClient);

    this.response = await productApi.getProductList();
  },
};
</script>

<style scoped></style>
