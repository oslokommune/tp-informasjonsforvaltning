<template>
  <div class="home">
    <div class="wrapper">
      <div class="header-holder">
        <h1 class="header">Data er <span class="ikke">IKKE</span></h1>
        <h1 class="header-undertext">den nye oljen</h1>
      </div>
    </div>
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

.wrapper {
  height: 100%;
  width: 100%;
}

.header {
  font-size: 170px;
  margin-bottom: 0;
  font-weight: 300;

  .ikke {
    font-weight: 400;
  }
}

.header-undertext {
  font-size: 100px;
  margin-top: 0;
  font-weight: 300;
}

.header-holder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
