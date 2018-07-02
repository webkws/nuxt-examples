<template>
    <div class="container">
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="'/customroutes/'+user.id">{{ user.name }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    const { data } = await app.$axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return { users: data };
  }
};
</script>
