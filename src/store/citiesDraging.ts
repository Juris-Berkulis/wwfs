import { defineStore, storeToRefs } from 'pinia';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useRootStore } from '@/store/root';
import type { OWMCurrentWeather } from '@/types';

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
    
    const onDragStart = (event: DragEvent, cityIndex: number): void => {
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('cityIndex', cityIndex.toString());
        }
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
        onDragStart,
        onDrop,
    }
});
