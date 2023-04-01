<template>
    <Header/>

    <main>
        <div class="container-bijsluiters">
            <h1>Bijsluiters</h1>

            <div class="container-above">
                <div class="animal">
                    <a href="./bijsluiters/hond.html">
                        <img src="../assets/hond.png">
                        <h2>Hond</h2>
                    </a>
                </div>
                
                <div class="animal">
                    <a href="">
                        <img src="../assets/kat.png">
                        <h2>Kat</h2>
                    </a>
                </div>
            </div>

            <div class="container-below">
                <div class="animal">
                    <a href="">
                        <img src="../assets/konijn.png">
                        <h2>Konijn</h2>
                    </a>
                </div>
                <div class="animal">
                    <a href="">
                        <img src="../assets/duif.png">
                        <h2>Duif</h2>
                    </a>
                </div>
            </div>

        </div>
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
  name: 'BijsluitersView',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
    /* Main Section */

    main {
        min-height: 560px;
    }

    .container-bijsluiters {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        margin-top: 50px;
    }

    .container-above {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        margin-top: 10px;
        margin-bottom: 10px;
    }


    .container-below {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        margin-top: 10px;
    }

    .container-bijsluiters > h1 {
        font-size: 18px;
        font-weight: 600;
    }

    .animal {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #fff;

        max-width: 140px;
        height: 140px;
    }

    .animal > a {
        padding-inline: 43px;

        text-decoration: none;
    }

    .animal > a > h2 {
        text-align: center;
        font-weight: 500;
        color: var(--text-black);
    }

    .container-below > .animal > a > h2 {
        margin-top: 5px;
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
