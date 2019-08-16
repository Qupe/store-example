<template>
  <div class="catalog-category">
    <div class="catalog-category__name">
      {{ categoryData.G }}
    </div>
    <div class="catalog-category__products">
      <catalog-product
        v-for="(product, key) in categoryData.B"
        :id="key"
        :key="key"
        :name="product.N"
        :count="product.T"
        :price="product.C"
      />
    </div>
  </div>
</template>

<script>
  import CatalogProduct from '@/components/Catalog/CatalogProduct.vue';

  export default {
    name: 'CatalogCategory',
    components: { CatalogProduct },
    props: {
      categoryData: {
        type: Object,
        default() {},
      },
    },
  };
</script>

<style lang="scss">
  .catalog-category {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 20px;
    width: 100%;
    background: #f5f5f5;

    &__name {
      padding: 15px;
      border-bottom: 1px solid #303030;
      box-sizing: border-box;
      font-weight: bold;
      font-size: 16px;
      background: #3f3658;
      color: #ffffff;
    }

    &__products {
      overflow: hidden;
    }
  }
</style>
