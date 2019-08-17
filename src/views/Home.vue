<template>
  <div class="home">
    <cart-drawer />
    <div class="catalog">
      <catalog-category
        v-for="(category, key) in catalogData"
        :key="key"
        :category-data="category"
      />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import { GET_GOODS } from '@/constants/actionTypes';
  import CatalogCategory from '@/components/Catalog/CatalogCategory.vue';
  import CartDrawer from '@/components/Cart/CartDrawer.vue';

  export default {
    name: 'Home',
    components: { CartDrawer, CatalogCategory },
    computed: {
      ...mapState('catalog', { catalogData: 'data' }),
    },
    created() {
      this[GET_GOODS]();
    },
    mounted() {
      setInterval(() => {
        this[GET_GOODS]();
      }, 15000);
    },
    methods: {
      ...mapActions('catalog', [GET_GOODS]),
    },
  };
</script>

<style>
  .catalog {
    column-count: 2;
    column-gap: 20px;
    column-fill: initial;
    padding: 20px;
  }
</style>
