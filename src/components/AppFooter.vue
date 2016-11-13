<template>
  <footer class="footer-bar">
    <p class="description">
      <a href="https://robertbenjamin.co">•Made with ♥ in Seattle•</a>
    </p>
  </footer>
</template>

<script>
export default {
};
</script>

<style lang='scss'>
.footer-bar {
  padding: 15px;
  text-align: center;

  > .description > a {
    color: #001f3f;
    text-decoration: none;

    &:hover { color: #80bfff; }
  }
}
</style>