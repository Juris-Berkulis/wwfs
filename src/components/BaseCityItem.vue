<script setup lang="ts">
import type { OWMCurrentWeather } from '@/types';
import IconBurger from './IconBurger.vue';
import IconUrn from './IconUrn.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';

interface Props {
    cityWeatherObject: OWMCurrentWeather,
};

defineProps<Props>();

const {
    deleteCityWeatherObjectFromList, 
} = useWeatherSettingsStore();
</script>

<template>
<li class="cityItem">
    <button class="burgerBtn">
        <IconBurger />
    </button>
    <p class="cityName">{{ cityWeatherObject.name }}, {{ cityWeatherObject.sys?.country }}</p>
    <button class="urnBtn" @click="deleteCityWeatherObjectFromList(cityWeatherObject.id)">
        <IconUrn />
    </button>
</li>
</template>

<style scoped lang="scss">
.cityItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.burgerBtn {
    height: 15px;
    width: 15px;
    color: #777777;
}

.burgerBtn:hover {
    color: #555555;
}

.cityName {
    margin-right: auto;
    margin-left: 10px;
    font-size: 1rem;
}

.urnBtn {
    height: 20px;
    width: 20px;
    color: #777777;
}

.urnBtn:hover {
    color: #555555;
}
</style>
