<template>
  <section class="tools d-flex height-1-1">
    <aside class="aside-placholder relative ml-8 height-1-1 ">
      <ToolsSideBar />
    </aside>
    <article class="full">
      <ToolsSearch  class="col-1-1"/>
      <nuxt-child />
    </article>
  </section>
</template>

<script>
import ToolsSideBar from '~/components/tools/ToolsSideBar.vue';
import ToolsSearch from '~/components/tools/ToolsSearch.vue';
export default {
  name: 'Tools',

  components: {
    ToolsSideBar,
    ToolsSearch
  },

  data: () => ({
  }),

  methods: {},
};
</script>

<style lang="scss" scoped>
.aside-placholder{
  flex:0 0 290px;
  background-color: #fff;
}
</style>
