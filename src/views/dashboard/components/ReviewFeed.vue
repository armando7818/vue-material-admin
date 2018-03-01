<template>
  <v-card>
    <v-card-title primary-title>
      <v-layout row align-center class="ma-0">
        <v-flex class="text-xs-left pa-0">
          <p class="mb-0">
            <span class="title">Reviews Feed</span>
            <span class="grey--text">
              <span class="pl-3 pr-3">|</span>Today
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
    <v-layout class="fill-height layout">
      <v-flex>
        <v-list three-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-2">
                  <star-rating
                    class="inline-block"
                    :show-rating="item.starConfig.showRating"
                    :rating="item.starConfig.rating"
                    :increment=".5"
                    :read-only="item.starConfig.readOnly"
                    :star-size="item.starConfig.starSize">
                  </star-rating>
                  <span class="pl-2 caption">
                    {{item.date}}
                  </span>
                </v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
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
        items: [{
          avatar: 'http://lorempixel.com/400/200',
          date: '11/30/2017',
          title: 'Ali Connors',
          subtitle: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          starConfig: {
            rating: 5,
            starSize: 10,
            readOnly: true,
            showRating: false,
          },
        },
        {
          divider: true,
          inset: true,
        }, {
          avatar: 'http://lorempixel.com/400/200',
          date: '11/29/2017',
          title: 'Scotty Smith',
          subtitle: 'Wish I could come, but I\'m out of town this weekend.',
          starConfig: {
            rating: 3,
            starSize: 10,
            readOnly: true,
            showRating: false,
          },
        },
        {
          divider: true,
          inset: true,
        }, {
          avatar: 'http://lorempixel.com/400/200',
          date: '10/2/2017',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          starConfig: {
            rating: 4.5,
            starSize: 10,
            readOnly: true,
            showRating: false,
          },
        }, {
          divider: true,
          inset: true,
        }, {
          avatar: 'http://lorempixel.com/400/200',
          date: '9/2/2017',
          title: 'Trevor Handsen',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          starConfig: {
            rating: 4,
            starSize: 10,
            readOnly: true,
            showRating: false,
          },
        }, {
          divider: true,
          inset: true,
        }, {
          avatar: 'http://lorempixel.com/400/200',
          date: '8/10/2017',
          title: 'Britta Holt',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          starConfig: {
            rating: 3,
            starSize: 10,
            readOnly: true,
            showRating: false,
          },
        }],
      };
    },
  };

</script>

<style scoped>
  .inline-block {
    display: inline-block !important;
  }
</style>
