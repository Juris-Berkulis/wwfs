<script setup lang="ts">
import TheWeather from '@/components/TheWeather.vue';
</script>

<template>
<div class="wrapper">
  <TheWeather />
</div>
</template>

<style scoped lang="scss">
.wrapper {
  max-height: 300px;
  max-width: 200px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  background-color: #87cefa;

  @media (max-width: 100px) {
    & {
      padding: 10px 5px;
    }
  }
}
</style>
