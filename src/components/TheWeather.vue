<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TheWeatherInfo from './TheWeatherInfo.vue';
import TheWeatherSettings from './TheWeatherSettings.vue';
import { type OWMCurrentWeather } from '@/types';

const weatherData: Ref<OWMCurrentWeather | null> = ref(null);
const cityName: Ref<string> = ref('moscow');
const units: string = 'metric';
const language: string = 'ru';
const isShowSettings: Ref<boolean> = ref(false);

const toggleIsShowSettings = ():void => {
    isShowSettings.value = !isShowSettings.value
};

const getWeather = async (): Promise<void> => {
    try {
        const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${import.meta.env.VITE_API_KEY_FOR_OPENWEATHERMAP}&units=${units}&lang=${language}`);

        if (response.ok) {
            weatherData.value = await response.json();
            console.log(weatherData.value)
        } else {
            throw `Ошибка при запросе ${response.status}: ${response.statusText}.`
        }
    } catch (error) {
        console.error(error)
    }
};

getWeather();
</script>

<template>
<TheWeatherSettings v-if="isShowSettings" :toggleIsShowSettings="toggleIsShowSettings" />
<TheWeatherInfo v-else :weatherData="weatherData" :toggleIsShowSettings="toggleIsShowSettings" />
</template>

<style scoped lang="scss">
</style>
