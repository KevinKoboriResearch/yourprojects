<template>
  <div class="q-pa-md">
    <!-- <div container style="height: 96vh"> -->
          <q-layout view="hHh LpR lfr" container style="height: 96vh" class="shadow-2 rounded-borders bg-grey-10">
          <!-- <q-header :class="$q.dark.isActive ? 'bg-deep-purple-5 text-white' : 'bg-indigo-5 text-white'"> -->
            <q-header class="text-white">
              <!-- <q-header class="bg-primary text-white"> -->
            <q-toolbar class="q-pa-xl row">
              <!-- <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="right = !right"/> -->
              <q-btn class="bg-deep-purple-8" style="border-top-left-radius: 5px; border-top-right-radius: 5px;
        border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" padding="sm md" push @click="$q.dark.toggle()">
              <img class="img-logo" :src="$q.dark.isActive ? require('../../assets/your-trans-7.png') : require('../../assets/your-trans-5.png')">
            </q-btn>
          <!-- </div> -->
          <q-space />
          <q-tabs narrow-indicator :breakpoint="0" no-caps>
            <div class="q-pl-sm"></div>
            <q-btn push style="border-top-left-radius: 5px; border-top-right-radius: 5px;
        border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8" v-if="$q.screen.gt.sm" name="home" label="Início" to="/1/" />
            <div class="q-pl-sm"></div>
            <q-btn push style="border-top-left-radius: 5px; border-top-right-radius: 5px;
        border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8" v-if="$q.screen.gt.sm" name="about" label="Sobre" to="/1/about" />
            <div class="q-pl-sm"></div>
            <q-btn push style="border-top-left-radius: 5px; border-top-right-radius: 5px;
        border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8" v-if="$q.screen.gt.sm" name="services" label="Serviços" to="/1/services" />
            <div class="q-pl-sm"></div>
            <q-btn push style="border-top-left-radius: 5px; border-top-right-radius: 5px;
        border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8" v-if="$q.screen.gt.sm" name="doubts" label="Dúvidas" to="/1/doubts" />
            <q-btn-dropdown class="bg-deep-purple-8 q-py-xs q-px-none" :content-style="{ backgroundColor: '#ff000000' }" style="border-top-left-radius: 5px; border-top-right-radius: 5px;
        border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" size="md" push no-caps v-if="$q.screen.lt.md" auto-close dropdown-icon="mdi-menu-down" :loading="loading" label="Pages">
        <!-- icon="mdi-page-layout-header"
        dropdown-icon="mdi-arrow-down-drop-circle" -->
              <q-list class="q-pa-none q-ma-none fit column wrap justify-center">
                <q-item class="q-pt-xs q-pb-none q-px-none" clickable @click="tab = 'home'" to="/1">
                <!-- <q-item class="quadrado"></q-item> -->
                  <q-btn size="12px" push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
                    border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8 text-white" label="Home" />
                </q-item>
                <q-item class="q-pt-xs q-pb-none q-px-none" clickable @click="tab = 'services'" to="/1/services" >
                  <q-btn size="12px" push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
                    border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8 text-white" label="Serviços" />
                </q-item>
                <q-item class="q-pt-xs q-pb-none q-px-none" clickable @click="tab = 'about'" to="/1/about" >
                  <q-btn size="12px" push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
                    border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8 text-white" label="Sobre" />
                </q-item>
                <q-item class="q-pt-xs q-pb-none q-px-none" clickable @click="tab = 'doubts'" to="/1/doubts" >
                  <q-btn size="12px" push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
                    border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-8 text-white" label="Dúvidas" />
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-tabs>
        </q-toolbar>
        <q-separator/>
      </q-header>
      <!-- <q-separator/> -->
     <q-drawer flat content-class="bg-white" bordered :width="250" v-model="left" side="left">
      <LeftDrawer/>
    </q-drawer>
    <q-drawer content-class="bg-white" bordered mini :width="65" v-model="right" side="right">
      <RightDrawer/>
    </q-drawer>
    <q-page-container class="bg-grey-10">
      <!-- <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="right = !right"/> -->
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
      <!-- <div style="height:1px">
      </div> -->
      <!-- <q-separator/> -->
      <!-- <div class="row">
        <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="left = !left" />
        <q-space/>
        <q-btn dense square flat icon="menu" class="q-mr-sm text-white" @click="right = !right"/>
      </div> -->
      <router-view />
      <whatsapp/>
      <q-page-sticky position="top-left" :offset="[15, 15]">
        <q-btn class="text-white" padding="none" style="border-top-left-radius: 5px; border-top-right-radius: 5px;
          border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" flat @click="left = !left">
          <q-icon name="menu" size="30px" />
        </q-btn>
    </q-page-sticky>
    <q-page-sticky position="top-right" :offset="[15, 15]">
        <q-btn class="text-white" padding="none" style="border-top-left-radius: 5px; border-top-right-radius: 5px;
        border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" flat @click="right = !right">
          <q-icon name="menu" size="30px" />
        </q-btn>
    </q-page-sticky>
      <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab icon="add" direction="up" color="accent" >
          <q-fab-action @click="onClick" color="primary" icon="person_add" ></q-fab-action>
          <q-fab-action @click="onClick" color="primary" icon="mail" ></q-fab-action>
        </q-fab>
      </q-page-sticky> -->
    </q-page-container>
    <q-footer class="bg-grey-10" container style="height: 20px">
      <q-separator/>
      <!-- <q-toolbar dense class="q-pa-none q-px-none"> -->
        <!-- <q-btn dense round flat icon="menu" class="q-mr-sm" @click="left = !left" /> -->
        <img class="footer-logo q-pa-xs" :src="require('../../assets/yourprojects2.png')">
        <q-space/>
        <!-- <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/> -->
        <!-- <q-btn dense round flat icon="menu" @click="right = !right" /> -->
      <!-- </q-toolbar> -->
    </q-footer>
  </q-layout>
  <!-- </div> -->
  </div>
</template>

<script>
import LeftDrawer from './leftdrawer/LeftDrawer'
import RightDrawer from './rightdrawer/RightDrawer'
import whatsapp from '../../components/whatsapp/whatsapp'

export default {
  components: {
    LeftDrawer,
    RightDrawer,
    whatsapp
  },
  data () {
    return {
      left: false,
      right: false,
      loading: false
      // miniStateLeft: true,
      // miniStateRight: true
    }
  }
}
</script>

<style scoped>
/* Layout.vue */
.img-logo {
  height: 28px;
}
.footer-logo {
  height: 18px;
}
.q-layout {
  background-color: white;
}
.q-header {
  background-color: #212121;
  /* background-color: #ffffff; */
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
  width:100%;
  height:20px;
  background:#ccc;
  /* margin-top:50px;
  margin-left:50px; */
   /* Rotação */
}
</style>
