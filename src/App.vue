<template>
  <router-view/>
</template>

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
</style>
