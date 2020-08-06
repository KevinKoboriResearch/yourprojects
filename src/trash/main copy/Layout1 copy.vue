<template>
  <q-layout view="hHh LpR lfr">
    <q-header reveal>
      <q-toolbar class="shadow-0">
        <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" />
        <img class="img-logo" :src="require('../../assets/your-trans-5.png')">
         <q-space/>
        <q-btn flat dense @click="$q.fullscreen.toggle()">
          <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
        </q-btn>
        <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
      <q-toolbar class="bg-light-green-13  text-grey-10 q-pa-none">
        <q-space/>
        <q-tabs>
        <q-route-tab name="home" label="Início" to="/layout1/" />
        <q-route-tab name="about" label="Sobre" to="/layout1/about" />
        <q-route-tab name="services" label="Serviços" to="/layout1/services" />
        <q-route-tab name="doubts" label="Dúvidas" to="/layout1/doubts" />
      </q-tabs>
      </q-toolbar>
      <!-- <q-separator color="grey-9" /> -->
    </q-header>
     <q-drawer flat content-class="bg-white" bordered :width="250" v-model="left" side="left">
      <LeftDrawer/>
    </q-drawer>
    <q-drawer content-class="bg-white" bordered mini :width="65" v-model="right" side="right">
      <RightDrawer/>
    </q-drawer>
    <q-page-container class="bg-green">
      <!-- <q-toolbar class="bg-grey-10 text-white q-pa-none shadow-2">
        <q-space/>
        <q-tabs>
        <q-route-tab name="home" label="Home" to="/" />
        <q-route-tab name="about" label="About" to="/about" />
        <q-route-tab name="services" label="Services" to="/services" />
        <q-route-tab name="doubts" label="Doubt" to="/doubt" />
      </q-tabs>
      </q-toolbar> -->
      <div dense class="q-pa-sm bg-grey-10 fit row wrap justify-center items-start content-start inset-shadow">
        <div class="col-auto text-center">
          <div class="text-weight-bold text-grey-4">
            Quer uma aplicação utilizando as mesmas tecnologias que a <strong class="text-white">Google</strong> e o <strong class="text-white">Facebook?</strong>
          </div>
          <div class="text-weight-bolder text-subtitle1 text-white">
            Entre em contato com
            <a href="" class="text-cyan-12">Kevin Kobori</a>.
          </div>
        </div>
      </div>
      <q-separator/>
      <router-view />
    </q-page-container>
    <q-footer container style="height: 250px">
      <q-toolbar class="q-pa-lg">
        <!-- <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" /> -->
        <img class="footer-logo" :src="require('../../assets/your-trans-5.png')">
        <q-space/>
        <!-- <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/> -->
        <!-- <q-btn dense round flat icon="menu" @click="right = !right" /> -->
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import LeftDrawer from './leftdrawer/LeftDrawer'
import RightDrawer from './rightdrawer/RightDrawer'

export default {
  components: {
    LeftDrawer,
    RightDrawer
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

<style>
/* Layout.vue */
.img-logo {
  height: 30px;
}
.footer-logo {
  height: 60px;
}
.q-layout {
  background-color: white;
}
.q-header {
  background-color: #212121;
}
.q-footer {
  background-color: #77ff00;
}
.q-btn {
  background-color: #333333;
  color: #77ff00;
  border-top-left-radius: 0px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 0px;
  /* border-radius: 0px; */
}
/* Home.vue */
.q-card {
  background-color: #212121;
  color: white;
  border-radius: 0px;
}

.per-deep-purple-x {
  color: #77ff00;
}

.q-separator {
  background-color: #77ff00;
}

div.per-deep-purple-x {
  background-color: #77ff00;
  color: #212121;
}
</style>
