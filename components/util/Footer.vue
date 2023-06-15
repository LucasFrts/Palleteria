<template>
    <footer class="w-100 bg-pallet text-center d-flex justify-content-center align-items-center">
       Copyright © {{ date  }} Lucas Freitas
    </footer>
</template>
<script>
export default {
    computed:{
        date(){
            return (new Date()).toISOString().split('T')[0].replace(/\D/g, '').replace(/(\d{4})(\d{2})(\d{2})/g, "$3/$2/$1")
        }
    },
}
</script>
<style scoped>
.bg-pallet {
    background-color: #f2cf63;
    color:#fff;
    height: 2rem;
    font-size: 1rem;
    position: fixed;
    bottom: 0;
    z-index: 99;
}
</style>