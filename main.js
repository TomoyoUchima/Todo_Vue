
(function() {
'use strict';

//two way data binding (to UI)

var vm = new Vue({
  el: "#app",
  data: {
    newItem: '',
    todos: [{
      title: 'task1',
      isDone: false
    }, {
      title: 'task2',
      isDone: false
    }, {
      title: 'task3',
      isDone: true
    }]
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
      // this.todos = this.todos.filter(function(todo) {
      //   return !todo.isDone;
      // });
      this.todos = this.remaining;
    }
  },
//computed → データから動的にプロパティを計算してくれる、算出プロパティ。
  computed: {
    remaining: function() { 
      // var items = this.todos.filter(function(todo) {
      //   return !todo.isDone; //まだ終わっていないタスクがitemsに入る。
      // });
      // return items.length;
      return this.todos.filter(function(todo) {
        return !todo.isDone; 
      });
    }
  }
})

})();