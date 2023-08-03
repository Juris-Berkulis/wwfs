<script setup lang="ts">
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useWeatherInfoStore } from '@/store/weatherInfo';
import { storeToRefs } from 'pinia';

const weatherSettingsStore = useWeatherSettingsStore();

const {
    toggleIsShowSettings, 
    getCoordsByUserLocation,
    getWeather, 
} = weatherSettingsStore;

const {
    isShowSettings, 
    citiesWeatherList, 
    loading, 
} = storeToRefs(weatherSettingsStore);

const {
    openedCityIndex,
} = useWeatherInfoStore();

if (citiesWeatherList.value.length) {
    getWeather(citiesWeatherList.value[openedCityIndex].name);
} else {
    getCoordsByUserLocation();
}
</script>

<template>
<div v-if="loading === null" class="informer">
    <the-weather-settings v-if="isShowSettings" :toggleIsShowSettings.prop="toggleIsShowSettings" />
    <the-weather-info v-else :toggleIsShowSettings.prop="toggleIsShowSettings" />
</div>
<base-loader-element v-else />
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.informer {
    height: 100%;
    overflow: auto;
}
</style>
