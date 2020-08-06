<template>
  <div class="q-pa-md">
    <!-- <div container style="height: 96vh"> -->
          <q-layout view="hHh LpR lfr" container style="height: 96vh" class="shadow-2 rounded-borders bg-grey-10">
          <!-- <q-header :class="$q.dark.isActive ? 'bg-deep-purple-5 text-white' : 'bg-indigo-5 text-white'"> -->
            <q-header class="text-white">
              <!-- <q-header class="bg-primary text-white"> -->
            <q-toolbar class="q-pa-xl row">
              <q-btn size="lg" push @click="$q.dark.toggle()">
              <img class="img-logo" :src="$q.dark.isActive ? require('../../assets/your-trans-7.png') : require('../../assets/your-trans-5.png')">
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
      <!-- <q-separator/> -->
     <q-drawer flat content-class="bg-white" bordered :width="250" v-model="left" side="left">
      <LeftDrawer/>
    </q-drawer>
    <q-drawer content-class="bg-white" bordered mini :width="65" v-model="right" side="right">
      <RightDrawer/>
    </q-drawer>
    <q-page-container>
      <!-- <div dense class="q-pa-sm bg-grey-10 fit row wrap justify-center items-start content-start inset-shadow">
        <div class="col-auto text-center">
          <div class="text-weight-bold text-grey-4">
            Quer uma aplicação utilizando as mesmas tecnologias que a <strong class="text-white">Google</strong> e o <strong class="text-white">Facebook?</strong>
          </div>
          <div class="text-weight-bolder text-subtitle1 text-white">
            Entre em contato com
            <a href="" class="text-cyan-12">Kevin Kobori</a>.
          </div>
        </div>
      </div> -->
      <!-- <br> -->
      <!-- <q-separator/> -->
      <!-- <q-separator/> -->
      <div style="height:1px">
      </div>
      <q-separator/>
      <router-view />
      <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab icon="add" direction="up" color="accent" >
          <q-fab-action @click="onClick" color="primary" icon="person_add" ></q-fab-action>
          <q-fab-action @click="onClick" color="primary" icon="mail" ></q-fab-action>
        </q-fab>
      </q-page-sticky> -->
    </q-page-container>
    <q-footer class="bg-grey-10" container style="height: 50px">
      <q-toolbar class="q-pa-lg">
        <!-- <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" /> -->
        <img class="footer-logo" :src="require('../../assets/your-trans-5.png')">
        <q-space/>
        <!-- <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/> -->
        <!-- <q-btn dense round flat icon="menu" @click="right = !right" /> -->
      </q-toolbar>
    </q-footer>
  </q-layout>
  <!-- </div> -->
  </div>
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
  /* color: #8a63fd; */
  /* border-radius: 0px; */
  /* background-color: #7c50ff; */
}
.q-card {
  border-radius: 0px;
}

.per-word-strong {
  color: #a587ff;
}

.q-separator {
  background-color: #ffffff;
}

div.per-deep-purple-x {
  background-color: #7c50ff;
  color: #ffffff;
}
</style>
