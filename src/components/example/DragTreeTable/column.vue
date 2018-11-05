<template>
  <div class="tree-column" :style="{ width: width + 'px',flex: width ? 'none' : '1'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'column',
  props: {
    width: Number,
    field: String,
    label: String
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
<style scoped>
.tree-column {
  padding: 0px 4px;
  min-width: 60px;
  text-align: center;
}
</style>
