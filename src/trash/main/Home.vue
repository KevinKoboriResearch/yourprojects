<template>
<div>
  <div class="q-pa-xl bg-grey-10 fit row wrap justify-center items-start content-center">
    <div class="col-auto text-center text-white">
      <img class="img-logo" :src="require('../../assets/your-trans-4.png')">
        <div class="text-subtitle1">Criando um <strong class="per-word-strong">único</strong>
        produto, presente em todas as <strong class="per-word-strong">plataformas.</strong></div>
        <br>
        <div class="text-weight-bolder text-h6">
          Celulares / Tablets / Computadores / Web
        </div>
        <div class="text-weight-bolder text-h6">
          iOS / Android - MacOS X / Windows
        </div>
        <br>
        <q-btn outline no-caps color="black" :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn outline no-caps :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn outline no-caps color="black" label="Change Theme"/>
        <q-btn no-caps color="black" :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn no-caps :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn no-caps color="black" label="Change Theme"/>
        <!-- :class="'bg-' + dsChange()" -->
        <!-- :color="$store.state.button.getColor" -->
         <div>
           <q-btn :label="btnText" color="primary" @click="prompt = true" />
           <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="btnText" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
          <q-toggle v-model="drawerState" />
        </div>
    </div>
  </div>

  <div class="q-pa-lg per-tittle-1 fit row wrap justify-center items-start content-center">
    <div class="col-auto text-center">
        <div class="text-weight-bolder text-h6">
          Plataformas
        </div>
    </div>
  </div>
  <div class="bg-white row wrap justify-center items-start content-center">
    <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
      <q-card flat>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Dispositivos Mobile</div>
          <div class="text-subtitle2">por Kevin Kobori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Componentes permitem você dividir a UI em partes independentes,
          reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado,
          livre de outras dependências externas. Componentes são como funções JavaScript.
          Eles aceitam entradas e retornam elementos VueJS que descrevem o que deve aparecer na tela.
        </q-card-section>

        <q-card-section class="q-pt-none">
          <strong>Ex: Smartphones Android, iOS Apple, Tablets e iPads.</strong>
        </q-card-section>
        <br>
        <q-separator inset />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      <q-separator />
    </div>

    <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
      <q-card flat>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Sistemas Operacionais</div>
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
      <q-separator />
    </div>

    <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
      <q-card flat>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Navegadores Web</div>
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
      <q-separator />
    </div>
  </div>

  <div class="q-pa-lg bg-grey-10 fit row wrap justify-center items-start content-center">
    <div class="col-auto text-center text-white">
        <div class="text-weight-bolder text-h6">
          Personalizando os seus templates
        </div>
    </div>
  </div>
  <div class="bg-white row wrap justify-center items-start content-center">
    <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
      <q-card flat>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
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
      <q-separator />
    </div>

    <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
      <q-card flat>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
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
      <q-separator />
    </div>

    <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
      <q-card flat>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
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
      <q-separator />
    </div>
  </div>
      <!-- <div class="q-pa-xl row justify-center">
          <q-btn color="primary" @mouseover="hello = true" icon-right="mail" label="Hover Me!" :shadow-transition="hello ? '0' : '24'">
            <q-menu v-model="hello" @mouseleave="hello = false"  fit>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>New tab</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>New incognito tab</q-item-section>
                    <q-separator />
                  <q-item-section>Recent tabs</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>History</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Downloads</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Help &amp; Feedback</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div> -->
</div>
</template>

<script>
export default {
  data () {
    return {
      hello: false,
      prompt: false,
      btnText: 'teste'
    }
  },
  methods: {
    doAndRefresh () {
      if (this.$route.fullPath === '/') {
        this.$router.push('/1')
      } else if (this.$route.fullPath === '/1') {
        this.$router.push('/2')
      } else if (this.$route.fullPath === '/2') {
        this.$router.push('/3')
      } else if (this.$route.fullPath === '/3') {
        this.$router.push('/4')
      } else {
        this.$router.push('/')
        this.$router.go()
      }
    }
  },
  computed: {
    drawerState: {
      // ...mapGetters('showcase', ['getShowcase']),
      get () {
        // return this.$store.state.showcase.drawerState
        return this.$store.getters['showcase/getShowcase']
      },
      set (val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    },
    dsChange () {
      return this.$store.getters['button/getColor']
    }
  }
}
</script>

<style>
</style>
