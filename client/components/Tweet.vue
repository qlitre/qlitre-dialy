<script async setup>

onMounted(() => {    
    let el = document.createElement('a')
    el.setAttribute('class', 'twitter-timeline')
    el.setAttribute('height', '500')
    el.setAttribute('href', 'https://twitter.com/kuri_tter?ref_src=twsrc%5Etfw')
    document.getElementById('twitter').append(el)
})
</script>

<template>
    <div class="wrapper">
        <Head>
            <Script :src="`https://platform.twitter.com/widgets.js`" :async="true"></Script>
        </Head>
        <h1 class="pageTitle">Twitter</h1>
        <div id="twitter">

        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 20px 0;
}

.pageTitle {
    font-size: 2rem;
    font-weight: bold;
    color: #5ba9f7;
    background-color: #c8e4ff;
    padding: 6px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}
</style>