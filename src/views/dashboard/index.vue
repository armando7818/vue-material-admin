<template>
  <v-container fluid grid-list-sm>
    <v-layout wrap row>
      <v-flex xs12 sm6 md3 d-flex
        v-for="card in statsCardOptions"
        :key="card.labelText">
        <stats-card
          :icon="card.icon"
          :icon-color="card.iconColor"
          :label-text="card.labelText"
          :stat-text="card.statText">
        </stats-card>
      </v-flex>
      <v-flex d-flex xs12 md8>
        <stacked-line></stacked-line>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <doughnut></doughnut>
      </v-flex>
      <v-flex d-flex xs12 md6>
        <ratings></ratings>
      </v-flex>
      <v-flex d-flex xs12 md6>
        <review-feed></review-feed>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Doughnut from './components/Doughnut';
import StatsCard from './components/StatsCard';
import Ratings from './components/Ratings';
import StackedLine from './components/DailyLineChart';
import ReviewFeed from './components/ReviewFeed';

export default {
  components: {
    Doughnut,
    StatsCard,
    Ratings,
    StackedLine,
    ReviewFeed,
  },
  data() {
    return {
      statsCardOptions: [{
        icon: 'shopping_cart',
        iconColor: 'pink',
        labelText: 'sales',
        statText: '5,000k',
      }, {
        icon: 'monetization_on',
        iconColor: 'green',
        labelText: 'revenue',
        statText: '$50,000',
      }, {
        icon: 'thumb_up',
        iconColor: 'blue',
        labelText: 'likes',
        statText: '1,000,000',
      }, {
        icon: 'trending_up',
        iconColor: 'yellow',
        labelText: 'Growth',
        statText: '200%',
      }],
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
  height: 400px;
}
</style>
