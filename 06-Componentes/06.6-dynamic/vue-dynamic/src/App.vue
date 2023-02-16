<template>
  <div id="app">
    <ul>
      <li @click="abaAtiva = 'SobreEmpresa'">Sobre</li>
      <li @click="abaAtiva = 'ServicosEmpresa'">Serviços</li>
      <li @click="abaAtiva = 'ContatoEmpresa'">Contato</li>
    </ul>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from "./components/SobreEmpresa.vue";
import ServicosEmpresa from "./components/ServicosEmpresa.vue";
import ContatoEmpresa from "./components/ContatoEmpresa.vue";

export default {
  name: "app",
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa
  },
  data() {
    return {
      abaAtiva: "SobreEmpresa"
    };
  }
};
</script>

<style>
</style>
