const Component1 = {
    props: {
        nombre: {type: String},
        apellidos: {type: String}
    },
    computed: {
        nombreCompleto () {
            return this.nombre + ', ' + this.apellidos
        }
    },    
    beforeCreate: function () {    
        localStorage.setItem('estado','inicial')
        console.log('before create component1')
        
        //el componente no es accesible, útil para iniciar librerías o estados externos.
        //también para iniciar datos en el localstorage

    },
    created: function(){
        console.log('create component1')
        //el componente está creado, útil para obtener datos (desde api) y cargarlos        
    },
    beforeMount: function() {
        console.log('beforeMount componente1')
        //el componente aún no está renderizado
    },
    mounted: function(){
        console.log('mounted component1')
        //el componente se ha renderizado en el DOM, útil para manipular la composición del DOM
    },
    beforeUpdate: function(){
        console.log('beforeUpdate componente1')
    },
    template:`
    <div>
        <h3>Componente1</h3>  
        <input id="name" value=:nombre />
        <input id="apellidos" v-model="apellidos" />
        <label>{{nombreCompleto}}</label/>                                    
    </div>
    `   
}

new Vue({
    el: '#app',
    components: {
         'component1' : Component1
    },
    data: {
        humanos: [
            { id: 1, nombre: "nombre1", apellidos: "apellidos1" },
            { id: 2, nombre: "nombre2", apellidos: "apellidos2" },
            { id: 3, nombre: "nombre3", apellidos: "apellidos3" },
        ]
    }
    
    
})