<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h2 v-if="doc.title">{{ doc.title }}</h2>
      <p v-if="doc.author">Author: {{ doc.author }}</p>
      <p v-if="doc.created_at">
        Created: {{ new Date(doc.created_at).toLocaleDateString() }}
      </p>
      <p v-if="doc.updated_at">
        Last updated: {{ new Date(doc.updated_at).toLocaleDateString() }}
      </p>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
