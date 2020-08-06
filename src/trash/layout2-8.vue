<template>
  <q-layout view="hHh LpR lFr">
    <q-header reveal>
      <q-toolbar class="shadow-0">
        <q-btn dense flat icon="menu" class="q-mr-sm" @click="left = !left" />
        <img class="img-logo" :src="require('../../assets/your2.svg')">
         <q-space/>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>
     <q-drawer flat content-class="bg-white" bordered :width="250" v-model="left" side="left">
      <LeftDrawer/>
    </q-drawer>
    <q-drawer content-class="bg-white" bordered mini :width="65" show-if-above v-model="right" side="right">
      <RightDrawer/>
    </q-drawer>
    <q-page-container>
      <q-toolbar class="bg-grey-10 text-white q-pa-none shadow-2">
        <q-space/>
        <q-tabs>
        <q-route-tab name="home" label="Home" to="/" />
        <q-route-tab name="about" label="About" to="/about" />
        <q-route-tab name="services" label="Services" to="/services" />
        <q-route-tab name="doubts" label="Doubt" to="/doubt" />
      </q-tabs>
      </q-toolbar>
      <div flat dense class="q-pa-sm bg-grey-10 fit row wrap justify-center items-start content-start">
        <div class="col-auto text-center text-white">
          <div class="text-subtitle1">
            Quer uma aplicação utilizando as mesmas tecnologias que a <strong>Google</strong> e o <strong>Facebook?</strong>
          </div>
          <div class="text-weight-bolder">
            Entre en contato com
            <a href="" class="text-cyan-12 text-weight-bolder">Kevin Kobori</a>
          </div>
        </div>
      </div>
      <q-separator />
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar>
        <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" />
        <img class="img-logo" :src="require('../../assets/yourprojects.png')">
        <q-space/>
        <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
        <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
// import LeftDrawer from './leftdrawer/LeftDrawer'
// import RightDrawer from './rightdrawer/RightDrawer'

export default {
  components: {
    // LeftDrawer,
    // RightDrawer
  },
  data () {
    return {
      left: false,
      right: false
      // miniStateLeft: true,
      // miniStateRight: true
    }
  }
}
</script>
