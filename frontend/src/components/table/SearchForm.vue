<script setup>
    
    const emit = defineEmits(['search']);

    const search = (event) => {
        emit('search', event.target.value)
    }
</script>
<template>
  <form class="py-3 px-4 flex items-center">
    <label class="sr-only">Search</label>
    <div class="relative w-full">
        <input @input="search" type="text" placeholder="search" class="bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded-lg">
    </div>
  </form>
</template>

