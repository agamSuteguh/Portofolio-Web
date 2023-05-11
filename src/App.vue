<template>
  <nav class="bg-gry text-gray-50 text-center">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />

</template>

<style>
@font-face {
  font-family: "NameS";
  src: local("NameS"),
   url(./assets/font/MortendExtraBold.otf) format("truetype");
}
</style>
