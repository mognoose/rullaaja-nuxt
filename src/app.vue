<template>
  <div>
    <select name="dice" id="dice" v-model="dice">
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="10">10</option>
      <option value="12">12</option>
      <option value="20">20</option>
    </select>
    <button @click="onTest()">roll {{dice}}</button>
    {{ roll }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      dice: 20,
      roll: null,
    }
  },
  methods: {
    async onTest() {
      this.roll = await $fetch('api/test', { query: { dice: this.dice } });
    }
  },
}
</script>

<style lang="scss" scoped>

</style>