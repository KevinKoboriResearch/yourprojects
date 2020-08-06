<template>
  <div>
    <br>
    <v-container>
    <h2 class="componentsTitle"><strong>Titulo</strong></h2>
      <SystemBar1/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <h2 class="componentsTitle"><strong>Titulo</strong></h2>
      <SystemBar2/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <h2 class="componentsTitle"><strong>Titulo</strong></h2>
      <SystemBar3/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <h2 class="componentsTitle"><strong>Titulo</strong></h2>
      <SystemBar4/>
    </v-container>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container>
    <h2 class="componentsTitle"><strong>Titulo</strong></h2>
      <SystemBar5/>
    </v-container>
    <br>
  </div>
</template>

<script>
import  { SystemBar1, SystemBar2, SystemBar3, SystemBar4, SystemBar5} from '~/components/systembars'

export default {
  components: {
    SystemBar1,
    SystemBar2,
    SystemBar3,
    SystemBar4,
    SystemBar5
  }
}
</script>
