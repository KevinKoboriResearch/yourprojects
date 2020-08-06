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
                    :outline="outline"
                    :round="round"
                    :size="size === 'customButtonSize' ? customButtonSize + 'px' : size"
                    :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
                    'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
                    'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
                  />
           <!-- :style="{'background-color:' + color + '; color:' + color" + ';'}"/> -->
           <!-- :color="color" -->
              <q-dialog v-model="prompt">
                <q-card class="q-pa-sm text-white text-start">
                  <q-card class="q-pt-sm bg-grey-10">
                    <q-card-section class="q-pt-none text-white">
                      <!-- <q-input color="white" dense v-model="btnText" autofocus @keyup.enter="prompt = false" /> -->
                      <q-input color="orange" class="bg-white" standout v-model="btnText" label="Texto do botão" clearable>
                      </q-input>
                    </q-card-section>
                    <q-card-section>
                    <div class="text-h6">
                      Capslock?
                    </div>
                  </q-card-section>
                  <div>
                    <q-radio v-model="buttonCaps" :val="true" label="Sim" color="positive" />
                    <q-radio v-model="buttonCaps" :val="false" label="Não" color="negative" />
                  </div>
                  </q-card>
<q-card class="my-card bg-grey-10 text-white text-center ">
                  <q-btn @click="prompt = true" :label="btnText"
                    :outline="outline"
                    :round="round"
                    :no-caps="buttonCaps"
                    :size="size === 'customButtonSize' ? customButtonSize + 'px' : size"
                    :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
                    'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
                    'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
                  />
                  </q-card>
                   <q-card class="my-card bg-grey-10 text-white">
                   <q-card-section>
                    <div class="text-h6">
                      Apenas bordas?
                    </div>
                  </q-card-section>
                  <div>
                    <q-radio v-model="outline" :val="true" label="Sim" color="positive" />
                    <q-radio v-model="outline" :val="false" label="Não" color="negative" />
                  </div>
                  <div v-show="!outline">
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
                    <q-color v-model="bgColor" class="my-picker" />

                  </div>
                  </q-card>
                  <q-card class="my-card bg-grey-10 text-white">
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
                  <q-color v-model="color" class="my-picker" />

                  </q-card>
                  <q-card class="my-card bg-grey-10 text-white">
                  <q-card-section>
                    <div class="text-h6">
                      Tamanho
                    </div>
                  </q-card-section>

                  <div class="q-gutter-sm">
                    <q-radio size="xs" v-model="size" val="xs" label="'xs'" />
                    <q-radio size="sm" v-model="size" val="sm" label="'sm'" />
                    <q-radio size="md" v-model="size" val="md" label="'md'" />
                  </div>
                  <div>
                    <q-radio size="lg" v-model="size" val="lg" label="'lg'" />
                    <q-radio size="xl" v-model="size" val="xl" label="'xl'" />
                    <q-radio size="80px" v-model="size" val="customButtonSize" label="Customizado" />
<!-- {{ customButtonSize }} -->
                    <!-- custom size -->
                  </div>
<div class="q-gutter-sm">
  <!-- <q-checkbox :size="customButtonSizeFunc + 'px'" v-model="size" :val="customButtonSizeFunc + 'px'" label="Size 'Customizado'"/> -->

                    <!-- <q-checkbox v-model="size" :val="'customButtonSize'" label="Size 'Customizado'"/> -->
      <!-- <q-checkbox v-model="teal" label="Teal" /> -->
                   <q-slider
                    name="speed"
                      v-model="customButtonSize"
                      label-always
                      markers
                      :label-value="customButtonSize + 'px'"
                      :min="0"
                      :max="150"
                      :step="5"
                    />
    </div>

                      <!-- <q-input dense v-model="customButtonSize" autofocus/> -->
<!-- v-show="size == '40px'"  -->
                  </q-card>
                  <q-card class="my-card bg-grey-10 text-white">
                  <q-card-section>
                    <div class="text-h6">
                      Cor do texto e da borda
                    </div>
                  </q-card-section>
                  <!-- <div>
                    <q-radio v-model="buttonBorder" val="teal" label="Teal" color="teal" />
                    <q-radio v-model="buttonBorder" val="orange" label="Orange" color="orange" />
                    <q-radio v-model="buttonBorder" val="red" label="Red" color="red" />
                    <q-radio v-model="buttonBorder" val="cyan" label="Cyan" color="cyan" />
                  </div> -->

                  <div>
                    <q-radio v-model="buttonBorder" val="defaultBorder" label="default" color="teal" />
                    <q-radio v-model="buttonBorder" val="round" label="round" color="orange" />
                    <q-radio v-model="buttonBorder" val="square" label="square" color="red" />
                    <q-radio v-model="buttonBorder" val="customBorder" label="custom" color="cyan" />
                  </div>

                  <div v-show='customBorder'>
                    <q-slider
                    name="speed"
                      v-model="edge1"
                      label-always
                      markers
                      :label-value="edge1 + 'px'"
                      :min="0"
                      :max="40"
                      :step="5"
                    />
                    <q-slider
                    name="speed"
                      v-model="edge2"
                      label-always
                      markers
                      :label-value="edge2 + 'px'"
                      :min="0"
                      :max="40"
                      :step="5"
                    />
                    <q-slider
                    name="speed"
                      v-model="edge3"
                      label-always
                      markers
                      :label-value="edge3 + 'px'"
                      :min="0"
                      :max="40"
                      :step="5"
                    />
                    <q-slider
                    name="speed"
                      v-model="edge4"
                      label-always
                      markers
                      :label-value="edge4 + 'px'"
                      :min="0"
                      :max="40"
                      :step="5"
                    />
                  </div>

                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="close" v-close-popup />
                  <!-- @keyup.enter="prompt = false"  -->
                  <!-- <q-btn flat label="Salvar" v-close-popup /> -->
                </q-card-actions>
                </q-card>
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
      btnText: 'Clique Aqui',
      bgColor: '#FF00FFCC',
      color: '#FF00FFCC',
      outline: true,
      round: false,
      square: false,
      customBorder: false,
      defaultBorder: false,
      border: 'defaultBorder',
      customButtonSize: 40,
      buttonCaps: true,
      size: '',
      // customBorder: null,
      shape: '',
      edge1: 5,
      edge2: 5,
      edge3: 5,
      edge4: 5
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
    // customButtonSizeFunc: {
    //   get () {
    //     return this.customButtonSize
    //   }
    // },
    buttonBorder: {
      get () {
        return this.border
      },
      set (val) {
        this.border = val
        if (this.border === 'round') {
          this.round = true
          this.square = false
          this.default = false
          this.customBorder = false
          this.edge1 = 25
          this.edge2 = 25
          this.edge3 = 25
          this.edge4 = 25
        } else if (this.border === 'square') {
          this.square = true
          this.round = false
          this.default = false
          this.customBorder = false
          this.edge1 = 0
          this.edge2 = 0
          this.edge3 = 0
          this.edge4 = 0
        } else if (this.border === 'defaultBorder') {
          this.default = true
          this.round = false
          this.square = false
          this.customBorder = false
          this.edge1 = 5
          this.edge2 = 5
          this.edge3 = 5
          this.edge4 = 5
        } else {
          this.customBorder = true
          this.round = false
          this.square = false
          this.default = false
        }
      }
    },
    // btnColor () {
    //   return this.color
    // },
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
