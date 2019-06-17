import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      toDos: [
        {name: "Buy shopping", highPriority: true},
         {name: "Clean bathroom", highPriority: false},
         {name: "Car's MOT", highPriority: true}
       ],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function () {
        this.toDos.push({
          name: this.newToDo,
          highPriority: false
        })
        this.newToDo = ""
      },
      ChangeHighPriority: function(index) {
        this.toDos[index].highPriority = true
      }
    }
  });
});
