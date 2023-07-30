import { defineStore } from "pinia";
import { useWeatherSettingsStore } from "./weatherSettings";
import { ref, type Ref } from "vue";

export const useWeatherInfoStore = defineStore('weatherInfo', () => {
    const {
        citiesWeatherList,
    } = useWeatherSettingsStore();

    console.log(citiesWeatherList)

    const openedCityIndex: Ref<number> = ref(JSON.parse(localStorage.getItem('openedCityIndex') || '0') || 0);

    const openNextCity = (): void => {
        if (citiesWeatherList.length < 2) {
            return
        } else {
            if (openedCityIndex.value < citiesWeatherList.length - 1) {
                openedCityIndex.value++;
            } else {
                openedCityIndex.value = 0;
            }
        }
    
        localStorage.setItem('openedCityIndex', JSON.stringify(openedCityIndex.value));
    };

    return {
        openedCityIndex,
        openNextCity,
    }
});
