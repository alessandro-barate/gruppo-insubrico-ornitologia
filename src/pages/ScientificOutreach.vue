<script></script>
<template>
  <div>
    <h1>DIVULGAZIONE</h1>
    <router-link :to="{ name: 'Corsi' }">
      <a :href="href" data-index="01">Corsi</a>
    </router-link>
    <router-link :to="{ name: 'Convegni' }">
      <a :href="href" data-index="02">Convegni</a>
    </router-link>
    <router-link :to="{ name: 'Eventi' }">
      <a :href="href" data-index="03">Eventi</a>
    </router-link>
    <router-link :to="{ name: 'Rassegna Stampa' }">
      <a :href="href" data-index="03">Rassegna Stampa</a>
    </router-link>
  </div>
</template>
