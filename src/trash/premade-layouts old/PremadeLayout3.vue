<template>
  <q-layout view="hHh LpR lFr">
    <q-header>
      <div class="row no-wrap shadow-1">
      <q-toolbar :class="$q.dark.isActive ? 'bg-black text-white' : 'bg-grey-2 text-black'" class="col-8">
        <q-btn dense  flat icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <div class="img-logo" >
            <img class="img-logo" :src="$q.dark.isActive ? require('../../assets/your.png') : require('../../assets/projects.png')">
          </div>
        </q-toolbar-title>
        <q-btn flat dense icon="search" />
      </q-toolbar>
      <q-toolbar class="col-4" :class="$q.dark.isActive ? 'bg-pink-13 text-white' : 'bg-cyan-13 text-white'">
        <q-space />
        <q-tabs v-model="tab" shrink no-caps indicator-color="white">
          <q-route-tab to="/premade-layouts/drawer-1" label="Home" />
          <q-route-tab to="/premade-layouts/drawer-1/services" label="Services" />
          <q-route-tab to="/premade-layouts/drawer-1/about" label="About" />
          <q-route-tab to="/premade-layouts/drawer-1/doubts" label="Doubts" />
        </q-tabs >
      <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
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
            <img class="img-logo" :src="require('../../assets/yourprojects.png')">
          </div>
        </q-toolbar-title>
        <q-spacer/>
      <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import LeftDrawerList from '../drawers/LeftDrawerList.vue'

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
</style>
