<template>
  <div id="app">   
      <div class="container">
         <router-view />
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: #333333;

  margin: 0 auto;
  max-width: 800px;
}

.btn {
    display: inline-block;
    background: #333333;
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    border: 2px solid #333333;
    cursor: pointer;
    transition: all .1s ease-in;
    outline: none;
}
.btn:hover {
    border: 2px solid #333333;
    color: #2c3e50;
    background-color: white;
    padding: -1px;
}

.container  {
    text-align: center;
}

.bar {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
}

.btn-bar {
    outline: none;
    background-color: inherit;
    border: none;
    cursor: pointer;
}

.btn-bar:hover {
    text-decoration: underline;
}

.router-link {
    color: inherit;
    text-transform: none;
}

</style>
