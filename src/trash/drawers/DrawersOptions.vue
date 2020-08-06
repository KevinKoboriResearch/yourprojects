<template>
  <v-container fluid>
    <span>Scheme</span>
    <v-switch
      v-model="$vuetify.theme.dark"
      primary
      label="Dark"
    ></v-switch>
    <span>Drawer</span>
    <v-switch
      label="Open/Close"
      primary
      v-model="appLeftDrawer"
    ></v-switch>
    <v-switch
      @change="$store.commit('drawer/switchSecondDrawer')"
      label="Second Drawer"
      primary
    ></v-switch>
    <v-switch
      @change="$store.commit('drawer/switchClipped')"
      label="Clipped"
      primary
    ></v-switch>
    <v-switch
      @change="$store.commit('drawer/switchFloating')"
      label="Floating"
      primary
    ></v-switch>
    <v-switch
      @change="$store.commit('drawer/switchExpandOnHover')"
      label="Expand On Hover"
      primary
    ></v-switch>
    <v-switch
      @change="$store.commit('drawer/switchMiniVariant')"
      label="Mini Variant"
      primary
    ></v-switch>
    <v-radio-group column>
      <v-radio
        v-for="drawer in drawers"
        :key="drawer"
        :label="drawer"
        primary
        @change="$store.commit('drawer/switchType', drawer.toLowerCase())"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    }),
    computed: {
      appLeftDrawer: {
        get(){
          return this.$store.state.drawer.show
        },
        set(value) {
        this.$store.state.drawer.show = value
        }
      }
    }
  }
</script>
