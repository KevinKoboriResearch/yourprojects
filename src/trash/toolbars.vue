<template>
  <div>
     <!-- <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Unlimited music now</v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
    <br>
    <v-container>
    <v-card color="teal" class="white--text center"><strong>Titulo</strong></v-card>
      <Toolbar1/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar2/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar3/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar4/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar5/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar6/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar7/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar8/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar9/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
      <Toolbar10/>
    </v-container>
    <br> -->
    <!-- <div v-html="span()" /> -->
    <Toolbar1/>
    <!-- <Toolbar2/>
    <Toolbar3/> -->
    <!-- <p>{{ message }}</p> -->
  <!-- <myselect  v-bind:option= "option" ></myselect> -->
  <!-- {{option}} -->
  </div>
</template>

<script>
// import  { Toolbar1, Toolbar2, Toolbar3, Toolbar4, Toolbar5, Toolbar6, Toolbar7, Toolbar8, Toolbar9, Toolbar10 } from '~/components/Toolbars'
// import Vue from 'vue'

// Vue.component("mySelect", {
//   props:["value"],
//   render(h){
//     const vm = this;
//     let options = [];
//     for (let c = 0; c < 18; c++)
//       options.push(h("option", {
//         domProps:{innerHTML: c},
//         attrs:{value: c},
//       }))
//     return h("select",{
//       domProps:{
//         value: this.value.value
//       },
//       on:{
//         input(event){
//           vm.$emit('input', {value:event.target.value})
//         }
//       }
//     }, options)
//   }
// })

// Vue.component(Toolbar1, Toolbar2)
// Vue.component('Toolbars', {

// }

// )
export default {
  components: {
    // Toolbar1,
    // Toolbar2,
    // Toolbar3,
    // Toolbar4,
    // Toolbar5,
    // Toolbar6,
    // Toolbar7,
    // Toolbar8,
    // Toolbar9,
    // Toolbar10
  },
  // data: ()=> {

  // },
  // render (createElement) {
  //   return createElement('Toolbar1')
  // },
  methods: {
  //  span() {
    //  return `<v-container>
    //  <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
    //    `+ <Toolbar1/> +`</v-container><br>`
    //  render ('Toolbar1'){ return Toolbar1}
    //   return createElement(`Toolbar${text}`)
    //  }
    //  render (createElement) {
    //   return createElement('h1', {}, 'Hello World')
    // }
  //  }
  }
    // return `<v-container>
    // <v-card color="teal" class="white--text componentsTitle"><strong>Titulo</strong></v-card>
    //   <`+ text +`>  <`+ text +`/>
    // </v-container>
    // <br>`
  //  }
  // }
}
</script>
