const Component1 = {
    props: {
        months: {type: Number}
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
        this.months=10
    },
    beforeMount: function() {
        console.log('beforeMount componente1')
        //el componente aún no está renderizado, útil para 
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
        <input id="meses" type="number" min="0" max=12 v-model="months" />                  
    </div>
    `   
}

new Vue({
    el: '#app',
    components: {
         'component1' : Component1
    },
    
    
})