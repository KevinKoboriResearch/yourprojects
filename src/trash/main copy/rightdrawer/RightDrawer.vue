<template>
  <q-list>
    <q-item>
      <q-btn flat dense @click="$q.fullscreen.toggle()">
        <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
      </q-btn>
      <!-- <q-item-section avatar>
        <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
      </q-item-section>
      <q-item-section>
        <q-btn class="bg-transparent" @click="$q.fullscreen.toggle()"
        :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"/>
      </q-item-section> -->
    </q-item>
    <q-item>
      <!-- <q-btn flat dense @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/> -->
    </q-item>
  </q-list>
</template>
