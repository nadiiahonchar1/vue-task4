<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <div class="centeder">
      <app-button @action="open">{{
        !isNewOpen ? "Open" : "Close"
      }}</app-button>
      <app-button v-if="wasRead" color="danger" @action="$emit('unmark', id)"
        >Cancel reading</app-button
      >
    </div>
    <div v-if="isNewOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iusto
        in voluptatibus, esse libero pariatur ab delectus impedit dicta deleniti
        error totam, mollitia expedita inventore temporibus quidem fuga omnis
        sunt hic. Quas recusandae ex quod repellat, veniam sit. Cumque repellat
        nam non provident aut quae nisi eum, optio quia commodi enim nobis
        ratione voluptas placeat aspernatur tempore magnam debitis
        necessitatibus omnis doloremque nesciunt earum pariatur velit
        asperiores! Nemo obcaecati deleniti officia corporis eos, labore vero
        ipsa laboriosam iusto dolorum id at reiciendis sapiente distinctio unde,
        optio ratione error itaque? At alias exercitationem accusamus veritatis
        quod, blanditiis molestias adipisci necessitatibus, quos, sed assumenda
        vitae eum possimus eveniet deleniti voluptatem. Praesentium unde odio
        autem aperiam deserunt tempora consectetur perspiciatis quaerat. Qui
        reprehenderit assumenda fuga esse nihil voluptatum, ducimus reiciendis
        voluptates quod eligendi deleniti velit porro aliquid doloribus
        consectetur itaque harum in at. Id voluptatem illo fuga quam dolores
        sapiente qui ullam debitis dolorem mollitia esse explicabo molestiae, et
        modi architecto culpa error aliquid? Autem reprehenderit debitis nam eum
        laboriosam aperiam facilis quod similique eius maiores dolor omnis nobis
        labore doloribus nesciunt accusantium maxime incidunt hic, voluptatibus
        delectus perspiciatis sunt? Dolor quae qui molestias totam nesciunt. Est
        sit tenetur excepturi, temporibus quisquam commodi?
      </p>
      <app-button v-if="!wasRead" color="primary" @action="mark"
        >Read the news</app-button
      >
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppNewsList from "./AppNewsList.vue";
export default {
  props: {
    title: { type: String, required: true },
    id: { type: Number, required: true },
    isOpen: { type: Boolean, required: false, default: false },
    wasRead: { type: Boolean, required: false, default: false },
  },
  emits: {
    "open-news": null,
    "read - news"(id) {
      if (id) {
        return true;
      }
      console.warn("No ID");
      return false;
    },
    unmark(id) {
      if (id) {
        return true;
      }
      console.warn("No ID");
      return false;
    },
  },
  data() {
    return {
      isNewOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewOpen = !this.isNewOpen;
      if (this.isNewOpen) {
        this.$emit("open-news");
      }
    },
    mark() {
      this.isNewOpen = false;
      this.$emit("read-news", this.id);
    },
  },
  components: {
    AppButton,
    AppNewsList,
  },
};
</script>
