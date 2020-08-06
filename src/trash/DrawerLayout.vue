<template>
  <q-layout view="hHh LpR lFr">
    <q-header reveal>
      <q-toolbar class="shadow-2">
        <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" />
        <img class="img-logo" :src="require('../../assets/your.svg')">
         <q-space/>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>
     <q-drawer flat content-class="bg-white" bordered :width="250" v-model="left" side="left">
      <LeftDrawer/>
    </q-drawer>
    <q-drawer content-class="bg-white" bordered :mini="miniStateRight" @mouseover="miniStateRight = false"
      @mouseout="miniStateRight = true" :width="250" show-if-above v-model="right" side="right">
      <RightDrawer/>
    </q-drawer>
    <q-page-container>
      <q-toolbar class="bg-white text-black q-pa-none shadow-0">
        <q-space/>
        <q-tabs>
        <q-route-tab name="home" label="Home" to="/" />
        <q-route-tab name="about" label="About" to="/about" />
        <q-route-tab name="services" label="Services" to="/services" />
        <q-route-tab name="doubts" label="Doubt" to="/doubt" />
      </q-tabs>
      </q-toolbar>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftDrawer from '../drawers/leftdrawer/LeftDrawer'
import RightDrawer from '../drawers/rightdrawer/RightDrawer'

export default {
  components: {
    LeftDrawer,
    RightDrawer
  },
  data () {
    return {
      left: false,
      right: false,
      // miniStateLeft: true,
      miniStateRight: true
    }
  }
}
</script>

<style>
.img-logo {
  height: 22px;
}
.q-header {
  background-color: #212121;
}
.q-layout {
  background-color: white;
}
</style>
