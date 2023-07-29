<script setup lang="ts">
</script>

<template>
<div class="enter">
    <div class="arrowStart">
        <div class="arrowEnd"></div>
    </div>
</div>
</template>

<style scoped lang="scss">
.enter {
    position: relative;
    height: 100%;
    width: 100%;
}

.arrowStart {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 10px;
    width: 15px;
    border-top: none;
    color: currentColor;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    border-left: none;
    border-bottom-right-radius: 5px;
    transition: all 0.2s ease-in-out 0s;
}

button:hover .arrowStart {
    width: 20px;
}

.arrowEnd {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 7px;
    width: 7px;
    border-top: none;
    border-right: none;
    border-bottom: 2px solid currentColor;
    border-left: 2px solid currentColor;
    transform: translateY(1px) rotateZ(45deg);
    transform-origin: bottom left;
}
</style>
