<template>
  <div :class="classList">
    <p>
      Курс доллара {{ exchangeRate.current | formatPrice }}
      <span v-if="getDifference === 'up'">&uarr;</span>
      <span v-if="getDifference === 'down'">&darr;</span>
    </p>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from 'vuex';
  import { formatPrice } from '@/helpers';
  import { SET_NOTIFIER_VISIBILITY } from '@/constants/mutationTypes';

  export default {
    name: 'AppNotifier',
    filters: { formatPrice },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      ...mapState(['exchangeRate']),
      ...mapGetters(['getDifference']),
      classList() {
        return {
          'app-notifier': true,
          'app-notifier_red': this.getDifference === 'up',
          'app-notifier_green': this.getDifference === 'down',
        };
      },
    },
    mounted() {
      setTimeout(() => {
        this.setNotifierVisibility(false);
      }, 3000);
    },
    methods: {
      ...mapMutations([SET_NOTIFIER_VISIBILITY]),
    },
  };
</script>

<style lang="scss">
  .app-notifier {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: calc(50% - 190px);
    top: 20px;
    transform: translateY(50%);
    background-color: #edf2fc;
    transition: opacity .3s,transform .4s,top .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    text-align: center;

    &_red {
      background-color: #fef0f0;
      border-color: #fde2e2;
      color: #f56c6c;
    }

    &_green {
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      color: #67c23a
    }

    p {
      margin: 3px 0;
    }
  }
</style>
