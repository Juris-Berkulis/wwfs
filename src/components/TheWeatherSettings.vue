<script setup lang="ts">
import IconCross from './IconCross.vue';
import BaseCitiesList from './BaseCitiesList.vue';
import BaseForm from './BaseForm.vue';

interface Props {
    toggleIsShowSettings: () => void,
};

defineProps<Props>();
</script>

<template>
<div class="header">
    <p class="headerText">Настройки</p>
    <button class="crossBtn" @click="toggleIsShowSettings">
        <IconCross />
    </button>
</div>
<BaseCitiesList />
<BaseForm />
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.headerText {
    font-size: 1rem;
    font-weight: 700;
}

.crossBtn {
    height: 20px;
    width: 20px;
    color: #000000;
}
</style>
