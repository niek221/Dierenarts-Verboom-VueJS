<template>
    <Header/>

    <main>
        <div class="container-main">
            <h1>Bijsluiters</h1>

            <div class="container-above">
                <div class="animal">
                    <router-link to="/bijsluiters/hond" exact class="nav-link">
                        <img src="../assets/hond.png">
                        <h2>Hond</h2>
                    </router-link>
                </div>
                
                <div class="animal">
                    <router-link to="bijsluiters/kat" exact class="nav-link">
                        <img src="../assets/kat.png">
                        <h2>Kat</h2>
                    </router-link>
                </div>
            </div>

            <div class="container-below">
                <div class="animal">
                    <router-link to="/bijsluiterskonijn" exact class="nav-link">
                        <img src="../assets/konijn.png">
                        <h2>Konijn</h2>
                    </router-link>
                </div>
                <div class="animal">
                    <router-link to="/bijsluitersduif" exact class="nav-link">
                        <img src="../assets/duif.png">
                        <h2>Duif</h2>
                    </router-link>
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
  },
}
</script>

<style scoped>
    /* Main Section */

    .container-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        margin-top: 25px;
        margin-inline: 35px;

        padding-bottom: 200px;
    }

    @media (min-width: 940px) {
        
        main > .container-main {
            margin-top: 45px;
            margin-inline: 45px;
        
            padding-bottom: 100px;
        }
    }

    @media (min-width: 1400px) {
        
        main > .container-main {
            margin-top: 65px;
            margin-inline: 45px;
        
            padding-bottom: 300px;
        }
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

    .container-main > h1 {
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

    @media (min-width: 1400px) {
        .container-main > h1 {
            font-size: 20px;
            font-weight: 600;
        
            margin-bottom: 15px;
        }
    }

</style>
