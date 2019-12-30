<template>
  <div id="bar">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello. This is the bar component. Delete me and do something useful."
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1em;
  text-align: center;
}
</style>