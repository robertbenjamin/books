<template>
  <article class="book-item">
    <img :src="imgSrc" class="image">
    <div class="meta">
      <div class="name">{{ book.title }}</div>*
      <div class="author">{{ book.author }}</div>
    </div>
    <div class="description">
      <p v-html="book.description"></p>
    </div>
  </article>
</template>

<script>
export default {
  props: ['book'],
  computed: {
    imgSrc() {
      return `./static/img/${this.book.image}`;
    }
  }
};
</script>

<style lang='scss'>
.book-item {
  display: flex;
  margin-bottom: 15px;
  padding: 15px;

  &:nth-child(2n) {
    background-color: #001f3f;
    color: #80bfff;
  }

  &:nth-child(even) .image { border: 3px solid #fff; }

  &:nth-child(4n) {
    background-color: #ffdc00;
    color: #665800;
  }

  &:nth-child(6n) {
    background-color: #ff4136;
    color: #800600;
  }

  > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > .image {
    width: 150px;
    height: 100%;
  }

  > .meta { margin: 0 30px 0 15px; }

  > .meta .name, .author {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 25px;
  }

  > .description { padding-right: 15px; }
}
</style>
