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
  padding: 0 10px;
  max-width: 1000px;
}

body {
  margin: 0;
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
    align-items: center;
    font-size: 15px;
    background-color: #333333;
    height: 40px;
    color: white;
}

.logo {
    padding: 0 10px;
}

.btn-bar {
    outline: none;
    background-color: inherit;
    border: none;
    cursor: pointer;
    color: white;
    height: 100%;
    padding: 0 10px;
    transition: all .1s linear;
}

.btn-bar:hover {
    background-color: #1a1a1a;
}

.router-link {
    color: inherit;
    text-transform: none;
}

/* =================== media queries ====================*/

@media (max-width: 1024px) {
#app {
  padding: 0;
}
}

@media (max-width: 768px) {
#app {
  max-width: 768px;
}
}

@media (max-width: 480px) {

#app {
  max-width: 480px;
  font-size: 16px;
}

}

</style>
