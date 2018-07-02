<template>
    <div>
        default layouts
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
  layout: "dark",
  asyncData({ req }) {
    return {
      name: req ? "server" : "client"      
    };
  }
};
</script>

<style scoped>
</style>