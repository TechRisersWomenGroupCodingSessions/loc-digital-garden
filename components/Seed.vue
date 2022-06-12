<script>
import { Metadata } from "~/Metadata.vue";

export default {
  props: {
    planted: {
      type: Number,
      required: true,
    },
    tended: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  components: { Metadata },
  data() {
    return {
      presentedTitle: this.title,
      presentedContent: this.content,
    };
  },
};
</script>

<template>
  <div>
    <Metadata :planted="planted" :tended="tended" />
    <h2>{{ presentedTitle }}</h2>
    <p>{{ presentedContent }}</p>
  </div>
</template>
