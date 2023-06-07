<template>
    <Layout :page="page">
        <CardAdvertisement :main-text="data.mainText" :background="data.background"  :sub-text="data.subText" :invert="data.invert" :img="data.img"/>
        <QuemSomos/>
    </Layout> 
</template>
<script>
export default {
    data(){
        return{
            data:{mainText:"Nosso trabalho é dar qualidade ao seu trabalho!", subText:"A 22 anos no mercado, a Palleteria se esforça em trazer os melhores resultados para você.", img:"/img/grupo-pessoas.jpg", invert:true, background:"#fff"},
            page:'about'
        }
    }

}
</script>
