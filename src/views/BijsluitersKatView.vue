<template>

      <Header />

      <main>
        <Kat />
      </main>
      
      <Footer />

      <a class="whatsapp" href="https://wa.me/message/POZDDNGDMO6JM1" target="_blank">
        <img class="whatsapp-img" src="../assets/whatsapp.png" alt="wa">
      </a>

  </template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Kat from '@/components/Kat.vue'

export default {
  name: 'BijsluitersKatView',
  components: {
    Header,
    Kat,
    Footer
  },

  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      document.body.style.overflow = this.isActive ? 'hidden' : 'auto';
      window.scrollTo(0, 0);
    },
    closeMenu() {
      this.isActive = false;
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: 0 });
    },
  },
//   computed: {
//     isOnMyRoute() {
//       const colorElement = this.$refs.Header.$refs.colorElement;
//       if (this.$route.path.includes('/bijsluiters')) {
//         colorElement.style.color = 'red';
//       } else {
//         colorElement.style.color = 'black';
//       }
//     },
//   },
//   created() {
//     this.$router.afterEach(() => {
//       this.isOnMyRoute();
//     });
//   },
};

</script>

<style scoped>
</style>
