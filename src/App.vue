<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Realty</router-link> |
      <router-link to="/add">Add Realty</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/adduser">Add user</router-link> |
      <router-link to="/rent">Rent</router-link> |
      <router-link to="/addrent">Add Rent</router-link>
    </div>
    <router-view />
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
