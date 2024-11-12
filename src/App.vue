<template>
  <div class="container">
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

.container {
  width: 100%;
  height: 100vh;
  background: url(./assets/bg-bookshelf.jpg);
  background-size: cover;
  background-position: 0% 30%;
  /* background-size: contain; */
  /* background-repeat: no-repeat; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
