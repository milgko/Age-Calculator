<template>
    <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Your Age</h2>
      <p v-if="age" class="text-lg text-gray-700">
        You are <span class="font-bold">{{ age.years }}</span> years, <span class="font-bold">{{ age.months }}</span> months, and <span class="font-bold">{{ age.days }}</span> days old.
      </p>
      <p v-else class="text-lg text-gray-700">Enter your birthdate to calculate your age.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      age: {
        type: Object,
        default: null
      }
    }
  }
  </script>

  
  