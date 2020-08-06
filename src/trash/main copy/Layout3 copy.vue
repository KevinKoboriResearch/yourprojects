<template>
  <div class="q-pa-md">
  <!-- <q-layout view="hHh LpR lfr">
    <q-header container style="height: 350px">
      <q-toolbar class="shadow-0">
        <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" />
        <img class="img-logo" :src="require('../../assets/your-trans-5.png')">
         <q-space/>
        <q-btn flat dense @click="$q.fullscreen.toggle()">
          <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
        </q-btn>
        <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
      <q-toolbar class="bg-grey-10 text-white q-pa-none">
        <q-space/>
        <q-tabs>
        <q-route-tab name="home" label="Início" to="/layout2/" />
        <q-route-tab name="about" label="Sobre" to="/layout2/about" />
        <q-route-tab name="services" label="Serviços" to="/layout2/services" />
        <q-route-tab name="doubts" label="Dúvidas" to="/layout2/doubts" />
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
    </q-page-container>
    <q-footer container style="height: 250px">
      <q-toolbar class="q-pa-lg">
        <img class="footer-logo" :src="require('../../assets/your-trans-5.png')">
        <q-space/>
      </q-toolbar>
    </q-footer>
  </q-layout> -->

      <q-layout view="lHh lpr lFf" container style="height: 96vh" class="shadow-2 rounded-borders">
      <!-- <q-header :class="$q.dark.isActive ? 'bg-deep-purple-5 text-white' : 'bg-indigo-5 text-white'"> -->
        <q-header class="text-white">
          <!-- <q-header class="bg-primary text-white"> -->
        <q-toolbar class="q-pa-xl row">
          <q-btn size="lg" push @click="$q.dark.toggle()">
          <img class="img-logo" :src="$q.dark.isActive ? require('../../assets/twitch2.png') : require('../../assets/your-trans-5.png')">
        </q-btn>
      <!-- </div> -->
      <q-space />

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
    </q-toolbar>
      </q-header>
    <q-page-container>
        <q-page>
      <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
    </div>
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

<style>
.footer-logo {
  height: 60px;
}
.q-layout {
  background-color: white;
  /* border-top-left-radius: 0px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 0px; */
}
.q-header {
  background-color: #663bb8;
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
}
.q-card {
  background-color: #212121;
  color: white;
  border-radius: 0px;
}

.q-separator {
  background-color: #77ff00;
}

.img-logo {
  height: 30px;
}

.per-word-strong {
  color: #77ff00;
}

div.per-tittle-1 {
  background-color: #77ff00;
  color: #212121;
}

div.per-tittle-2 {
  background-color: #212121;
  color: #ffffff;
}
</style>
