<script setup lang="ts">
import type { OWMCurrentWeather } from '@/types';
import IconSettings from './IconSettings.vue';

interface Props {
    weatherData: OWMCurrentWeather | null,
};

defineProps<Props>();

const getWindDirection = (degry: number | undefined): string => {
    if (degry === undefined) return 'н/д'

    if (degry >= 348.75 || degry < 11.25) return 'С'
    else if (degry < 33.75) return 'ССВ'
    else if (degry < 56.25) return 'СВ'
    else if (degry < 78.75) return 'СВВ'
    else if (degry < 101.25) return 'В'
    else if (degry < 123.75) return 'ЮВВ'
    else if (degry < 146.25) return 'ЮВ'
    else if (degry < 168.75) return 'ЮЮВ'
    else if (degry < 191.25) return 'Ю'
    else if (degry < 213.75) return 'ЮЮЗ'
    else if (degry < 236.25) return 'ЮЗ'
    else if (degry < 258.25) return 'ЮЗЗ'
    else if (degry < 281.25) return 'З'
    else if (degry < 303.75) return 'СЗЗ'
    else if (degry < 326.25) return 'СЗ'
    else if (degry < 348.75) return 'ССЗ'
    else return '???'
};

const getVisibility = (visibility: number): string => {
    if (visibility >= 1000) return `${(visibility / 1000).toFixed(1)}км`
    return `${visibility}м`
}
</script>

<template>
<div class="header">
    <p class="cityName">{{ weatherData?.name }}, {{ weatherData?.sys?.country }}</p>
    <IconSettings />
</div>
<div class="main">
    <img class="weatherImg" :src="`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`" :alt="weatherData?.weather[0].description">
    <p class="weatherTemp">{{ weatherData?.main?.temp?.toFixed(0) || 'н/д' }}&#176;C</p>
</div>
<div class="description">
    <span>Ощущается: {{ (weatherData?.main?.feels_like || weatherData?.main?.temp)?.toFixed(0) || 'н/д' }}&#176;C.</span>
    <span>{{ weatherData?.weather[0]?.description }}.</span>
</div>
<div class="additionally">
    <p v-if="weatherData?.wind?.speed">
        <span v-if="weatherData?.wind?.deg" class="arrowIcon" :style="{transform: `rotateZ(${weatherData?.wind?.deg}deg)`}">!</span>
        <span>{{ weatherData?.wind?.speed.toFixed(1) }}м/с {{ getWindDirection(weatherData?.wind?.deg) }}</span>
    </p>
    <p v-if="weatherData?.main?.pressure">
        <span class="preassureIcon">
            <span></span>
        </span>
        <span>{{ weatherData?.main?.pressure }}гПа</span>
    </p>
    <p v-if="weatherData?.main?.humidity">Влажность: {{ weatherData?.main?.humidity }}%</p>
    <p v-if="weatherData?.clouds?.all">Облака: {{ weatherData?.clouds?.all }}%</p>
    <p v-if="weatherData?.visibility">Видимость: {{ getVisibility(weatherData?.visibility) }}</p>
</div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.cityName {
    font-size: 1rem;
    font-weight: 700;
}

.main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
}

.weatherImg {
    height: 50px;
    width: 50px;
}

.weatherTemp {
    font-size: 2rem;
    font-weight: 700;
}

.description {
    margin-bottom: 20px;
    font-size: 0.7rem;
}

.description span {
    margin-right: 5px;
}

.description span:last-child {
    margin-right: 0;
    text-transform: capitalize;
}

.additionally {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 0.7rem;
}

.additionally p {
    display: flex;
    align-items: center;
    width: calc(50% - 5px);
    text-align: center;
}

.additionally p:last-child {
    width: 100%;
}

.arrowIcon {
    display: inline-block;
    margin-right: 5px;
}

.preassureIcon {
    margin-right: 5px;
    height: 10px;
    width: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #000000;
}

.preassureIcon span {
    display: block;
    height: 60%;
    width: 10%;
    background-color: #000000;
    transform: rotateZ(45deg);
}
</style>
