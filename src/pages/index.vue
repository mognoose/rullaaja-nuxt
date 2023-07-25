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
    <button @click="onRoll()">roll {{dice}}</button>
    <p :class="{loading: loading}">Result: {{ roll?.result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dice: 20,
      roll: null,
      loading: false,
    }
  },
  methods: {
    async onRoll() {
      this.loading = true;
      this.roll = await $fetch('api/roll', { query: { dice: this.dice } });
      this.loading = false;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>