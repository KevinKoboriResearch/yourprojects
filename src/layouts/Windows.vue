<template>
<div>

        <!-- <div class="q-pa-md text-justify column wrap justify-center items-center content-center">
        <div class="row">

    <q-btn color="deep-purple-5" class="q-px-sm" dense push @click="setRandomSize" label="Tamanho da página">
    </q-btn>
    <q-btn color="deep-purple-5" class="q-px-sm" dense push @click="setDefaultSize" label="Voltar ao Padrão">
    </q-btn>
        </div>
        <div class="row">
          <div class="justify-center">
            Reported:
            <q-badge>width: {{ report.width }}</q-badge>
            <q-badge>height: {{ report.height }}</q-badge>
          </div>
        </div>
        <div class="row"> -->

    <!-- <div class="q-pa-md"> -->
    <!-- <div :style="style" class="container bg-black rounded-borders"> -->

  <div class="q-pa-md">
    <!-- <HomeToolbar> -->
        <q-bar dense class="bg-grey-9 text-white q-electron-drag">
          <q-icon name="mdi-desktop-tower" />
          <div>Windows</div>

          <q-space />

          <q-btn dense flat icon="minimize" @click="minimize" />
          <q-btn dense flat icon="crop_square" @click="maximize" />
          <q-btn dense flat icon="close" @click="closeApp" />
        </q-bar>
    <q-layout view="hHh LpR lfr" container style="height: 94vh; width:100%;" class="containerSize shadow-2">
      <q-header reveal class="text-white shadow-4">
        <!-- <q-header elevated> -->

      <q-toolbar class="q-pa-xl row">
        <!-- @click="$q.dark.toggle()" -->
        <q-btn class="bg-light-blue-9" push style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;" padding="sm md" @click="$q.dark.toggle()">
        <img class="img-logo" :src="require('../assets/your-trans-5.png')">
      </q-btn>
      <!-- <q-separator/> -->
    <q-space />
    <!-- <div class="q-pt-xs col-auto text-center text-white">
        <q-tabs dense class="text-white" no-caps>
          <q-tab
            icon="mdi-web"
            label="Web"
            @click="dynamicRoute('')"
          />
          <q-tab
            icon="mdi-apple-ios"
            label="iPhone"
            @click="dynamicRoute('/ios')"
          />
          <q-tab
            icon="mdi-google-play"
            label="Android" @click="dynamicRoute('/android')"
          />
          <q-tab
            icon="mdi-apple"
            label="Mac"
            @click="dynamicRoute('/mac')"
          />
          <q-tab
            icon="mdi-microsoft"
            label="Windows"
            @click="dynamicRoute('/windows')"
          />
        </q-tabs>
      </div> -->
      <!-- <q-btn-toggle
        v-model="model"
        flat stretch
        shrink
        toggle-color="yellow"
        :options="[
        {label: 'One', value: 'one'},
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
      /> -->
    <q-tabs narrow-indicator :breakpoint="0" no-caps>
          <div class="q-pl-sm"></div>
          <!-- @click="dynamicRoute('mac')" -->
          <q-btn
            push
            label="Início"
            class="navigation-btn bg-light-blue-9"
            style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
            v-if="$q.screen.gt.sm" name="home"
            to="/windows"
          />
            <div class="q-pl-sm"></div>
          <!-- @click="dynamicRoute('windows')" -->
          <q-btn
            push
            label="Sobre"
            class="navigation-btn bg-light-blue-9"
            style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
            v-if="$q.screen.gt.sm" name="about"
            to="/windows/about" />
          <div class="q-pl-sm"></div>
          <!-- @click="dynamicRoute('windows')" -->
          <q-btn

               push
        label="Serviços"
        class="navigation-btn bg-light-blue-9"
        style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
        v-if="$q.screen.gt.sm" name="services"
        to="/windows/services" />
      <div class="q-pl-sm"></div>
       <!-- @click="dynamicRoute('windows')" -->
      <q-btn

               push
        label="Dúvidas"
        class="navigation-btn bg-light-blue-9"
        style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
        v-if="$q.screen.gt.sm" name="doubts"
        to="/windows/doubts" />
      <q-btn-dropdown class="bg-light-blue-9 q-py-xs q-px-none" :content-style="{ backgroundColor: '#ff000000' }"
        style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
        size="md"
          push no-caps v-if="$q.screen.lt.md" auto-close dropdown-icon="mdi-menu-down" :loading="loading" label="Pages">
        <q-list class="q-pa-none q-ma-none fit column wrap justify-center">
          <!-- @click="dynamicRoute('windows')" -->
          <q-item
          class="q-pt-xs q-pb-none q-px-none" clickable to="/windows">
            <q-btn size="12px"
              push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
              border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Home" />
            </q-item>
            <!-- @click="dynamicRoute('windows')" -->
            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable to="/windows/services" >
              <q-btn size="12px"
                push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
                border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Serviços" />
            </q-item>
            <!-- @click="dynamicRoute('windows')" -->
            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable to="/windows/about" >
              <q-btn size="12px"
                push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
                border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Sobre" />
            </q-item>
            <!-- @click="dynamicRoute('windows')" -->
            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable to="/windows/doubts" >
              <q-btn size="12px"
                push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
                border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Dúvidas" />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
    </q-toolbar>
    <!-- <q-separator/> -->
  </q-header>
  <q-drawer flat content-class="bg-white" bordered :width="250" v-model="left" side="left">
    <LeftDrawer
    />
  </q-drawer>
  <q-drawer content-class="bg-white" bordered mini :width="65" v-model="right" side="right">
    <RightDrawer
    />
  </q-drawer>
  <q-page-container>
    <div v-if="this.$route.fullPath != '/windows'" class="q-px-xl bg-grey-10 fit row wrap justify-center items-start content-center">
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
            @click="dynamicRoute('/ios')"
          />
          <q-tab
            icon="mdi-google-play"
            label="Android" @click="dynamicRoute('/android')"
          />
          <q-tab
            icon="mdi-apple"
            label="Mac"
            @click="dynamicRoute('/mac')"
          />
          <q-tab
            icon="mdi-microsoft"
            label="Windows"
            @click="dynamicRoute('/windows')"
          />
        </q-tabs>
      </div>
    </div>
    <router-view />
    <whatsapp/>
    <!-- <PagesToolbar/> -->
    <q-page-sticky position="top-left" :offset="[10, 10]">
      <q-btn class="text-white" color="deep-color-8" padding="none" style="background-color: #212121; border-top-left-radius: 0px; border-top-right-radius: 0px;
        border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" flat @click="left = !left">
        <q-icon name="menu" size="30px" />
      </q-btn>
    </q-page-sticky>
    <q-page-sticky position="top-right" :offset="[10, 10]">
        <q-btn class="text-white" padding="none" style="background-color: #212121; border-top-left-radius: 0px; border-top-right-radius: 0px;
        border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" flat @click="right = !right">
          <q-icon name="menu" size="30px" />
        </q-btn>
    </q-page-sticky>
    </q-page-container>
    <q-footer class="bg-grey-10" container style="height: 20px">
      <q-separator/>
        <img class="footer-logo q-pa-xs" :src="require('../assets/yourprojects2.png')">
        <q-space/>
    </q-footer>
  </q-layout>
  <!-- </HomeToolbar> -->
  </div>

  <!-- <q-resize-observer @resize="onResize" /> -->
    </div>
            <!-- </div> -->
          <!-- </div> -->

    <!-- <div class="justify-center">
      Reported:
      <q-badge>width: {{ report.width }}</q-badge>
      <q-badge>height: {{ report.height }}</q-badge>
    </div> -->
    <!-- </div>
  </div> -->
</template>

<script>
// import HomeToolbar from '../components/toolbars/HomeToolbar'
import LeftDrawer from '../components/drawers/LeftDrawer'
import RightDrawer from '../components/drawers/RightDrawer'
import whatsapp from '../components/whatsapp/Dynamicwhatsapp'
// import PagesToolbar from '../components/toolbars/PagesToolbar'

export default {
  components: {
    LeftDrawer,
    RightDrawer,
    whatsapp
    // HomeToolbar
    // PagesToolbar
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  data () {
    return {
      left: false,
      right: false,
      loading: false,
      style: { width: '1300px', height: '750px' },
      styleHeight: { height: '88vh' },
      setStyle: false,
      window: { width: '166vh', height: '88vh' },
      // setStyle
      report: ''
      // routeHomeVal: false
    }
  },
  methods: {
    handleResize () {
      this.window.innerWidth = window.width
      this.window.innerHeight = window.height
    },
    // returnStyle () {
    //   if (this.loading === false) {
    //     return 'height: 96vh'
    //   } else {
    //     return this.style
    //   }
    // },
    dynamicRoute (val) {
      const about = '/about'
      const services = '/services'
      const doubts = '/doubts'
      if (this.$route.fullPath.search(/\babout\b/) >= 0) {
        this.$router.push(val + about)
      } else if (this.$route.fullPath.search(/\bservices\b/) >= 0) {
        this.$router.push(val + services)
      } else if (this.$route.fullPath.search(/\bdoubts\b/) >= 0) {
        this.$router.push(val + doubts)
      } else {
        this.$router.push(val)
      }
    },
    onResize (size) {
      this.report = size
    },
    setRandomSize () {
      this.setStyle = true
      // this.window = {
      //   width: Math.floor(250 + Math.random() * 800) + 'px',
      //   height: Math.floor(400 + Math.random() * 800) + 'px'
      // }
      this.style = {
        width: Math.floor(250 + Math.random() * 800) + 'px',
        height: Math.floor(400 + Math.random() * 800) + 'px'
      }
    },
    setDefaultSize () {
      this.setStyle = false
      // this.style = {
      //   width: '166vh',
      //   height: '88vh'
      // }
    }
    // routeHome (val) {
    //   this.routeHomeVal = val
    // }
  },
  computed: {
    returnStyle: {
      get () {
        if (this.setStyle === false) {
          // this.styleHeight = { height: '96vh' }
          return { height: '96vh' }
        } else {
          // this.styleHeight = { height: '96vh' }
          return { height: '96vh' }
        }
      }
    }
  }
  // whatch: {
  //   routeHome
  // },
  // computed: {
  //   routeHome: {
  //     get () {
  //       return this.routeHomeVal
  //     },
  //     set () {
  //       // this.routeHomeVal = val
  //       // const about = 'about'
  //       // const services = 'services'
  //       // const doubts = 'doubts'
  //       if (!this.$route.fullPath.search(/\babout\b/) && !this.$route.fullPath.search(/\bservices\b/) && !this.$route.fullPath.search(/\bdoubts\b/)) {
  //         this.routeHomeVal = true
  //       } else {
  //         this.routeHomeVal = false
  //       }
  //     }
  //   }
  // }
}
</script>

<style scoped>
.containerSize {
  transition: width .3s, height .3s;
}
.navigation-btn {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
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
/* .q-footer {
  background-color: #7c50ff;
} */
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
