<template>    
    
    <b-container fluid>
    
    <!-- filtro -->
    <b-row>    
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filtrar" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Escribe para buscar" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Limpiar</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>    
    
    <!-- grid -->
    <b-table striped hover stacked="md"
        :items="items" 
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        @filtered="onFiltered">
        <template slot="actions" slot-scope="row">
            <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->                    
            <b-button size="sm" @click.stop="row.toggleDetails">
                {{ row.detailsShowing ? 'Ocultar' : 'Mostrar' }} Detalles
            </b-button>
        </template>
        <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>     

    <!-- paginación -->
    <b-row>
        <b-col md="6" class="my-1">
            <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
        <b-col md="6" class="my-1">
            <b-form-group horizontal label="Per page" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
            </b-form-group>
        </b-col>  
    </b-row>       
    
    </b-container>    
    
</template>

<script>

const items = [
                {id: 1, nfactura: 'P09000121', tarifa: '3.1A', titular: 'Aguas de Alicante', cups: 'ES02386278368273', finicio: '01/01/2018', ffin: '31/01/2018', femision: '01/02/2018', estado: 'Pendiente'},
                {id: 2, nfactura: 'P09000122', tarifa: '3.1A', titular: 'Aguas de Elche', cups: 'ES02386278368273', finicio: '01/02/2018', ffin: '28/02/2018', femision: '01/03/2018', estado: 'Pagado'},
                {id: 3, nfactura: 'P09000123', tarifa: '3.1A', titular: 'Aguas de Alicante', cups: 'ES02386278368273', finicio: '01/03/2018', ffin: '31/03/2018', femision: '01/04/2018', estado: 'Pendiente'},
                {id: 4, nfactura: 'P09000122', tarifa: '3.1A', titular: 'Aguas de Elche', cups: 'ES02386278368273', finicio: '01/01/2018', ffin: '31/01/2018', femision: '01/02/2018', estado: 'Pendiente'},
                {id: 5, nfactura: 'P09000122', tarifa: '3.1A', titular: 'Aguas de Alicante', cups: 'ES02386278368273', finicio: '01/02/2018', ffin: '28/02/2018', femision: '01/03/2018', estado: 'Pagado'},
                {id: 6, nfactura: 'P09000124', tarifa: '3.1A', titular: 'Aguas de Elche', cups: 'ES02386278368273', finicio: '01/03/2018', ffin: '31/03/2018', femision: '01/04/2018', estado: 'Pendiente'},
                {id: 7, nfactura: 'P09000124', tarifa: '3.1A', titular: 'Aguas de Alicante', cups: 'ES02386278368273', finicio: '01/01/2018', ffin: '31/01/2018', femision: '01/02/2018', estado: 'Pendiente'},
                {id: 8, nfactura: 'P09000125', tarifa: '3.1A', titular: 'Aguas de Elche', cups: 'ES02386278368273', finicio: '01/02/2018', ffin: '28/02/2018', femision: '01/03/2018', estado: 'Pagado'},
                {id: 9, nfactura: 'P09000125', tarifa: '3.1A', titular: 'Aguas de Alicante', cups: 'ES02386278368273', finicio: '01/03/2018', ffin: '31/03/2018', femision: '01/04/2018', estado: 'Pendiente'},
                {id: 10, nfactura: 'P09000125', tarifa: '3.1A', titular: 'Aguas de Elche', cups: 'ES02386278368273', finicio: '01/03/2018', ffin: '31/03/2018', femision: '01/04/2018', estado: 'Pendiente'},
]

export default {
    components: {
        
    },
    data() {
        return {
            items: items,
            fields: [
                { key:'nfactura', label:'Factura'}, 
                { key:'titular', label: 'Titular'},
                { key:'cups', label: 'Cups'},
                { key: 'finicio', label: 'Fecha Inicio'},
                { key: 'ffin', label: 'Fecha fin'},
                { key: 'femision', label: 'Fecha Emisión'},
                { key: 'actions', label: 'Actions'}
            ],            
            currentPage: 1,
            perPage: 5,
            totalRows: items.length,
            pageOptions: [ 5, 10, 15 ],
            filter: null            
        }
    },
    methods: {
        info (item, index, button) {         
        },
        onFiltered (filteredItems) {     
            this.totalRows = filteredItems.length
            this.currentPage = 1    
        }
    }
}
</script>



