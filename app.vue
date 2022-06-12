<script>
import Seed from "~/Seed.vue";
export default {
  components: { Seed },
};
</script>

<template>
  <div>
    <h1>LoC Digital Garden</h1>
    <p>An aggregated list of technical learning from the community</p>
    <br/>
    <Seed
      :planted="3"
      :tended="1"
      :title="`Some title`"
      :content="`Some learning content`"
    />
  </div>
</template>
