<template>
  <div class="home">
    <div class="bg red overst">
      <div class="header-holder">
        <h1 class="header">Data er <span class="ikke">IKKE</span></h1>
        <h1 class="header header-undertext">den nye oljen</h1>
        <ArrowDown @click.native="scrollDown()"/>
      </div>
    </div>
    <div class="bg yellow">
      <div class="header-holder">
        <h1 class="header data">Data</h1>
        <h1 class="header kan-ikke">kan ikke</h1>
        <h1 class="header brukes-opp">brukes opp</h1>
      </div>
    </div>

    <div class="bg red">
      <div class="header-holder">
        <h1 class="header data">Data</h1>
        <h1 class="header kan-ikke-brukes-opp">er skapt for å deles</h1>
      </div>
    </div>
    <div class="bg img">
      &nbsp;
    </div>
    <div class="bg black">
      <h1 style="font-size: x-large">Gevinster</h1>
      <div style="margin: auto;">
        <ul style="text-align: left;font-size: large">
          <li>Bedre datakvalitet</li>
          <li>Riktig tjeneste til riktig tid</li>
          <li>Enklere rapportering</li>
          <li>Mer effektiv forvaltning</li>
          <li>Innovasjon og ny næringsvekst</li>
          <li>Informasjonssikkerhet og personvern</li>
        </ul>
      </div>
    </div>
    <div class="bg yellow">
      <div class="header-holder">
        <h1 class="kontakt">Kontakt</h1>
        <span class="kontakt-tekst">Besøk oss i Informasjonsforvaltning <a href="https://developer.oslo.kommune.no/teams/56e74cc0-09d0-4303-9bd8-638bfe518dd5">her</a></span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArrowDown from '@/components/ArrowDown'

export default {
  name: 'Home',
  components: { ArrowDown },
  methods: {
    scrollDown() {
      console.log('Scroll')
      window.scrollBy(0, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
p {
	font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
}

.bg {
  height: 100vh;
  width: 100%;

  &.red {
    background: coral;
  }

  &.yellow {
    background: #f9c66b;
  }

  &.black {
    background: #000000;
    color: white;
  }

  &.img {
    background-image: url("https://drive.google.com/uc?id=1DRPyjCPvmAI38UhGbtnVEFNLdyR_zdYs");
    background-repeat: no-repeat;
    background-size: 100%
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

  &.data {
    font-size: 300px;
    letter-spacing: 10px;
    margin-bottom: -100px;
  }

  &.kan-ikke {
    font-size: 190px;
    letter-spacing: 15px;
    margin-bottom: -40px;
  }

  &.brukes-opp {
    font-size: 120px;
    margin-bottom: -50px;
  }

  &.header-undertext {
    font-size: 100px;
    margin: 0;
    font-weight: 300;
  }
}

.header-holder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.kontakt {
  font-size: 150px;
}

.kontakt-tekst {
  font-size: 100px;
}

.ArrowDown {
  position: absolute;
  bottom: 120px;
  width: 150px;
  height: 150px;
  right: 100px;

  &:hover {
    outline: solid 20px deeppink;
    cursor: pointer;
  }

  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;

  @-moz-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      -moz-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
}

</style>
