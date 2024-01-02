<template>
  <div class="container">
    <div class="card-title">
      <h2>Current news {{ now }}</h2>
      <hr />
      <span>Open:{{ openRate }}</span>
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
    ></app-news>
  </div>
</template>

<script>
import AppNews from "./components/AppNews.vue";
export default {
  name: "App",
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      news: [
        { title: "News1", id: 1, isOpen: false },
        { title: "News2", id: 2, isOpen: false },
      ],
    };
  },
  components: {
    "app-news": AppNews,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
