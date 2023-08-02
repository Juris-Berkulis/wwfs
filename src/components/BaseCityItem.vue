<script setup lang="ts">
import { type Ref, ref } from 'vue';
import type { OWMCurrentWeather } from '@/types';
import { useCitiesDragingStore } from '@/store/citiesDraging';
import { useRootStore } from '@/store/root';

interface Props {
    cityIndex: number,
    cityWeatherObject: OWMCurrentWeather,
};

defineProps<Props>();

const {
    onDragStart,
    onDrop,
} = useCitiesDragingStore();

const {
    deleteCityWeatherObjectFromList, 
} = useRootStore();

const isDraggable: Ref<boolean> = ref(false);

const toggleIsDraggable = (newValue: boolean): void => {
    isDraggable.value = newValue;
};
</script>

<template>
<li 
    class="cityItem" 
    :class="{move: isDraggable}" 
    :draggable="isDraggable" 
    @dragstart="(event: DragEvent) => onDragStart(event, cityIndex)" 
    @dragend="toggleIsDraggable(false)"
    @drop.stop="(event: DragEvent) => onDrop(event, cityIndex)"
>
    <button class="burgerBtn" @mousedown="toggleIsDraggable(true)" @dragend="toggleIsDraggable(false)">
        <icon-burger-element />
    </button>
    <p class="cityName">{{ cityWeatherObject.name }}, {{ cityWeatherObject.sys?.country }}</p>
    <button class="urnBtn" @click="deleteCityWeatherObjectFromList(cityWeatherObject.id)">
        <icon-urn-element />
    </button>
</li>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.cityItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 0;

    @media (max-width: 150px) {
        & {
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 0.5em;
        }
    }

    &.move {
        opacity: 0.5;
    }
}

.burgerBtn {
    height: 15px;
    width: 15px;
    color: #777777;

    @media (max-width: 200px) {
        & {
            height: 0.8em;
            width: 0.8em;
        }
    }

    @media (max-width: 150px) {
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
    font-size: 0.8em;
    font-weight: 400;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 150px) {
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
            height: 0.8em;
            width: 0.8em;
        }
    }

    @media (max-width: 150px) {
        & {
            order: 2;
        }
    }
}

.urnBtn:hover {
    color: #555555;
}
</style>
