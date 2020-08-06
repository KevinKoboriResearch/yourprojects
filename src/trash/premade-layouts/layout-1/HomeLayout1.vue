<template>
<div>
  <div class="q-pa-xl bg-grey-10 fit row wrap justify-center items-start content-center">
    <div class="col-auto text-center text-white">
      <img class="img-logo" :src="require('../../../assets/your-trans-4.png')">
        <div class="text-subtitle1">Criando um <strong class="per-deep-purple-x">único</strong>
        produto, presente em todas as <strong class="per-deep-purple-x">plataformas.</strong></div>
        <br>
        <div class="text-weight-bolder text-h6">
          iOS - Android - MacOS X - Windows - Web
        </div>
        <br>
        <q-btn outline no-caps class="per-deep-purple-x" @click="doAndRefresh()" label="Modo App Mobile"/>
        <!-- to="/" -->
    </div>
  </div>

  <div class="q-pa-lg per-deep-purple-x fit row wrap justify-center items-start content-center">
    <div class="col-auto text-center text-white">
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

        <q-separator inset color="grey-5"/>

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      <q-separator color="deep-purple-5" />
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

        <q-separator inset color="grey-5" />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      <q-separator color="deep-purple-5" />
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

        <q-separator inset color="grey-5" />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      <q-separator color="deep-purple-5" />
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

        <q-separator inset color="grey-5" />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      <q-separator color="deep-purple-5" />
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

        <q-separator inset color="grey-5" />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      <q-separator color="deep-purple-5" />
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

        <q-separator inset color="grey-5" />

        <q-card-section align="right">
          <q-btn outline>Saiba Mais</q-btn>
        </q-card-section>
      </q-card>
      <q-separator color="deep-purple-5" />
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
      // button state false or true: as default false
      hello: false
    }
  },
  methods: {
    doAndRefresh () {
      this.$router.push('/premade-layouts/layout2')
      // this.$router.go()
    }
  }
}
</script>

<style>
</style>
