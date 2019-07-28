const course = {
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
    props: {
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        description: { type: String, required: true }
    },
    methods: {
        add: function() {
            this.$emit('add', { title: this.title, months: this.months })
        }
    },
    template: `
    <div :class="['course', styleClass]">
    
    <header class="course-header" v-once>
        <img :src="header.image" :alt="header.title">
        <h2>{{ header.title }}</h2>        
    </header>
    
    <main class="course-content">
        <img src="http://lorempixel.com/300/150/" alt="">
        <section>
            <h3>{{ title }}</h3>
            <h4>{{ subtitle }}</h4>
            <p> {{ description }}</p>
        </section>
    </main>

    <footer class="course-footer">
        <label for="meses">MESES</label>
        <input id="meses" type="number" min="0" max=12 v-model="months" />
        <button @click="add">AÑADIR</button>
    </footer>
    
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

new Vue({
    el: '#app'
})