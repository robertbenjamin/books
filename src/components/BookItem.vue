<template>
  <article class="book-item">
    <div class="image-container">
      <img :src="'/static/img/' + image" class="image">
    </div>
    <div class="meta">
      <div class="name">{{ title }}</div>—
      <div class="author">{{ author }}</div>
    </div>
    <div class="description">
      <p v-html="description"></p>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'title',
    'author',
    'description',
    'image'
  ],
  computed: {
    imgSrc () {
      return `/static/img/${this.image}`
    }
  }
}
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

  &:nth-child(even) .image-container > .image { border: 2px solid #fff; }

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

  > .image-container {
    min-width: 150px;
    min-height: 100%;

    img { width: 150px; }
  }

  > .meta { margin: 0 30px 0 20px; }

  > .meta .name, .author {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 25px;
  }

  > .description { padding-right: 10px; }
}
</style>
