<script setup lang="ts">
import { useWeatherSettingsStore } from '@/store/weatherSettings';

interface Props {
    toggleIsShowSettings: (isShow?: boolean) => void,
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
        <button v-if="citiesWeatherList.length" class="crossBtn" @click="() => toggleIsShowSettings()">
            <icon-cross-element />
        </button>
    </div>
    <base-cities-list-element />
    <base-form-element />
</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.settingsWrapper {
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
}

.headerText {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 1.5em);
    font-size: 1em;
    line-height: 1.4em;;
    font-weight: 700;
}

.crossBtn {
    height: 1.25em;
    width: 1.25em;
    color: #000000;
}

base-cities-list-element {
    flex-grow: 1;
    overflow: auto;
}

base-form-element {
    margin-top: auto;
    padding-top: 1.25em;
}
</style>
