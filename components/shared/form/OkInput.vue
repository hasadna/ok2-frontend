<template>
  <label class="label ok-input">
    <span class="mb-1 ok-input__title d-block">
      {{ label }}
    </span>
    <input
      :type="type"
      :name="name"
      class="input"
      :placeholder="placeholder"
      :value="$attrs.value"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'OkInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true
    },
  }
};
</script>

<style lang="scss" scoped>
.label{
  display:block;
}
.ok-input{
  &__title{
    width:100%;
    color: #6F6F6F;
    font-size: 14px;
    line-height: 20px;
  }
  .input{
    display:block;
    width: 100%;
    background: #D3D3D3;
    border: 1px solid #A3A3A3;
    box-sizing: border-box;
    border-radius: 4px;
    height: 40px;
    padding: 0 4px;
    font-size: 14px;
    &::placeholder{
      color:#6F6F6F;
      font-style: italic;
    }
  }
}

</style>

