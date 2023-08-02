<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useWeatherInfoStore } from '@/store/weatherInfo';
import { storeToRefs } from 'pinia';

const weatherSettingsStore = useWeatherSettingsStore();

const {
    getCoordsByUserLocation,
    getWeather, 
} = weatherSettingsStore;

const {
    citiesWeatherList, 
    loading, 
} = storeToRefs(weatherSettingsStore);

const {
    openedCityIndex,
} = useWeatherInfoStore();

const isShowSettings: Ref<boolean> = ref(JSON.parse(localStorage.getItem('isShowSettings') || 'false'));

const toggleIsShowSettings = ():void => {
    isShowSettings.value = !isShowSettings.value

    localStorage.setItem('isShowSettings', JSON.stringify(isShowSettings.value));
};

if (citiesWeatherList.value.length) {
    getWeather(citiesWeatherList.value[openedCityIndex].name);
} else {
    getCoordsByUserLocation();
}
</script>

<template>
<div v-if="loading === null" class="informer">
    <the-weather-settings v-if="isShowSettings" :toggleIsShowSettings="toggleIsShowSettings" />
    <the-weather-info v-else :toggleIsShowSettings="toggleIsShowSettings" />
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
