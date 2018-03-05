<template>
  <v-card>
    <v-layout row align-center class="stat-size">
      <v-flex class="text-xs-center">
        <span class="display-1">
          {{statText}}
        </span>
      </v-flex>
    </v-layout>
    <div class="stats-label overflow-hidden">
      <span class="seperator"></span>
      <v-chip
        label
        class="subheading"
        :color="iconColor"
        text-color="white">
        {{labelText}}
      </v-chip>
    </div>
    <v-layout row align-center class="stat-size">
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

.seperator {
  position: absolute;
  height: 2px;
  width: 100%;
  border: solid whitesmoke 1px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
}

.stat-size {
  height: 90px;
}

.b-b {
  border-bottom: 1px whitesmoke solid;
}

.b-t {
  border-top: 1px whitesmoke solid;
}
</style>
