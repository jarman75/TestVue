
<template>    
    <b-container fluid>         
        <b-row>        
            <b-col cols="4">Titular Suministro</b-col>                        
            <b-col cols="8">{{factura.titular}}</b-col>    
            
        </b-row>    
        <b-row>    
            <b-col cols="4">Explotacion</b-col>                        
            <b-col cols="8">{{factura.explotacion}}</b-col>
            
        </b-row>    
        <b-row>
            <b-col cols="4">Suministro</b-col>                        
            <b-col cols="8">{{factura.cups}}</b-col>      
            
        </b-row>
        <b-row>
            <b-col cols="4">CUPs</b-col>                        
            <b-col cols="8">{{factura.cups}}</b-col>
            
        </b-row>
        <b-row>
            <b-col cols="6">Comercializadora | Tarifa</b-col>            
            <b-col cols="3">{{factura.comercializadora}}</b-col>        
            <b-col cols="3">{{factura.tarifa}}</b-col>
            
        </b-row>
    </b-container>
</template>


<script>
export default {
    components: {
        
    },
    data() {
        return {    
            factura: {                             
                titular: 'Aguas Alicante', 
                explotacion: 'Exp.Alicante',                                 
                suministro: 'C\Italia, 12',
                cups: 'ES99998888',
                comercializadora: 'Endesa',
                tarifa: '3.0A'
            },                    
        }
    }
}
</script>

<style scoped>

</style>
