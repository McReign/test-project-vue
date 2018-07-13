<template>
  <el-card shadow="hover" class="card">
    <p><span class="label">Стоимость:</span> {{money}}</p>
    <p><span class="label">Описание:</span> {{desc}}</p>
  </el-card>
</template>

<script>
export default {
  name: 'Card',
  props: ['money', 'desc']
}
</script>

<style scoped>
  .card {
    margin: 4px;
  }
  .label {
    color: rgba(0,0,0,0.5)
  }
</style>
