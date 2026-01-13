<script></script>
<template>
  <div>
    <h1>PROGETTI</h1>
    <router-link :to="{ name: 'Iwc' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="01">IWC</a>
    </router-link>
    <router-link :to="{ name: 'Rondoni' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="02">RONDONI</a>
    </router-link>
    <router-link :to="{ name: 'Zps' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="03">ZPS</a>
    </router-link>
  </div>
</template>
<style scoped lang="scss"></style>
