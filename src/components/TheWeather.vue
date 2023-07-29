<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TheWeatherInfo from './TheWeatherInfo.vue';
import TheWeatherSettings from './TheWeatherSettings.vue';
import BaseLoader from './BaseLoader.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { storeToRefs } from 'pinia';

const weatherSettingsStore = useWeatherSettingsStore();

const {
    getCoordsByUserLocation,
    getWeather, 
} = useWeatherSettingsStore();

const {
    citiesWeatherList, 
    loading, 
} = storeToRefs(weatherSettingsStore);

const isShowSettings: Ref<boolean> = ref(JSON.parse(localStorage.getItem('isShowSettings') || 'false'));

const toggleIsShowSettings = ():void => {
    isShowSettings.value = !isShowSettings.value

    localStorage.setItem('isShowSettings', JSON.stringify(isShowSettings.value));
};

if (citiesWeatherList.value.length && citiesWeatherList.value[0].name) {
    getWeather(citiesWeatherList.value[0].name);
} else {
    getCoordsByUserLocation();
}
</script>

<template>
<div v-if="loading === null" class="informer">
    <TheWeatherSettings v-if="isShowSettings" :toggleIsShowSettings="toggleIsShowSettings" />
    <TheWeatherInfo v-else :toggleIsShowSettings="toggleIsShowSettings" />
</div>
<BaseLoader v-else />
</template>

<style scoped lang="scss">
.informer {
    height: 100%;
}
</style>
