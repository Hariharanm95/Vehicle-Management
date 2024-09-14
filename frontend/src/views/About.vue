<template>
  <div class="about-container">
    <section class="header text-black p-8">
      <h1 class="text-2xl ">About Us</h1>
      <p class="mt-2 ">Learn more about our team and mission.</p>
    </section>
    <section class="team py-12 px-8">
      <h2 class="text-3xl font-bold text-gray-800">Our Team</h2>
      <div class="grid grid-cols-3 gap-4 mt-8">
        <div class="team-member p-4 shadow-lg rounded-lg">
          <img src="https://staticg.sportskeeda.com/editor/2021/12/8b8fd-16401091933504-1920.jpg?w=640" alt="Member" class="w-full rounded-full">
          <h3 class="mt-4 font-bold text-lg">Eren Yeager</h3>
          <p class="text-gray-600">CEO & Founder</p>
        </div>
        <div class="team-member p-4 shadow-lg rounded-lg">
          <img src="https://images3.alphacoders.com/132/1322715.png" alt="Member" class="w-full rounded-full">
          <h3 class="mt-4 font-bold text-lg">Gojo Sataro</h3>
          <p class="text-gray-600">CTO</p>
        </div>
        <div class="team-member p-4 shadow-lg rounded-lg">
          <img src="https://www.escapistmagazine.com/wp-content/uploads/2024/04/jujutsu-kaisen-sukuna.jpeg" alt="Member" class="w-full rounded-full">
          <h3 class="mt-4 font-bold text-lg">Yuji Itadori</h3>
          <p class="text-gray-600">Lead Developer</p>
        </div>
      </div>
    </section>
    <section class="mission py-12 px-8 bg-gray-100">
      <h2 class="text-3xl font-bold text-gray-700">Our Mission</h2>
      <p class="mt-4 text-lg text-gray-600">
        Our mission is to deliver effective solutions with quality and speed to our clients. We strive to make a difference in the world through our innovative technologies and passionate team.
      </p>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: auto;
}
</style>