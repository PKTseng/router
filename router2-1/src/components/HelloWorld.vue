<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <a class="taga" href="#" @click.prevent='signout'>signout</a>
  </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{
    signout() {
      const api = `${process.env.APIPATH}/logout`;
      const vm = this;
      this.$http.post(api).then((response) => {
      console.log(response.data)
      if(response.data.success){
          vm.$router.push('/')
          }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.taga{
  color: red;
  background-color: #42b983;
  font-size: 50px;
}
</style>
