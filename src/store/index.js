import { createStore } from 'vuex';
import UserApi from '@/api/User';

const store = createStore({
  state() {
    return {
      accessToken: null,
      cart: [],
    };
  },
  getters: {
    cartItemContraction(state) {
      const name = state.cart[0].productName;
      return `${name} 포함 ${state.cart.length}잔`;
    },
    cartItemTotalPrice(state) {
      let totalPrice = 0;
      const cartList = state.cart;
      for (let i = 0; i < cartList.length; i += 1) {
        const item = cartList[i];
        const optionLength = item.options.length;
        let finalBilledOptionPrice = 0;
        for (let j = 0; j < optionLength; j += 1) {
          const { quantity, baseQuantity, unitprice } = item.options[j];
          finalBilledOptionPrice += unitprice * (quantity - baseQuantity);
        }
        totalPrice += (item.price + finalBilledOptionPrice) * item.quantity;
      }
      return totalPrice.toLocaleString();
    },
  },
  mutations: {
    LOGIN(state, accessToken) {
      state.accessToken = accessToken;
    },
    addCart(state, orderInfo) {
      state.cart.push(orderInfo);
    },
  },
  actions: {
    async LOGIN({ commit }, { username, password }) {
      const userApi = new UserApi(this.apiClient);
      const accessToken = await userApi.login({ username, password });
      if (accessToken) {
        commit('LOGIN', accessToken);
        return true;
      }
      return false;
    },
  },
});

export default store;
