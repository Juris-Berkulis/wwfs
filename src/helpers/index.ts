import type { OWMCurrentWeather } from "@/types";

export const setFirstLetterOfTheStringToCapital = (str: string): string => {
    const newStr = `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
    
    return newStr
};

interface GetDateAndTime {
    localYear: number, 
    localMonth: number, 
    localDayNumber: number, 
    localHours: number, 
    localMinutes: number, 
    localWeekDayNumber: number, 
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
        localYear, 
        localMonth, 
        localDayNumber, 
        localHours, 
        localMinutes, 
        localWeekDayNumber, 
    }
};
