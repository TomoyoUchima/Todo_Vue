
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
  }
})


})();