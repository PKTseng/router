<template>
  <div class="row justify-content-center">
    <ul class="nav">
        <li class="nav-item">
            <router-link to='/page/child1'>child1</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/page/child2'>child2</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/page/child3'>child3</router-link>
        </li>
    </ul>
    <a href="#" class="nav-item" @click.prevent='update'>指定頁面</a>
    <a href="#" class="nav-item" @click.prevent='beforePath'>回到前頁</a>
  </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        update() {
            this.$router.push('/page/child2');
        },
        beforePath() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>