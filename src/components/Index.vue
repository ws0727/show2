<template>
  <div id="app">
    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <br><br>
    <div v-bind:class="{class1:use}">
      v-bind:class 指令
    </div>
    <div>
      <p style = "font-size:25px;">计数器: {{ counter }}</p>
      <button @click = "counter++" style = "font-size:25px;">点我</button>
    </div>
    <div>
      <table border="1">
        <tr>
          <th>序号</th>
          <th>商品名称</th>
          <th>商品价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        <tr v-for="iphone in Ip_Json">
          <td>{{ iphone.id }}</td>
          <td>{{ iphone.name }}</td>
          <td>{{ iphone.price }}</td>
          <td>
            <button v-bind:disabled="iphone.count === 0" v-on:click="iphone.count-=1">-</button>
            {{ iphone.count }}
            <button v-on:click="iphone.count+=1">+</button>
          </td>
          <td>
            <button v-on:click="iphone.count=0">移除</button>
          </td>
        </tr>
        <tr>
          <td>
            总价：${{totalPrice()}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return{
                use: false,
                counter: '1',
                Ip_Json: [{
                    id: 1,
                    name: 'iphone 8',
                    price: 5099,
                    count: 1
                },
                    {
                        id: 2,
                        name: 'iphone xs',
                        price: 8699,
                        count: 1
                    },
                    {
                        id: 3,
                        name: 'iphone xr',
                        price: 6499,
                        count: 1
                    }]
            }

        },
        methods: {

            totalPrice : function(){
                var totalP = 0;
                for (var i = 0,len = this.Ip_Json.length;i<len;i++) {
                    totalP+=this.Ip_Json[i].price*this.Ip_Json[i].count;
                }
                return totalP;
            }
        }
    }
</script>

<style scoped>
  .class1{
    background: #444;
    color: #eee;
  }
</style>
