<template>
  <div>
    <div class="d-inline-block">
      <v-breadcrumbs divider="/">
        <v-breadcrumbs-item
          v-for="item in list"
          :to="item.path"
          :exact="true"
          :key="item.name">
          {{ item.name }}
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: null,
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        const matched = this.$route.matched.filter(item => item.name);
        this.list = matched;
      },
    },
    watch: {
      $route() {
        this.getList();
      },
    },
  };

</script>

<style>
</style>
