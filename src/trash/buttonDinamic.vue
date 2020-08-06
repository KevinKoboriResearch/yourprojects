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
      <q-card style="max-width: 350px;" class="text-start bg-white">
        <q-card-section class="bg-deep-purple-8">
        <div class="q-pb-xm text-center">
          <q-btn
            class="text-center"
            :label="text"
            :outline="outline"
            :round="round"
            :no-caps="!caps"
            glossy
            :size="size === 'customSize' ? customSize + 'px' : size"
            :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
            'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
            'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
          />
          <!-- glossy
              flat
              push -->
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
        <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="somegroup4" label="texto">
        <div class="q-pa-sm">
          <q-card-section class="q-pt-none">
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
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="somegroup4" label="cor">
          <div class="q-pa-sm">
            <div class="row">
              <div class="col-6">
                <q-card-section>
                  <div class="text-cyan-13 text-h6">
                    bordas
                  </div>
                </q-card-section>
              </div>
            <div class="col-6">
              <!-- sem borda -->
              <q-checkbox color="cyan" v-model="outline" />
              <!-- flat -->
              <div class="row">
                <q-radio color="cyan" dark size="xs" v-model="size" val="xs" label="Muito Pequeno" />
              </div>
              <div class="row">
                <q-radio color="cyan" dark size="sm" v-model="size" val="sm" label="Pequeno" />
              </div>
              <div class="row">
                <q-radio color="cyan" dark size="md" v-model="size" val="md" label="Médio" />
              </div>
            </div>
            </div>
            <div v-show="!outline">
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
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="somegroup4" label="Elevação">
            <div class="q-pa-sm">
              <q-card-section class="text-cyan-13 text-h6">
                <div class="row">
                  <div class="col-6">
                    glossy
                    flat
                    push
                  </div>
                  <div class="col-6">
                    <q-checkbox color="cyan" v-model="caps" />
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="somegroup4" label="Tamanho">
          <div class="q-pa-sm">
            <q-card-section>
              <div class="text-cyan-13 text-h6">
                Tamanho
              </div>
              </q-card-section>
              <div class="row">
                <q-radio color="cyan" dark size="xs" v-model="size" val="xs" label="Muito Pequeno" />
              </div>
              <div class="row">
                <q-radio color="cyan" dark size="sm" v-model="size" val="sm" label="Pequeno" />
              </div>
              <div class="row">
                <q-radio color="cyan" dark size="md" v-model="size" val="md" label="Médio" />
              </div>
              <div class="row">
                <q-radio color="cyan" dark size="lg" v-model="size" val="lg" label="Grande" />
              </div>
              <div class="row">
                <q-radio color="cyan" dark size="xl" v-model="size" val="xl" label="Muito Grande" />
              </div>
              <div class="row">
                <q-radio color="cyan" dark size="80px" v-model="size" val="customSize" label="Customizado" />
              </div>
              <div class="q-gutter-sm">
                <q-slider
                  v-show="size=='customSize'"
                  name="speed"
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
            <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="somegroup4" label="Borda">
            <div class="q-pa-sm">    <q-card-section>
              <div class="text-cyan-13 text-h6">
                Cor do texto e da borda
              </div>
            </q-card-section>
            <div>
              <q-radio dark v-model="buttonBorder" val="default" label="default" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="round" label="round" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="square" label="square" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="customBorder" label="custom" color="cyan" />
            </div>
            <div v-show='customBorder'>
              <q-slider
                v-model="edge1"
                label-always
                color="cyan"
                :label-value="edge1 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <q-slider
                v-model="edge2"
                label-always
                color="cyan"
                :label-value="edge2 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <q-slider
                v-model="edge3"
                label-always
                color="cyan"
                :label-value="edge3 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
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
      text: 'Clique Aqui',
      caps: false,
      outline: false,
      bgColor: '#000000FF',
      color: '#ab8fff',
      default: false,
      round: false,
      square: false,
      customBorder: false,
      border: 'default',
      customSize: 40,
      palette: ['#FFFFFFFF', '#F2C037FF', '#21BA45FF', '#26A69AFF', '#31CCECFF', '#1976D2FF', '#ff00ffFF', '#9C27B0FF', '#C10015FF', '#000000FF'],
      size: 'md',
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
        } else if (this.border === 'default') {
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
    }
  }
}
</script>
