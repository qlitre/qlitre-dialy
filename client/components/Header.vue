<template>
  <header class="header wrapper">
    <NuxtLink :to='`/`'>
      <h1 class="title">
        Qlitre's Dialy
      </h1>
    </NuxtLink>
    <nav class="nav">
      <ul class="main-nav">
        <li>
          <NuxtLink :to="`/about`">
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 4% 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #5ba9f7;
  display: flex;
  align-items: center;
  z-index: 10;
}

.wrapper {
  max-width: 100%;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  color: #fff;
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  line-height: 1.4em;
  justify-content: center;
  letter-spacing: 1px;
}

.main-nav {
  list-style: none;
  margin: 0;
  display: flex;
}

.main-nav li {
  margin: 0 0 0 30px;
  font-size: 1.8rem;
}

.main-nav a {
  color: #fff;
}

.main-nav a:hover {
  opacity: 0.6;
}
</style>