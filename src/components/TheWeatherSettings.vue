<script setup lang="ts">
interface Props {
    toggleIsShowSettings: () => void,
};

defineProps<Props>();
</script>

<template>
<div>
    <p>Настройки</p>
    <button>
        <div></div>
        <div></div>
    </button>
</div>
<ul>
    <li>
        <button>
            <div></div>
            <div></div>
            <div></div>
        </button>
        <p></p>
        <button>
            <div></div>
            <div></div>
            <div>
                <div></div>
                <div></div>
            </div>
        </button>
    </li>
</ul>
<p>Добавить город</p>
<form action="">
    <input type="text">
    <button type="submit"></button>
</form>
</template>

<style scoped lang="scss">
</style>
