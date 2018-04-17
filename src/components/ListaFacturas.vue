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
    
    <!-- grid 
        
        :items="myProvider" 
    -->
    <b-table striped hover stacked="md"
        :busy.sync="isBusy"
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

 const items = [{"Id":4,"FefNfactura":"P00000001","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":5,"FefNfactura":"P00000002","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":6,"FefNfactura":"P00000003","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":7,"FefNfactura":"P00000008","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":15,"FefNfactura":"P00000012","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":16,"FefNfactura":"P00000013","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":17,"FefNfactura":"P00000014","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":18,"FefNfactura":"P00000015","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B21456789","FefCorporatename":"AGUAS DE ALICANTE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"3.1A","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0},{"Id":19,"FefNfactura":"P00000016","FefNpoliza":"POLIZA1","FefCebe":"CEBE1","FefTipofactura":"00","FefTaxidentificationnumber":"B42456789","FefCorporatename":"AGUAS DE ELCHE","FefCups":"ESCUPS001","FefAddress":"AVD.LIBERTAD,11","FefPostcode":"03204","FefTown":"ELCHE","FefProvince":"ALICANTE","FefTarifadeaccesoatr":"6.1","FefContratoacceso":"CT2112345","FefPotcontratadap1":10.0,"FefPotcontratadap2":10.0,"FefPotcontratadap3":10.0}]


import axios from 'axios'

export default {    
    
    data() {        
        return {      
            isBusy: false,                              
            items : items,
            fields: [
                        {key: 'FefNfactura' 			    , label:'Factura'               },
                        {key: 'FefNpoliza' 				    , label:'Poliza'                },
                        {key: 'FefCebe' 				    , label:'Cebe'                  },
                        {key: 'FefTipofactura' 			    , label:'Tipo'                  },
                        {key: 'FefTaxidentificationnumber'  , label:'Cif'                   },
                        {key: 'FefCorporatename' 			, label:'Titular'               },
                        {key: 'FefCups' 					, label:'Cups'                  },
                        {key: 'FefAddress' 					, label:'Dirección'             },
                        {key: 'FefPostcode' 				, label:'C.Postal'              },
                        {key: 'FefTown' 					, label:'Ciudad'                },
                        {key: 'FefProvince' 				, label:'Provincia'             },
                        {key: 'FefTarifadeaccesoatr' 		, label:'Tarifa'                },
                        {key: 'FefContratoacceso' 			, label:'Contrato'              },
                        {key: 'FefPotcontratadap1' 			, label:'Potencia contratada p1'},
                        {key: 'FefPotcontratadap2' 			, label:'Potencia contratada p2'},
                        {key: 'FefPotcontratadap3' 			, label:'Potencia contratada p3'},
                        {key: 'Id'                          , label:'Id'                    }
            ],            
            currentPage: 1,
            perPage: 5,
            totalRows: items.length,
            pageOptions: [ 5, 10, 15 ],
            filter: null            
        }
    },      
    methods: {    
        myProvider (ctx) {
            this.isBusy = true
            let promise = axios.get('http://localhost:62369/api/facturas')
            return promise.then((data)=> {
                const items = data.items
                this.isBusy = false
                return (items)
            }).catch(error => {
                this.isBusy = false
                return []
            })
        },
        onFiltered (filteredItems) {     
            this.totalRows = filteredItems.length
            this.currentPage = 1    
        },            
    }                                              
}
</script>



