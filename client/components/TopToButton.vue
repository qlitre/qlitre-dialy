<template>
  <div>
    <a class="btn" :href="`/`">
      TOPへ戻る
    </a>
  </div>
</template>


<style scoped>
.btn {
  font-size: 16px;
  -webkit-appearance: none;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #fff;
  border: solid 1px #ccc;
  vertical-align: bottom;
  font-family: "Ubuntu", "Noto Sans JP", sans-serif;
  box-sizing: border-box;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  color: #333;
}

.btn:hover {
  opacity: 0.5;
}
</style>
