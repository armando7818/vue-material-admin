<template>
  <v-card>
    <v-layout row align-center class="h-100 b-b">
      <v-flex class="text-xs-center">
        <span class="display-1">
          {{statText}}
        </span>
      </v-flex>
    </v-layout>
    <div class="stats-label">
      <v-chip
        label
        class="subheading"
        :color="iconColor"
        text-color="white">
        {{labelText}}
      </v-chip>
    </div>
    <v-layout row align-center class="h-100 b-t">
      <v-flex
        class="text-xs-center">
        <v-icon :color="iconColor" class="text-xs-center" x-large>{{icon}}</v-icon>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>

  export default {
    props: ['icon', 'statText', 'labelText', 'iconColor'],
  };

</script>

<style scoped>
.contain-label {
  position: relative;
}

.stats-label {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  top: 50%;
  text-transform: uppercase;
  transform: translateY(-50%);
}

.h-100 {
  height: 90px;
}

.b-b {
  border-bottom: 1px whitesmoke solid;
}

.b-t {
  border-top: 1px whitesmoke solid;
}
</style>
