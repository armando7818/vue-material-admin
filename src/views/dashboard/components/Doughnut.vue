<template>
  <v-card>
    <v-card-title primary-title>
      <v-layout row align-center class="ma-0">
        <v-flex class="text-xs-left pa-0">
          <p class="mb-0">
            <span class="title">Avg. Ratings</span>
            <span class="grey--text">
              <span class="pl-3 pr-3">|</span>All Time
            </span>
          </p>
        </v-flex>
        <v-flex class="text-xs-right pa-0">
          <v-menu
            transition="slide-y-transition"
            bottom
            left>
            <v-btn icon slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                @click=""
                v-for="item in ranges"
                :key="item.title">
                <v-list-tile-content class="pr-2">
                  <v-icon small>{{ item.action }}</v-icon>
                </v-list-tile-content>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider></v-divider>
    <v-layout class="fill-height layout">
      <v-flex xs12 class="h-400 pa-3 overflow-x-hidden">
        <echart :option="doughnut" resizable></echart>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  import StarRating from 'vue-star-rating';

  export default {
    props: ['icon', 'statText', 'labelText', 'iconColor'],
    components: {
      StarRating,
    },
    data() {
      return {
        ranges: [
          {
            title: 'Today',
            action: 'today',
          },
          {
            title: 'All Time',
            action: 'access_time',
          },
        ],
        doughnut: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
          },
          legend: {
            // orient: 'vertical',
            // x: 'left',
            data: ['Reviews', 'Likes', 'Visitors'],
          },
          series: [{
            name: 'Site Information',
            type: 'pie',
            radius: ['50%', '70%'],
            data: [
              { value: 335, name: 'Reviews' },
              { value: 310, name: 'Likes' },
              { value: 234, name: 'Visitors' },
            ],
          }],
        },
      };
    },
  };

</script>

<style scoped>
  .echarts {
    width: auto;
    height: auto;
  }

  .h-400 {
    height: 400px !important;
  }
</style>
