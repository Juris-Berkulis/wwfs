<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseCityItem from './BaseCityItem.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useRootStore } from '@/store/root';
import type { OWMCurrentWeather } from '@/types';
import { ref, type Ref } from 'vue';

const weatherSettingsStore = useWeatherSettingsStore();

const {
    saveCitiesWeatherListIntoLocalStorage,
} = useWeatherSettingsStore();

const {
    citiesWeatherList, 
} = storeToRefs(weatherSettingsStore);

const {
    getOpenCityId,
    moveOpenedCity,
} = useRootStore();

const movedCityIndex: Ref<number | null> = ref(null);

const onDragStart = (event: DragEvent, cityIndex: number): void => {
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('cityIndex', cityIndex.toString());
    }

    movedCityIndex.value = cityIndex;
};

const onDragEnd = (): void => {
    movedCityIndex.value = null;
};

const onDrop = (event: DragEvent, droppedCityIndex?: number): void => {
    if (event.dataTransfer) {
        const cityOpenedId = getOpenCityId();

        const dragedCityIndex: number = parseInt(event.dataTransfer.getData('cityIndex'));

        const movedCity: OWMCurrentWeather = citiesWeatherList.value.splice(dragedCityIndex, 1)[0];

        if (droppedCityIndex !== undefined) {
            citiesWeatherList.value.splice(droppedCityIndex, 0, movedCity);
        } else {
            citiesWeatherList.value.push(movedCity);
        }

        saveCitiesWeatherListIntoLocalStorage();
        moveOpenedCity(cityOpenedId);
    }
};
</script>

<template>
<ul class="citiesList" @dragenter.prevent="" @dragover.prevent="" @drop="(event: DragEvent) => onDrop(event)">
    <BaseCityItem v-for="cityWeatherObject, index of citiesWeatherList" :key="cityWeatherObject.id" :cityIndex="index" :cityWeatherObject="cityWeatherObject" :onDragStart="onDragStart" :onDrop="onDrop" :onDragEnd="onDragEnd" :movedCityIndex="movedCityIndex" />
</ul>
</template>

<style scoped lang="scss">
.citiesList {
    padding-bottom: 1.25rem;
    flex-grow: 1;
    overflow: auto;
}
</style>
