<template>
  <div class="container">
    <pre>{{ post.body }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({app, params }) {
    // We can use async/await ES6 feature
    let { data } = await app.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return { post: data };
  },
  head() {
    return {
      title: this.post.title
    };
  }
};
</script>