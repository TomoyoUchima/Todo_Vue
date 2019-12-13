
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
    }
  },
//computed → データから動的にプロパティを計算してくれる、算出プロパティ。
  computed: {
    remaining: function() { //remaining という名前にしてあげて、データから自動的に remaining を算出して、プロパティにする。
      var items = this.todos.filter(function(todo) {
        return !todo.isDone;
        // console.log(todo.isDone);
      });
      return items.length;

    }
  }
})


})();