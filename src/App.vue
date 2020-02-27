<template>
  <div id="app">
    <Header />

    <router-view class="content"/>
    <hr>
    <h1>Tilgjenglige data</h1>
    <div style="width: 1200px; margin: auto;">
      <div style="width: 400px; float: left; text-align: left;">
        <h2>Begrepskatalogen</h2>
        <div>
          <input type="text" placeholder="Søk etter begrep" style="width: 75%; margin: 0px;"/><br>
          <table style="width: 100%;">
            <tr>
              <td><a href="#">Inntekt</a></td>
            </tr>
            <tr>
              <td><a href="#">Samboer</a></td>
            </tr>
            <tr>
              <td><a href="#">Datasett</a></td>
            </tr>
            <tr>
              <td><a href="#">Innsikt</a></td>
            </tr>
            <tr>
              <td><a href="#">Innbygger</a></td>
            </tr>
            <tr>
              <td><a href="#">Virksomhet</a></td>
            </tr>
            <tr>
              <td><a href="#">Tjeneste</a></td>
            </tr>
          </table>
          </div>
      </div>
      <div style="width: 400px; float: right;">
        <h2>APIer</h2>
        <div style="text-align: left;">
        <input type="text" placeholder="Søk etter tilgjenglige APIer" style="width: 75%; margin: 0px;"/><br>
        <table style="width: 100%;">
          <tr>
            <td><a href="https://developer.oslo.kommune.no/katalog/apis/51/introduction">Eiendomsdata</a></td>
          </tr>
          <tr>
            <td><a href="https://developer.oslo.kommune.no/katalog/apis/54/introduction">UBW Kundedata</a></td>
          </tr>
          <tr>
            <td><a href="https://developer.oslo.kommune.no/katalog/apis/67/introduction">Badetemperatur</a></td>
          </tr>
        </table>
        </div>
      </div>
      <div style="width: 400px; float: left;">
        <h2>Datakatalog</h2>
        <div style="text-align: left;">
        <input type="text" placeholder="Søk etter tilgjenglige dataset" style="width: 75%; margin: 0px;"/><br>
        <table style="width: 100%;">
          <tr>
            <td><a href="https://developer.oslo.kommune.no/katalog/data/alder-distribusjon-status">Alder og distribusjon</a></td>
          </tr>
          <tr>
            <td><a href="https://developer.oslo.kommune.no/katalog/data/badetemperatur">Badetemperatur</a></td>
          </tr>
          <tr>
            <td><a href="https://developer.oslo.kommune.no/katalog/data/besoksdata-gjenbruksstasjoner">Besøksdata gjenbruksstasjoner</a></td>
          </tr>
          <tr>
            <td><a href="https://developer.oslo.kommune.no/katalog/data/bygningstyper-enebolig-status">Bygningstyper enebolig</a></td>
          </tr>
        </table>
        </div>
      </div>
    </div>
    <br><br>
    <hr>
    <h1>Kom i gang med datadeling enkelt!</h1>
    <div style="width: 1100px; margin: auto;">
      <div style="width: 500px; float: left; text-align: left;">
        <h2>I vår datakatalog</h2>
        <ol>
          <li><a href="https://developer.oslo.kommune.no/">Logg inn med din oslo-bruker</a></li>
          <li><a href="https://developer.oslo.kommune.no/katalog/data">Lag datasett</a></li>
          <li>Last opp dine data</li>
          <li>Opprett eller bli med i et <a href="https://developer.oslo.kommune.no/teams">team</a> og ha full kontroll over hvem som kan få tilgang til data</li>
        </ol>
      </div>
      <div class="window" style="width: 500px;">
        <div class="terminal" style="text-align: left;">
          <p class="command"># Som utvikler</p>
          <p class="command">$ pip install <a href="https://github.com/oslokommune/origo-cli" style="color: #22da26 !important;">origo</a></p>
          <p class="command">$ origo datasets ls filter=innbygger</p>
          <p class="command">$ origo cp mine-data.xlsx ds:mitt-datasett</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from '@tuuturu/vue/page'
export default {
  components: { Header, Footer }
}
</script>
<style type="text/css">
.window {
  border-radius: 3px;
  background: #222;
  color: #fff;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 70%;

  &:before {
    content: ' ';
    display: block;
    height: 48px;
    background: #C6C6C6;
  }

  &:after {
    content: '. . .';
    position: absolute;
    left: 12px;
    right: 0;
    top: -3px;
    font-family: "Times New Roman", Times, serif;
    font-size: 96px;
    color: #fff;
    line-height: 0;
    letter-spacing: -12px;
  }
}

.terminal {
  margin: 20px;
  font-family: monospace;
  font-size: 16px;
  color: #22da26;

  .command {
    width: 0%;
    white-space: nowrap;
    overflow: hidden;

    &:before {
      content: '$ ';
      color: #22da26;
    }
  }

  .log {
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
  }
}
</style>

    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from '@tuuturu/vue/page'
export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
$osg-font-path: '~styleguide/src/assets/fonts';
@import '~styleguide/src/assets/sass/common';

@import '~@tuuturu/styling/style';

a {
  color: $blue-dark;
  font-family: "Oslo Sans", sans-serif;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid $blue-dark;
  &:focus, &:hover, &:active, &:visited {
    color: $blue-hover;
    text-decoration: none;
    border-bottom: 2px solid $blue-hover;
  }
}

/*
 * Typografi
 */
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;

  &:not(:first-child) {
    margin-top: 1em
  }
}
h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em;
  &:not(:first-child) {
    margin-top: 1.1428em
  }
}
h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em;
  &:not(:first-child) {
    margin-top: 1.3333em
  }
}
p {
  max-width: 36em;
}

html, body, #app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
  font-size: 14pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
  width: 100%;
  margin: 0 auto;
}

.Header {
}

.Footer {
  margin-top: 4em;
  flex-shrink: 0;
}

.stuff {
  height: 100%;
  width: 100%;
}
</style>
