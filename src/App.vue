<template>
    <!-- http://www.yourprojects.net/#/ -->
  <div id="q-app">
    <div v-if="this.$route.fullPath == '/android'">
      <div id="android-preview" class="platform-android mat-only">
        <iframe id="android-iframe" frameborder="0" src="http://www.yourprojects.net/#/android"/>
      </div>
    </div>
    <div v-if="this.$route.fullPath == '/ios'">
      <div id="ios-preview" class="platform-ios ios-only">
        <iframe id="ios-iframe" frameborder="0" src="http://www.yourprojects.net/#/ios"/>
      </div>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  scrollbar-color: red yellow;
} */
html {
  --scrollbarBG: #212121;
  --thumbBG: #000000;
}
body::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  /* background-color: var(--thumbBG) ; */
  /* border-radius: 6px; */
  /* border: 3px solid var(--scrollbarBG); */
}
html {
  /* background: lightgrey; */
  overflow: hidden;
}
body {
  height: 100vh;
  background: whitesmoke;
  overflow-y: auto;
  /* max-width: 310px; */
  /* margin: 0 auto; */
  /* padding: 2rem; */
  /* font: 100%/1.4 serif; */
  /* border: 1px solid rgba(0, 0, 0, 0.25) */
}
/* p {
  margin: 0 0 1.5em;
} */
/* * {
  box-sizing: border-box;
} */

#android-preview {
  display: block;
  text-align: center;
  width: 467px;
  height: 1000px;
  background: url('./assets/frames/android.png') 2px 5px no-repeat;
  background-size: 467px;
  margin: 5px auto 0;
}
#ios-preview {
  text-align: center;
  width: 467px;
  height: 1000px;
  background: url('./assets/frames/ios.png') center top no-repeat;
  background-size: 467px;
  margin: 5px auto 0;
}

#android-preview iframe {
  margin-top: 18px;
  width: 436px;
  height: 850px;
  background: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

#ios-preview iframe {
  margin-top: 30px;
  width: 402px;
  height: 870px;
  background: #fff;
  border-top-left-radius: 38px;
  border-top-right-radius: 38px;
  border-bottom-left-radius: 38px;
  border-bottom-right-radius: 38px;
}
</style>
