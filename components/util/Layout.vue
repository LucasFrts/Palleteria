<template>
    <div>
        <Navbar ref="navbar" :active="page"/> 
        <div ref="receiver" id="main-slot-page" class="w-100 mt-3">
            <slot>
            </slot>
        </div>
        <Footer ref="footer" />
    </div>
</template>
<script>
import Navbar from './Navbar.vue';
export default {
    name:"Layout",
    props:{
        page:{
            type:String,
            default:'home'
        }
    },
    mounted(){
        const navbarHeight = this.$refs.navbar.$el.clientHeight;
        const footerHeight = this.$refs.footer.$el.clientHeight;
        const receiver = this.$refs.receiver;

        if (receiver instanceof HTMLElement) {
          receiver.style.paddingTop = `${navbarHeight}px`;
          receiver.style.paddingBottom = `${footerHeight}px`;
        }
    }
}
</script>