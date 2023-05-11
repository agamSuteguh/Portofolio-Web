<template>
  <div class="body">
    <div class="ml-2">
      <router-link :to="{ name: 'home' }">
        <button
          class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-400 rounded-full focus:shadow-outline hover:bg-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 14l-4 -4l4 -4"></path>
            <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
          </svg></button></router-link>
      <br />
    </div>
    <div class="KONTEN1 mr-20 ml-20 mt-20 mb-20">
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
    <div class="JONTEN2 mr-20 ml-20 mt-60 mb-20">
      <div class="flex justify-between">
        <div class="mr-20 sm:text-sm md:text-2xl lg:text-6xl 	mt-20">
          <P class="text-bla text-2xl">Work Experience</P>

          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' class="w-5 h-5" fill='#4457A2'><path d='M21 8h-8l4-6h-6L3 14h7l-6 9L21 8Z'></path></svg>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application
                UI v2.0.0 <span
                  class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on
                January 13th, 2022</time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages
                including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
              </p>
              <a href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg
                  class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clip-rule="evenodd"></path>
                </svg> Download ZIP</a>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor"
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
  </div>
</template>

<style scoped>h1 {
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


