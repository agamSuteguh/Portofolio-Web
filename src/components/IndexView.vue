<template>
  <div class="body">
  <div class="bg-gry p-16">
    <div class="p-8 shadow mt-24">
      <div class="grid grid-cols-1 sm:grid-cols md:grid-cols-3">
        <div
          class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"
        >
          <a class="mr-6" href="https://github.com/agamsuteguh">
            <div >
              <svg
                class="mx-auto bg-navy hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFF"
                  d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                />
              </svg>

              <p class="text-beige ml-1">Github</p>
            </div></a
          >
          <a href="https://www.instagram.com/ag32111/">
            <div >
              <img
                class="mx-auto hover:bg-gray-200 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                src="https://www.svgrepo.com/show/343562/instagram-social-media-network-communication-interaction-connection.svg"
                width="25px"
                alt=""
              />
              <p class="text-beige ml-1">Instagram</p>
            </div></a
          >

          <a class="ml-6" href="https://www.linkedin.com/in/agam-suteguh/">
            <div >
              <img
              class="mx-auto hover:bg-gray-200 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                width="25px"
                alt=""
              />
              <p class="text-beige ml-1">LinkedIn</p>
            </div></a
          ></div>
       
        <div class="relative">
          <div
            class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
          >
            <img
            class="mx-auto"
              width="150px"
              src="https://i.ibb.co/kQQwLQ7/IMG-20230423-213620-405-removebg-preview-removebg-preview.png"
              alt="Screenshot-2023-04-23-01-16-44-29-removebg-preview"
              border="0"
            />
          </div>
        </div>
        <div class="space-x-8 flex  :flex-row 2xl:flex-row justify-between mt-28 md:mt-0 md:justify-center">
          <router-link :to="{ name: 'featuredwork' }">
            <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 text-sm sm:text-md">
              My Resume
            </button>
          </router-link>
          <a  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=agamzuper@gmail.com">
            <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 text-sm sm:text-md">
              Message Me
            </button>
          </a>
        </div>
        

      </div>
      <div class="mt-20 text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700 sm:text-1xl md:text-2xl lg:text-4xl xl:text-4xl">

          Agam Suteguh <span class="font-light text-gray-500"></span>
        </h1>
        <p class="font-light text-gray-600 mt-3">Indonesia, Bogor</p>

      </div>

      <div class="mt-12 flex flex-col justify-center">
        <p class="text-gray-600 text-center font-light lg:px-16">
          My name is Agam Suteguh, and I live in Bogor, Indonesia. I am a web
          developer who primarily uses the MEVN stack. My dream is to become a
          full-stack web developer and game developer. I am eager to work with
          all of you. Thank you for visiting this website, and have a great day!
        </p>
      </div>
    </div>
  </div>
  <div class="ml-2">
    
<br></div>
<div class="mt-72 text-center border-b pb-12 ">
        <h1 class="text-4xl font-medium text-gray-700">
          Project <span class="font-light text-gray-500"></span>
        </h1>
        <p class="font-light text-gray-600 mt-3">Indonesia, Bogor</p>
      </div>
<div class="ml-12 mt-6 mb-80">
<ol class="relative border-l border-gray-200 dark:border-gray-700 ">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">School Monthly Payment Web App <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">90% Complete</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Build With MEVN STACK & TailWind</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I created this project as a result of my learning journey in studying the MEVN stack for several months, as well as attempting to adapt and create website layouts using Tailwind CSS.

Note that this project is not yet complete, as I plan to add an online payment feature to it.
</p>
        <a href="https://github.com/agamSuteguh/School-Monthly-Payment-Web-App-With-MEVN-STACK" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
</svg>	&nbsp;Go To Project</a>
    </li>
    <span class="absolute flex items-center  justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
   
</ol>



</div></div>
<FooterView />



</template>

<script >
import FooterView from "@/components/FooterView.vue";

export default {
  name: 'App',
  components: {
    FooterView
    
  }
}
</script>

<style scoped>
h1 {
  color: #2c2c2c;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);
}
p {
  font-family: monospace;
  color: #2c2c2c;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);
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
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
