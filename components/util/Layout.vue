<template>
    <div>
        <Navbar ref="navbar" :active="page"/> 
        <div ref="receiver" id="main-slot-page" class="w-100 mt-3">
            <slot>
            </slot>
        </div>
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
        console.log(this.$refs)
        const navbarHeight = this.$refs.navbar.$el.clientHeight;
        const receiver = this.$refs.receiver;

        if (receiver instanceof HTMLElement) {
          receiver.style.paddingTop = `${navbarHeight}px`;
        }
    }
}
</script>