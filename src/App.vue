<template>
  <b-container fluid id="app">            			
		<b-row>			
			<b-col><ListaFacturas/></b-col>			
		</b-row>
  </b-container>
</template>

<script>
import ListaFacturas from './components/ListaFacturas.vue'
import TablaEjemplo from "./components/TablaEjemplo.vue"
import DetalleFactura from "./components/DetalleFactura.vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    components: {
		ListaFacturas,
		DetalleFactura
    }  
}
</script>

<style lang="css">		
	
</style>