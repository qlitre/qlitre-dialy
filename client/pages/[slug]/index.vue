<script setup lang="ts">

const route = useRoute();
const ctx = useRuntimeConfig()
const slug: string | string[] = route.params.slug;

const { data: article } = await useFetch(`/api/postDetail`, {
  params: { slug: String(slug) },
});
</script>

<template>
  <div class="main">
    <Head>
      <Title>{{ article.title }}</Title>
      <Link rel="canonical" :href="`${ctx.hostUrl}/${slug}`" />
    </Head>
    <Post :post="article" />
    <TopToButton />
  </div>
</template>