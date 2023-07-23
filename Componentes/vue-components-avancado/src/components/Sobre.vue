<template>
    <div>
        <h2>Sobre</h2>
        <input type="text" v-model="autor">
        <p v-if="autor">Autor: {{autor}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            autor: ''
        }
    },
    created() {
        console.log('Created')
    },
    destroyed() {
        console.log('Destroyed')
    },
    activated() {
        console.log('Activated')
    },
    deactivated() {
        console.log('Deactivated')
    }
}
</script>
