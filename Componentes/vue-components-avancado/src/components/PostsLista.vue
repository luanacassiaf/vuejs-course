<template>
  <div>
    <h2>Lista de posts</h2>

    <posts-lista-item v-for="post in posts" :key="post.id" :post="post">
      <slot :myPost="post"></slot>
    </posts-lista-item>
  </div>
</template>

<script>
import PostsListaItem from "./PostsListaItem.vue";

export default {
  components: {
    PostsListaItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>