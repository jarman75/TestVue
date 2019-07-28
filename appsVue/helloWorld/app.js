var app = new Vue ({
    el : '#app',
    data : {
        message : 'Hello World!'
    },
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }    
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'Vue'},
            {text: 'TypeScript'},
            {text: 'CSS3'}
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
      reverseMessage : function () {
          this.message = this.message.split('').reverse().join('')
      }  
    },
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'two-way binding'
    }
})


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        graceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id:2 , text: 'Sugar' }
        ]
    }
})

var app8 = new Vue({
    el: '#app8',
    data: {
        attValue: 'https://www.google.es',
        attName : 'href',
        urlName: 'google'
    },
    methods: {
        doSomething: function() {    
            urlName = 'other google'
        }    
    }
})

var example = new Vue({
    el: '#example',
    data: {
        message: 'Hola que tal?'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        now: function() {
            return Date.now()
        }
    },   
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'No puedo darte una respuesta hasta que me preguntes!'
    },
    watch: {
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Esperando a que pares de escribir...'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Las preguntas usualmente contienen un signo de interrogacion. ;-)'
                return
            }
            this.answer = 'Pensando...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error){
                    vm.answer = 'Error! no puedo acceder a la API. ' + error       
                })
        }
    }
})


  