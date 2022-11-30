<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <p>{{ doc.author }}</p>
      <ContentRenderer :value="doc" />
    </ContentDoc> 
  </main>
</template>
