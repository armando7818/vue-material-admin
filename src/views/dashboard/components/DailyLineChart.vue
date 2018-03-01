<template>
  <v-card>
    <v-card-title primary-title>
      <v-layout row align-center class="ma-0">
        <v-flex class="text-xs-left pa-0">
          <p class="mb-0">
            <span class="title">Monthly Stats</span>
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
      <v-flex xs12 class="overflow-x-hidden mr-3 mb-3 ml-3 h-400">
        <echart
          class=""
          :option="stacked"
          resizable>
        </echart>
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
        stacked: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
              },
            },
          },
          legend: {
            data: ['Reviews', 'Likes', 'Purchases', 'Visitors'],
            x: 'right',
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July'],
          }],
          yAxis: [{
            type: 'value',
          }],
          series: [{
            name: 'Reviews',
            type: 'line',
            stack: 'Total Amount',
            areaStyle: {
              normal: {},
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Likes',
            type: 'line',
            stack: 'Total Amount',
            areaStyle: {
              normal: {},
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Purchases',
            type: 'line',
            stack: 'Total Amount',
            areaStyle: {
              normal: {},
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Visitors',
            type: 'line',
            stack: 'Total Amount',
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
            areaStyle: {
              normal: {},
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
