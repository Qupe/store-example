<template>
  <div class="cart">
    <transition name="slide-fade">
      <div
        v-if="visible"
        class="cart__drawer"
      >
        <div class="cart__drawer-title">
          Корзина
        </div>
        <div
          v-if="Object.keys(cartData).length"
          class="cart__drawer-list"
        >
          <cart-drawer-item
            v-for="(item, key) in cartData"
            :key="key"
            :product-data="item"
          />
        </div>
        <div
          v-else
          class="cart__drawer-empty"
        >
          Корзина пуста
        </div>
        <div
          v-if="Object.keys(cartData).length"
          class="cart__drawer-summary"
        >
          Общая стоимость: {{ summary * exchangeRate.current | formatPrice }}
        </div>
      </div>
    </transition>
    <div
      class="cart__mini"
      @click="visible = !visible"
    >
      <div
        v-if="Object.keys(cartData).length"
        class="cart__mini-count"
      >
        {{ Object.keys(cartData).length }}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="#ffffff"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="9"
          cy="21"
          r="1"
        />
        <circle
          cx="20"
          cy="21"
          r="1"
        />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import { formatPrice } from '@/helpers';
  import CartDrawerItem from '@/components/Cart/CartDrawerItem.vue';

  export default {
    name: 'CartDrawer',
    filters: { formatPrice },
    components: { CartDrawerItem },
    data() {
      return {
        visible: false,
      };
    },
    computed: {
      ...mapState('cart', { cartData: 'data', summary: 'summary' }),
      ...mapState(['exchangeRate']),
      ...mapGetters(['getDifference']),
    },
  };
</script>

<style lang="scss">
  .cart {

    &__drawer {
      width: 400px;
      position: fixed;
      background: #ffffff;
      top: 0;
      bottom: 0;
      right: 0;
      box-shadow:
        0 8px 10px -5px rgba(0,0,0,.2),
        0 16px 24px 2px rgba(0,0,0,.14),
        0 6px 30px 5px rgba(0,0,0,.12);
      padding: 20px;

      &-title {
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 30px;
        color: #083232;
      }

      &-list {
        overflow-x: hidden;
        height: calc(100vh - 184px);
      }

      &-summary {
        margin-top: 48px;
        font-size: 18px;
        font-weight: 500;
      }
    }

    &__tem-count {
      display: block;
    }

    &__item-delete-icon {
      width: 18px;
    }

    .cart__mini {
      cursor: pointer;
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 10;
      border-radius: 50%;
      background: #3f3658;
      padding: 20px 20px 16px;

      &-count {
        position: absolute;
        top: -5px;
        left: 5px;
        background-color: #f56c6c;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #fff;
      }
    }
  }
</style>
