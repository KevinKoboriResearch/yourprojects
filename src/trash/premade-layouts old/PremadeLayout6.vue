<template>
<!-- <div id="q-app"> -->
  <div>
  <!-- <div class="q-pa-xl"> -->
    <q-layout view="lHh lpr lFf" container style="height: 850px" :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-5 text-white'">
      <!-- <q-header :class="$q.dark.isActive ? 'bg-deep-purple-5 text-white' : 'bg-indigo-5 text-white'"> -->
        <q-header reveal class="bg-primary text-white">
          <!-- <q-header class="bg-primary text-white"> -->
        <q-toolbar class="bg-primary q-pa-xl row">
      <div class="col-1">
      </div>
      <div class="col-4">
      <q-btn size="lg" push :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :label="$q.dark.isActive ? 'PROJECTS' : 'YOUR'" @click="$q.dark.toggle()" />
      <!-- <q-btn size="lg" push @click="$q.dark.toggle()">
          <img class="img-logo" :src="$q.dark.isActive ? require('../../assets/twitch2.png') : require('../../assets/twitch2.png')">
        </q-btn> -->
      </div>
      <q-space />
      <div class="q-pa-lg q-gutter-sm">
        <!-- <q-btn size="lg" class="selectable" :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading4" @click="simulateProgress(4)" push to="/premade-layouts/drawer-1" label="Home">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn size="lg" :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading1" @click="simulateProgress(1)" push to="/premade-layouts/drawer-1/services" label="Services">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn size="lg" :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading2" @click="simulateProgress(2)" push to="/premade-layouts/drawer-1/about" label="About">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn size="lg" :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading3" @click="simulateProgress(3)" push to="/premade-layouts/drawer-1/doubts" label="Doubts">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn
      color="secondary"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
    /> -->
      </div>
      <q-tabs shrink no-caps :indicator-color="$q.dark.isActive ? 'deep-purple-4' : 'indigo-4'">
        <q-route-tab to="/premade-layouts/drawer-1" label="Home" />

              <q-route-tab to="/premade-layouts/drawer-1/services" label="Services" />
              <q-route-tab to="/premade-layouts/drawer-1/about" label="About" />
              <q-route-tab to="/doubts" label="Doubts" />
      </q-tabs>
      <!-- <q-btn
      push
      color="secondary"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
    /> -->
      <div class="col-1">
          </div>
    </q-toolbar>
        <!-- <q-toolbar class="q-pa-xl row no-wrap">
          <div class="col-1">
          </div>
          <div class="col-4">

            <q-btn size="lg" align="right" flat @click="$q.dark.toggle()">
              <img class="img-logo" :src="$q.dark.isActive ? require('../../assets/your.png') : require('../../assets/projects.png')">
            </q-btn>
          </div>
          <q-space />
          <div class="col-6">
            <q-tabs v-model="tab" shrink no-caps :indicator-color="$q.dark.isActive ? 'cyan-13' : 'pink-13'">
              <q-route-tab to="/premade-layouts/drawer-1" label="Home" />
              <q-spacer/>
              <q-route-tab to="/premade-layouts/drawer-1/services" label="Services" />
              <q-route-tab to="/premade-layouts/drawer-1/about" label="About" />
              <q-route-tab to="/premade-layouts/drawer-1/doubts" label="Doubts" />
            </q-tabs>
          </div>
          <div class="col-1">
          </div>
        </q-toolbar> -->
      </q-header>
        <!-- :class="$q.dark.isActive ? 'bg-deep-purple-5 text-black' : 'bg-indigo-5 text-white'" -->
        <!-- <div class="row no-wrap shadow-1">
      <q-toolbar :class="$q.dark.isActive ? 'bg-black text-white' : 'bg-grey-2 text-black'" class="col-8 transparent"> -->
    <q-page-container>
        <!-- <div container style="height: 1000px">
          <img class="img-container" :src="$q.dark.isActive ? require('../../assets/twitch2.png') : require('../../assets/twitch2.png')" />
        </div> -->
        <div container style="height: 200px">
          <!-- <img class="img-container" :src="$q.dark.isActive ? require('../../assets/twitch2.png') : require('../../assets/twitch2.png')" /> -->
        </div>
        <q-page>
      <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
      <!-- <q-page-container>
        <q-page>
          <img class="img-container" :src="$q.dark.isActive ? require('../../assets/twitch2.png') : require('../../assets/twitch2.png')" />
        </q-page>
      </q-page-container>
    </q-layout>
        <div>

      <router-view />
        </div> -->
  <!-- </div> -->
</div>
</template>

<script>
export default {
  data () {
    return {
      changeLogo: false,
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false
    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.q-page-container {
  padding-top: 0 !important;
}
.img-logo {
  height: 30px;
}
.img-container {
  height: 300px;
}
.header {
  height: 600px
}
.trans {
  /* opacity: 0.5; */
  color: rgba(255, 99, 71, 0.2);
}

.selectable {
  color: #4CAF50;
}
</style>
