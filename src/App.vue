<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import BookList from './components/BookList'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    BookList
  }
}
</script>

<style lang='scss'>
html { box-sizing: border-box; }
*, *:before, *:after { box-sizing: inherit; }

* {
  font-family: 'Crimson Text', serif;
  font-size: 20px;
}

body {
  margin: 0 auto;
  width: 800px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: #001f3f;
  text-decoration: none;

  &:hover { color: #80bfff; }
}

p { margin: 0; }
p:not(:first-of-type) { margin-top: 5px; }

/* Helpers */
._pull-left { float: left; }
._pull-right { float: right; }

/* Responsive */
@media (max-width: 820px) {
  body {
    width: 100%;
  }

  .nav-links {
    padding: 0 10px;
  }

  .book-list {
    margin-top: 0;
  }

  .about-me {
    margin: 0 10px;
  }
}

@media (max-width: 700px) {
  .book-item {
    > .image-container {
      min-width: 120px !important;

      .image { width: 120px; }
    }
    > .meta {
      vertical-align: top;
      max-width: 50%;
      margin-right: 15px;
    }
  }
}

@media (max-width: 630px) {
  .book-item {
    flex-wrap: wrap;

    > .image-container { margin: 0 auto; }
    > .description {
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 10px;
      text-align: center;
    }
  }

  .about-me {
    > .header { font-size: 35px !important; }
  }
}

@media (max-width: 400px) {
  .book-item {
    > .image-container {
      min-width: 90px !important;

      .image { width: 90px; }
    }
    > .meta > .name, .author {
      font-size: 20px !important;
    }
  }
}
</style>
