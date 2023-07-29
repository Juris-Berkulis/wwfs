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
    <button class="crossBtn" @click="toggleIsShowSettings">
        <IconCross />
    </button>
</div>
<ul class="citiesList">
    <li class="cityItem">
        <button class="burgerBtn">
            <IconBurger />
        </button>
        <p class="cityName">Город</p>
        <button class="urnBtn">
            <IconUrn />
        </button>
    </li>
</ul>
<form class="form" action="">
    <label class="label" for="cityInput">Добавить город</label>
    <div class="inputWrapper">
        <input class="input" type="text" name="cityInput" placeholder="Город">
        <button class="enterBtn" type="submit">
            <IconEnter />
        </button>
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

.crossBtn {
    height: 20px;
    width: 20px;
    color: #000000;
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

.enterBtn {
    height: 20px;
    width: 20px;
    min-width: 20px;
    color: #000000;
}
</style>
