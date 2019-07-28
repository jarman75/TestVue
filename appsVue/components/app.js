//componente global
Vue.component('global-head', {  
  template: '<h3>Global component</h3>'
}) 

var ComponentA = {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
}

var ComponentB = {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text      
      </button>
      <div v-html="post.content"></div>
    </div>
  `
}

var ComponentC = {
  props: {
    name: {
      type: String, 
      required: true
    },
    age: Number,        
    other: {
      validator: function(value) {
        return['success','warning','danger'].indexOf(value) !== -1
      }
    }
  },  
  template: `
    <div class="human-data">      
      <input v-model="name"/>
      <input v-model="age"/>
      <h3>{{ other }}</h3>      
    </div>
  `
}

new Vue({
    el: '#app',
    components: {      
      'blog-post' : ComponentB
    },
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1,            
    }
})

new Vue({
  el: '#app2',
  components: {
    'button-counter' : ComponentA,
    'human-data' : ComponentC
  },
  data: {
    humans: [
      { id: 1, name: 'David', age: 25, other: 'warning' },
      { id: 2, name: 'Carl',  age: 35, other: 'success' },
      { id: 3, name: 'Joe',   age: 18, other: 'danger' },
    ]
  }  
})