<template>
    <Header/>

    <main>

    </main>
    
    <Footer/>

    <a class="whatsapp" href="https://wa.me/message/POZDDNGDMO6JM1" target="_blank">
        <img class="whatsapp-img" src="../assets/whatsapp.png" alt="wa">
    </a>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  /* Main Section */

  main {
      min-height: 700px;

      animation: fadeIn 0.25s;
  }

  /* Whatsapp Button */

.whatsapp {
    z-index: 3;
}

.whatsapp-img {
    height: 50px;
    width: 50px;

    position: fixed;
    right: 20px;
    bottom: 20px;

    border-radius: 40px;
}

.whatsapp-img:hover {
    transform: scale(1.2);
    transition: 0.3s linear;
}

@media (min-width: 560px) {

    .whatsapp-img {
        height: 75px;
        width: 75px;

        position: fixed;
        right: 30px;
        bottom: 50px;

        animation: fadeIn 0.35s;
    }
}
</style>
