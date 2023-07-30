import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useWeatherInfoStore = defineStore('weatherInfo', () => {
    const openedCityIndex: Ref<number> = ref(JSON.parse(localStorage.getItem('openedCityIndex') || '0') || 0);

    const saveOpenedCityIndexIntoLocalStorage = (newOpenedCityIndex?: number): void => {
        if (newOpenedCityIndex !== undefined) openedCityIndex.value = newOpenedCityIndex;
        localStorage.setItem('openedCityIndex', JSON.stringify(openedCityIndex.value));
    };

    const resetOpenedCityIndex = (): void => {
        openedCityIndex.value = 0;

        saveOpenedCityIndexIntoLocalStorage();
    };

    return {
        openedCityIndex,
        saveOpenedCityIndexIntoLocalStorage,
        resetOpenedCityIndex,
    }
});
