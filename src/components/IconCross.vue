<script setup lang="ts">
</script>

<template>
<button class="cross">
    <div class="crossLine crossLine_1"></div>
    <div class="crossLine crossLine_2"></div>
</button>
</template>

<style scoped lang="scss">
.cross {
    position: relative;
    height: 20px;
    width: 20px;
}

.crossLine {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 10%;
    background-color: #000000;
    transition: all 0.4s ease-in-out 0s;
}

.crossLine_1 {
    transform: translate(-50%, -50%) rotateZ(45deg);
}

.cross:hover .crossLine_1 {
    transform: translate(-50%, -50%) rotateZ(-45deg);
}

.crossLine_2 {
    transform: translate(-50%, -50%) rotateZ(-45deg);
}

.cross:hover .crossLine_2 {
    transform: translate(-50%, -50%) rotateZ(45deg);
}
</style>
