<template>
  <!-- <div> -->
    <q-layout>
      <q-header>
        <q-toolbar class="bg-black text-white shadow-2">
          <q-btn flat round dense icon="mdi-backspace-outline" class="q-mr-sm" to="/" />
          <q-separator dark vertical inset />
          <q-btn stretch flat label="APP LOGO" />
          <q-space />
          <!-- <q-btn :label="currentRouteName()" /> -->
          <!-- <div>{{ this.$router.currentRoute.path }}</div> -->
          <!-- <div>{{ currentRouteName }}</div> -->
          <!-- <q-btn-dropdown stretch flat label="Dropdown">
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
          <q-separator dark vertical />
          <q-btn stretch flat label="Home" />
          <q-separator dark vertical />
          <q-btn-dropdown stretch flat :label="pages" @input="btndropdown = !btndropdown" :dropdown-icon="btndropdown ? 'mdi-arrow-collapse-vertical' : 'mdi-arrow-expand-vertical'">
            <q-list>
              <q-item clickable v-close-popup @click="reversedMessage('home')" >
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="testando('about')" >
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="testando('Doubts')" >
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-separator dark vertical />
          <q-btn stretch flat label="About" />
          <q-separator dark vertical />
          <q-btn stretch flat label="Doubts" />
        </q-toolbar>
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
            <!-- <LeftDrawerList/> -->
          <!-- </q-list> -->
        </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  <!-- </div> -->
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
// import AppDrawerList from '../drawers/AppDrawerList.vue'
// import LeftDrawerList from '../drawers/LeftDrawerList.vue'

export default {
  name: 'MainLayout',
  components: {
    // EssentialLink,
    // LeftDrawerList
    // AppDrawerList
  },
  data () {
    return {
      btndropdown: false,
      leftDrawerOpen: false,
      pages: 'Pages'
    }
  },
  methods: {
    testando (val) {
      this.page = val
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function (val) {
      // `this` points to the vm instance
      return this.testando(val)
    }
  }
}
</script>
