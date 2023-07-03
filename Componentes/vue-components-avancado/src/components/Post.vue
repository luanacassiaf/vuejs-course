<template>
  <div class="post">
    <div class="cabecalho">
      <slot name="cabecalho"></slot>
    </div>
    <div class="conteudo">
      <slot name="conteudo"></slot>
    </div>
    <div class="rodape">
      <slot name="rodape"></slot>
    </div>
  </div>
</template>

<style scoped>
  .post {
    margin: 15px auto;
  }

  .cabecalho {
    padding: 5px 12px;
    background-color: #eee;
  }

  .conteudo {
    font-size: 16px;
  }

  .rodape {
    font-style: italic;
  }
</style>