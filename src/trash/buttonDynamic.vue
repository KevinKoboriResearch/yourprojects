<template>
  <div>
    <!-- <q-list> -->
      <!-- <div @click="actionButton()"> -->
        <!-- @click="prompt = true" -->
      <!-- @click="progress = !progress" -->
    <q-btn
      @click="actionButton()"
      :align="alignVal"
      :flat="flat"
      :disable="disable"
      :glossy="glossy"
      :label="textLeftIconRight"
      :loading="progress"
      :no-caps="!caps"
      :outline="outline"
      :push="push"
      :padding="padding"
      :round="round"
      :stack="stackVal"
      :size="size === 'customSize' ? customSize + 'px' : size"
      :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
      'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
      'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
    >
      <q-tooltip v-if="tooltip" :content-class="'bg-' + tooltipQuasarColor">
        I'm a tooltip
      </q-tooltip>
      <q-icon v-if="iconBody"
        :left="iconBodyLeft"
        :right="iconBodyRight"
        :name="iconBodyName"
        :size="iconBodySizeNum + 'px'" />
      <div v-if="textRightIconLeft">
        {{ textVal }}
      </div>
      <template v-if="spinnerGif" v-slot:loading>
        <div v-if="!loadingTextRight">
          Clique Aqui...
        </div>
          <q-spinner v-if="spinnerGif == ''"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-radio v-if="spinnerGif == 'radio'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-hourglass v-if="spinnerGif == 'hourglass'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-facebook v-if="spinnerGif == 'facebook'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-gears v-if="spinnerGif == 'gears'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-audio v-if="spinnerGif == 'audio'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-ball v-if="spinnerGif == 'ball'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-bars v-if="spinnerGif == 'bars'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

          <q-spinner-comment v-if="spinnerGif == 'comment'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-cube v-if="spinnerGif == 'cube'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-dots v-if="spinnerGif == 'dots'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-grid v-if="spinnerGif == 'grid'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

          <q-spinner-hearts v-if="spinnerGif == 'hearts'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-infinity v-if="spinnerGif == 'infinity'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-ios v-if="spinnerGif == 'ios'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-oval v-if="spinnerGif == 'oval'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

          <q-spinner-pie v-if="spinnerGif == 'pie'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-puff v-if="spinnerGif == 'puff'" @click.stop="actionButton()"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-rings v-if="spinnerGif == 'rings'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-tail v-if="spinnerGif == 'tail'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

        <div v-if="loadingTextRight">
          Clique Aqui...
        </div>
      </template>
    </q-btn>
  <Dynamic :prompt="prompt"/>
  {{ prompt }}
  </div>
  <!-- </q-list> -->
</template>

<script>
import Dynamic from './Dynamic'
export default {
  components: {
    Dynamic
  },
  data () {
    return {
      // Q BTN

      // OPTIONS
      promptVal: false,
      textVal: 'Edite Aqui',
      caps: true,
      outline: true,
      bgColor: '#FFFFFFFF',
      color: '#6300d4ff',
      default: false,
      round: false,
      square: false,
      border: false,
      borderVal: 'custom',
      customSize: 40,
      glossy: false,
      push: false,
      disable: false,
      size: 'md',
      edge1: 0,
      edge2: 0,
      edge3: 0,
      edge4: 0,
      flatOutlineVal: 'default',
      flat: false,
      height: 'xs',
      width: 'md',
      heightNum: 20,
      widthNum: 20,
      tooltip: false,
      tooltipQuasarColor: 'accent',
      alignVal: 'around',
      iconBody: true,
      iconBodyName: 'mdi-vuejs',
      stackVal: true,
      iconTagLeft: false,
      iconTagRight: false,
      iconTagNameLeft: 'none',
      iconTagNameRight: 'none',
      fullWidth: false,
      textDirectionVal: 'right',
      textRightIconLeft: 'Clique Aqui',
      textLeftIconRight: '',
      iconBodyLeft: false,
      iconBodyRight: false,
      iconBodySizeVal: false,
      iconBodySizeNum: 70,
      iconBodySizeNumVal: '',
      progress: true,
      spinnerGifVal: 'puff',
      loadingText: 'Esperando...',
      loadingTextRight: true
    }
  },
  methods: {
    actionButton () {
      if (this.progress === true && this.promptVal === false) {
        this.progress = false
        this.prompt = false
      } else if (this.progress === false && this.promptVal === false) {
        this.prompt = true
        this.progress = false
      } else {
        this.progress = true
        this.prompt = false
      }
    }
    // progress = false prompt = true
  },
  computed: {
    prompt: {
      get () {
        return this.promptVal
      },
      set (val) {
        this.promptVal = val
      }
    }
  }
}
</script>
