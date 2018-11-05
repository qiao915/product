<template>
  <div class="recovery paddLR26">
    <div class="boxTit size14">
      <label class="infoTit">垃圾箱</label>
    </div>
    <productRecovery></productRecovery>
  </div>
</template>
<script type="es6">
  import productRecovery from './product-recovery'
  export default {
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
      productRecovery
    },
  }
</script>

<style scoped>
  .infoTit {
    border-left: 2px solid #2db6fc;
    padding-left: 14px;
    margin: 12px 0;
    display: block;
  }

  .recovery-nav {
    display: block;
    text-align: center;
  }

  .types {
    display: flex;
  }

  .type-item {
    padding: 12px;
  }

  .active {
    border-bottom: 2px solid #519afe;
  }
</style>
