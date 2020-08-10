<template>
  <div class="q-pa-md">
    <q-layout view="lhh LpR lff" container style="width: 1800px; height: 1800px" class="shadow-2 rounded-borders">
      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>

          <q-page-sticky position="bottom-right" :offset="fabPos">
            <!-- <q-btn class="bg-black"
              :disable="draggingFab"
              v-touch-pan.prevent.mouse="moveFab"
            > oi -->
             <!-- <q-icon name="mdi-whatsapp" color="light-green-14" size="40px" /> -->
              <!-- icon="add"
              direction="up"
              color="accent"-->
              <!-- <q-fab-action @click="onClick" color="primary" icon="person_add" :disable="draggingFab" />
              <q-fab-action @click="onClick" color="primary" icon="mail" :disable="draggingFab" /> -->
            <!-- </q-btn> -->
            <!-- <q-card class="bg-black"
              :disable="draggingFab"
              v-touch-pan.prevent.mouse="moveFab"
            >iooi
            </q-card> -->
            <q-card class="bg-black"
              :disable="draggingFab"
              v-touch-pan.prevent.mouse="moveFab" outline>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-overline text-orange-9">Android & iOS</div>
          <div class="text-h6">Dispositivos Mobile</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Projeto 100% compatível com dispos
        </q-card-section>

        <q-card-section class="q-pt-none">
          <strong>Ex: Smartphones e Tablets / iPhones e iPads.</strong>
        </q-card-section>
        <br>
        <q-separator inset />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
          </q-page-sticky>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fabPos: [0, 0],
      draggingFab: false
    }
  },

  methods: {
    moveFab (ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

      this.fabPos = [
        this.fabPos[0] - ev.position.x,
        this.fabPos[1] - ev.position.y
      ]
    }
  }
}

</script>

<style>

</style>
