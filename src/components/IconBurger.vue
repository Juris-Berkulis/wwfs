<script setup lang="ts">
</script>

<template>
<button class="burger">
    <div class="burgerLine"></div>
    <div class="burgerLine"></div>
    <div class="burgerLine"></div>
</button>
</template>

<style scoped lang="scss">
.burger {
    height: 15px;
    width: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #777777;

    &:hover {
        color: #555555;
    }
}

.burgerLine {
    height: 20%;
    width: 100%;
    background-color: currentColor;
    transition: all 0.4s linear 0s;
}
</style>
