<template>
  <q-layout view="hHh LpR lFr">
    <q-header>
      <!-- reveal -->
      <div class="q-py-lg row no-wrap shadow-24" :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-7 text-white'">
      <q-toolbar class="q-py-xl row rounded-borders" :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'">
      <!-- <div class="col-1"> -->
        <q-btn dense  flat icon="menu" @click="left = !left" />
        <q-space/>
      <!-- </div> -->
      <!-- <div class="col-4"> -->
      <q-btn push :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-7 text-white'" :label="$q.dark.isActive ? 'PROJECTS' : 'YOUR'" @click="$q.dark.toggle()" />
      <!-- <q-btn size="lg" push @click="$q.dark.toggle()">
          <img class="img-logo" :src="$q.dark.isActive ? require('../../assets/twitch2.png') : require('../../assets/twitch2.png')">
        </q-btn> -->
      <!-- </div> -->
      <q-space />
      <q-space />
      <q-space />
      <!-- <div class="q-gutter-sm"> -->
        <!-- <q-btn-group shrink no-caps push>
        <q-btn :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading4" @click="simulateProgress(4)" push to="/premade-layouts/drawer-1" label="Home">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading1" @click="simulateProgress(1)" push to="/premade-layouts/drawer-1/services" label="Services">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading2" @click="simulateProgress(2)" push to="/premade-layouts/drawer-1/about" label="About">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" :loading="loading3" @click="simulateProgress(3)" push to="/premade-layouts/drawer-1/doubts" label="Doubts">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn> -->
        <!-- <q-btn
      color="secondary"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
    /> -->
        <!-- </q-btn-group> -->
      <q-tabs shrink no-caps :indicator-color="$q.dark.isActive ? 'deep-purple-5' : 'indigo-5'">
        <q-route-tab to="/premade-layouts/drawer-1" label="Home" />

              <q-route-tab to="/premade-layouts/drawer-1/services" label="Services" />
              <q-route-tab  to="/about" label="About" />
              <q-route-tab  to="/doubts" label="Doubts" />
      </q-tabs>
        <q-space/>
<q-btn dense round flat icon="menu" @click="right = !right" />
      <!-- </div> -->
      <!-- <div class="col-1"> -->
          <!-- </div> -->
    </q-toolbar>
      <!-- <q-toolbar :class="$q.dark.isActive ? 'bg-black text-white' : 'bg-grey-2 text-black'" class="col-8 transparent">
        <q-btn dense  flat icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <div class="img-logo" >
            <img class="img-logo" :src="$q.dark.isActive ? require('../assets/your.png') : require('../assets/projects.png')">
          </div>
        </q-toolbar-title>
        <q-btn flat dense icon="search" />
      </q-toolbar>
      <q-toolbar class="col-4" :class="$q.dark.isActive ? 'bg-pink-13 text-white' : 'bg-cyan-13 text-white'">
        <q-space />
        <q-tabs v-model="tab" shrink no-caps indicator-color="white">
          <q-route-tab to="/premade-layouts/drawer-1" label="Home" />
          <q-route-tab to="/services" label="Services" />
          <q-route-tab to="/about" label="About" />
          <q-route-tab to="/doubts" label="Doubts" />
        </q-tabs >
      <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar> -->
    </div>
    </q-header>
    <q-drawer :mini="miniStateLeft" @mouseover="miniStateLeft = false" @mouseout="miniStateLeft = true"
    :width="250" show-if-above v-model="left" side="left">
      <!-- drawer content -->
      <LeftDrawerList/>
    </q-drawer>
    <q-drawer :mini="miniStateRight" @mouseover="miniStateRight = false" @mouseout="miniStateRight = true"
    :width="250" show-if-above v-model="right" side="right">
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal :class="$q.dark.isActive ? 'bg-black text-white' : 'bg-grey-2 text-black'">
      <q-toolbar>
        <q-toolbar-title>
          <div class="img-logo" >
            <img class="img-logo" :src="require('../assets/yourprojects.png')">
          </div>
        </q-toolbar-title>
        <q-spacer/>
      <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import LeftDrawerList from './drawers/LeftDrawerList.vue'

export default {
  components: {
    LeftDrawerList
  },
  data () {
    return {
      left: false,
      right: false,
      miniStateLeft: true,
      miniStateRight: true
    }
  }
}
</script>

<style>
.img-logo {
  height: 22px;
  /* margin: auto; */
  /* width: 50%; */
  /* border: 3px solid green; */
  /* padding: 10px; */
}
/* .transparent {
  background-color: black;
  color: red;
  opacity: 0.1;
} */
</style>
