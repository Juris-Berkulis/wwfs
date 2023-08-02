<script setup lang="ts">
</script>

<template>
<div class="wrapper">
  <the-weather />
</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.wrapper {
  height: 100%;
  max-height: 300px;
  width: 100%;
  max-width: 200px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  background-color: #87cefa;

  @media (max-width: 100px) {
    & {
      padding: 15px 5px;
    }
  }
}

the-weather {
  height: 100%;
  overflow: auto;
}
</style>
