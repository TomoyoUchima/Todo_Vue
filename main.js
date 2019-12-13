
(function() {
'use strict';

//two way data binding (to UI)

var vm = new Vue({
  el: "#app",
  data: {
    newItem: '',
    todos: []
  },

  watch: {
  todos: {
    handler: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      // alert('Data saved!');
    },
    deep: true
  }
},

// 保存されたデータをどのタイミングで呼び出すかですが、 Vue.js のインスタンスにはライフサイクルが定義されていて、今回はアプリがページにマウントされるタイミングでデータを読み込んであげましょう。
mounted: function() {
//   //this.todos に対して JSON を parse しつつ、 localStorage から todos のキーでデータを getItem() してあげれば OK ですね。
// JSON の parse が上手くいかなかった場合は、空の配列にしたいので || 演算子を使ってあげて、このように書いてあげてもいいでしょう。
// あとは todos の初期化もいらないので、ただの空配列にしておきます。
  this.todos = JSON.parse(localStorage.getItem('todos')) || []
},

  methods: {
    addItem: function(){
      var item = {
        title: this.newItem,
        isDone: false
      };
      this.todos.push(item);
      this.newItem = '';
    },
    deleteItem: function(index) {
      if (confirm("Are you sure?")) {
        this.todos.splice(index, 1);
      }
    },
    purge: function() {
      if (!confirm('delete fiished?')) {
        return;
      } 
      this.todos = this.remaining;
    }
  },
  computed: {
    remaining: function() { 
      return this.todos.filter(function(todo) {//まだ終わっていないタスクが返る。
        return !todo.isDone; 
      });
    }
  }
})

})();