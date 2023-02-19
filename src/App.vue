<template>
  <div>
    <div>Outer</div>
    <InnerComponent />
  </div>
</template>
<script>
import InnerComponent from './components/InnerComponent.vue';
export default {
  name: "App",
  components: {
    InnerComponent
  }
}
</script>

