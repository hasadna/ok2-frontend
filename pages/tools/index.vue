<template>
  <div>
    <h3>todo: re navigte to one of the pages</h3>
  </div>
</template>
<script>

export default {
  beforeCreate() {
    const { children } = this.$router.options.routes.find(route => route.path === '/tools');
    if (!children) {
      return;
    }

    const child = children.filter(child => !!child.path)[0].path;
    this.$router.push({
      path: `tools/${child}`
    });
  }

};
</script>
