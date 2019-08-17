<template>
  <div class="catalog-product">
    <div class="catalog-product__name">
      {{ name }} {{ count ? '(' + count + ')' : '' }}
    </div>
    <div class="catalog-product__price">
      <span
        v-if="price"
        :class="classList"
      >
        {{ (price * exchangeRate.current) | formatPrice }}
      </span>
      <span v-else>-</span>
    </div>
    <div class="catalog-product__add">
      <img
        v-if="price"
        class="catalog-product__add-icon"
        src="../../assets/icons/cart.svg"
        alt=""
        @click="addCartItem({id, name, price,})"
      >
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapState, mapGetters } from 'vuex';
  import { formatPrice } from '@/helpers';
  import { ADD_CART_ITEM } from '@/constants/mutationTypes';

  export default {
    name: 'CatalogProduct',
    filters: { formatPrice },
    props: {
      id: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
        required: true,
      },
      count: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        default: 0,
        required: true,
      },
    },
    computed: {
      ...mapState(['exchangeRate']),
      ...mapGetters(['getDifference']),
      classList() {
        return {
          'catalog-product__price-highlight': true,
          'catalog-product__price-highlight_red': this.getDifference === 'up',
          'catalog-product__price-highlight_green': this.getDifference === 'down',
        };
      },
    },
    methods: {
      ...mapMutations('cart', [ADD_CART_ITEM]),
    },
  };
</script>

<style lang="scss">
  .catalog-product {
    font-size: 14px;
    overflow: hidden;
    padding: 10px;
    border-bottom: 1px dashed rgba(8,50,50,.15);

    &:last-child {
      border-bottom: none;
    }

    &__name {
      display: inline-block;
      vertical-align: middle;
      width: 60%;
    }

    &__price {
      display: inline-block;
      width: 30%;
      text-align: center;
      vertical-align: middle;
      font-weight: 500;

      &-highlight {
        border-radius: 12px;
        padding: 4px 10px;

        &_red {
          background-color: rgb(245, 108, 108);
        }

        &_green {
          background-color: rgb(103, 194, 58);
        }
      }
    }

    &__add {
      display: inline-block;
      width: 10%;
      text-align: center;
      vertical-align: middle;

      &-icon {
        width: 18px;
        cursor: pointer;
      }
    }
  }
</style>
