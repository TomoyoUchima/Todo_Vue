
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
  //指定したデータの変更を監視してくれます。todos に変更があったときには次の処理をしなさいよ、と書いてあげます。

  // watch: {
  //   todos: function() {
  //     localStorage.setItem('todos', JSON.stringify(this.todos)); //localStorage.setItem(key, value);　//keyとvalueをペアにしてデータを保存。
  //     // LocalStorage にデータを保存したいので、 setItem() としつつ、 todos というキーで todos の値を JSON 形式にしてあげて保存してあげましょう。
  //     alert('Data Saved!');
  //   }
  // },

//   ただし、チェックしたときには Data saved! と出ていないのがわかるかと思います。
// これはなぜかというと、単に todos をこのように watch しただけだと、 todos の配列自体に変更があったときにはこちらの処理は実行してくれるのですが、配列の中身の要素、今回だと title だとか isDone の変更までは監視してくれないという仕組みになっているためです。
// これを直すには、データの中身も含めて監視する必要があって、 deep watcher という仕組みを使わないといけません。

//todos の中身を監視するときに、実際に行う処理は handler で書いてあげて、 deep オプションを true にしてあげれば OK です。
watch: {
  todos: {
    handler: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      // alert('Data saved!');
    },
    deep: true
  }
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