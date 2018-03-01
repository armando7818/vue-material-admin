<template>
  <main>
    <v-content>
      <v-container fluid>
        <levelbar></levelbar>
        <v-slide-y-transition mode="out-in">
          <!-- <v-layout column align-center>
            <img src="/static/v.png" alt="Vuetify.js" class="mb-5">
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-layout> -->
          <router-view class="animated"></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </main>
</template>

<script>
  import Levelbar from './Levelbar';

  export default {
    components: {
      Levelbar,
    },
    data() {
      return {};
    },
  };

</script>

<style>

</style>
