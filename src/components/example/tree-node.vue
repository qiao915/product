<template>
  <div>
    <div class=""
      @click="toggle"
      :tree-id="model.id"
      :tree-p-id="model.parent_id"
    >
      <div>
        <i v-if = "model.children && model.children.length" :class="[open ? 'el-icon-minus': 'el-icon-plus']"></i>
        <span :style="{'margin-left': (depth * 30 + 15) + 'px'}">{{model.id}} -- {{model.text}}</span>
      </div>
    </div>
    <template >
      <tree-node
        v-show="open"
        v-for="(item, index) in model.children"
        :key="index"
        :depth="depth + 1"
        :model="item"
        v-if="isFolder"
      >
      </tree-node>
    </template>
  </div>  
</template>
<script>
export default {
  name: 'tree-node',
  props: ['model', 'depth'],
  data () {
    return {
      open: this.model.open
    }
  },
  computed: {
    isFolder () {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        // this.$set('model', 'open', !this.model.open)
        this.open = !this.open
      }
    }
  }
}
</script>
<style scoped>

</style>
