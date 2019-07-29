const courseHeader = {
    props: {
        image: {type: String, required: true},
        title: {type: String, required: true},
    },
    template: `
    <header :class="course-header" v-once>
        <img :src="image" :alt="title">
        <h2>{{ title }}</h2>        
    </header>
    `
}

const courseContent = {
    props: {
        title: {type: String, required: true},
        subtitle: {type: String, required: true},
        description: {type: String, required: true},
    },
    template: `
    <main class="course-content">
        <img src="http://lorempixel.com/300/150/" alt="title">
        <section>
            <h3>{{ title }}</h3>
            <h4>{{ subtitle }}</h4>
            <p> {{ description }}</p>
        </section>
    </main>
    `
}

const courseFooter = {
    props: {
        months: {type: Number, required: true},
    },
    methods: {
        add: function() {
            this.$emit('add', this.months)
        }
    },
    template: `
    <footer class="course-footer">
        <label for="meses">MESES</label>
        <input id="meses" type="number" min="0" max=12 v-model="months" />
        <button @click="add">AÑADIR</button>
    </footer>
    `
}

const course = {
    components: {
        'course-header': courseHeader,
        'course-content': courseContent,
        'course-footer': courseFooter,
    },
    props: {
        title: {type: String, required: true},
        subtitle: {type: String, required: true},
        description: {type: String, required: true},
    },
    data: function() {
        return {
            months: 0,
            styleClass: null,
            header: {
                title: 'Course default',
                image: 'http://lorempixel.com/64/64/'
            }
        }
    },
    methods: {
        add: function(months) {
            this.$emit('add',{
                title: this.title, months: months
            })
        }
    },
    template: `
    <div :class="['course', styleClass]">
        <course-header
            :title="header.title"
            :image="header.image">
        </course-header>
        
        <course-content
            :title="title"
            :subtitle="subtitle"
            :description="description">
        </course-content>
        
        <course-footer
            :months="months"
            @add="add">
        </course-footer>    
    </div>
    `    
}

Vue.component('course-js', {
    mixins: [course],
    data: function() {
        return {            
            styleClass: 'course-js',
            header: {
                title: 'Course JS',
                image: 'http://lorempixel.com/64/64/'
            }
        }
    },
})

Vue.component('course-css', {
    mixins: [course],
    data: function() {
        return {            
            styleClass: 'course-css',
            header: {
                title: 'Course CSS',
                image: 'http://lorempixel.com/64/64/'
            }
        }
    },
})

Vue.component('marketplace', {
    template: `
    <div class="marketplace">
        <slot></slot>
    </div>
    `
})

const app = new Vue({
    el: '#app',        
    data: {
        courses: [
            {id: 1, title: 'Curso Javscript', subtitle: 'Experto', description: 'Especializarse en js', type: 'course-js'},
            {id: 2, title: 'Curso Basico CSS', subtitle: 'Basico', description: 'Iniciarse en CSS', type: 'course-css'},
            {id: 3, title: 'Curso Avanzado CSS', subtitle: 'Medio', description: 'Avanzar en CSS3', type: 'course-css'},
            {id: 4, title: 'Curso Basico Javscript', subtitle: 'Basico', description: 'Iniciarse en js', type: 'course-js'},
        ],
        cart: [],
    },
    methods: {
        addToCart: function(course) {
            this.cart.push(course);
            console.log("añadido al carro")
        }
    },    
})