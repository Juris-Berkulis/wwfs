<script setup lang="ts">
import IconCross from './IconCross.vue';
import BaseCitiesList from './BaseCitiesList.vue';
import BaseForm from './BaseForm.vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';

interface Props {
    toggleIsShowSettings: () => void,
};

defineProps<Props>();

const {
    citiesWeatherList,
} = useWeatherSettingsStore();
</script>

<template>
<div class="settingsWrapper">
    <div class="header">
        <p class="headerText">Настройки</p>
        <button v-if="citiesWeatherList.length" class="crossBtn" @click="toggleIsShowSettings">
            <IconCross />
        </button>
    </div>
    <BaseCitiesList />
    <BaseForm />
</div>
</template>

<style scoped lang="scss">
.settingsWrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    position: relative;
    min-height: 1.4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.25rem;
    overflow: hidden;
}

.headerText {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 1.5rem);
    font-size: 1rem;
    line-height: 1.4rem;;
    font-weight: 700;
}

.crossBtn {
    height: 1.25rem;
    width: 1.25rem;
    color: #000000;
}
</style>
