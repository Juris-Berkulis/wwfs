<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseCityItem from './BaseCityItem.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useCitiesDragingStore } from '@/store/citiesDraging';

const {
    movedCityIndex,
    onDragStart,
    onDragEnd,
    onDrop,
} = useCitiesDragingStore();

const weatherSettingsStore = useWeatherSettingsStore();

const {
    citiesWeatherList, 
} = storeToRefs(weatherSettingsStore);
</script>

<template>
<ul 
    class="citiesList" 
    @dragenter.prevent=""
    @dragover.prevent="" 
    @drop="(event: DragEvent) => onDrop(event)"
>
    <BaseCityItem 
        v-for="cityWeatherObject, index of citiesWeatherList" 
        :key="cityWeatherObject.id" 
        :cityIndex="index" 
        :cityWeatherObject="cityWeatherObject" 
        :onDragStart="onDragStart" 
        :onDrop="onDrop" 
        :onDragEnd="onDragEnd" 
        :movedCityIndex="movedCityIndex" 
    />
</ul>
</template>

<style scoped lang="scss">
.citiesList {
    padding-bottom: 1.25rem;
    flex-grow: 1;
    overflow: auto;
}
</style>
