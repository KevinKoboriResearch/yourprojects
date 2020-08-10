<template>
<div>
  <div class="q-pa-xl bg-grey-10 fit row wrap justify-center items-start content-center">
    <div class="col-auto text-center text-white">
      <img class="img-logo" :src="require('../../assets/your-trans-4.png')">
        <div class="text-subtitle1">Criando um <strong class="per-word-strong">único</strong>
        produto, presente em todas as <strong class="per-word-strong">plataformas.</strong></div>
        <br>
        <div class="text-weight-bolder text-h6">
          iOS - Android - MacOS X - Windows - Web
        </div>
        <br>
        <AnimatedNumbers/>
        <q-btn outline no-caps color="black" :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn outline no-caps :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn outline no-caps color="black" label="Change Theme"/>
        <q-btn no-caps color="black" :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn no-caps :class="'bg-' + dsChange" @click="doAndRefresh()" label="Change Theme"/>
        <q-btn no-caps color="black" label="Change Theme"/>
        <!-- :class="'bg-' + dsChange()" -->
        <!-- :color="$store.state.button.getColor" -->
         <div>
           <q-btn @click="prompt = true" :label="btnText"
            :style="'background-color: ' + bgColor + '; color: ' + color"
           />
           <!-- :style="{'background-color:' + color + '; color:' + color" + ';'}"/> -->
           <!-- :color="color" -->
              <q-dialog v-model="prompt" persistent>
                <q-card class="q-pa-sm text-center">
                  <q-btn @click="prompt = true" :label="btnText"
                    :style="'background-color: ' + bgColor + '; color: ' + color"
                  />
                  <q-card-section>
                    <div class="text-h6">
                      Texto do Botão
                    </div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-input dense v-model="btnText" autofocus @keyup.enter="prompt = false" />
                  </q-card-section>

                  <q-card-section>
                    <div class="text-h6">
                      Cor de Fundo
                    </div>
                  </q-card-section>

                  <div>
                    <q-radio v-model="bgColor" val="teal" label="Teal" color="teal" />
                    <q-radio v-model="bgColor" val="orange" label="Orange" color="orange" />
                    <q-radio v-model="bgColor" val="red" label="Red" color="red" />
                    <q-radio v-model="bgColor" val="cyan" label="Cyan" color="cyan" />
                  </div>

                  <q-card-section>
                    <div class="text-h6">
                      Cor do texto e da borda
                    </div>
                  </q-card-section>
                  <div>
                    <q-radio v-model="color" val="teal" label="Teal" color="teal" />
                    <q-radio v-model="color" val="orange" label="Orange" color="orange" />
                    <q-radio v-model="color" val="red" label="Red" color="red" />
                    <q-radio v-model="color" val="cyan" label="Cyan" color="cyan" />
                  </div>
                  <div>
                    <q-slider
                      name="speed"
                      v-model="speed"
                      label-always
                      :min="20"
                      :max="140"
                      :step="10"
                    />
                  </div>
                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="close" v-close-popup />
                  <!-- <q-btn flat label="Salvar" v-close-popup /> -->
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
import AnimatedNumbers from '../../components/numbers/AnimatedNumbers'

export default {
  components: {
    AnimatedNumbers
  },
  data () {
    return {
      hello: false,
      prompt: false,
      btnText: 'Clique Aqui',
      bgColor: 'white',
      color: 'cyan'
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
      get () {
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
