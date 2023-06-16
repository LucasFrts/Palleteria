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

        const footer = this.$refs.footer;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollHeight > clientHeight) { 
            footer.$el.classList.remove('footer-fixed');
        } else {
            footer.$el.classList.add('footer-fixed');
        }

        const navbar = this.$refs.navbar;
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function() {
          const currentScrollPos = window.pageYOffset;
        
          if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
            navbar.$el.style.top = '0';
          } else {
            navbar.$el.style.top = `-${navbar.$el.offsetHeight}px`;
          }
      
          prevScrollPos = currentScrollPos;
        };
        
    }
}
</script>
<style scoped>
.footer-fixed{
    position:fixed !important;
    bottom: 0 !important;
}
.scrolled{
    margin-top: -100%;
}
</style>