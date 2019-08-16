<template>
  <div id="app">
    <router-view />
  </div>
</template>

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

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
