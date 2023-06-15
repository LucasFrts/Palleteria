<template>
    <Layout>
        <div class="main-page-padd" v-for="(card, index) in data" :key="index">
            <CardAdvertisement class="" :main-text="card.mainText" :background="card.background" :button="card.button" :sub-text="card.subText" :invert="card.invert" :img="card.img"/>
        </div>
    </Layout>
</template>
<script>
export default {
    data(){
        return{
            data:[
                {mainText:"Crie seu Cadastro!", subText:"Trabalhe com os melhores do mercado de pallets.", button:"Cadastre-se", invert:false, img:"img/pallet1-png.png", background:"#fff"},
                {mainText:"Diversos Modelos!", subText:"Diversos modelos, cores, materiais e capacidades, escolha aquele que mais se enquadra com as suas necessidades.", invert:true, img:"img/pallet2-png.png"},
                {mainText:"Faça um orçamento", subText:"98% de recomendação entre usuários, trabalhe com quem faz acontecer!", invert:false, img:"img/pallet3-png.png", background:"#fff"}
            ],
        }   
    }

}
</script>