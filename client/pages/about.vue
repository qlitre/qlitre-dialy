<script setup lang="ts">
const { data: profile } = await useFetch(`/api/about`, {
});
</script>

<template>
  <div class="main">
    <div class="top">
      <h1 class="main-title">{{ profile.title }}</h1>
      <p class="image-area">
        <img :src="profile.image.url" alt="">
      </p>
      <div class="markdown-body" v-html="profile.body" style="margin-top:20px;"></div>
      <TopToButton />
    </div>

  </div>
</template>

<style scoped>

.top {
  text-align: center;
}

.body {
  margin-top: 50px;
  text-align: center;
}

.image-area {
  margin-top: 20px;
  text-align: center;
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  text-align: center;
}

.main-title {
  font-size: 3rem;
  text-align: center;
}


.markdown-body:deep(ul) {
  list-style-type: none;
}
</style>
