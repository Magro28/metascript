<template>
  <div id="app">
    <row id="headrow" container gutter="12">
        <column xs="1" md="1" lg="1">
          
        </column>
        <column xs="8" md="8" lg="8">
            <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/art">Art</router-link> |
              <router-link to="/about">About</router-link>
            </div>
        </column>
        <column xs="3" md="3" lg="3">
          <div id="rightcol">
            <img alt="Me logo" src="./assets/me2roundsmall.png" height="60px" width="60px">
          </div>
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

#headrow {
  background-color: #2c3e50
}

#rightcol {
  padding: 15px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #dddddd;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
