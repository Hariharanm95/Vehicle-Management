<script setup>
  import { ref, onMounted, computed } from 'vue'
  import SearchForm from './SearchForm.vue';
  import FilterRadios from './FilterRadios.vue';
  import FilterDropdown from './FilterDropdown.vue';

  const items = ref([])
  onMounted(async () => {
    const response = await fetch('http://localhost:3000/api/registrations/');
    items.value = await response.json();
  })

  const searchFilter = ref('')
  const radioFilter = ref('all')
  const checkboxFilter = ref([])
  const props = defineProps({
    items: Array,
    required: true    
  })
  
  const filteredItems = computed(() => {
    let items = props.items

    switch(radioFilter.value) {
      case 'past':
        items = items.filter(item => new Date(item.date).getDate() <= new Date().getDate());
        break;
        case 'upcoming':
        items = items.filter(item => new Date(item.date).getDate() > new Date().getDate());
        break;
    }
    if(checkboxFilter.value.length){
      items = items.filter(item => checkboxFilter.value.includes(item.status))
    }

    if(searchFilter.value !== '') {
      items = items.filter(item => item.place.toLowerCase().includes(searchFilter.value.toLowerCase()) || item.driverName.toLowerCase().includes(searchFilter.value.toLowerCase()))
    }
    return items
  })

  const handleSearch = (search) => {
    searchFilter.value = search
  }

  const handleRadioFilter = (filter) => {
    radioFilter.value = filter
  }

  const handleCheckboxFilter = (filter) => {
    if(checkboxFilter.value.includes(filter)) {
      checkboxFilter.value.splice(checkboxFilter.value.indexOf(filter), 1)
    }
    return checkboxFilter.value.push(filter)
  }

</script>

<template>
  <div class="bg-white relative border rounded-lg ">
    <div class="flex items-center justify-between">
      <SearchForm @search="handleSearch"/>
      <div class="flex items-center justify-end text-sm font-semibold">
        <FilterRadios @filter="handleRadioFilter"/>
        <FilterDropdown :items="items" @filter="handleCheckboxFilter"/>
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="px-4 py-3">Place</th>
          <th class="px-4 py-3">Date</th>
          <th class="px-4 py-3">Time</th>
          <th class="px-4 py-3">People Count</th>
          <th class="px-4 py-3">Driver Name</th>
          <th class="px-4 py-3">Status</th>
        </tr>    
      </thead>
      <tbody class="p-10">
        <tr v-for="(item, index) in filteredItems" :key="index">
          <td class="px-4 py-3">{{ item.place }}</td>
          <td class="px-4 py-3">{{ new Date(item.date).getDate() }}-{{ new Date(item.date).getMonth() }}-{{ new Date(item.date).getFullYear() }}</td>
          <td class="px-4 py-3">{{ item.time }}</td>
          <td class="px-4 py-3">{{ item.peopleCount }}</td>
          <td class="px-4 py-3">{{ item.driverName }}</td>
          <td class="px-4 py-3">
            <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{{ item.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

