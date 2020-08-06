<template>
  <div>
    <!-- <q-btn @click="prompt = true"
      :label="text"
      :outline="outline"
      :round="round"
      :no-caps="!caps"
      :size="size === 'customSize' ? customSize + 'px' : size"
      :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
      'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
      'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
    />
    <q-dialog v-model="prompt"> -->
      <q-card style="min-width: 300px;" square class="text-start bg-white">
        <q-card-section class="bg-deep-purple-8">
        <div class="q-pb-xm text-center">
          <!-- {{ 'left ' + textLeftIconRightVal }} -->
          <!-- {{ 'right ' + textRightIconLeftVal }} -->
          <q-btn
            :label="textLeftIconRightVal"
            :outline="outline"
            :flat="flat"
            :round="round"
            :no-caps="!caps"
            :glossy="glossy"
            :push="push"
            :disable="disable"
            :padding="padding"
            :align="alignVal"
            :stack="stackVal"
            :size="size === 'customSize' ? customSize + 'px' : size"
            :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
            'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
            'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
          >
            <q-tooltip v-if="tooltip" :content-class="'bg-' + tooltipQuasarColor">I'm a tooltip</q-tooltip>
            <!-- :icon="iconTagNameLeft"
            :icon-right="iconTagNameRight" -->
            <!-- :class="'btn-fixed-width ' + fullWidth ? 'full-width ' : ''" -->

            <!-- :icon="false" -->

            <!-- icon="mail" icon-right="send" MOSTRAR 3 BOTOES,  -->
            <q-icon v-if="iconBody"
              :size="iconBodySizeNum + 'px'"
              :left="iconBodyLeft"
              :right="iconBodyRight"
              :name="iconBodyName" />
            <div v-if="textRightIconLeftVal">{{ textVal }}</div>
              <!-- right
              left -->
            <!-- <q-avatar size="42px">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
      </q-avatar> -->
          </q-btn>
          <!-- {{ 'right ' + textRightIconLeftVal }} -->
          <!-- <q-btn color="red" :icon="none" :icon-right="none" label="On Left and Right" /> -->
                   <!-- <div class="q-pa-md q-gutter-sm"> -->
            <!-- <q-btn color="black" class="full-width" label="Full-width" />

    <q-btn color="primary" label="With Tooltip" class="q-mt-md">
      <q-tooltip content-class="bg-accent">I'm a tooltip</q-tooltip>
    </q-btn> -->
            <!-- disable -->
            <!-- paddinh="xs lg" -->
    <!-- <q-btn
      padding="none"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="xs"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="lg"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="10px 5px"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="xs lg"
      color="primary"
      icon="eco"
    />

    <q-btn
      padding="xl"
      color="primary"
      round
      icon="eco"
    />

    <q-btn
      padding="xs lg"
      color="primary"
      round
      icon="eco"
    />

    <q-btn
      padding="lg xs"
      color="primary"
      round
      icon="eco"
    />
  </div> -->
            <!-- icon="" -->
          <!-- <div class="q-pa-md q-gutter-sm">
    <q-btn align="left" class="btn-fixed-width" color="primary" label="Align to left" />
    <q-btn align="right" class="btn-fixed-width" color="secondary" label="Align to right" />
    <q-btn align="between" class="btn-fixed-width" color="accent" label="Align between" icon="flight_takeoff" />
    <q-btn align="around" class="btn-fixed-width" color="brown-5" label="Align around" icon="lightbulb_outline" />
  </div> -->
          <!-- <q-btn color="primary" style="width: 200px">
      <div class="ellipsis">
        This is some very long text that is expected to be truncated
      </div>
    </q-btn> -->
                  <!-- <q-btn color="indigo" no-caps>
              Multiline<br>Button
            </q-btn> -->
            <!-- <q-icon left size="3em" name="map" /> -->
            <!-- <q-icon left name="map" />
            <div class="text-center">
              Custom<br>Content
            </div> -->
            <!-- <q-btn round>
      <q-avatar size="42px">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
      </q-avatar>
    </q-btn> -->
    <!-- <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="mail" label="On Left" />
    <q-btn color="secondary" icon-right="mail" label="On Right" />
    <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
    <br>
    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
  </div> -->
        </div>
        </q-card-section >
        <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="texto">
        <div class="q-pa-sm">
          <q-card-section>
            <q-input dark dense standout v-model="text">
              <template v-slot:append>
                <q-icon name="clear" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="text-cyan-13 text-h6">
            <div class="row">
              <div class="col-6">
                Capslock
              </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="caps" />
                </div>
              </div>
            </q-card-section>
          </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Estilo">
            <q-card-section class="text-cyan-13 text-h6">
            <div class="row">
              <div class="col-6">
                Glossy
              </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="glossy" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  Disable
                </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="disable" />
                </div>
              </div>
             <div class="row">
                <div class="col-6">
                  Tooltip
                </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="tooltip" />
                </div>
              </div>
              <div v-if="tooltip" class="row">
                <div class="col-6">
                  Cor do Tooltip
                </div>
                <div class="col-6">
                  Cor do Tooltip
                </div>
              </div>
            </q-card-section>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Icone">
            <!-- <q-card-section class="text-cyan-13 text-h6">
            <div class="row">
              <div class="col-6">
                Icone Padrão Esquerdo
              </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="iconTagLeft" />
                </div>
              </div>
               <q-card-section v-if="iconTagLeft">
                <q-input dark dense standout v-model="iconTagNameLeft">
                  <template v-slot:append>
                    <q-icon name="clear" class="cursor-pointer" @click="iconTagNameLeft = ''" />
                  </template>
                </q-input>
              </q-card-section>
            </q-card-section>
            <q-card-section class="text-cyan-13 text-h6">
            <div class="row">
              <div class="col-6">
                Icone Padrão Direito
              </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="iconTagRight" />
                </div>
              </div>
               <q-card-section v-if="iconTagRight">
                <q-input dark dense standout v-model="iconTagNameRight">
                  <template v-slot:append>
                    <q-icon name="clear" class="cursor-pointer" @click="iconTagNameRight = ''" />
                  </template>
                </q-input>
              </q-card-section>
            </q-card-section> -->
            <q-card-section class="text-cyan-13 text-h6">
            <div class="row">
              <div class="col-6">
                Icone
              </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="iconBody" />
                </div>
              </div>
               <q-card-section v-if="iconBody">
                <q-input label="mdi-..." label-color="deep-purple-5" dark dense standout v-model="iconBodyName">
                  <template v-slot:append>
                    <q-icon name="clear" class="cursor-pointer" @click="iconBodyName = ''" />
                  </template>
                </q-input>
              </q-card-section>
            </q-card-section>
            <!-- textDirection -->
            <q-card-section class="text-cyan-13 text-h6">
              <div class="row">
                <div class="col-6">
                  Posição do Icone
                </div>
                <div class="col-6">
                  Posição do Texto
                </div>
                 <div class="row">
                <div class="col-6">
                  <div class="row">
                    <q-radio color="cyan" dark v-model="iconBodyDirection" val="left" label="Esquerda" />
                  </div>
                  <div class="row">
                    <q-radio color="cyan" dark v-model="iconBodyDirection" val="center" label="Centro" />
                  </div>
                  <div class="row">
                    <q-radio color="cyan" dark v-model="iconBodyDirection" val="right" label="Direita" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <q-radio color="cyan" dark v-model="textDirection" val="left" label="Esquerda" />
                  </div>
                  <div class="row">
                    <q-radio color="cyan" dark v-model="textDirection" val="right" label="Direita" />
                  </div>
                </div>
                 </div>
              </div>
               <div class="row">
                <div class="col-6">
                  Icone
                </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="iconBodySize" />
                </div>
              </div>
              <div class="q-gutter-sm">
                <q-slider
                  v-if="iconBodySize"
                  v-model="iconBodySizeNum"
                  label-always
                  markers
                  :label-value="iconBodySizeNum + 'px'"
                  :min="0"
                  :max="150"
                  :step="5"
                />
              </div>
            </q-card-section>
            <!--  -->
            <!-- <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="leftDefault" label="Esquerdo Padrão" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="rightCustom" label="Direito Customizado" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="leftCustom" label="Esquerdo Customizado" />
            </div> -->
            <!-- <div v-if="!outline">
              <q-card-section class="text-cyan-13 text-h6">
                Cor de Fundo
              </q-card-section>
              <q-color default-view="palette" :palette="palette" v-model="bgColor" />
            </div> -->
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="cor">
          <div class="q-pa-sm">
            <q-card-section>
              <div class="text-cyan-13 text-h6">
                Estilo
              </div>
            </q-card-section>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="flat" label="Liso" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="default" label="Com Fundo" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="push" label="Push" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="outline" label="Com Borda / Sem Fundo" />
            </div>
            <div v-if="!outline">
              <q-card-section class="text-cyan-13 text-h6">
                Cor de Fundo
              </q-card-section>
              <q-color default-view="palette" :palette="palette" v-model="bgColor" />
            </div>
            <q-card-section class="text-cyan-13 text-h6">
                Cor do texto
            </q-card-section>
            <q-color default-view="palette" :palette="palette" v-model="color" />
          </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Tamanho">
          <div class="q-pa-sm">
            <q-card-section>
              <div class="text-cyan-13 text-h6">
                Tamanho
              </div>
              </q-card-section>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="size" val="xs" label="Muito Pequeno" />
                </div>
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="size" val="sm" label="Pequeno" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="size" val="md" label="Médio" />
                </div>
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="size" val="lg" label="Grande" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="size" val="xl" label="Muito Grande" />
                </div>
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="size" val="customSize" label="Customizado" />
                </div>
              </div>
              <div class="q-gutter-sm">
                <q-slider
                  v-if="size=='customSize'"
                  v-model="customSize"
                  label-always
                  markers
                  :label-value="customSize + 'px'"
                  :min="0"
                  :max="150"
                  :step="5"
                />
              </div>
            </div>
            </q-expansion-item>
             <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Padding">
          <div class="q-pa-sm">
            <div class="row">
            <q-card-section>
              <div class="text-cyan-13 text-h6">
                Altura
              </div>
              </q-card-section>
              <div class="col-6">
                <q-card-section>
              <div class="text-cyan-13 text-h6">
                Largura
              </div>
              </q-card-section>
              </div>
            </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="" label="Nada" />
                </div>
                <div class="col-6">
                   <q-radio color="light-green" dark v-model="width" val="" label="Nada" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="xs" label="Muito Pequeno" />
                </div>
                <div class="col-6">
                   <q-radio color="light-green" dark v-model="width" val="xs" label="Muito Pequeno" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="sm" label="Pequeno" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="sm" label="Pequeno" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                   <q-radio color="cyan" dark v-model="height" val="md" label="Médio" />
                </div>
                <div class="col-6">
                   <q-radio color="light-green" dark v-model="width" val="md" label="Médio" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="lg" label="Grande" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="lg" label="Grande" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="xl" label="Muito Grande" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="xl" label="Muito Grande" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="customHeight" label="Customizado" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="customWidth" label="Customizado" />
                </div>
              </div>
                  <q-slider
                    v-if="height == 'customHeight'"
                    v-model="heightNum"
                    label-always
                    color="cyan"
                    :label-value="heightNum + 'px'"
                    :min="0"
                    :max="150"
                    :step="5"
                  />
                  <br>
                  <q-slider
                  v-if="width == 'customWidth'"
                    v-model="widthNum"
                    label-always
                    color="light-green"
                    :label-value="widthNum + 'px'"
                    :min="0"
                    :max="150"
                    :step="5"
                  />
            </div>
            </q-expansion-item>
            <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Alinhamento">
              <div>
                <q-radio dark v-model="align" val="around" label="Justificado" color="cyan" />
                <q-radio dark v-model="align" val="between" label="Entre" color="cyan" />
                <q-radio dark v-model="align" val="left" label="Esquerda" color="cyan" />
                <q-radio dark v-model="align" val="right" label="Direita" color="cyan" />
                <q-radio dark v-model="align" val="stack" label="Empilhado" color="cyan" />
              </div>
            </q-expansion-item>
            <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Borda">
            <div class="q-pa-sm">    <q-card-section>
              <div class="text-cyan-13 text-h6">
                Cor do texto e da borda
              </div>
            </q-card-section>
            <div>
              <q-radio dark v-model="buttonBorder" val="default" label="default" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="round" label="round" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="square" label="square" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="border" label="custom" color="cyan" />
            </div>
            <div v-if='border'>
              <q-slider
                v-model="edge1"
                label-always
                color="cyan"
                :label-value="edge1 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <br>
              <q-slider
                v-model="edge2"
                label-always
                color="cyan"
                :label-value="edge2 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <br>
              <q-slider
                v-model="edge3"
                label-always
                color="cyan"
                :label-value="edge3 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <br>
              <q-slider
                v-model="edge4"
                label-always
                color="cyan"
                :label-value="edge4 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
            </div>
          </div>
        </q-expansion-item>
        <q-card-actions align="right" class="text-deep-purple-5 bg-grey-10">
          <q-btn flat label="Fechar" v-close-popup />
        </q-card-actions>
      </q-card>
    <!-- </q-dialog> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      prompt: false,
      textVal: 'Clique Aqui',
      caps: false,
      outline: false,
      bgColor: '#512fa9',
      color: '#000000FF',
      default: false,
      round: false,
      square: false,
      border: false,
      borderVal: 'default',
      customSize: 40,
      glossy: false,
      push: false,
      disable: false,
      palette: ['#FFFFFFFF', '#F2C037FF', '#21BA45FF', '#26A69AFF', '#31CCECFF', '#1976D2FF', '#ff00ffFF', '#9C27B0FF', '#C10015FF', '#000000FF'],
      size: 'md',
      edge1: 5,
      edge2: 5,
      edge3: 5,
      edge4: 5,
      flatOutlineVal: 'default',
      flat: false,
      height: 'sm',
      width: 'md',
      heightNum: 20,
      widthNum: 20,
      tooltip: true,
      tooltipQuasarColor: 'accent',
      alignVal: 'around',
      iconBody: true,
      iconBodyName: 'mdi-heart',
      stackVal: false,
      iconTagLeft: false,
      iconTagRight: false,
      iconTagNameLeft: 'none',
      iconTagNameRight: 'none',
      fullWidth: false,
      // textLeftIconRightVal: '',
      // textRightIconLeftVal: '',
      textDirectionVal: 'left',
      iconBodyLeft: false,
      iconBodyRight: true,
      // iconBodySize: false,
      iconBodySizeVal: false,
      iconBodySizeNum: 50,
      iconBodySizeNumVal: ''
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
  watch: {
    text: {}
  },
  computed: {
    // iconBodySizeNum: {
    //   get () {
    //     return this.iconBodySizeNumVal + 'px'
    //   },
    //   set (val) {
    //     this.iconBodySizeNumVal = val
    //   }
    // },
    iconBodySize: {
      get () {
        return this.iconBodySizeVal
      },
      set (val) {
        this.iconBodySizeVal = val
        if (val === false) {
          this.iconBodySizeNum = 25
        }
      }
    },
    iconBodyDirection: {
      get () {
        return this.iconBodyDirectionVal
      },
      set (val) {
        this.iconBodyDirectionVal = val
        if (val === 'right') {
          this.iconBodyLeft = this.textVal
          this.iconBodyRight = ''
        } else if (val === 'center') {
          this.iconBodyLeft = ''
          this.iconBodyRight = ''
        } else {
          this.iconBodyLeft = ''
          this.iconBodyRight = this.textVal
        }
      }
    },
    text: {
      get () {
        return this.textVal
      },
      set (val) {
        this.textVal = val
        if (this.textDirectionVal === 'right') {
          this.textLeftIconRightVal = ''
          this.textRightIconLeftVal = val
        } else {
          this.textLeftIconRightVal = val
          this.textRightIconLeftVal = ''
        }
      }
    },
    // textRightIconLeft: {
    //   get () {
    //     return this.textRightIconLeftVal
    //   },
    //   set (val) {
    //     this.textRightIconLeftVal = val
    //   }
    // },
    // textLeftIconRight: {
    //   get () {
    //     return this.textLeftIconRightVal
    //   },
    //   set (val) {
    //     this.textLeftIconRightVal = val
    //   }
    // },
    textDirection: {
      get () {
        return this.textDirectionVal
      },
      set (val) {
        this.textDirectionVal = val
        if (val === 'right') {
          this.textLeftIconRightVal = ''
          this.textRightIconLeftVal = this.textVal
        } else {
          this.textLeftIconRightVal = this.textVal
          this.textRightIconLeftVal = ''
        }
      }
    },
    align: {
      get () {
        if (this.alignVal === '') {
          return 'stack'
        } else {
          return this.alignVal
        }
      },
      set (val) {
        if (val === 'stack') {
          this.stackVal = true
          this.alignVal = ''
        } else {
          this.stackVal = false
          this.alignVal = val
        }
      }

    },
    padding: {
      get () {
        if (this.height === 'customHeight' && this.width === 'customWidth') {
          return this.heightNum + 'px ' + this.widthNum + 'px'
        } else if (this.height === 'customHeight' && this.width !== 'customWidth') {
          return this.heightNum + 'px ' + this.width
        } else if (this.height !== 'customHeight' && this.width === 'customWidth') {
          return this.height + ' ' + this.widthNum + 'px'
        } else {
          return this.height + ' ' + this.width
        }
      }
    },
    flatOutline: {
      get () {
        return this.flatOutlineVal
      },
      set (val) {
        this.flatOutlineVal = val
        if (this.flatOutlineVal === 'default') {
          this.outline = false
          this.flat = false
          this.push = false
        } else if (this.flatOutlineVal === 'outline') {
          this.outline = true
          this.flat = false
          this.push = false
        } else if (this.flatOutlineVal === 'push') {
          this.push = true
          this.outline = false
          this.flat = false
        } else {
          this.flat = true
          this.outline = false
          this.push = false
        }
      }
    },
    buttonBorder: {
      get () {
        return this.borderVal
      },
      set (val) {
        this.borderVal = val
        if (this.borderVal === 'round') {
          this.round = true
          this.square = false
          this.default = false
          this.border = false
          this.edge1 = 25
          this.edge2 = 25
          this.edge3 = 25
          this.edge4 = 25
        } else if (this.borderVal === 'square') {
          this.square = true
          this.round = false
          this.default = false
          this.border = false
          this.edge1 = 0
          this.edge2 = 0
          this.edge3 = 0
          this.edge4 = 0
        } else if (this.borderVal === 'default') {
          this.default = true
          this.round = false
          this.square = false
          this.border = false
          this.edge1 = 5
          this.edge2 = 5
          this.edge3 = 5
          this.edge4 = 5
        } else {
          this.border = true
          this.round = false
          this.square = false
          this.default = false
        }
      }
    }
  }
}
</script>
