<template>
  <q-layout view="hHh LpR lFr"
  >
  <!-- :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" -->
    <q-header
    >
      <div class="bg-orange text-white">
    <!-- :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" -->
      <!-- <div class="row no-wrap shadow-0"
      > -->
      <!-- :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-7 text-white'" -->
        <!-- :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" -->
        <!-- <q-toolbar class="row rounded-borders bg-transparent"
        >
          <q-btn dense  flat icon="menu" @click="left = !left" />
          <q-space/>
          <q-btn size="lg" :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-7 text-white'" @click="$q.dark.toggle()">
            <img class="img-logo" :src="$q.dark.isActive ? require('../assets/twitch2.png') : require('../assets/twitch2.png')">
          </q-btn>
          <q-space />
          <q-space />
          <q-space />
          <q-tabs shrink no-caps indicator-color="grey-14">
            <q-route-tab to="/" label="Home" />
            <q-route-tab to="/services" label="Services" />
            <q-route-tab  to="/about" label="About" />
            <q-route-tab  to="/doubts" label="Doubts" />
          </q-tabs>
          <q-space/>
          <q-btn dense round flat icon="menu" @click="right = !right" />
        </q-toolbar> -->
        <!-- <div class="bg-orange text-white"> -->
    <!-- </div> -->
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-space />
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar>
      <q-toolbar inset>
        <q-toolbar-title><strong>Quasar</strong> Framework</q-toolbar-title>
      </q-toolbar>
        </div>
        <!-- <div container class="header-border-container bg-white">
        </div> -->
    </q-header>

    <q-drawer :mini="miniStateLeft" @mouseover="miniStateLeft = false" @mouseout="miniStateLeft = true"
    :width="250" show-if-above v-model="left" :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" side="left">
      <!-- drawer content -->
      <br>
      <br>
      <!-- <LeftDrawerList/> -->
    </q-drawer>
    <q-drawer :mini="miniStateRight" @mouseover="miniStateRight = false" @mouseout="miniStateRight = true"
    :width="250" show-if-above v-model="right" side="right">
    <br>
    <br>
      <!-- drawer content -->
    </q-drawer>
      <!-- <div container class="header-border-container bg-white"> -->
    <q-page-container >
      <div class="header-border-container bg-white">
        <router-view />
      </div>
    </q-page-container>
        <!-- </div> -->
    <!-- <q-footer :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'">
      <q-toolbar>
        <q-toolbar-title>
          <div class="img-logo" >
            <img class="img-logo" :src="require('../assets/yourprojects.png')">
          </div>
        </q-toolbar-title>
        <q-spacer/>
      <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script>
// import LeftDrawerList from './drawers/LeftDrawerList.vue'

export default {
  components: {
    // LeftDrawerList
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
.header-border-container {
  height: 100%;
  width:100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}
.q-drawer__content {
  background-color: #212121;
  /* #663bb8; */
}

.q-header {
  background-color: #212121;
}
.q-layout {
  background-color: #212121;
}
</style>
