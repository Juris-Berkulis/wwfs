<script setup lang="ts">
import IconSettings from './IconSettings.vue';

</script>

<template>
<div class="header">
    <p class="cityName">Moscow, RU</p>
    <IconSettings />
</div>
<div class="main">
    <img class="weatherImg" src="" alt="">
    <p class="weatherTemp">7*C</p>
</div>
<div class="description">
    <span>Feel like -3*C.</span>
    <span>Broken clouds.</span>
    <span>Light breeze</span>
</div>
<div class="additionally">
    <p>
        <span class="arrowIcon">!</span>
        <span>3.0m/s SSE</span>
    </p>
    <p>
        <span class="preassureIcon">
            <span></span>
        </span>
        <span>1021hPa</span>
    </p>
    <p>Humidity: 97%</p>
    <p>Dew point: 0*C</p>
    <p>Visibility: 10.0km</p>
</div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.cityName {
    font-size: 1rem;
    font-weight: 700;
}

.main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
}

.weatherImg {
    height: 50px;
    width: 50px;
}

.weatherTemp {
    font-size: 2rem;
    font-weight: 700;
}

.description {
    margin-bottom: 20px;
    font-size: 0.7rem;
}

.description span {
    margin-right: 5px;
}

.description span:last-child {
    margin-right: 0;
}

.additionally {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 0.7rem;
}

.additionally p {
    display: flex;
    align-items: center;
    width: calc(50% - 5px);
    text-align: center;
}

.additionally p:last-child {
    width: 100%;
}

.arrowIcon {
    display: inline-block;
    margin-right: 5px;
}

.preassureIcon {
    margin-right: 5px;
    height: 10px;
    width: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #000000;
}

.preassureIcon span {
    display: block;
    height: 60%;
    width: 10%;
    background-color: #000000;
    transform: rotateZ(45deg);
}
</style>
