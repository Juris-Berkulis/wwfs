<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TheWeatherInfo from './TheWeatherInfo.vue';
import { type OWMCurrentWeather } from '@/types';

const weatherData: Ref<OWMCurrentWeather | null> = ref(null);
const cityName: Ref<string> = ref('moscow');
const units: string = 'metric';
const language: string = 'ru';

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
<TheWeatherInfo :weatherData="weatherData" />
</template>

<style scoped lang="scss">
</style>
