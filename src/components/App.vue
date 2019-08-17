<template>
  <div id="app">
    <transition name="slide-down">
      <app-notifier v-if="notifierVisible" />
    </transition>
    <router-view />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import AppNotifier from '@/components/AppNotifier.vue';

  export default {
    components: { AppNotifier },
    computed: {
      ...mapState(['notifierVisible']),
    },
  };
</script>

<style lang="scss">
  @import "~normalize.css";

  html, body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  #app {
    margin: auto;
    max-width: 1200px;
  }

  .slide-right-enter-active {
    transition: all .3s ease;
  }
  .slide-right-leave-active {
    transition: all .3s ease;
  }
  .slide-right-enter, .slide-right-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-down-enter-active {
    transition: all .3s ease;
  }
  .slide-down-leave-active {
    transition: all .3s ease;
  }
  .slide-down-enter, .slide-down-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
