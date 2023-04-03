<template>
    <Header/>

    <main>
        <div class="container-frontpage">
            <!-- <img src="../assets/foto-temp.png">     -->
            <img src="../assets/voorkant.jpg">    
            <!-- <img src="../assets/foto-temp.png">     -->
        </div>
    </main>
    
    <Footer/>

    <a class="whatsapp" href="https://wa.me/message/POZDDNGDMO6JM1" target="_blank">
        <img class="whatsapp-img" src="../assets/whatsapp.png" alt="wa">
    </a>
</template>

<script scoped>
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

<style scoped>
  /* Main Section */

    main {
        min-height: 700px;

        animation: fadeIn 0.25s;
    }

    .container-frontpage {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 370px) {
        .container-frontpage > img {
            width: 390px;
            height: 277.97px;
        }
    }

    @media (min-width: 390px) {
        .container-frontpage > img {
            width: 390px;
            height: 293px;
        }
    }

    @media (max-width: 400px) {
        .container-frontpage > img {
            width: 100%;
            height: 100%;
        }
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
