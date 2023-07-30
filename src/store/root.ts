import { defineStore, storeToRefs } from "pinia";
import { useWeatherSettingsStore } from "./weatherSettings";
import { useWeatherInfoStore } from "./weatherInfo";

export const useRootStore = defineStore('root', () => {
    const {
        citiesWeatherList,
        findCityWeatherObjectIndexInList,
    } = useWeatherSettingsStore();

    const weatherInfoStore = useWeatherInfoStore();

    const {
        saveOpenedCityIndexIntoLocalStorage,
        resetOpenedCityIndex,
    } = useWeatherInfoStore();

    const {
        openedCityIndex,
    } = storeToRefs(weatherInfoStore);

    const openPreviousCity = (): void => {
        if (openedCityIndex.value > 0) {
            openedCityIndex.value--;
        } else {
            openedCityIndex.value = citiesWeatherList.length - 1;
        }
    
        saveOpenedCityIndexIntoLocalStorage();
    };

    const openNextCity = (): void => {
        if (openedCityIndex.value < citiesWeatherList.length - 1) {
            openedCityIndex.value++;
        } else {
            openedCityIndex.value = 0;
        }
    
        saveOpenedCityIndexIntoLocalStorage();
    };

    const deleteCityWeatherObjectFromList = (cityId: number): void => {
        const cityIndex: number | null = findCityWeatherObjectIndexInList(cityId);

        console.log(`${openedCityIndex.value} и ${cityIndex}`)

        if (cityIndex !== null) {
            citiesWeatherList.splice(cityIndex, 1);
            localStorage.setItem('citiesWeatherList', JSON.stringify(citiesWeatherList));

            if (
                openedCityIndex.value === cityIndex 
                && 
                !citiesWeatherList[openedCityIndex.value]
            ) {
                resetOpenedCityIndex();
            } else if (openedCityIndex.value > cityIndex) {
                openPreviousCity();
            }
        }
    };

    return {
        openPreviousCity,
        openNextCity,
        deleteCityWeatherObjectFromList,
    }
});
