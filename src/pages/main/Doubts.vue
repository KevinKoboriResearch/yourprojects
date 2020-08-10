<template>
<div>
  <div class="q-pa-xl bg-grey-10 fit row wrap justify-center items-start content-center">
    <div class="col-auto text-center text-white">
      <img class="img-logo" :src="require('../../assets/your-trans-4.png')">
        <div class="text-subtitle1"><strong>Criando um </strong><strong class="per-word-strong">único</strong>
          <strong> produto, presente em todas as </strong><strong class="per-word-strong">plataformas.</strong></div>
          <br>
          <div class="text-weight-bolder text-h6">
            Celulares / Tablets - iOS / Android
          </div>
          <div class="q-pb-none text-weight-bolder text-h6">
            Computadores / Web - MacOS X / Windows
          </div>
          <!-- <WallE/> -->
          <!-- <PagesToolbar/> -->
          <AnimatedNumbers/>
          <HomeToolbar/>
          <DynamicCard/>
          <br>
          <!-- <q-btn outline no-caps color="white" @click="doAndRefresh()" :label="$store.getters['button/getMode']"/> -->
          <!-- $store.state.button.mode -->
          <q-tabs no-caps>
            <q-route-tab icon="mdi-web" label="Web" to="" />
            <q-route-tab icon="mdi-apple-ios" label="iPhone" to="/ios" />
            <q-route-tab icon="mdi-google-play" label="Android" to="/android" />
            <q-route-tab icon="mdi-apple" label="Mac" to="/mac" />
            <q-route-tab icon="mdi-microsoft" label="Windows" to="/windows" />
          </q-tabs>
         <div>
      </div>
    </div>
  </div>
  <div class="q-pa-md text-justify row wrap justify-center items-start content-start">
    <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:410px">
      <q-card class="text-grey-10" outline>
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
      <q-card class="text-grey-10">
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
      <q-card class="text-grey-10">
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
    </div>
    <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:410px">
      <q-card class="text-grey-10">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-overline text-orange-9">Design Externo da Página</div>
          <div class="text-h6">Layouts</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Componentes permitem você dividir a UI em partes independentes,
          reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado,
          livre de outras dependências externas. Componentes são como funções JavaScript.
          Eles aceitam entradas e retornam elementos VueJS que descrevem o que deve aparecer na tela.
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
      <q-card class="text-grey-10">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-overline text-orange-9">Design Interno da Página</div>
          <div class="text-h6">Componentes</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Componentes permitem você dividir a UI em partes independentes,
          reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado,
          livre de outras dependências externas. Componentes são como funções JavaScript.
          Eles aceitam entradas e retornam elementos VueJS que descrevem o que deve aparecer na tela.
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
      <q-card class="text-grey-10">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-overline text-orange-9">Material Design Icons</div>
          <div class="text-h6">Icones</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Componentes permitem você dividir a UI em partes independentes,
          reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado,
          livre de outras dependências externas. Componentes são como funções JavaScript.
          Eles aceitam entradas e retornam elementos VueJS que descrevem o que deve aparecer na tela.
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
  </div>
</div>
</template>

<script>
// import WallE from '../../components/numbers/WallE'
// import HomeToolbar from '../../components/toolbars/HomeToolbar'
// import PagesToolbar from '../../components/toolbars/PagesToolbar'
import DynamicCard from '../../components/cards/DynamicCard'
import AnimatedNumbers from '../../components/numbers/Animatednumbers'
import HomeToolbar from '../../components/toolbars/HomeToolbar'
// import LayoutMac from '../../layouts/Mac'
// import PagesToolbar from '../../components/toolbars/PagesToolbar'

export default {
  components: {
    HomeToolbar,
    AnimatedNumbers,
    DynamicCard
    // WallE
    // LayoutMac
    // PagesToolbar
  },
  data () {
    return {
      // dynamicLyoutButtonVal: 'Modo Web'
    }
  },
  methods: {
    doAndRefresh () {
      if (this.$route.fullPath === '/') {
        this.$router.push('/1')
        this.$store.commit('button/updateMode', 'Modo Desktop')
        // this.dynamicLyoutButtonVal = 'Modo Desktop'
      // } else if (this.$route.fullPath === '/1') {
      //   this.$router.push('/2')
      // } else if (this.$route.fullPath === '/2') {
      //   this.$router.push('/3')
      // } else if (this.$route.fullPath === '/3') {
      //   this.$router.push('/4')
      } else {
        this.$router.push('/')
        this.$store.commit('button/updateMode', 'Modo Web')
        // this.dynamicLyoutButtonVal = 'Modo Web'
        // this.$router.go()
      }
    }
  },
  computed: {
    // dynamicLyoutButton: {
    //   get () {
    //     return this.dynamicLyoutButtonVal
    //   },
    //   set (val) {
    //     this.dynamicLyoutButtonVal = val
    //   }
    // }
  }
}
</script>

<style>
.img-logo {
  height: 30px;
}
.q-btn {
  /* color: #8a63fd; */
  /* border-radius: 0px; */
  /* background-color: #7c50ff; */

}
.q-card {
  border-radius: 0px;

}

.per-word-strong {
  color: #a587ff;

}

.q-separator {
  background-color: #ffffff;
}

div.per-deep-purple-x {
  background-color: #7c50ff;
  color: #ffffff;
}

.losango{
  width:5px;
  height:5px;
  background:#ccc;
  /* margin-top:50px;
  margin-left:50px; */
   /* Rotação */
   transform: rotate(-45deg);
}
.quadrado{
  width:5px;
  height:5px;
  background:#ccc;
  /* margin-top:50px;
  margin-left:50px; */
   /* Rotação */
}
</style>
