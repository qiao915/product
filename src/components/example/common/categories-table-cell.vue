<template>
  <div>
    <span v-for="(item, i) in categories" :key="i"> <span v-if="i != 0">></span> <span>{{item.name}}</span></span>
    <span v-if="isLast">;</span>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      categories: []
    }
  },
  created () {
    this.$nextTick(() => {
      this._initCategories(this.data.concat(), this.categories)
    })
  },
  methods: {
    _initCategories(categories, fir) {
      let n = fir.length
      if (categories.length === 0) return
      if (n === 0) {
        let c = categories.findIndex(t => {
          return t.parentId == 0
        })
        fir.push(categories[c])
        categories.splice(c, 1)
      } else {
        let c = categories.findIndex(t => {
          return fir[n - 1].id === t.parentId
        })
        fir.push(categories[c])
        categories.splice(c, 1)
      }
      this._initCategories(categories, fir)
    },
  }
}
</script>
<style scoped>

</style>
