<template>
  <div>
    <h1>LoC Digital Garden</h1>
    <p>An aggregated list of technical learning from the community</p>
    <NuxtPage />
  </div>
</template>

<script setup>
const seed = ref();

onMounted(async () => {
  seed.value = await getSeed();
});
</script>
