import { defineStore, storeToRefs } from 'pinia';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useRootStore } from '@/store/root';
import type { OWMCurrentWeather } from '@/types';
import { ref, type Ref } from 'vue';

export const useCitiesDragingStore = defineStore('citiesDraging', () => {
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

    return {
        movedCityIndex,
        onDragStart,
        onDragEnd,
        onDrop,
    }
});
