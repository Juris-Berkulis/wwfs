<script setup lang="ts">
</script>

<template>
<div class="settings">
    <div class="settingsCircle settingsCircle_1"></div>
    <div class="settingsLever settingsLever_1"></div>
    <div class="settingsLever settingsLever_2"></div>
    <div class="settingsLever settingsLever_3"></div>
    <div class="settingsCircle settingsCircle_2"></div>
    <div class="settingsCircle settingsCircle_3"></div>
</div>
</template>

<style scoped lang="scss">
.settings {
    position: relative;
    height: 20px;
    width: 20px;
    cursor: pointer;
    transform: rotateZ(0deg);
    transition: all 0.4s ease-in-out 0s;
}

.settings:hover {
    transform: rotateZ(90deg);
}

.settingsCircle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #ffffff;
}

.settingsCircle_1 {
    height: 80%;
    width: 80%;
    border: 2px solid #000000;
}

.settingsCircle_2 {
    height: calc(80% - 4px);
    width: calc(80% - 4px);
}

.settingsCircle_3 {
    height: 30%;
    width: 30%;
    border: 2px solid #000000;
}

.settingsLever {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 30%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 2px solid #000000;
}

.settingsLever_2 {
    transform: translate(-50%, -50%) rotateZ(60deg);
}

.settingsLever_3 {
    transform: translate(-50%, -50%) rotateZ(-60deg);
}
</style>
