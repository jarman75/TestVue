

// Define a new component called button-counter
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

  Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  })

  var app = new Vue({ el: '#components-demo' })

  var app = new Vue({
    el: '#blog-post-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  })