import Vue from 'vue';
import {
  REMOVE_CART_ITEM,
  ADD_CART_ITEM,
  SET_CART_ITEM_COUNT,
  SET_CART_SUMMARY,
} from '@/constants/mutationTypes';

export default {
  namespaced: true,
  state: {
    data: {},
    summary: null,
  },
  mutations: {
    [ADD_CART_ITEM](state, payload) {
      const newPayload = Object.assign({}, payload);

      if (state.data[payload.id]) {
        state.data[payload.id].count += 1;
        newPayload.count = state.data[payload.id].count;
      } else {
        newPayload.count = 1;
      }

      Vue.set(state.data, [payload.id], newPayload);
      this.commit(`cart/${SET_CART_SUMMARY}`);
    },

    [REMOVE_CART_ITEM](state, productId) {
      Vue.delete(state.data, productId);
      this.commit(`cart/${SET_CART_SUMMARY}`);
    },

    [SET_CART_ITEM_COUNT](state, data) {
      Vue.set(state.data[data.id], 'count', parseInt(data.value, 10));
      this.commit(`cart/${SET_CART_SUMMARY}`);
    },

    [SET_CART_SUMMARY](state) {
      let summary = 0;
      Object.keys(state.data).forEach((item) => {
        summary += (state.data[item].price * state.data[item].count);
      });
      Vue.set(state, 'summary', summary);
    },
  },
};
