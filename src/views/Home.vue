<template>
  <div class="home">
    <div class="bg a">
      <div class="header-holder">
        <h1 class="header">Data er <span class="ikke">IKKE</span></h1>
        <h1 class="header-undertext">den nye oljen</h1>
      </div>
    </div>
    <div class="bg b">
      <div class="header-holder">
        <h1 class="header-undertext">Data er den nye</h1>
        <h1 class="header"><span class="ikke">ping-pong</span></h1>
        <h1 class="header-undertext">ballen</h1>
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

.bg {
  height: 100vh;
  width: 100%;

  &.a {
    background: coral;
  }
}

.header {
  font-size: 170px;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 300;

  .ikke {
    font-weight: 400;
  }
}

.header-undertext {
  font-size: 100px;
  margin: 0;
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
