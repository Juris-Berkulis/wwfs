<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';
import { useWeatherInfoStore } from '@/store/weatherInfo';
import { useRootStore } from '@/store/root';
import type { OWMCurrentWeather } from '@/types';
import { setFirstLetterOfTheStringToCapital, getDateAndTime } from '@/helpers/index';
import { storeToRefs } from 'pinia';

interface Props {
    toggleIsShowSettings: () => void,
};

defineProps<Props>();

const weatherSettingsStore = useWeatherSettingsStore();

const {
    getWeather, 
} = weatherSettingsStore;

const {
    citiesWeatherList,
} = storeToRefs(weatherSettingsStore);

const {
    openedCityIndex,
} = storeToRefs(useWeatherInfoStore());

const {
    openNextCity,
} = useRootStore();

const weatherData: ComputedRef<OWMCurrentWeather> = computed((): OWMCurrentWeather => {
    return citiesWeatherList.value[openedCityIndex.value]
});

const getWindDirection = (degry: number | undefined): string => {
    if (degry === undefined) return 'н/д'

    if (degry >= 348.75 || degry < 11.25) return 'С'
    else if (degry < 33.75) return 'ССВ'
    else if (degry < 56.25) return 'СВ'
    else if (degry < 78.75) return 'СВВ'
    else if (degry < 101.25) return 'В'
    else if (degry < 123.75) return 'ЮВВ'
    else if (degry < 146.25) return 'ЮВ'
    else if (degry < 168.75) return 'ЮЮВ'
    else if (degry < 191.25) return 'Ю'
    else if (degry < 213.75) return 'ЮЮЗ'
    else if (degry < 236.25) return 'ЮЗ'
    else if (degry < 258.25) return 'ЮЗЗ'
    else if (degry < 281.25) return 'З'
    else if (degry < 303.75) return 'СЗЗ'
    else if (degry < 326.25) return 'СЗ'
    else if (degry < 348.75) return 'ССЗ'
    else return '???'
};

const getVisibility = (visibility: number): string => {
    if (visibility >= 1000) return `${(visibility / 1000).toFixed(1)}км`
    return `${visibility}м`
}
</script>

<template>
<div v-if="weatherData" class="infoWrapper">
    <div class="header">
        <p 
            v-if="weatherData?.sys?.country" 
            class="cityName"
        >{{ weatherData?.name }}, {{ weatherData?.sys?.country }}</p>
        <button class="settingsBtn" @click="toggleIsShowSettings">
            <icon-settings-element />
        </button>
    </div>
    <div class="main">
        <img 
            v-if="weatherData?.weather[0]?.icon" 
            class="weatherImg" 
            :src="`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`" 
            :alt="weatherData?.weather[0].description"
        >
        <p class="weatherTemp">{{ weatherData?.main?.temp?.toFixed(0) || 'н/д' }}&#176;C</p>
    </div>
    <div class="description">
        <span 
        >Ощущается: {{ (weatherData?.main?.feels_like !== undefined ? weatherData?.main?.feels_like : weatherData?.main?.temp)?.toFixed(0) }}&#176;C.</span>
        <span 
            v-if="weatherData?.weather[0]?.description"
        >{{ setFirstLetterOfTheStringToCapital(weatherData?.weather[0]?.description) }}.</span>
    </div>
    <div class="additionally">
        <p v-if="weatherData?.wind?.speed !== undefined">
            <span 
                v-if="weatherData?.wind?.deg !== undefined" 
                class="arrowWrapper" 
            >
                <icon-arrow-element :rotateDeg="weatherData?.wind?.deg"/>
            </span>
            <span>{{ weatherData?.wind?.speed.toFixed(1) }}м/с {{ getWindDirection(weatherData?.wind?.deg) }}</span>
        </p>
        <p v-if="weatherData?.main?.pressure !== undefined">
            <span class="preassureIcon">
                <span></span>
            </span>
            <span>{{ weatherData?.main?.pressure }}гПа</span>
        </p>
        <p v-if="weatherData?.main?.humidity !== undefined">Влажность: {{ weatherData?.main?.humidity }}%</p>
        <p v-if="weatherData?.clouds?.all !== undefined">Облака: {{ weatherData?.clouds?.all }}%</p>
        <p v-if="weatherData?.visibility !== undefined">Видимость: {{ getVisibility(weatherData?.visibility) }}</p>
    </div>
    <div class="footer">
        <button 
            class="footerBtn" 
            @click="getWeather(citiesWeatherList[openedCityIndex].name)"
        >{{ getDateAndTime(weatherData).localHours }}:{{ getDateAndTime(weatherData).localMinutes }}</button>
        <button 
            v-if="citiesWeatherList.length > 1" 
            class="footerBtn" 
            @click="openNextCity"
        >Следующий</button>
    </div>
</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.infoWrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    position: relative;
    min-height: 1.4em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.25em;
    overflow: hidden;

    &:not(:has(.cityName)) {
        justify-content: flex-end;
    }
}

.cityName {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 1.5em);
    font-size: 1em;
    line-height: 1.4em;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 200px) {
        & {
            font-size: 0.8em;
        }
    }
}

.settingsBtn {
    height: 1.25em;
    width: 1.25em;
}

.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.25em;
}

.weatherImg {
    height: 50px;
    width: 50px;
}

.weatherTemp {
    font-size: 2em;
    font-weight: 700;

    @media (max-width: 150px) {
    font-size: 1.2em;
    }
}

.description {
    height: 2em;
    margin-bottom: 1.25em;
    font-size: 0.7em;
    font-weight: 400;
    line-height: 1.15;
    overflow: auto;

    & span {
        margin-right: 5px;
    }

    & span:last-child {
        margin-right: 0;
    }
}

.additionally {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6em 10px;
    margin-bottom: 0.6em;
    font-size: 0.7em;
    font-weight: 400;
    line-height: 1.15;
    overflow: auto;

    & p {
        display: flex;
        align-items: center;
        width: calc(50% - 5px);
        min-width: 80px;

        @media (max-width: 200px) {
            & {
                width: 100%;
            }
        }
    }

    & p:last-child {
        width: 100%;
    }
}

.arrowWrapper {
    height: 0.7em;
    width: 0.7em;
    margin-right: 5px;
    color: #555555;
}

.preassureIcon {
    position: relative;
    margin-right: 5px;
    height: 0.7em;
    width: 0.7em;
    border-radius: 50%;
    border: 1px solid #000000;

    & span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(45deg);
        display: block;
        height: 60%;
        width: 10%;
        background-color: #000000;
    }
}

.footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5px;
    margin-top: auto;
}

.footerBtn {
    font-size: 0.8em;
    font-weight: 400;
    line-height: 1;
    color: #555555;
    transition: all 0.4s linear 0s;
}

.footerBtn:hover {
    color: #000000;
}
</style>
