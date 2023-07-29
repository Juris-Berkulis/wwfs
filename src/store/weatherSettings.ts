import { defineStore } from "pinia";
import { reactive, ref, type Ref } from "vue";
import { type OWMCurrentWeather } from '@/types';

export const useWeatherSettingsStore = defineStore('weatherSettings', () => {
    const units: string = 'metric';
    const language: string = 'ru';
    const citiesWeatherList: OWMCurrentWeather[] = reactive(JSON.parse(localStorage.getItem('citiesWeatherList') || '[]'));

    const addCityWeatherObjectIntoList = (cityWeatherObject: OWMCurrentWeather): void => {
        citiesWeatherList.push(cityWeatherObject);
        localStorage.setItem('citiesWeatherList', JSON.stringify(citiesWeatherList));
    };

    const findCityWeatherObjectIndexInList = (cityId: number): null | number => {

        let cityIndex: null | number = null;

        for (let i: number = 0; i < citiesWeatherList.length; i++) {
            if (citiesWeatherList[i].id === cityId) {
                cityIndex = i;

                return cityIndex
            }
        }

        return cityIndex
    };

    const deleteCityWeatherObjectFromList = (cityId: number): void => {
        const cityIndex: number | null = findCityWeatherObjectIndexInList(cityId);

        if (cityIndex !== null) {
            citiesWeatherList.splice(cityIndex, 1);
        }

        localStorage.setItem('citiesWeatherList', JSON.stringify(citiesWeatherList));
    };

    const getWeather = async (cityName: string): Promise<void> => {
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
        }
    };

    const getCityNameByCoords = async (coordsLatitude: number, coordsLongitude: number): Promise<void> => {
        const citiesCountLimit = 1;
        
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
    
        const options = { //* - Подробнее на сайте: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition".
            enableHighAccuracy: true, //* - Логическое значение, указывающее, что приложение хотело бы получить наилучшие возможные результаты.
            timeout: Infinity, //* -  Максимальное время (в миллисекундах), которое может потребоваться устройству для возврата позиции.
            maximumAge: 60 * 1000, //* - Максимальный возраст в миллисекундах возможной кэшированной позиции.
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
    }
});
