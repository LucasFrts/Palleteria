<template>
    <footer class="w-100 bg-pallet text-center d-flex justify-content-center align-items-center footer">
       Copyright © {{ date  }} -  Lucas Freitas
    </footer>
</template>
<script>
export default {
    computed:{
        date(){
            return (new Date()).getFullYear()
        }
    },
}
</script>
<style scoped>
.footer{
    position:relative;
}
.footer-fixed{
    position:fixed !important;
    bottom: 0 !important;
}
.bg-pallet {
    background-color: #f2cf63;
    color:#fff;
    height: 2rem;
    font-size: 1rem;
    font-weight: bold;
}
</style>