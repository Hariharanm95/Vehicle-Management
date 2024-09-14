<template>
  <div class="contact-container">
    <section class="header text-black p-8 text-center">
      <h1 class="text-2xl font-bold">Contact Us</h1>
      <p class="mt-2">We're here to help and answer any question you might have.</p>
    </section>

    <section class="contact-form p-9">
      <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" v-model="form.name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" v-model="form.email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" v-model="form.message" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-fuchsia-900 focus:bg-fuchsia-900 sm:text-sm" required></textarea>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fuchsia-950 hover:bg-fuchsia-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Simulate form submission for demonstration
      console.log('Form submitted:', this.form);
      alert("Thank you for contacting us!");
      // You might want to handle actual submission to your backend here
    }
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: auto;
}
</style>
