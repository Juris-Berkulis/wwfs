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
  margin: 0;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  background-color: #87cefa;
  font-family: 'Times New Roman Cyr', 'Times New Roman', serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.15;
  word-wrap: break-word;

  @media (max-width: 200px) {
    & {
      font-size: 12px;
    }
  }

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
