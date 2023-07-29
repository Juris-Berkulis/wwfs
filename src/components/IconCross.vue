<script setup lang="ts">
</script>

<template>
<div class="cross">
    <div class="crossLine crossLine_1"></div>
    <div class="crossLine crossLine_2"></div>
</div>
</template>

<style scoped lang="scss">
.cross {
    position: relative;
    height: 100%;
    width: 100%;
}

.crossLine {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 10%;
    background-color: currentColor;
    transition: all 0.4s ease-in-out 0s;
}

.crossLine_1 {
    transform: translate(-50%, -50%) rotateZ(45deg);
}

button:hover .crossLine_1 {
    transform: translate(-50%, -50%) rotateZ(-45deg);
}

.crossLine_2 {
    transform: translate(-50%, -50%) rotateZ(-45deg);
}

button:hover .crossLine_2 {
    transform: translate(-50%, -50%) rotateZ(45deg);
}
</style>
