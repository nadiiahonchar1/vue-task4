<template>
  <div class="container">
    <div class="card-title">
      <h2>Current news {{ now }}</h2>
      <hr />
      <span
        >Open: <strong>{{ openRate }}</strong> | It has been read:
        <strong>{{ readRate }}</strong></span
      >
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unreadNews"
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
      readRate: 0,
      news: [
        { title: "News1", id: 1, isOpen: false, wasRead: false },
        { title: "News2", id: 2, isOpen: false, wasRead: false },
      ],
      itemsNews: [
        { title: "itemNews1", id: 1, isOpen: false, wasRead: false },
        { title: "itemNews2", id: 2, isOpen: false, wasRead: false },
      ],
    };
  },
  provide() {
    return {
      title: "List of News",
      itemsNews: this.itemsNews,
    };
  },
  methods: {
    openNews() {
      this.openRate++;
    },
    readNews(id) {
      this.readRate++;
      const idx = this.news.findIndex((news) => news.id === id);
      this.news[idx].wasRead = true;
    },
    unreadNews(id) {
      this.readRate--;
      const idx = this.news.findIndex((news) => news.id === id);
      this.news[idx].wasRead = false;
    },
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
