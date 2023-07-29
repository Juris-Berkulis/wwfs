<script setup lang="ts">
import BaseCityItem from './BaseCityItem.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';

const {
    citiesWeatherList, 
} = useWeatherSettingsStore();
</script>

<template>
<ul class="citiesList">
    <BaseCityItem v-for="cityWeatherObject of citiesWeatherList" :key="cityWeatherObject.id" :cityWeatherObject="cityWeatherObject" />
</ul>
</template>

<style scoped lang="scss">
.citiesList {
    margin-bottom: 40px;
}
</style>
