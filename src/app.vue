<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
    />
  </head>
  <div>
    <h1>LoC Digital Garden</h1>
    <p>An aggregated list of technical learning from the community</p>
    <br />
    <div>
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
