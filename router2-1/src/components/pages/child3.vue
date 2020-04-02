<template>
  <div>
    <div class="alert alert-danger" role="alert">
      333333333333333
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    created() {
      console.log(this.$route.params.id);
      const id = this.$route.params.id
      this.$http.get(`https://randomuser.me/api/?seed=${id}`).then((response) => {
      console.log(response.data)
    })
  } 
}
</script>

<style>

</style>