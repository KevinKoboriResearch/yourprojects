<template>
  <div class="q-pa-md">
    <q-layout view="lhh LpR lff" container style="width: 1500px; height: 1500px" class="bg-green shadow-2 rounded-borders">
      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
<div class="q-pa-md text-justify bg-white row wrap justify-center items-start content-start">
    <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:410px">
      <q-card class="bg-white text-greyy-10" outline>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-overline text-orange-9">Android & iOS</div>
          <div class="text-h6">Dispositivos Mobile</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Projeto 100% compatível com dispositivos mobile. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
          é possível exporta-lo tanto para dispositivos que utilizam Android quanto iOS. O aplicativo pode ser instalado tanto localmente(sem a necessidade
          de publicação do app em alguma store) quanto direto da Play Store ou da Apple Store. Ótimo para aplicativos de administração empresarial ou de fácil
          visualização de dados como: blogs, cursos online, petshops, sites estáticos de propaganda e Leads(captação de email).
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
    </div>

    <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:410px">
      <!-- <q-page-sticky position="bottom-right" :offset="fabPos"> -->
      <q-card class="bg-white text-greyy-10">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-overline text-orange-9">Windows & Mac OSX</div>
          <div class="text-h6">Sistemas Operacionais</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Projeto 100% compatível com a sua área de trabalho. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
          é possível exporta-lo para aplicações locais. O aplicativo pode ser instalado tanto localmente quanto divulgado para download local para seus clientes.
          Ótimo para aplicações de administração empresarial ou de fácil
          visualização de dados como: blogs, cursos online, petshops, sites estáticos de propaganda e Leads(captação de email).
        </q-card-section>

        <q-card-section class="q-pt-none">
          <strong>Ex: um botão, um card, uma caixa de texto, utilizados com frequencia durante o desenvolvimento de toda a aplicação.</strong>
        </q-card-section>

        <q-separator inset />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:410px">
      <q-page-sticky position="bottom-right" :offset="fabPos">
      <q-card :disable="draggingFab"
              v-touch-pan.prevent.mouse="moveFab" class="bg-white text-greyy-10">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-overline text-orange-9">Chrome, Safari, Firefox...</div>
          <div class="text-h6">Navegadores Web</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Projeto 100% compatível com dispositivos mobile. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
          é possível exporta-la tanto para dispositivos que utilizam Android quanto iOS. O aplicativo pode ser instalado tanto localmente(sem a necessidade
          de publicação do app em alguma store) quanto direto da Play Store ou da Apple Store. Ótimo para aplicativos de administração empresarial ou de fácil
          visualização de dados como: blogs, cursos online, petshops, sites estáticos de propaganda e Leads(captação de email).
        </q-card-section>

        <q-card-section class="q-pt-none">
          <strong>Ex: um botão, um card, uma caixa de texto, utilizados com frequencia durante o desenvolvimento de toda a aplicação.</strong>
        </q-card-section>

        <q-separator inset />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      </q-page-sticky>
    </div>
    </div>
          <!-- <q-page-sticky position="bottom-right" :offset="fabPos">
            <q-card
            :disable="draggingFab"
              v-touch-pan.prevent.mouse="moveFab" outline
              style="width: 500px;"
              >
<q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        basic
      >
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
              </q-card>
          </q-page-sticky> -->
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fabPos: [18, 18],
      draggingFab: false
    }
  },

  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    },

    moveFab (ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

      this.fabPos = [
        this.fabPos[0] - ev.delta.x,
        this.fabPos[1] - ev.delta.y
      ]
    }
  }
}

</script>

<style>

</style>
