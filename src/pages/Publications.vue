<script></script>
<template>
  <div>
    <h1>PUBBLICAZIONI</h1>
    <router-link :to="{ name: 'Quaderni' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="01">Quaderni</a>
    </router-link>
    <router-link
      :to="{ name: 'Resoconto Ornitologico' }"
      v-slot="{ href, navigate }"
    >
      <a :href="href" @click="navigate" data-index="02"
        >Resoconto ornitologico</a
      >
    </router-link>
    <router-link :to="{ name: 'Bol' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="03">BOL</a>
    </router-link>
  </div>
</template>
