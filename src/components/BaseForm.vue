<script setup lang="ts">
import IconEnter from './IconEnter.vue';
</script>

<template>
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
