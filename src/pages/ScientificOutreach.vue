<script></script>
<template>
  <div>
    <h1>DIVULGAZIONE</h1>
    <router-link :to="{ name: 'Corsi' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="01">Corsi</a>
    </router-link>
    <router-link :to="{ name: 'Convegni' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="02">Convegni</a>
    </router-link>
    <router-link :to="{ name: 'Eventi' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="03">Eventi</a>
    </router-link>
    <router-link :to="{ name: 'Rassegna Stampa' }" v-slot="{ href, navigate }">
      <a :href="href" @click="navigate" data-index="03">Rassegna Stampa</a>
    </router-link>
  </div>
</template>
