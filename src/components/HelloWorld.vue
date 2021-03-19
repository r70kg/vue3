<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import {reactive,ref} from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props){
    console.log(props);
    let arr = ref([]);
    const getArr = async ()=>{
      arr.value = [1,2];
    }

    return {
      arr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
</style>
