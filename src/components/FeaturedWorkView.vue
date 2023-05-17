<template>
  <div class="body">
    <div class="ml-2">
      <router-link :to="{ name: 'home' }">
        <button
          class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-400 rounded-full focus:shadow-outline hover:bg-blue-500 hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 14l-4 -4l4 -4"></path>
            <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
          </svg></button></router-link>
      <br />
    </div>
    <div id="konten1" class="KONTEN1 mr-20 ml-20 mt-20">
      <div class="flex justify-between">
        <div class="mr-20 sm:text-sm md:text-2xl lg:text-6xl 	mt-20">
          <h1 class="text-bla">AGAM</h1>
          <h1>SUTEGUH</h1>
        </div>
        <div class="mt-20">
          <P class="text-bla text-2xl">Full Stack Web Developer</P>
          <ul class="max-w-md space-y-1 text-gray-900 list-disc list-inside dark:text-gray-400">
            <li>
              +62 85157938442
            </li>
            <li>
              KP Tegal RT 20 RW 06, Kecamatan Klapanunggal, Bogor.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="konten2" class="KONTEN2 ml-20 mt-60 mb-20">
      <div class="flex justify-between">
        <div class=" sm:text-sm md:text-2xl lg:text-6xl 	mt-20">
          <P class="text-gray-900 text-2xl">Work Experience</P>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-800 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
                  class="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor">
                  <path d='M21 8h-8l4-6h-6L3 14h7l-6 9L21 8Z'></path>
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-blue-700 dark:text-white">Prakerin On
                SooltanPay By Telkom
                <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">Front
                  End</span>
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022 to
                April 2022
                (3 months)</time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am creating a front-end application
                using Vue.js and learning <br>how to handle REST APIs using Vuex.
              </p>
             
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-800 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-100 dark:text-blue-300" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </li>
          </ol>
        </div>
        <div class="mt-20">
          <P class="text-bla text-2xl">Skills</P>
          <ul class="max-w-md space-y-1 text-gray-900 list-disc list-inside ">
            <li>
              Vue JS
            </li>
            <li>
              Node JS
            </li>
            <li>
              Express JS
            </li>
            <li>Mongo DB</li>
            <li>Tailwind CSS</li>
            <li>CSS</li>
            <li>Java Script</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
h1 {
  font-family: "NameS";
}

p {
  font-family: 'Courier New', Courier, ;
}

.body {
  opacity: 0;
  transform: translateX(-100%);
  animation-name: fadeInFromLeft;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

}

@keyframes fadeInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}</style>


