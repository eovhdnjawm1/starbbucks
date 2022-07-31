<template>
  <span id="HotType" v-if="type === 'Hot'"> Hot </span>
  <span id="NewType" v-else-if="type === 'New'"> New </span>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>

<style>
#HotType {
  @apply text-red-500 font-normal text-sm italic;
}
#NewType {
  @apply text-green-500 font-normal text-sm italic;
}
</style>
