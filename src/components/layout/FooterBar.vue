<template>
  <v-footer app>
    <span>&copy; {{getTitle}}</span>
  </v-footer>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'footer',
        'pkg',
      ]),
      getTitle() {
        return this.footer.text || this.pkg.name;
      },
    },
  };

</script>

<style>

</style>
