<template>
    <div>
        <li class="list-group-item">
            <span>{{ tituloConcatenado }} | {{ ano }}</span>
            <br>
            <input :value="$attrs.avaliacao">
            <button class="btn btn-success" style="float: right">Editar</button>
        </li>
    </div>
</template>


<script>
export default {
    // props: ['titulo'] -- não tipado

    props: {
        // Atributos non-prop são adicionados por padrão ao elemento root do component
        inheritAttrs: false,

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
        console.log('Attrs: ', this.$attrs);
    },
};
</script>