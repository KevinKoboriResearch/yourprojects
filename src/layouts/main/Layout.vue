<template>
  <q-layout view="hHh LpR lfr">
    <q-header>
      <q-toolbar class="bg-grey-10 shadow-0">
        <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="left = !left" />
        <q-btn flat round dense to="/" exact>
          <img class="img-logo" :src="require('../../assets/your-trans-8.png')">
        </q-btn>
         <q-space/>
        <!-- <q-btn flat round dense @click="$q.fullscreen.toggle()">
          <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
        </q-btn> -->
        <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="right = !right">
          <!-- <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/> -->
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
      <q-separator/>
    </q-header>
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
      <!-- <q-separator/> -->
      <router-view />
      <!-- <whatsapp/> -->
      <!-- <q-dialog v-model="prompt">
      <q-card style="min-width: 300px;" square class="text-start bg-white">
        <q-card-section class="bg-grey-10">
        </q-card-section>
      </q-card>
      </q-dialog> -->
      <!-- <FabDynamicButton/> -->
      <!-- <Stickylayout/> -->
      <whatsapp/>
      <!-- <q-page-sticky position="bottom-right" :offset="[10, 10]">
        <q-fab icon="add" direction="up" color="deep-purple-8">
          <q-fab-action @click="prompt = true" color="deep-purple-5" icon="person_add" ></q-fab-action>
          <q-fab-action @click="onClick" color="deep-purple-5" icon="mail" ></q-fab-action>
        </q-fab>
      </q-page-sticky>
      <q-page-sticky v-if="!onClick" position="bottom-right" :offset="[50, 50]">
        <q-fab icon="add" direction="up" color="deep-purple-8" >
          <q-fab-action @click="onClick" color="deep-purple-5" icon="person_add" ></q-fab-action>
          <q-fab-action @click="onClick" color="deep-purple-5" icon="mail" ></q-fab-action>
        </q-fab>
      </q-page-sticky> -->
    </q-page-container>
    <!-- <q-separator/> -->
    <q-separator/>
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
import whatsapp from '../../components/whatsapp/whatsapp'
// import FabDynamicButton from '../../components/buttons/FabDynamicButton'
// import Stickylayout from '../../components/fab/Stickylayout'

export default {
  components: {
    LeftDrawer,
    RightDrawer,
    whatsapp
    // FabDynamicButton,
    // Stickylayout
  },
  data () {
    return {
      left: false,
      right: false,
      onClick: false
      // prompt: false
      // miniStateLeft: true,
      // miniStateRight: true
    }
  }
}
</script>

<style scoped>
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

.losango{
  width:5px;
  height:5px;
  background:#ccc;
  /* margin-top:50px;
  margin-left:50px; */
   /* Rotação */
   transform: rotate(-45deg);
}
.quadrado{
  width:5px;
  height:5px;
  background:#ccc;
  /* margin-top:50px;
  margin-left:50px; */
   /* Rotação */
}
</style>
