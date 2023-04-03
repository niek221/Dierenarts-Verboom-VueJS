<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.title = 'Dierenarts Verboom';
  },

  computed: {
    isOnMyRoute() {
      const colorElement = this.$refs.Header.$refs.colorElement;
      if (this.$route.path.includes('/bijsluiters')) {
        colorElement.style.color = 'red';
      } else {
        colorElement.style.color = 'black';
      }
    },
  },
  created() {
    this.$router.afterEach(() => {
      this.isOnMyRoute();
    });
  },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

/* Variables */

:root {
    --main-green: #14823B;
    --wa-green: #25D366;
    --main-orange: #F8931F;
    --main-orange-hover: #ff8800de;
    --text-black: #000;
    --main-gray: #545454;
}

/* Keyframes */

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
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
