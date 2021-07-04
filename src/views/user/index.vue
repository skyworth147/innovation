<template>
  <div id = user-center>
    <div class = 'side-list'>
      <h1>个人中心</h1>
      <ul>
        <router-link  :to = 'item.path' v-for = 'item in nav'  tag = 'li'>
           {{ item.title }}
        </router-link>
      </ul>
    </div>
    <router-view class = 'side-info'></router-view>
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

<style scoped lang = 'scss'>
  #user-center{
    overflow: hidden;
    margin-top: 60px;
    width: 100%;
  }
  $list-backgroud: #F2F2F2;

  .side-list{
    float: left;
    margin-left: 6%;
    width: 15.6%;
    min-width: 150px;
    font-size: 2em;
    background-color: $list-backgroud;
    color: #282828;
  }
  .side-list h1{
    font-size: 1.25em;
    margin: 0.67em 15%;
    padding: 0  0 20px 0;
    text-align: center;
    font-weight: normal;
    color: #000;
    border-bottom: 2px solid #333;
  }
  .side-list ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
    li{
      padding: 0 0 2em 0;
      border-left: 3px solid $list-backgroud;
      border-right: 3px solid $list-backgroud;
      a{
        text-decoration: none;
        color: #282828;
      }
    }
  }

  .side-list ul li:hover{
    border-left: 3px solid #192fff
  }
  .side-list ul .router-link-active{
    border-left: 3px solid #192fff
  }

  .side-info{
    /*float: left;*/
    margin-left: 30%;
    /*margin-right: 3em;*/
    width: 60%;
    min-width: 400px;
  }
</style>
