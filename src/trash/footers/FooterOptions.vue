<template>
  <v-container fluid>
    <span>Footer</span>
    <v-switch
      label="Inset"
      @change="$store.commit('footer/switchInset')"
    ></v-switch>
    <v-switch
      label="Absolute"
      @change="$store.commit('footer/switchAbsolute')"
    ></v-switch>
  </v-container>
</template>
