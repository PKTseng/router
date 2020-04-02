<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to='/index'>Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to='/page'>page </router-link>
            </li>
          </ul>
        </div>
      </nav>
    <img src="./assets/logo.png"> -->

<router-view name='menu'></router-view>
<div class="contaoner">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  created() {
    // const api = 'https://vue-course-api.hexschool.io/api/pkt/products'
    const api = `${process.env.APIPATH}/api/${process.env.COSTOMPATH}/products`;
    console.log(process.env.APIPATH, process.env.COSTOMPATH);
    this.$http.get(api).then((response) => {
     console.log(response.data)
    })
  }
}
</script>

<style lang='scss'>
@import './assets/all.scss';
</style>
