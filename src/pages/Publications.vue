<script></script>
<template>
  <div>
    <h1>PUBBLICAZIONI</h1>
    <router-link :to="{ name: 'Quaderni' }">
      <a :href="href" data-index="01">Quaderni</a>
    </router-link>
    <router-link :to="{ name: 'Resoconto Ornitologico' }">
      <a :href="href" data-index="02">Resoconto ornitologico</a>
    </router-link>
    <router-link :to="{ name: 'Bol' }">
      <a :href="href" data-index="03">BOL</a>
    </router-link>
  </div>
</template>
