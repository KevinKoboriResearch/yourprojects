<template>
  <!-- <div> -->
    <!-- <v-hover v-slot:default="{ hover }"> -->
      <div class="img-bg">
        <v-carousel  :aspect-ratio="16/9" show-arrows-on-hover hide-delimiters height="100%">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" >
            <!-- <v-expand-transition>
              <div v-if="hover" class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal display-3 white--text" style="height: 100%;" >
                <div v-for="u in item.about" :key="u">
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <p class="white--text">{{ u.name }}</p>
                  <p class="white--text">{{ u.age }}</p>
                  <p class="white--text">{{ u.desc }}</p>
                </div>
              </div>
            </v-expand-transition> -->
          </v-carousel-item>
        </v-carousel>
      </div>
    <!-- </v-hover>  -->
  <!-- </div> -->
</template>


<script>
  export default {
    data () {
      return {
        items: [
            {
                src: require('@/assets/img/home/1.jpeg'),
                about: [{
                  name: "Jack",
                  age: "2 anos",
                  desc: "Dono faleceu"
                }]
          },
          {
              src: require('@/assets/img/home/2.jpeg'),
              about: [{
                  name: "Perdido",
                  age: "Meia idade",
                  desc: "Encontrado na SQSW 305 do Sudoeste"
                }]
          },
                {
                    src: require('@/assets/img/home/6.jpg'),
                    about: [{
                  name: "Perdido",
                  age: "Velho",
                  desc: "Encontrado na QL 18 Conjunto 7 do Lago Sul"
                }]
                },
            {
            src: require('@/assets/img/home/3.jpg'),
            about: [{
                  name: "Perdido",
                  age: "Filhote",
                  desc: "Encontrado na QL 18 Conjunto 7"
                }]
            },
            {
                src: require('@/assets/img/home/7.png'),
                about: [{
                  name: "Perdido",
                  age: "Meia idade",
                  desc: "Encontrado em Taguatinga Center"
                }]
            },
        //   {
        //     src: require('@/assets/img/home/4.jpeg'),
        //   },
        //                           {
        //                             src: require('@/assets/img/home/5.jpg'),
        //                           },
        //   {
        //     src: require('@/assets/img/home/8.jpg'),
        //   }
        ],
      }
    },
  }
</script>

<style scoped>
.img-bg {
  height: 100vh;
}


.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>