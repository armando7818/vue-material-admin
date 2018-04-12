<template>
  <v-app light>
    <sidebar></sidebar>
    <configurator></configurator>
    <navbar></navbar>
    <app-main></app-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
  import { Sidebar, Navbar, AppMain, FooterBar, Configurator } from 'components/layout/';

  export default {
    components: {
      Sidebar,
      Navbar,
      AppMain,
      FooterBar,
      Configurator,
    },
  };

</script>
