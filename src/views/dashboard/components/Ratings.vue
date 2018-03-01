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
                  <v-icon>{{ item.action }}</v-icon>
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
    <div class="pa-3">
      <v-layout row align-center wrap class="ma-0">
        <v-flex class="text-xs-left text-sm-right" xs12 sm3 md3 lg2>
          <h2 class="heading mb-0">
            {{starConfig.rating}}
          </h2>
        </v-flex>
        <v-flex class="text-xs-left" no-wrap>
          <star-rating
            :show-rating="starConfig.showRating"
            :rating="starConfig.rating"
            :increment=".5"
            :read-only="starConfig.readOnly"
            :star-size="starConfig.starSize">
          </star-rating>
        </v-flex>
      </v-layout>
      <v-layout row align-center wrap class="ma-0">
        <v-flex class="text-xs-left text-sm-right" xs12 sm3 md3 lg2>
          <h4 class="grey--text title mb-0 no-wrap">
            - 0.0%
          </h4>
        </v-flex>
        <v-flex class="text-xs-left" no-wrap>
          <p class="mb-0">No movement has been made.</p>
        </v-flex>
      </v-layout>
      <v-layout
        row
        align-center
        wrap
        class="ma-0"
        v-for="rating in ratings"
        :key="rating.value">
        <v-flex class="text-sm-right pb-0" xs2>
          <v-icon
            v-for="n in rating.rate"
            :key="n"
            class="rating-star">
            star
          </v-icon>
          <!-- <span class="subheading">{{rating.rate}}</span> -->
        </v-flex>
        <v-flex no-wrap class="d-inline-flex align-center pb-0">
          <v-progress-linear
            background-opacity="0.3"
            :value="rating.value"
            :height="rating.height"
            :color="rating.color">
            {{rating.value}}
          </v-progress-linear>
          <span class="subheading pl-4 rating-count">
            {{rating.reviews}}
          </span>
        </v-flex>
      </v-layout>
    </div>
  </v-card>
</template>

<script>
  import StarRating from 'vue-star-rating';

  export default {
    components: {
      StarRating,
    },
    data() {
      return {
        starConfig: {
          rating: 4.5,
          starSize: 25,
          readOnly: true,
          showRating: false,
        },
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
        ratings: [{
          rate: 5,
          height: 5,
          value: 80,
          color: 'success',
          reviews: 500,
        }, {
          rate: 4,
          height: 5,
          value: 50,
          color: 'green accent-4',
          reviews: 350,
        }, {
          rate: 3,
          height: 5,
          value: 30,
          color: 'yellow accent-3',
          reviews: 100,
        }, {
          rate: 2,
          height: 5,
          value: 5,
          color: 'warning',
          reviews: 20,
        }, {
          rate: 1,
          height: 5,
          value: 2,
          color: 'error',
          reviews: 2,
        }],
      };
    },
  };

</script>

<style scoped>
  .rating-star {
    font-size: 12px;
  }

  .rating-count {
    width: 100px;
  }
</style>
