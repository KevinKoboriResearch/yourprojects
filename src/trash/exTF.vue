<template>
  <div>
    <input dark dense standout v-model="val1"/>
    <input dark dense standout v-model="val2"/>
    <input dark dense standout v-model="result"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fieldVal1: 0,
      fieldVal2: 0,
      resultVal: 0
    }
  },
  computed: {
    val1: {
      get () {
        return this.fieldVal1
      },
      set (val) {
        this.fieldVal1 = val
        this.result = this.fieldVal1 / this.fieldVal2
      }
    },
    val2: {
      get () {
        return this.fieldVal2
      },
      set (val) {
        this.fieldVal2 = val
        this.result = this.fieldVal1 / this.fieldVal2
      }
    },
    result: {
      get () {
        return this.resultVal
      },
      set (val) {
        this.resultVal = val
      }
    }
  }
}
</script>

<style>

</style>
