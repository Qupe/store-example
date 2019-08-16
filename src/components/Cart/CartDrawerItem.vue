<template>
  <div class="cart-item">
    <div class="cart-item__name">
      {{ productData.name }}
    </div>
    <div class="cart-item__price">
      {{ (productData.price * exchangeRate.current * productData.count) | formatPrice }}
    </div>
    <label class="cart-item__count">
      <input
        class="cart-item__count-input"
        type="number"
        min="1"
        :value="productData.count"
        @keypress="isNumber"
        @input="(event) => setCartItemCount({value:event.target.value, id: productData.id})"
      >
    </label>
    <div class="cart-item__delete">
      <img
        class="cart-item__delete-icon"
        src="../../assets/icons/trash.svg"
        alt=""
        @click="removeCartItem(productData.id)"
      >
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapState, mapGetters } from 'vuex';
  import { formatPrice } from '@/helpers';
  import { REMOVE_CART_ITEM, SET_CART_ITEM_COUNT } from '@/constants/mutationTypes';

  export default {
    name: 'CartDrawerItem',
    filters: { formatPrice },
    props: {
      productData: {
        type: Object,
        default() {},
      },
    },
    computed: {
      ...mapState(['exchangeRate']),
      ...mapGetters(['getDifference']),
    },
    methods: {
      ...mapMutations('cart', [REMOVE_CART_ITEM, SET_CART_ITEM_COUNT]),
      isNumber(event) {
        if (!/\d/.test(event.key)) event.preventDefault();
      },
    },
  };
</script>

<style lang="scss">
  .cart-item {
    border-bottom: 1px solid rgba(8,50,50,.15);
    padding-bottom: 20px;
    margin-bottom: 20px;

    &:last-child {
      border-bottom: none;
    }

    &__name {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    &__count {
      display: inline-block;
      width: 40%;
      text-align: center;
      vertical-align: middle;

      &-input {
        text-align: center;
        max-width: 100px;
        background-color: #ffffff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        outline: none;
        padding: 8px 14px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        font-size: 14px;

        &:hover {
          border-color: #c0c4cc;
        }

        &:focus {
          outline: none;
          border-color: #409eff;
          background-color: #fff;
        }
      }
    }

    &__price {
      display: inline-block;
      width: 50%;
      text-align: left;
      vertical-align: middle;
    }

    &__delete {
      display: inline-block;
      width: 10%;
      text-align: right;
      vertical-align: middle;

      &-icon {
        width: 18px;
        cursor: pointer;
      }
    }
  }
</style>
