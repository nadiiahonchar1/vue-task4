<template>
  <hr />
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="item in itemsNews" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  inject: ["title", "itemsNews"],
};
</script>

<style lang="scss" scoped></style>
