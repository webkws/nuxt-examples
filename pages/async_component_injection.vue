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
  name: "async_component_injection",
  data: () => ({
    posts: [
      {
        title: "Deep dive into the Ocean",
        link: "/async_component_injection/deep-dive-into-ocean"
      },
      {
        title: "Welcome to my blog",
        link: "/async_component_injection/welcome-to-my-blog"
      }
    ]
  })
};
</script>
