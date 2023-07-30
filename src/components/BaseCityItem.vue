<script setup lang="ts">
import type { OWMCurrentWeather } from '@/types';
import IconBurger from './IconBurger.vue';
import IconUrn from './IconUrn.vue';
import { useRootStore } from '@/store/root';

interface Props {
    cityWeatherObject: OWMCurrentWeather,
};

defineProps<Props>();

const {
    deleteCityWeatherObjectFromList, 
} = useRootStore();
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
    margin-bottom: 1.25rem;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 200px) {
        & {
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
    }
}

.burgerBtn {
    height: 15px;
    width: 15px;
    color: #777777;

    @media (max-width: 200px) {
        & {
            order: 2;
        }
    }
}

.burgerBtn:hover {
    color: #555555;
}

.cityName {
    margin-right: auto;
    margin-left: 10px;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 200px) {
        & {
            width: 100%;
            margin-left: 0;
            order: 1;
        }
    }
}

.urnBtn {
    height: 20px;
    width: 20px;
    color: #777777;

    @media (max-width: 200px) {
        & {
            order: 2;
        }
    }
}

.urnBtn:hover {
    color: #555555;
}
</style>
