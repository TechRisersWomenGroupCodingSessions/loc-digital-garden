<template>
  <div>
    <h1>LoC Digital Garden</h1>
    <p>An aggregated list of technical learning from the community</p>
    <br />
    <Seed
      :planted="3"
      :tended="1"
      :title="`Some title`"
      :content="`Some learning content`"
    />

    <pre>{{ seed }}</pre>
  </div>
</template>

<script setup>
const seed = ref();

onMounted(async () => {
  seed.value = await getSeed();
});
</script>
