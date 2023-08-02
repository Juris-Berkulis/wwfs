<script setup lang="ts">
</script>

<template>
<div class="urn">
    <div class="knob"></div>
    <div class="lid"></div>
    <div class="box">
        <div class="gloss gloss_1"></div>
        <div class="gloss gloss_2"></div>
    </div>
</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.urn {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: currentColor;
    transition: all 0.4s linear 0s;
}

.knob {
    height: 20%;
    width: 60%;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border: 2px solid currentColor;
    border-bottom: none;
}

.lid {
    height: 4px;
    width: 90%;
    background-color: currentColor;
}

.box {
    position: relative;
    height: 80%;
    width: 80%;
    border: 2px solid currentColor;
    border-top: none;
    transform: perspective(50px) rotateX(-45deg);
}

.gloss {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 2px;
    background-color: currentColor;
}

.gloss_1 {
    left: 25%;
}

.gloss_2 {
    right: 25%;
}
</style>
