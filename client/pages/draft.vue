<script setup lang="ts">

const route = useRoute();
const slug = route.query.id
const draftKey = route.query.draftKey

const { data: article } = await useFetch(`/api/postDraft`, {
    params: {
        slug: String(slug),
        draftKey: draftKey
    },
});

</script>

<template>
    <div class="main">
        <Post :post="article" />
    </div>
</template>