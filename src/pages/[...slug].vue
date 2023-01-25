<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h2>{{ doc.title }}</h2>
      <p>{{ doc.author }}</p>
      <p>{{ doc.created_at }}</p>
      <p>{{ doc.updated_at }}</p>
      <ContentRenderer :value="doc" />
    </ContentDoc> 
  </main>
</template>
