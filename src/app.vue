<template>
  <div>
    <h1>LoC Digital Garden</h1>
    <p>An aggregated list of technical learning from the community</p>
    <br />
    <div data-testid="slot-content">
      <slot>
        <NuxtPage />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
