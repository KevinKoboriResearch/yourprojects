<template>
  <div id="q-app">
    <div v-if="this.$route.fullPath == '/android'">
      <div  id="android-preview" class="platform-android mat-only">
        <iframe id="android-iframe" frameborder="0" src="http://www.yourprojects.net/#/android"></iframe>
      </div>
    </div>
    <div v-if="this.$route.fullPath == '/ios'">
      <div  id="ios-preview" class="platform-ios ios-only">
        <iframe id="ios-iframe" frameborder="0" src="http://www.yourprojects.net/#/ios"></iframe>
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
#android-preview {
  display: block;
  text-align: center;
  width: 467px;
  height: 800px;
  background: url('./statics/devices-sprite.jpg') 0 -800px no-repeat;
  background-size: 467px;
  margin: 5px auto 0;
}
#ios-preview {
  text-align: center;
  width: 467px;
  height: 800px;
  background: url('./statics/devices-sprite.jpg') center top no-repeat;
  background-size: 467px;
  margin: 5px auto 0;
}

#android-preview iframe {
  margin-top: 64px;
  width: 357px;
  height: 590px;
  background: #fff;
}
#ios-preview iframe {
  margin-top: 64px;
  width: 320px;
  height: 590px;
  background: #fff;
}
</style>
