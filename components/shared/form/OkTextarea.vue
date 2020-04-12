<template>
  <label class="label ok-textarea">
    <span class="mb-1 ok-textarea__title d-block">
      {{ label }}
    </span>
    <textarea v-model="buffer" :name="name" class="textarea" @input="$emit('input', buffer)" />
  </label>
</template>

<script>
export default {
  name: 'OkTextarea',
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      buffer: this.value
    };
  },
  watch: {
    value() {
      this.buffer = this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.label{
  display:block;
}
.ok-textarea{
  &__title{
    width:100%;
    color: #6F6F6F;
    font-size: 14px;
    line-height: 20px;
  }
  .textarea{
    display:block;
    width: 100%;
    background: #D3D3D3;
    border: 1px solid #A3A3A3;
    box-sizing: border-box;
    border-radius: 4px;
    height: 70px;
    padding: 0 4px;
    overflow: auto;
    resize: none;
    font-size: 12px;
  }

}

</style>

