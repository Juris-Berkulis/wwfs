<script setup lang="ts">
</script>

<template>
<div class="burger">
    <div class="burgerLine"></div>
    <div class="burgerLine"></div>
    <div class="burgerLine"></div>
</div>
</template>

<style scoped lang="scss">
.burger {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: currentColor;
    transition: all 0.4s linear 0s;
}

.burgerLine {
    height: 20%;
    width: 100%;
    background-color: currentColor;
    transition: all 0.4s linear 0s;
}
</style>
