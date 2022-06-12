<script>
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
  },
  data() {
      return {
          plantedAsDays: this.planted,
          tendedAsDays: this.tended,
      }
  },
};
</script>

<template>
  <div>
    <p>Planted: {{ plantedAsDays }} days ago</p>
    <p>Last tended: {{ tendedAsDays }} days ago</p>
  </div>
</template>
