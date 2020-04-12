<template>
  <section role="search" class="mb-8">
    <form action="#" method="get" class="relative d-flex form-search" @submit.prevent="doSearch">
      <button type="submit" title="חפש כלי או תקנה" class="mx-4">
        <v-icon>  mdi-magnify</v-icon>
      </button>
      <label for="s" class="full">
        <input
          v-model="input"
          class="full"
          type="search"
          name="s"
          placeholder="חפש כלי או תקנה"
          maxlength="200"
          @input="debounceInput"
        >
      </label>
    </form>
  </section>
</template>

<script>
// import { debounce } from '~/app/utils/helpers.ts';
export default {
  name: 'ToolsSearch',
  data: () => ({
    input: ''
  }),
  methods: {
    debounceInput() {
      this.doSearch();
      // TODO: implement deboucne on input
    },
    doSearch() {
      console.log(this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-search{
  background: #D3D3D3;
  border: 1px solid #A3A3A3;
  box-sizing: border-box;
  border-radius: 100px;
  height: 40px;
}
</style>
