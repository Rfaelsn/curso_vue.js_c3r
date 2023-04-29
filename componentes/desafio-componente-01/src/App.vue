<template>
  <v-app>
    
    <MenuLateral/>
    
    <Toolbar/>

    <v-content>
      <Carousel/>
    </v-content>

    <Footer/>

  </v-app>
</template>

<script>
import Footer from "@/components/template/FooterMain.vue";
import Carousel from "@/components/widgets/CarouselMain.vue";
import Toolbar from "@/components/template/ToolbarMain.vue";
import MenuLateral from "@/components/template/MenuLateral.vue";
export default {
  components:{
    Footer,
    Carousel,
    Toolbar,
    MenuLateral
  },
}
</script>
