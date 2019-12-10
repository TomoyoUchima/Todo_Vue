// Vue.js の基本ですが、双方向データバインディングができるというのが大きな特徴になります。
// データバインディングというのは data と UI を結び付けるという意味で、双方向というのは data を更新すれば UI が更新されて、 UI を更新すれば data が更新されるという意味になります。

(function() {
'use strict';

//two way data binding (to UI)

var vm = new Vue({
  el: "#app",
  data: {
    newItem: '',
    todos: [
      'task1',
      'task2',
      'task3',
    ]
  },
  methods: {
    // addItem: function(e){
    //   e.preventDefault(); //規定のページが遷移することを無効化する
    //   this.todos.push(this.newItem);
    addItem: function(){
      this.todos.push(this.newItem);
      this.newItem = '';
    },
    deleteItem: function(index) {
      if (confirm("Are you sure?")) {
        this.todos.splice(index, 1);
      }
    }
  }
})


})();