import { defineStore } from "pinia";
import { reactive, ref, type Ref } from "vue";
import { type OWMCurrentWeather } from '@/types';

type Loading = 'waitWeather' | 'waitCityName' | null;

export const useWeatherSettingsStore = defineStore('weatherSettings', () => {
    const units: string = 'metric';
    const language: string = 'ru';
    const citiesWeatherList: OWMCurrentWeather[] = reactive(JSON.parse(localStorage.getItem('citiesWeatherList') || '[]'));
    const loading: Ref<Loading> = ref(null);

    const addCityWeatherObjectIntoList = (cityWeatherObject: OWMCurrentWeather): void => {
        citiesWeatherList.push(cityWeatherObject);
        localStorage.setItem('citiesWeatherList', JSON.stringify(citiesWeatherList));
    };

    const findCityWeatherObjectIndexInList = (cityId: number): null | number => {
        for (let cityIndex: number = 0; cityIndex < citiesWeatherList.length; cityIndex++) {
            if (citiesWeatherList[cityIndex].id === cityId) {
                return cityIndex
            }
        }

        return null
    };

    const deleteCityWeatherObjectFromList = (cityId: number): void => {
        const cityIndex: number | null = findCityWeatherObjectIndexInList(cityId);

        if (cityIndex !== null) {
            citiesWeatherList.splice(cityIndex, 1);
        }

        localStorage.setItem('citiesWeatherList', JSON.stringify(citiesWeatherList));
    };

    const getWeather = async (cityName: string): Promise<void> => {
        loading.value = 'waitWeather';

        try {
            const response: Response = await fetch(`${import.meta.env.VITE_API_OPENWEATHERMAP_URL_FOR_GET_CURRENT_WEATHER_BY_CITY_NAME}?q=${cityName}&appid=${import.meta.env.VITE_API_KEY_FOR_OPENWEATHERMAP}&units=${units}&lang=${language}`);
    
            if (response.ok) {
                const cityWeatherObject: OWMCurrentWeather = await response.json();

                if (citiesWeatherList.length) {
                    const cityIndex: number | null = findCityWeatherObjectIndexInList(cityWeatherObject.id);

                    if (cityIndex !== null) {
                        citiesWeatherList[cityIndex] = cityWeatherObject;
                    } else {
                        addCityWeatherObjectIntoList(cityWeatherObject);
                    }
                } else {
                    addCityWeatherObjectIntoList(cityWeatherObject);
                }
            } else {
                throw `Ошибка при запросе ${response.status}: ${response.statusText}.`
            }
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = null;
        }
    };

    const getCityNameByCoords = async (coordsLatitude: number, coordsLongitude: number): Promise<void> => {
        const citiesCountLimit = 1;

        loading.value = 'waitCityName';
        
        try {
            const resCityName: Response = await fetch(`${import.meta.env.VITE_API_OPENWEATHERMAP_URL_FOR_GET_CITY_NAME_BY_COORDS}?lat=${coordsLatitude}&lon=${coordsLongitude}&limit=${citiesCountLimit}&appid=${import.meta.env.VITE_API_KEY_FOR_OPENWEATHERMAP}`);

            if (resCityName.status === 200) {
                const cityName: string = (await resCityName.json())[0]?.name;

                getWeather(cityName);
            } else {
                throw {message: 'Нет данных!'}
            }
        } catch (error: any) {
            console.error(`${error.message}`);
        } finally {
            loading.value = null;
        }
    };

    const getCoordsByUserLocation = async () => {
        const success = async (position: any) => {
            const coordsLatitude: number  = position.coords.latitude;
            const coordsLongitude: number = position.coords.longitude;
        
            await getCityNameByCoords(coordsLatitude, coordsLongitude);
        };
    
        const error = (error: GeolocationPositionError) => {
            console.error(`Ошибка получения данных о местоположении!\n${error.code}: ${error.message}`);
        };
    
        const options = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 60 * 1000,
        };
    
        if (!navigator.geolocation) {
            console.error('Этот браузер не поддерживает получение данных о местоположении!');
        } else {
            navigator.geolocation.getCurrentPosition(success, error, options); //* - Подробнее на сайте "https://developer.mozilla.org/ru/docs/Web/API/Geolocation_API/Using_the_Geolocation_API".
        }
    };

    return {
        citiesWeatherList, 
        getWeather, 
        getCoordsByUserLocation,
        deleteCityWeatherObjectFromList,
        loading, 
    }
});
