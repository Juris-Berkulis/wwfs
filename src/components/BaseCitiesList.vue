<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseCityItem from './BaseCityItem.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useCitiesDragingStore } from '@/store/citiesDraging';

const {
    onDragStart,
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
    />
</ul>
</template>

<style scoped lang="scss">
.citiesList {
    flex-grow: 1;
    overflow: auto;
}
</style>
