<script setup lang="ts">
import { storeToRefs } from 'pinia';
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
    <base-city-item-element 
        v-for="cityWeatherObject, index of citiesWeatherList" 
        :key="cityWeatherObject.id" 
        :cityIndex="index" 
        :cityWeatherObject="cityWeatherObject" 
    />
</ul>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.citiesList {
    height: 100%;
}
</style>
