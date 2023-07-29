<script setup lang="ts">
import IconCross from './IconCross.vue';
import IconBurger from './IconBurger.vue';
import IconUrn from './IconUrn.vue';
import IconEnter from './IconEnter.vue';

interface Props {
    toggleIsShowSettings: () => void,
};

defineProps<Props>();
</script>

<template>
<div class="header">
    <p class="headerText">Настройки</p>
    <IconCross @click="toggleIsShowSettings" />
</div>
<ul class="citiesList">
    <li class="cityItem">
        <IconBurger />
        <p class="cityName">Город</p>
        <IconUrn />
    </li>
</ul>
<form class="form" action="">
    <label class="label" for="cityInput">Добавить город</label>
    <div class="inputWrapper">
        <input class="input" type="text" name="cityInput" placeholder="Город">
        <IconEnter />
    </div>
</form>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.headerText {
    font-size: 1rem;
    font-weight: 700;
}

.citiesList {
    margin-bottom: 40px;
}

.cityItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.cityName {
    margin-right: auto;
    margin-left: 10px;
    font-size: 1rem;
}

.label {
    display: block;
    margin-bottom: 10px;
    font-size: 1rem;
}

.inputWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input {
    width: 100%;
    padding: 5px;
    font-size: 1rem;
    margin-right: 5px;
}
</style>
