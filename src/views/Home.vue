<template>
  <div class="home">
    <h1>DATA ER IKKE<br>
      DEN NYE OLJEN</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
p {
	font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
}
p.old {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 170px;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
