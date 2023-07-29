<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TheWeatherInfo from './TheWeatherInfo.vue';
import TheWeatherSettings from './TheWeatherSettings.vue';

const isShowSettings: Ref<boolean> = ref(false);

const toggleIsShowSettings = ():void => {
    isShowSettings.value = !isShowSettings.value
};
</script>

<template>
<TheWeatherSettings v-if="isShowSettings" :toggleIsShowSettings="toggleIsShowSettings" />
<TheWeatherInfo v-else :toggleIsShowSettings="toggleIsShowSettings" />
</template>

<style scoped lang="scss">
</style>
