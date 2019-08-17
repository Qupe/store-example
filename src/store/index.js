import Vue from 'vue';
import Vuex from 'vuex';
import { SET_EXCHANGE_RATE, SET_NOTIFIER_VISIBILITY } from '@/constants/mutationTypes';
import { randomNumber } from '@/helpers';
import Catalog from './catalog';
import Cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exchangeRate: {
      current: 0,
      previous: 0,
    },
    notifierVisible: false,
  },
  getters: {
    getDifference(state) {
      let status = '';
      if (state.exchangeRate.previous === 0) {
        status = 'none';
      } else if (state.exchangeRate.current > state.exchangeRate.previous) {
        status = 'up';
      } else {
        status = 'down';
      }
      return status;
    },
  },
  mutations: {
    [SET_EXCHANGE_RATE](state) {
      Vue.set(state.exchangeRate, 'previous', state.exchangeRate.current);
      Vue.set(state.exchangeRate, 'current', randomNumber(20, 80));
    },
    [SET_NOTIFIER_VISIBILITY](state, value) {
      Vue.set(state, 'notifierVisible', value);
    },
  },
  modules: {
    catalog: Catalog,
    cart: Cart,
  },
});
