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

  <!-- <div class="q-pa-md"> -->
    <q-layout view="hHh LpR lFr" class="transparent">
      <!-- :style="style"  -->
      <q-header reveal class="text-white">
        <div class="row no-wrap">
    <q-bar class="col-3 text-white q-electron-drag" style="background-color: #512fa9; border-top-left-radius: 25px; border-top-right-radius: 10px; border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;">
        <q-space />
      <div>9:41</div>
      <q-space />
    </q-bar>
    <div class="bg-deep-purple-8 col-3">
      <q-bar class="bg-grey-10" style="border-top-left-radius: 0px; border-top-right-radius: 0px;
        border-bottom-left-radius: 15px; border-bottom-right-radius: 0px;">
      </q-bar>
    </div>
    <div class="bg-deep-purple-8 col-3">
      <q-bar class="bg-grey-10" style="border-top-left-radius: 0px; border-top-right-radius: 0px;
        border-bottom-left-radius: 0px; border-bottom-right-radius: 15px;">
      </q-bar>
    </div>
    <q-bar class="col-3 text-white q-electron-drag" style="background-color: #512fa9; border-top-left-radius: 10px; border-top-right-radius: 25px; border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;">
      <q-space />
      <q-btn dense flat padding="none" icon="mdi-signal" />
       <!-- class="gt-xs" -->
      <q-btn dense flat padding="none" icon="wifi" />
      <q-btn dense flat padding="none" icon="battery_charging_full" />
      <q-space />
      <!-- <q-icon name="mdi-desktop-mac-dashboard" /> -->
      <!-- <div>Mac</div> -->
    </q-bar>
        </div>
        <!-- <q-header elevated> -->
        <q-toolbar class="shadow-4 bg-deep-purple-8 q-px-xl q-pb-xl q-pt-xl row" style="background-color: #512fa9; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;">
          <!-- @click="$q.dark.toggle()" -->
          <q-btn class="bg-deep-purple-9" style="border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;" padding="sm md" push @click="$q.dark.toggle()">
          <img style="height: 28px;" :src="require('../assets/your-trans-5.png')">
        </q-btn>
        <q-space />
        <q-tabs narrow-indicator :breakpoint="0" no-caps>
          <div class="q-pl-sm"></div>
          <q-btn
            push
            label="Início"
            class="navigation-btn bg-deep-purple-9"
            v-if="$q.screen.gt.sm" name="home"
            to="/ios"
          />
            <div class="q-pl-sm"></div>
          <q-btn
            push
            label="Sobre"
            class="navigation-btn bg-deep-purple-9"
            v-if="$q.screen.gt.sm" name="about"
            to="/ios/about" />
          <div class="q-pl-sm"></div>
          <q-btn

               push
        label="Serviços"
        class="navigation-btn bg-deep-purple-9"
        v-if="$q.screen.gt.sm" name="services"
        to="/ios/services" />
      <div class="q-pl-sm"></div>
      <q-btn
        push
        label="Dúvidas"
        class="navigation-btn bg-deep-purple-9"
        v-if="$q.screen.gt.sm" name="doubts"
        to="/ios/doubts" />
      <q-btn-dropdown class="bg-deep-purple-9 q-py-xs q-px-none" :content-style="{ backgroundColor: '#ff000000' }"
        style="border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;"
        size="md"
          push no-caps v-if="$q.screen.lt.md" auto-close dropdown-icon="mdi-menu-down" :loading="loading" label="Pages">
        <q-list class="q-pa-none q-ma-none fit column wrap justify-center">
          <q-item
          class="q-pt-xs q-pb-none q-px-none" clickable to="/ios">
            <q-btn size="12px"
              push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
              border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-9 text-white" label="Home" />
            </q-item>

            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable to="/ios/services" >
              <q-btn size="12px"
                push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
                border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-9 text-white" label="Serviços" />
            </q-item>

            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable to="/ios/about" >
              <q-btn size="12px"
                push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
                border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-9 text-white" label="Sobre" />
            </q-item>

            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable to="/ios/doubts" >
              <q-btn size="12px"
                push style="width:100%; border-top-left-radius: 5px; border-top-right-radius: 5px;
                border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;" class="bg-deep-purple-9 text-white" label="Dúvidas" />
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
    <div v-if="this.$route.fullPath != '/ios'" class="q-px-xl bg-grey-10 fit row wrap justify-center items-start content-center">
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
    <q-page-sticky position="top-left" :offset="[5, 5]">
      <q-btn class="text-white" color="deep-color-8" padding="none" style="background-color: #212121; border-top-left-radius: 3px; border-top-right-radius: 3px;
        border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;" flat @click="left = !left">
        <q-icon name="mdi-menu-open" class="rotate180 q-pa-xs" size="30px" />
      </q-btn>
    </q-page-sticky>
    <q-page-sticky position="top-right" :offset="[5, 5]">
        <q-btn class="text-white" padding="none" style="background-color: #212121; border-top-left-radius: 3px; border-top-right-radius: 3px;
        border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;" flat @click="right = !right">
          <q-icon name="mdi-menu-open" class="q-pa-xs" size="30px" />
        </q-btn>
    </q-page-sticky>
    </q-page-container>
    <q-footer reveal class="transparent" style="height: 80px">
      <!-- <q-separator/> -->
      <!-- <q-toolbar class="bg-grey-10 shadow-0">
        <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="left = !left" />
        <q-btn flat round dense @click="$q.dark.toggle()">
          <img class="img-logo" :src="require('../assets/your-trans-8.png')">
        </q-btn>
        <q-space/>
        <div class="text-white">
        </div>
        <q-btn dense round flat icon="menu" class="q-mr-sm text-white" @click="right = !right">
        </q-btn>
      </q-toolbar> -->
      <q-toolbar class="shadow-4 bg-deep-purple-8 text-white q-pa-none" style="background-color: #512fa9; border-top-left-radius: 25px; border-top-right-radius: 25px; border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;">
        <q-space/>
        <q-tabs narrow-indicator
        indicator-color="white"
        active-color="grey-10">
          <q-route-tab
            class="q-pa-lg"
            icon="mdi-home-variant"
            to="/ios"
          />
          <q-route-tab
            class="q-pa-lg"
            icon="mdi-book"
            to="/ios/about"
          />
          <q-route-tab
            class="q-pa-lg"
            icon="mdi-account-supervisor"
            to="/ios/services"
          />
          <q-route-tab
            class="q-pa-lg"
            icon="mdi-help-box"
            to="/ios/doubts"
          />
        </q-tabs>
        <q-space/>
      </q-toolbar>
        <!-- <img class="footer-logo q-pa-xs" :src="require('../assets/yourprojects2.png')">
        <q-space/> -->
    </q-footer>
  </q-layout>
  <!-- </HomeToolbar> -->
  <!-- </div> -->

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
.rotate180 {
  transform: rotate(180deg);
}
.rotate45 {
  /* background-color: green; */
  transform: rotate(45deg);
}

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
