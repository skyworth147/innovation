<template>
  <div>
    <div id = 'side-list'>
      <h1>个人中心</h1>
      <ul>
        <router-link v-for = 'item in nav' v-bind:to = 'item.path' tag = 'li' exact=" true"> {{ item.title }}</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          nav: [
            {
              title: '账号管理',
              path: '/user/management'
            }, {
              title: '个人简历',
              path: '/user/resume'
            }, {
              title: '消息',
              path: '/user/message',
            }, {
              title: '订阅',
              path: '/user/book'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
