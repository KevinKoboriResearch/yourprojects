<template>
  <q-layout view="hHh LpR lfr" style=".q-btn {
  color: green;
  border-radius: 0px;
  background-color: yellow;
}">
    <q-header>
      <q-toolbar class="bg-grey-10 shadow-0">
        <q-btn dense flat icon="menu" class="q-mr-sm" @click="left = !left" />
        <img class="img-logo" :src="require('../../assets/your-trans-8.png')">
         <q-space/>
        <q-btn flat dense @click="$q.fullscreen.toggle()">
          <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
        </q-btn>
        <q-btn dense flat @click="right = !right">
          <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
        </q-btn>
      </q-toolbar>
      <q-toolbar class="bg-grey-10 text-white q-pa-none">
        <q-space/>
        <q-tabs>
        <q-route-tab name="home" label="Início" to="/" />
        <q-route-tab name="about" label="Sobre" to="/about" />
        <q-route-tab name="services" label="Serviços" to="/services" />
        <q-route-tab name="doubts" label="Dúvidas" to="/doubts" />
      </q-tabs>
      </q-toolbar>
    </q-header>
     <q-drawer flat content-class="bg-white" bordered :width="250" v-model="left" side="left">
      <LeftDrawer/>
    </q-drawer>
    <q-drawer content-class="bg-white" bordered mini :width="65" v-model="right" side="right">
      <RightDrawer/>
    </q-drawer>
    <q-page-container class="bg-green">
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
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab icon="add" direction="up" color="accent" >
          <q-fab-action @click="onClick" color="primary" icon="person_add" ></q-fab-action>
          <q-fab-action @click="onClick" color="primary" icon="mail" ></q-fab-action>
        </q-fab>
      </q-page-sticky>
    </q-page-container>
    <q-footer class="bg-grey-10" container style="height: 250px">
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
  background-color: #7c50ff;
}
.q-btn {
  color: green;
  border-radius: 0px;
  background-color: yellow;
}
.q-btn {
  color: #8a63fd;
  border-radius: 0px;
  background-color: #7c50ff;
}
.q-card {
  border-radius: 50px;
}

.per-deep-purple-x {
  color: #a587ff;
}

.q-separator {
  background-color: #8a63fd;
}

div.per-deep-purple-x {
  background-color: #7c50ff;
    color: #ffffff;
}
</style>
