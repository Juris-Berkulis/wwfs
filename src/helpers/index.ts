import type { OWMCurrentWeather } from "@/types";

export const setFirstLetterOfTheStringToCapital = (str: string): string => {
    const newStr = `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
    
    return newStr
};

interface GetDateAndTime {
    localYear: string, 
    localMonth: string, 
    localDayNumber: string, 
    localHours: string, 
    localMinutes: string, 
    localWeekDayNumber: string, 
};

const addZeroToBeginingOfNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
};

export const getDateAndTime = (cityWeatherObject: OWMCurrentWeather):GetDateAndTime => {
    const timezone = cityWeatherObject.timezone;
    const date = new Date((cityWeatherObject.dt + timezone) * 1000);
    const localYear: number = date.getUTCFullYear();
    const localMonth: number = date.getUTCMonth() + 1;
    const localDayNumber: number = date.getUTCDate();
    const localHours: number = date.getUTCHours();
    const localMinutes: number = date.getUTCMinutes();
    const localWeekDayNumber: number = date.getUTCDay();

    return {
        localYear: `${localYear}`, 
        localMonth: addZeroToBeginingOfNumber(localMonth), 
        localDayNumber: addZeroToBeginingOfNumber(localDayNumber), 
        localHours: addZeroToBeginingOfNumber(localHours), 
        localMinutes: addZeroToBeginingOfNumber(localMinutes), 
        localWeekDayNumber: `${localWeekDayNumber}`, 
    }
};
