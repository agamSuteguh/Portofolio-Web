<template>
<div class="ml-2">
    <router-link     :to="{ name: 'home'}">
    <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-400 rounded-full focus:shadow-outline hover:bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 14l-4 -4l4 -4"></path>
   <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
</svg>
</button></router-link>
<br></div>
<div class="mt-20 text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700">
          Project <span class="font-light text-gray-500"></span>
        </h1>
        <p class="font-light text-gray-600 mt-3">Indonesia, Bogor</p>
        <p class="mt-8 text-gray-500">Web Developer</p>
      </div>
<div class="ml-12 mt-6">
<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
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
    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
   
</ol>



</div>
  </template>
  <style scoped>
  h1{
  
    color: #2c2c2c;
      letter-spacing: .05em;
      text-shadow: 
        4px 4px 0px #d5d5d5, 
        7px 7px 0px rgba(0, 0, 0, 0.2);
  
  }
  p{
    font-family: monospace;
    color: #2c2c2c;
      letter-spacing: .05em;
      text-shadow: 
        4px 4px 0px #d5d5d5, 
        7px 7px 0px rgba(0, 0, 0, 0.2);
  }
  
  </style>