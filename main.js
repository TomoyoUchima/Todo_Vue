
(function() {
'use strict';

//two way data binding (to UI)

var vm = new Vue({
  el: "#app",
  data: {
    newItem: '',
    todos: [],

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
      console.log(this.todos);
      console.log(this.todos[0].isDone);
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
    },
    selectAll: function() {
      for(var i=0; i<this.todos.length; i++) {
        this.todos[i].isDone = true
        console.log(this.todos[i].isDone);
      } //for
    }, //selectAll
    rmvAll: function() {
      for(var i=0; i<this.todos.length; i++) {
            this.todos[i].isDone = false
          }             
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

// var result = this.todos.every(function(val, index, array){
//   return (val.isDone)})

})();