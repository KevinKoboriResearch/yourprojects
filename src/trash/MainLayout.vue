<template>
  <q-layout view="hHh Lpr lFf" class="shadow-1">
    <q-header elevated :class="$q.dark.isActive ? 'bg-blue' : 'bg-pink'">
    <div class="row no-wrap shadow-1">
      <q-toolbar class="col-4 bg-grey-3 text-black">
        <q-btn
          dense
          flat
          :icon="leftDrawerOpen ? 'mdi-menu-open' : 'mdi-menu'"
          @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>Title</q-toolbar-title>
<!-- <q-separator dark vertical />
          <q-separator dark vertical />
          <q-btn-dropdown stretch flat label="Services" @input="btndropdown = !btndropdown" :dropdown-icon="btndropdown ? 'mdi-arrow-collapse-vertical' : 'mdi-arrow-expand-vertical'">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown> -->
        <q-btn flat round dense icon="search" />
      </q-toolbar>
      <q-toolbar class="col-8 bg-primary text-white">
        <q-btn dense rounded="false"  flat @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
        <q-space />
        <!-- <q-separator dark vertical />
          <q-btn stretch flat label="Home" />
          <q-separator dark vertical />
          <q-btn-dropdown stretch flat label="Services" @input="btndropdown = !btndropdown" :dropdown-icon="btndropdown ? 'mdi-arrow-collapse-vertical' : 'mdi-arrow-expand-vertical'">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-separator dark vertical />
          <q-btn stretch flat label="About" />
          <q-separator dark vertical />
          <q-btn stretch flat label="Doubts" /> -->
          <!-- <q-separator dark vertical /> -->
          <!-- <q-separator dark vertical /> -->
          <!-- <q-btn-group> -->
            <!-- <q-btn dense rounded="false"  flat @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/> -->
          <q-btn-dropdown :label="page" stretch dense flat>
            <!-- @input="btndropdown = !btndropdown" :dropdown-icon="btndropdown ? 'mdi-close' : 'mdi-equal'" -->
          <!-- btndropdown ? 'mdi-dots-horizontal' : 'mdi-dots-vertical' -->
            <q-list>
              <q-item  @click="funcstate('1')" to="/">
                <q-item-section>
                  <q-item-label>Home</q-item-label>
                </q-item-section>
              </q-item>

              <q-item  @click="funcstate('2')" to="/">
                <q-item-section>
                  <q-item-label>Home</q-item-label>
                </q-item-section>
              </q-item>

              <q-item  @click="funcstate('3')" to="/">
                <q-item-section>
                  <q-item-label>Home</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        <!-- <q-btn dense flat @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/> -->
        <q-btn dense flat icon="more_vert" to="/premade-layouts/app-bar-1"/>
          <!-- </q-btn-group> -->
      </q-toolbar>
    </div>
      <!-- <q-toolbar dense class="bg-black text-white shadow-4">
        <q-btn
          flat
          dense
          round
          icon="mdi-alert"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
        <div>
          <q-btn
          icon="mdi-menu"
          aria-label="Menu"
          to="/premade-layouts/app-bar-1"
        >
          Quasar v{{ $q.version }}
          </q-btn>
          <q-btn
          icon="mdi-menu"
          aria-label="Menu"
          to="/premade-layouts/drawer-1"
        >
          Quasar v{{ $q.version }}
          </q-btn>
        </div>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar> -->
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <!-- <q-list> -->
        <LeftDrawerList/>
      <!-- </q-list> -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftDrawerList from './drawers/LeftDrawerList.vue'

export default {
  name: 'MainLayout',
  components: {
    LeftDrawerList
  },
  data () {
    return {
      leftDrawerOpen: false,
      // drawer: false,
      btndropdown: false,
      miniState: true,
      page: 'Pages'
    }
  },
  methods: {
    funcstate (val) {
      this.page = val
    }
  }
}
</script>
