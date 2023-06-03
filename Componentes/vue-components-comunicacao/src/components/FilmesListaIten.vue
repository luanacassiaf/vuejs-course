<template>
    <li class="list-group-item">
        <span>{{ tituloConcatenado }} | {{ ano }}</span>
        <button class="btn btn-success" style="float: right">Editar</button>
    </li>
</template>


<script>
export default {
    // props: ['titulo'] -- não tipado
    props: {
        titulo: {
            type: String,
            required: true,
            // default: 'Untitled',
            // validator(str) {
            //     return str.includes('Pikachu')
            // }
        },
        ano: {
            type: Number,
            required: true,
        },
    },
    computed: {
        tituloConcatenado() {
            return `Título: ${this.titulo}`;
        },
    },
    created() {
        console.log(typeof this.titulo);
    },
};
</script>