<template>
  <div id="app">
    <row container gutter="12">
        <column xs="2" md="2" lg="2">
          
        </column>
        <column xs="8" md="8" lg="8">
            <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/art">Art</router-link> |
              <router-link to="/about">About</router-link>
            </div>
        </column>
        <column xs="2" md="2" lg="2">
           <img alt="Me logo" src="./assets/me2roundsmall.png" height="70px" width="70px">
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
