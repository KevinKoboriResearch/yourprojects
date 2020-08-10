<template>
  <div class="q-pa-md q-gutter-md">
    <q-btn color="primary" push @click="setRandomSize" label="Set Random Size" />

        <div class="q-pa-md text-justify bg-white row wrap justify-center items-start content-start">
    <div class="q-pa-md">
    <div :style="style" class="container bg-black rounded-borders">
      <!-- <LayoutMac/> -->
      <!--
        we listen for size changes on this next
        <div>, so we place the observer as direct child:
      -->
      <q-resize-observer @resize="onResize" />
    </div>
            </div>
          </div>

    <div class="justify-center">
      Reported:
      <q-badge>width: {{ report.width }}</q-badge>
      <q-badge>height: {{ report.height }}</q-badge>
    </div>
  </div>
</template>

<script>
// import LayoutMac from '../../layouts/Mac'
// import About from '../../pages/main/About'

export default {
  components: {
    // LayoutMac
  },
  data () {
    return {
      style: { width: '300px', height: '400px' },
      report: ''
    }
  },

  methods: {
    onResize (size) {
      this.report = size
      // {
      //   width: 20 // width of container (in px)
      //   height: 50 // height of container (in px)
      // }
    },

    setRandomSize () {
      this.style = {
        width: Math.floor(250 + Math.random() * 800) + 'px',
        height: Math.floor(400 + Math.random() * 800) + 'px'
      }
    }
  }
}
</script>

<style>
.container {
  transition: width .3s, height .3s;
}
</style>
