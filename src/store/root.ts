import { defineStore, storeToRefs } from "pinia";
import { useWeatherSettingsStore } from "./weatherSettings";
import { useWeatherInfoStore } from "./weatherInfo";
import type { OWMCurrentWeather } from "@/types";

export const useRootStore = defineStore('root', () => {
    const {
        citiesWeatherList,
        saveCitiesWeatherListIntoLocalStorage,
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

        if (cityIndex !== null) {
            citiesWeatherList.splice(cityIndex, 1);
            saveCitiesWeatherListIntoLocalStorage();

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

    const getOpenCityId = (): number => {
        return citiesWeatherList[openedCityIndex.value].id
    };

    const moveOpenedCity = (cityOpenedId: number): void => {
        const newOpenedCityIndex = citiesWeatherList.findIndex((city: OWMCurrentWeather) => {
            return city.id === cityOpenedId
        });

        saveOpenedCityIndexIntoLocalStorage(newOpenedCityIndex);
    };

    return {
        openPreviousCity,
        openNextCity,
        deleteCityWeatherObjectFromList,
        getOpenCityId,
        moveOpenedCity,
    }
});
