<template>
  <q-layout view="hHh LpR lFr">
    <q-header reveal>
      <q-toolbar class="shadow-2">
        <img class="img-logo" :src="$q.dark.isActive ? require('../assets/yourprojects2.png') : require('../assets/yourprojects2.png')">
        <q-space/>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
      </q-toolbar>
      <q-toolbar class="q-pa-none shadow-0">
        <q-space/>
        <q-tabs>
        <q-route-tab name="home" label="Home" to="/" />
        <q-route-tab name="services" label="Services" to="/services" />
        <q-route-tab name="about" label="About" to="/about" />
        <q-route-tab name="doubts" label="Doubt" to="/doubt" />
      </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
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
.q-header {
  background-color: #212121;
}
.q-layout {
  background-color: white;
}
.q-drawer {
  background-color: #212121;
}
</style>
