<template>
  <header class="nav-bar">
      <nav class="nav-links">
        <router-link to="/" class="title">Books</router-link>
        <router-link to="/about" class="link _pull-right">About</router-link>
      </nav>
  </header>
</template>

<style lang='scss'>
.nav-bar {
  position: relative;
  height: 50px;
  overflow: hidden;
  border-bottom: 2px solid black;
}

.nav-links {
  width: 100%;
  top: 21px;
  position: absolute;

  > a {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 35px;
    font-weight: 700;
    color: black;
    text-decoration: none;

    &:hover { text-decoration: line-through; }
  }
}
</style>
