<template>
  <q-page :style-fn="myTweak">
    <!-- <hehe/> -->
  </q-page>
</template>

<script>
// import hehe from './hehe.vue'
export default {
  components: {
    // hehe
  },
  // ...
  methods: {
    myTweak (offset) {
      // "offset" is a Number (pixels) that refers to the total
      // height of header + footer that occupies on screen,
      // based on the QLayout "view" prop configuration

      // this is actually what the default style-fn does in Quasar
      return { minHeight: offset ? `calc(0vh - ${offset}px)` : '10vh' }
    }
  }
}
</script>
