<template>
  <div class="counter">
    <small
      :style="{color:`${status.color}`, fontWeight: wordLength >= wordAmount.error ? 'bold' : '300'}"
    >
      <v-icon
        v-if="wordLength >=wordAmount.min && wordLength<=wordAmount.max"
        color="success"
      >mdi-check</v-icon>
      <v-icon color="success">mdi-minimize</v-icon>
      מס' מילים:
      {{ wordLength }}/{{ wordAmount.error }}
    </small>
  </div>
</template>

<script>
export default {
  name: 'CharacterCount',
  props: {
    text: {
      type: String,
      default: '',
    },
    wordAmount: {
      type: Object,
      default() {
        return {
          min: 150,
          max: 250,
          error: 300,
        };
      }
    },
  },
  data: () => ({
    wordLength: 0,
    status: {
      color: 'gray',
      var: '--v-secondary-darken2',
    },
    statuses: [
      { color: 'gray', var: '--v-secondary-darken2' },
      { color: 'blue', var: '--v-error-lighten4' },
      { color: 'green', var: '--v-success-lighten2' },
      { color: '#adad00', var: '--v-warning-darken3' },
      { color: 'red', var: '--v-error-base' },
    ],
  }),
  watch: {
    text(newVal, oldVal) {
      this.countChars();
    },
  },
  methods: {
    countChars() {
      const words = this.text
        .split(/[\n\r\s]+/g)
        .filter(word => word.length > 0);
      const { length } = words;
      this.wordLength = length;
      switch (true) {
        case length >= 0 && length < this.wordAmount.min / 2:
          this.status = this.statuses[0];
          break;
        case length >= this.wordAmount.min / 2 && length < this.wordAmount.min:
          this.status = this.statuses[1];
          break;
        case length >= this.wordAmount.min && length < this.wordAmount.max:
          this.status = this.statuses[2];
          break;
        case length >= this.wordAmount.max && length < this.wordAmount.error:
          this.status = this.statuses[3];
          break;
        case length >= this.wordAmount.error:
          this.status = this.statuses[4];
          break;
      }
      this.$emit('statusChanged', this.status);
    },
  },
};
</script>

<style lang="scss" scoped>
.counter{
  font-size: 14px;
}
</style>
