<template>
    <div class="post">
        <component :is="component"/>
    </div>
</template>

<script>
//see https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
const getCom = (slug) => ({
  component: import(`~/components/${slug}.vue`),
  error: require("~/components/404")
});

export default {
  // https://nuxtjs.org/api/configuration-generate
  beforeCreate() {
    this.component = () => getCom(this.$route.params.slug);    
  }
};
</script>