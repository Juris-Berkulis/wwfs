<script setup lang="ts">
import { ref, type Ref} from 'vue';
import { useWeatherSettingsStore } from '@/store/weatherSettings';

const {
    getWeather,
} = useWeatherSettingsStore();

const cityNameInInput: Ref<string> = ref('');

const submit = (): void => {
    if (cityNameInInput.value.trim()) {
        getWeather(cityNameInInput.value);
        cityNameInInput.value = '';
    }
};
</script>

<template>
<form class="form" @submit.prevent="submit" action="">
    <label class="label" for="cityInput">Добавить город</label>
    <div class="inputWrapper">
        <input v-model="cityNameInInput" class="input" type="text" id="cityInput" placeholder="Город">
        <button class="enterBtn" type="submit">
            <icon-enter-element />
        </button>
    </div>
</form>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.form {
    height: 100%;
}

.label {
    display: block;
    margin-bottom: 0.6em;
    font-size: 0.8em;
    font-weight: 400;
    line-height: 1.15;
}

.inputWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 150px) {
        & {
            flex-direction: column;
        }
    }
}

.input {
    width: 100%;
    padding: 5px;
    font-size: 1em;
    font-weight: 400;
    line-height: 1;
    margin-right: 5px;
}

.enterBtn {
    height: 20px;
    width: 20px;
    min-width: 20px;
    color: #000000;

    @media (max-width: 150px) {
        & {
            width: 100%;
            padding: 0 calc(50% - 10px);
        }
    }
}
</style>
