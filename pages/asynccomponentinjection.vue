<template>
    <div>
      <ul>
        <li v-for="(post, index) in posts" :key="index">            
            <h2><nuxt-link :to="post.link">{{ post.title }}</nuxt-link></h2>
        </li>        
      </ul>
      <nuxt-child/>
    </div>
</template>

<script>
export default {
  name: "asynccomponentinjection",
  data: () => ({
    posts: [
      {
        title: "Deep dive into the Ocean",
        link: "/asynccomponentinjection/deep-dive-into-ocean"
      },
      {
        title: "Welcome to my blog",
        link: "/asynccomponentinjection/welcome-to-my-blog"
      }
    ]
  })
};
</script>
