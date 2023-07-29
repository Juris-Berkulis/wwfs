<script setup lang="ts">
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { storeToRefs } from 'pinia';

const weatherSettingsStore = useWeatherSettingsStore();

const {
    loading,
} = storeToRefs(weatherSettingsStore);
</script>

<template>
<div class="loaderWrapper" :class="{loadingWeather: loading === 'waitWeather', loadingCityName: loading === 'waitCityName'}">
    <div class="loader"></div>
</div>
</template>

<style scoped lang="scss">
.loaderWrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.loadingWeather {
        color: #ff0000;
    }

    &.loadingCityName {
        color: #0000ff;
    }
}

@keyframes loader {
    0% {
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(360deg);
    }
}

.loader {
    height: 100%;
    max-height: 50px;
    width: 100%;
    max-width: 50px;
    border-radius: 50%;
    border: 10px solid currentColor;
    border-bottom: 10px solid transparent;
    animation: loader 2s linear 0s infinite normal;
}
</style>
