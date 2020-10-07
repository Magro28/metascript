<template>
  <div id="app">
    <row container gutter="12">
        <column xs="1" md="1" lg="1">
          small
        </column>
        <column xs="10" md="10" lg="10">
            <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/art">Art</router-link> |
              <router-link to="/about">About</router-link>
            </div>
        </column>
        <column xs="1" md="1" lg="1">
          small
        </column>
      
    </row>
     <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
