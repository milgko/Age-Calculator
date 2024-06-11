<template>
    <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-500">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">Age Calculator</h2>
      <form @submit.prevent="calculateAge" class="space-y-4">
        <div>
          <label for="day" class="block text-sm font-medium text-gray-700 mb-1">Day:</label>
          <input v-model="day" type="number" id="day" min="1" max="31" class="mt-1 p-2 block w-full border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500" required>
        </div>
        <div>
          <label for="month" class="block text-sm font-medium text-gray-700 mb-1">Month</label>
          <input v-model="month" type="number" id="month" min="1" max="12" class="mt-1 p-2 block w-full border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500" required>
        </div>
        <div>
          <label for="year" class="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <input v-model="year" type="number" id="year" min="1900" :max="new Date().getFullYear()" class="mt-1 p-2 block w-full border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500" required>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Calculate Age</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        day: '',
        month: '',
        year: ''
      }
    },
    methods: {
      calculateAge() {
        const birthDate = new Date(this.year, this.month - 1, this.day);
        this.$emit('calculate-age', birthDate);
      }
    }
  }
  </script>
  