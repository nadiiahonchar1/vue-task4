<template>
  <div class="container">
    <div class="card-title">
      <h2>Current news {{ now }}</h2>
      <hr />
    </div>
    <div class="card" v-for="item in news" :key="item">
      <h3>{{ item }}</h3>
      <button class="btn">Open</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: ["News1", "News2"],
    };
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
