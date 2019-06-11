<template>
    <li class="item">
        <input type="checkbox" v-model="checked">
        <slot name='item' v-bind="{checked}">{{ item }}</slot>
    </li>
</template>

<script>
export default {
    props: ['item'],
    data(){
        return {
            checked: false
        }
    }
};
</script>

<style scoped>
.item {
    color: red;
}
</style>
