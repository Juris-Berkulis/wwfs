<script setup lang="ts">
</script>

<template>
<button class="enter" type="submit">
    <div class="arrowStart">
        <div class="arrowEnd"></div>
    </div>
</button>
</template>

<style scoped lang="scss">
.enter {
    position: relative;
    height: 20px;
    width: 20px;
    min-width: 20px;
}

.arrowStart {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 10px;
    width: 15px;
    border-top: none;
    color: #000000;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    border-left: none;
    border-bottom-right-radius: 5px;
    transition: all 0.4s ease-in-out 0s;
}

.enter:hover .arrowStart {
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
