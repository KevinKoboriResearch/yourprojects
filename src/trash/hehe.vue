<template>
  <div>
    <div container class="bg-oi q-pa-xl" style="height: 800px">
      <div class="q-pa-xl">
        <div :class="$q.dark.isActive ? 'bg-white text-white' : 'bg-white text-white'" container style="height: 575px" class="q-pa-md shadow-24 rounded-borders">
          <div :class="$q.dark.isActive ? 'bg-deep-purple-6 text-white' : 'bg-indigo-6 text-white'" container style="height: 545px" class=" q-pa-xl shadow-24 rounded-borders">
            <div v-if="$q.dark.isActive"  class="q-pa-lg row">
              <div class="col-4">
                <img class="img-img" :src="require('../../assets/twitch2.png')" />
                <br>
                <br>
                <br>
                <div class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus harum totam aut perspiciatis. Sint at neque delectus ut necessitatibus quam dolor esse odit quaerat.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus harum totam aut perspiciatis. Sint at neque delectus ut necessitatibus quam dolor esse odit quaerat.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus harum totam aut perspiciatis. Sint at neque delectus ut necessitatibus quam dolor esse odit quaerat.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus haruerat.
                </div>
              </div>
              <div class="col-1">
              </div>
              <div class="col-7">
                <div class="text-h3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus harum totam aut perspiciatis. Sint at neque delectus ut necessitatibus quam dolor esse odit quaerat.
                </div>
                <br>
                <div class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non, provident impedit dolores commodi qui laboriosam temporibus in cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus harum totam aut perspiciatis. Sint at neque delectus ut necessitatibus quam dolor esse odit quaerat.
                </div>
              </div>
            </div>
            <div v-else class="q-pa-lg row">
              <div class="col-5">
                <img class="img-img" :src="$q.dark.isActive ? require('../../assets/twitch2.png') : require('../../assets/lol.gif')" />
              </div>
              <div class="col-1">
              </div>
              <div class="col-6">
                <div class="text-h3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus harum totam aut perspiciatis. Sint at neque delectus ut necessitatibus quam dolor esse odit quaerat.
                </div>
                <br>
                <div class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero dolorum ea sunt molestiae possimus harum totam aut perspiciatis. Sint at neque delectus ut necessitatibus quam dolor esse odit quaerat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-carousel
      arrows
      animated
      autoplay
        infinite
        v-model="slide"
        class="img-bg"
    >
      <q-carousel-slide name="First" :img-src="require('../../assets/steam.png')">
        <div class="absolute-bottom custom-caption">
          <q-btn>
            <div class="text-h2">Steam</div>
          </q-btn>
          <q-btn>
            <div class="text-subtitle1">Download and play</div>
          </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" :img-src="require('../../assets/astronauta.gif')">
        <div class="absolute-bottom custom-caption">
          <q-btn to="/" class="text-h2">Astronaut</q-btn>
          <div class="text-subtitle1">About Us</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'first',
      slide2: 'second'
    }
  }
}
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}

.img-bg {
  height: 95vh;
}

.img-img {
  /* width: 540px; */
  /* // display: block; */
  /* margin-left: auto;
  margin-right: auto; */
  width: 94%;
  /* text-align: center; */
  /* display: block;
    margin: 0 auto; */
}
</style>

<style lang="sass">
@import '../../css/yourprojects.sass'
</style>
