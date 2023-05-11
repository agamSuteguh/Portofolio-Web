<template>
  <div class="ml-2">
    <router-link :to="{ name: 'home' }">
      <button
        class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-400 rounded-full focus:shadow-outline hover:bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 14l-4 -4l4 -4"></path>
          <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
        </svg></button></router-link>
    <br />
  </div>
  <div class="mr-20 ml-20 mt-20 mb-20">
    <div class="flex justify-between">
      <div class="mr-20   sm:text-sm md:text-2xl lg:text-6xl 	mt-20">
        <p class="text-bla">AGAM</p>
        <P>SUTEGUH</P>
      </div>
      <div class="ml-20 mb-20"><img src="../assets/img/face.jpg" class="object-cover w-60 " alt=""></div>
    </div>

  </div>
</template>

<style scoped>
* {
  font-family: "NameS";
}
</style>
