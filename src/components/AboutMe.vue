<template>
  <section class="about-me">
    <h1 class="header">What's this about?</h1>
    <img src="/static/img/about.jpg" class="image">
    <p class="details">This is a place for me to keep note of books I"ve read.</p>
  </section>
</template>

<script>
export default {
};
</script>

<style lang='scss'>
.about-me {
  margin-top: 25px;
  flex: 1;

  > .header {
    margin: 5px 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
  }

  > .image {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>