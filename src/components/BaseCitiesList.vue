<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseCityItem from './BaseCityItem.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useCitiesDragingStore } from '@/store/citiesDraging';

const {
    onDrop,
} = useCitiesDragingStore();

const {
    citiesWeatherList, 
} = storeToRefs(useWeatherSettingsStore());
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
    />
</ul>
</template>

<style scoped lang="scss">
.citiesList {
    flex-grow: 1;
    overflow: auto;
}
</style>
