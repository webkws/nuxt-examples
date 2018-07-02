
<template>
  <div class="container">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{ name: 'asyncdata-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child/>
  </div>
</template>

<script>

export default {
  asyncData({app,  req, params }) {
    // We can return a Promise instead of calling the callback
    return app.$axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return { posts: res.data.slice(0, 5) }
      })
  },
  head: {
    title: 'List of posts'
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
