<script setup>
  import { ref, onMounted } from 'vue'
  import DataTable from '../components/table/DataTable.vue'

  const items = ref([])
  onMounted(async() => {
    const response = await fetch('http://localhost:3000/api/registrations/');
    items.value = await response.json();
  })
</script>

<template>
  <div class="  bg-gray-100 m-auto">
    <DataTable :items="items"/>   
  </div>
</template>

