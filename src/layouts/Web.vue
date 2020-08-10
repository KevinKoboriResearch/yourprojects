<template>
  <q-layout view="hHh LpR lfr" :style="{ cursor: selectedCursor }">
    <q-header reveal>
      <q-toolbar class="bg-grey-10 shadow-0">
        <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="left = !left" />
        <q-btn flat round dense @click="$q.dark.toggle()">
          <img class="img-logo" :src="require('../assets/your-trans-8.png')">
        </q-btn>
         <q-space/>
         <div class="text-white">
         </div>
        <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="right = !right">
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
    <q-page-container>
      <q-separator inset-shadow />
      <div v-if="this.$route.fullPath != '/'" class="q-px-xl bg-grey-10 fit row wrap justify-center items-start content-center inset-shadow">
        <div class="q-pt-xs col-auto text-center text-white">
          <q-tabs dense class="text-white" no-caps>
            <q-tab
              icon="mdi-web"
              label="Web"
              @click="dynamicRoute('')"
            />
            <q-tab
              icon="mdi-apple-ios"
              label="iPhone"
              @click="dynamicRoute('ios')"
            />
            <q-tab
              icon="mdi-google-play"
              label="Android" @click="dynamicRoute('android')"
            />
            <q-tab
              icon="mdi-apple"
              label="Mac"
              @click="dynamicRoute('mac')"
            />
            <q-tab
              icon="mdi-microsoft"
              label="Windows"
              @click="dynamicRoute('windows')"
            />
          </q-tabs>
        </div>
      </div>
      <router-view />
      <whatsapp/>
      <q-page-sticky v-if="$store.state.walle.showWallE" :offset="[0, 0]">
        <WallE/>
      </q-page-sticky>
    </q-page-container>
    <q-footer class="bg-grey-10" container style="height: 250px">
      <q-toolbar class="q-pa-lg">
        <img class="footer-logo" :src="require('../assets/your-trans-5.png')">
        <q-space/>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import LeftDrawer from '../components/drawers/LeftDrawer'
import RightDrawer from '../components/drawers/RightDrawer'
import whatsapp from '../components/whatsapp/DynamicWhatsapp'
import WallE from '../components/animations/WallE'
// import PagesToolbar from '../components/toolbars/PagesToolbar'
// import FabDynamicButton from '../../components/buttons/FabDynamicButton'
// import Stickylayout from '../../components/fab/Stickylayout'

export default {
  components: {
    LeftDrawer,
    RightDrawer,
    whatsapp,
    WallE
    // PagesToolbar
    // FabDynamicButton,
    // Stickylayout
  },
  data () {
    return {
      left: false,
      right: false,
      onClick: false,
      routeHomeVal: false,
      showWallE: true
      // prompt: false
      // miniStateLeft: true,
      // miniStateRight: true
    }
  },
  methods: {
    dynamicRoute (val) {
      const about = 'about'
      const services = 'services'
      const doubts = 'doubts'
      if (this.$route.fullPath.search(/\babout\b/) >= 0) {
        this.$router.push('/' + val + '/' + about)
      } else if (this.$route.fullPath.search(/\bservices\b/) >= 0) {
        this.$router.push('/' + val + '/' + services)
      } else if (this.$route.fullPath.search(/\bdoubts\b/) >= 0) {
        this.$router.push('/' + val + '/' + doubts)
      } else {
        this.$router.push('/' + val)
      }
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
  /* border-radius: 0px; */
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
