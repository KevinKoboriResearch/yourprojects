<template>
  <q-layout view="hHh LpR lFr"
  >
  <!-- :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" -->
    <q-header
    >
      <!-- <div class="text-white"> -->
    <!-- :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" -->
      <!-- <div class="row no-wrap shadow-0"
      > -->
      <!-- :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-7 text-white'" -->
        <!-- :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" -->
        <!-- <q-toolbar class="row rounded-borders bg-transparent"
        >
          <q-btn dense  flat icon="menu" @click="left = !left" />
          <q-space/>
          <q-btn size="lg" :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-7 text-white'" @click="$q.dark.toggle()">
            <img class="img-logo" :src="$q.dark.isActive ? require('../assets/twitch2.png') : require('../assets/twitch2.png')">
          </q-btn>
          <q-space />
          <q-space />
          <q-space />
          <q-tabs shrink no-caps indicator-color="grey-14">
            <q-route-tab to="/" label="Home" />
            <q-route-tab to="/services" label="Services" />
            <q-route-tab  to="/about" label="About" />
            <q-route-tab  to="/doubts" label="Doubts" />
          </q-tabs>
          <q-space/>
          <q-btn dense round flat icon="menu" @click="right = !right" />
        </q-toolbar> -->
        <!-- <div class="bg-orange text-white"> -->
    <!-- </div> -->
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <!-- <q-btn size="lg" :class="$q.dark.isActive ? 'bg-deep-purple-7 text-white' : 'bg-indigo-7 text-white'" @click="$q.dark.toggle()"> -->
            <img class="img-logo" :src="$q.dark.isActive ? require('../assets/twitch2.png') : require('../assets/twitch2.png')">
          <!-- </q-btn> -->
        <!-- <q-toolbar-title><strong>Your</strong> Projects</q-toolbar-title> -->
        <q-space/>
        <!-- <q-btn flat round dense icon="search" class="q-mr-xs" /> -->
        <q-btn dense round flat icon="menu" @click="right = !right" />
      </q-toolbar>
      <q-toolbar
      >
      <!-- inset -->
      <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-tabs
        narrow-indicator
        inline-label
        :breakpoint="0"
        align="justify"
      >
        <!-- shrink -->
        <q-tab name="mails" label="Home" />
        <q-tab name="alarms" label="About" />
        <q-tab v-if="$q.screen.gt.sm" name="movies" label="Movies" />
        <q-tab v-if="$q.screen.gt.sm" name="photos" label="Photos" />
        <q-btn-dropdown v-if="$q.screen.lt.md" auto-close stretch flat label="More...">
          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
        <!-- <q-tabs shrink no-caps indicator-color="white">
            <q-route-tab to="/" label="Home" />
            <q-route-tab to="/services" label="Services" />
            <q-route-tab  to="/about" label="About" />
            <q-route-tab  to="/doubts" label="Doubts" />
          </q-tabs> -->
          <q-space/>
        <!-- <q-btn flat round dense icon="search" class="q-mr-xs" /> -->
        <!-- <q-btn dense round flat icon="menu" @click="right = !right" /> -->
      </q-toolbar>
        <!-- </div> -->
        <!-- <div container class="header-border-container bg-white">
        </div> -->
    </q-header>
    <q-page-container >
      <div class="header-border-container bg-white">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<style>
.img-logo {
  height: 22px;
}
.header-border-container {
  height: 100%;
  width:100%;
  border-top-left-radius: 40px;
  /* border-top-right-radius: 40px; */
}
.q-drawer__content {
  background-color: #212121;
}
.q-header {
  background-color: #212121;
}
.q-layout {
  background-color: #212121;
}
</style>
