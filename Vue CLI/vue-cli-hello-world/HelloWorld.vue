<!-- Instant Prototyping - executável no Vue CLI 3 pelo comando 'vue serve HelloWorld.vue' -->
<template>
    <div>
        <h1>{{titulo}}</h1>
        <input v-model="titulo">
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            titulo: 'Hello World'
        }
    },
}
</script>
