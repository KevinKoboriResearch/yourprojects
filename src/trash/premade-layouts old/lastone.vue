<template>
  <q-layout view="hHh LpR lFr" >
    <q-header>
      <!-- reveal -->
      <q-toolbar >
        <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" />
        <img @click="$q.dark.toggle()" class="img-logo" :src="$q.dark.isActive ? require('../assets/twitch2.png') : require('../assets/twitch2.png')">
        <q-space/>
        <q-tabs narrow-indicator :breakpoint="0" no-caps>
        <q-route-tab v-if="$q.screen.gt.sm" name="home" label="Home" to="/" />
        <q-route-tab v-if="$q.screen.gt.sm" name="services" label="Services" to="/services" />
        <q-route-tab v-if="$q.screen.gt.sm" name="about" label="About" to="/about" />
        <q-route-tab v-if="$q.screen.gt.sm" name="doubts" label="Doubts" to="/doubts" />
        <q-btn-dropdown no-caps v-if="$q.screen.lt.md" auto-close stretch flat label="Pages">
          <q-list>
            <q-item clickable @click="tab = 'home'" to="/" >
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'services'" to="/services" >
              <q-item-section>Services</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'about'" to="/about" >
              <q-item-section>About</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'doubts'" to="/doubts" >
              <q-item-section>Doubts</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
      <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>
     <q-drawer :mini="miniStateLeft" @mouseover="miniStateLeft = false" @mouseout="miniStateLeft = true"
    :width="250" show-if-above v-model="left" :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" side="left">
      <br>
      <LeftDrawerList/>
    </q-drawer>
    <q-drawer :mini="miniStateRight" @mouseover="miniStateRight = false" @mouseout="miniStateRight = true"
    :width="250" show-if-above v-model="right" side="right">
    <br>
    </q-drawer>

    <q-page-container >
      <div class="header-border-container bg-white">
        <router-view />
      </div>
    </q-page-container>
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
}
.header-border-container {
  height: 100%;
  width:100%;
  border-top-left-radius: 25px;
  /* border-top-right-radius: 25px; */
}
.q-drawer__content {
  background-color: rgba(102,59,184,0.6);
}
.q-header {
  background-color: rgba(0,0,0,0.8);
}
.q-layout {
  background-color: rgba(102,59,184,0.6);
}
</style>
