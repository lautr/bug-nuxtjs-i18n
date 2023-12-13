<script setup lang="ts">
const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: [],
  },
})
console.log({i18nHead})
</script>
<template>
  <div>
    {{i18nHead}}
  </div>
</template>
