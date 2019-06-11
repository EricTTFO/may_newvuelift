<template>
    <div id="Home">
      {{ msg }}
      <div class>
        <input type="text" v-model="info">
        <button v-on:click="handleClick">添加</button>
      </div>
      <ul>
        <!-- <li v-for="(item,index) in list" :key="index" :item="item">{{item}}</li> -->
        <todo-item v-for="(item,index) in list" :key="index">
          <template v-slot:item='itemProps'>
            <span :style="{fontSize: '20px',color: itemProps.checked ? 'red' : 'blue'}">{{ item }}</span>
          </template>
        </todo-item>
      </ul>
      <ReValue/>
      <Index/>
      <watch/>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TodoItem from "@/components/TodoItem.vue";
import ReValue from "@/components/ReValue.vue";
import Index from "@/components/Index.vue";
import watch from "@/components/watch.vue";

export default {
  name: "home",
  data() {
    return {
      msg: "hello",
      info: "",
      list: []
    };
  },
  methods: {
    handleClick() {
      this.list.push(this.info);
      this.info = "";
    }
  },
  components: {
    // HelloWorld
    TodoItem,
    ReValue,
    Index,
    watch
  }
};
</script>
