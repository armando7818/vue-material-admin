<template>
  <div>
    <div class="d-inline-block">
      <v-breadcrumbs divider="/">
        <v-breadcrumbs-item
          v-for="item in list"
          :to="item.path"
          :disabled="isDropdownListRoute(item)"
          :exact="true"
          :key="item.path">
          {{ getRouteName(item) }}
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
        const matched = this.$route.matched.filter(item => this.getRouteName(item));
        this.list = matched;
      },
      getRouteName(item) {
        let routeNameToDisplay = item.name;
        if (item.meta && Object.prototype.hasOwnProperty.call(item.meta, 'name')) {
          routeNameToDisplay = item.meta.name(this.$route);
        }

        return routeNameToDisplay;
      },
      isDropdownListRoute(item) {
        return Object.prototype.hasOwnProperty.call(item.meta, 'expanded');
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
