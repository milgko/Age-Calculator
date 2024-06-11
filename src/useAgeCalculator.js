import { ref } from 'vue';

export function useAgeCalculator() {
  const age = ref(null);

  function calculateAge(birthDate) {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    age.value = { years, months, days };
  }

  return {
    age,
    calculateAge
  };
}
  