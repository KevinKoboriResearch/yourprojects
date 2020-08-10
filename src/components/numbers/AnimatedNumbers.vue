<template>
  <div>
    <!-- <input v-model.number="firstNumber" type="number" step="20"> -->
    <q-input standout="bg-teal text-white" v-model="firstNumber" label="Custom standout" step="20" />
    <!-- <input v-model.number="numberExpression" type="string"> -->
    <q-select standout="bg-teal text-white" v-model="numberExpression" :options="options" label="Custom standout" />
    <!-- <input v-model.number="secondNumber" type="number" step="20"> -->
    <q-input standout="bg-teal text-white" v-model="secondNumber" label="Custom standout" step="20" />
    {{ result }}
    <div>
      <AnimatedInteger :value="firstNumber"></AnimatedInteger>
      <AnimatedInteger :value="numberExpression"></AnimatedInteger>
      <AnimatedInteger :value="secondNumber"></AnimatedInteger>
      <AnimatedInteger :value="result"></AnimatedInteger>
    </div>
  </div>
</template>

<script>
import AnimatedInteger from './AnimatedInteger'
export default {
  components: {
    AnimatedInteger
  },
  data () {
    return {
      firstNumber: 20,
      secondNumber: 40,
      numberExpression: '',
      options: [
        '+', '-', '*', '/'
      ]
    }
  },
  computed: {
    result: function () {
      return eval(this.firstNumber.toString() + this.numberExpression + this.secondNumber.toString()) // eslint-disable-line
    }
  }
}
</script>

<style>

</style>
