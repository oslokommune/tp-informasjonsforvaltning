(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],v=0,u=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},s={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/tp-informasjonsforvaltning/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),s=r.n(a);s.a},"0d03":function(t,e,r){},"212f":function(t,e,r){"use strict";var a=r("8f53"),s=r.n(a);s.a},3521:function(t,e,r){"use strict";var a=r("b7ec"),s=r.n(a);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view",{staticClass:"content"}),r("hr"),r("h1",[t._v("Tilgjenglige data")]),t._m(0),r("br"),r("br"),r("hr"),r("h1",[t._v("Kom i gang med datadeling enkelt!")]),t._m(1),r("br"),r("br"),r("hr"),r("h1",{staticClass:"header data"},[t._v("Les mer")]),t._m(2),r("Footer")],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"1200px",margin:"auto"}},[r("div",{staticStyle:{width:"400px",float:"left","text-align":"left"}},[r("h2",[t._v("Begrepskatalogen")]),r("div",[r("input",{staticStyle:{width:"75%",margin:"0px"},attrs:{type:"text",placeholder:"Søk etter begrep"}}),r("br"),r("table",{staticStyle:{width:"100%"}},[r("tr",[r("td",[r("a",{attrs:{href:"#"}},[t._v("Inntekt")])])]),r("tr",[r("td",[r("a",{attrs:{href:"#"}},[t._v("Samboer")])])]),r("tr",[r("td",[r("a",{attrs:{href:"#"}},[t._v("Datasett")])])]),r("tr",[r("td",[r("a",{attrs:{href:"#"}},[t._v("Innsikt")])])]),r("tr",[r("td",[r("a",{attrs:{href:"#"}},[t._v("Innbygger")])])]),r("tr",[r("td",[r("a",{attrs:{href:"#"}},[t._v("Virksomhet")])])]),r("tr",[r("td",[r("a",{attrs:{href:"#"}},[t._v("Tjeneste")])])])])])]),r("div",{staticStyle:{width:"400px",float:"right"}},[r("h2",[t._v("APIer")]),r("div",{staticStyle:{"text-align":"left"}},[r("input",{staticStyle:{width:"75%",margin:"0px"},attrs:{type:"text",placeholder:"Søk etter tilgjenglige APIer"}}),r("br"),r("table",{staticStyle:{width:"100%"}},[r("tr",[r("td",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/apis/51/introduction"}},[t._v("Eiendomsdata")])])]),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/apis/54/introduction"}},[t._v("UBW Kundedata")])])]),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/apis/67/introduction"}},[t._v("Badetemperatur")])])])])])]),r("div",{staticStyle:{width:"400px",float:"left"}},[r("h2",[t._v("Datakatalog")]),r("div",{staticStyle:{"text-align":"left"}},[r("input",{staticStyle:{width:"75%",margin:"0px"},attrs:{type:"text",placeholder:"Søk etter tilgjenglige dataset"}}),r("br"),r("table",{staticStyle:{width:"100%"}},[r("tr",[r("td",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/data/alder-distribusjon-status"}},[t._v("Alder og distribusjon")])])]),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/data/badetemperatur"}},[t._v("Badetemperatur")])])]),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/data/besoksdata-gjenbruksstasjoner"}},[t._v("Besøksdata gjenbruksstasjoner")])])]),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/data/bygningstyper-enebolig-status"}},[t._v("Bygningstyper enebolig")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"1100px",margin:"auto"}},[r("div",{staticStyle:{width:"500px",float:"left","text-align":"left"}},[r("h2",[t._v("I vår datakatalog")]),r("ol",[r("li",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/"}},[t._v("Logg inn med din oslo-bruker")])]),r("li",[r("a",{attrs:{href:"https://developer.oslo.kommune.no/katalog/data"}},[t._v("Lag datasett")])]),r("li",[t._v("Last opp dine data")]),r("li",[t._v("Opprett eller bli med i et "),r("a",{attrs:{href:"https://developer.oslo.kommune.no/teams"}},[t._v("team")]),t._v(" og ha full kontroll over hvem som kan få tilgang til data")])])]),r("div",{staticClass:"window",staticStyle:{width:"500px"}},[r("div",{staticClass:"terminal",staticStyle:{"text-align":"left"}},[r("p",{staticClass:"command"},[t._v("# Som utvikler")]),r("p",{staticClass:"command"},[t._v("$ pip install "),r("a",{staticStyle:{color:"#22da26 !important"},attrs:{href:"https://github.com/oslokommune/origo-cli"}},[t._v("origo")])]),r("p",{staticClass:"command"},[t._v("$ origo datasets ls filter=innbygger")]),r("p",{staticClass:"command"},[t._v("$ origo cp mine-data.xlsx ds:mitt-datasett")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"1100px",margin:"auto"}},[r("div",{staticStyle:{width:"500px",float:"left","text-align":"left"}},[r("ul",[r("li",[r("a",{attrs:{href:"https://doc.difi.no/data/veileder-orden-i-eget-hus"}},[t._v("DIFI - Orden i eget hus")])]),r("li",[r("a",{attrs:{href:"https://fellesdatakatalog.brreg.no/"}},[t._v("Felles offentlig datakatalog")])]),r("li",[r("a",{attrs:{href:"https://www.towardsamdex.org/"}},[t._v("Amsterdams databørs")])])])])])}],o=r("f564"),i={components:{Header:o["Header"],Footer:o["Footer"]}},l=i,c=(r("034f"),r("5c64"),r("2877")),p=r("b491"),v=r.n(p),u=Object(c["a"])(l,s,n,!1,null,null,null);"function"===typeof v.a&&v()(u);var d=u.exports,m=r("8c4f"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"bg red overst"},[r("div",{staticClass:"header-holder"},[t._m(0),r("h1",{staticClass:"header header-undertext"},[t._v("den nye oljen")]),r("ArrowDown",{nativeOn:{click:function(e){return t.scrollDown()}}})],1)]),t._m(1),t._m(2)])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"header"},[t._v("Data er "),r("span",{staticClass:"ikke"},[t._v("IKKE")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg yellow"},[r("div",{staticClass:"header-holder"},[r("h1",{staticClass:"header data"},[t._v("Data")]),r("h1",{staticClass:"header kan-ikke"},[t._v("kan ikke")]),r("h1",{staticClass:"header brukes-opp"},[t._v("brukes opp")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg"},[r("div",{staticClass:"header-holder"},[r("h1",{staticClass:"header data"},[t._v("Data")]),r("h1",{staticClass:"header kan-ikke-brukes-opp"},[t._v("er skapt for å deles")])])])}],_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"ArrowDown",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}})])},g=[],k={},b=Object(c["a"])(k,_,g,!1,null,null,null),w=b.exports,y={name:"Home",components:{ArrowDown:w},methods:{scrollDown:function(){console.log("Scroll"),window.scrollBy(0,1500)}}},j=y,x=(r("cc2e"),Object(c["a"])(j,h,f,!1,null,"401674c4",null)),E=x.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Help"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[t._v("Hjelp")]),t._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[t._v("Inspirasjon")]),t._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[t._v("Premier")]),t._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[t._v("Ressurser")])],1),r("img",{staticStyle:{position:"fixed",bottom:"2em",right:"2em"},attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}}),r("h1",[t._v("Hjelp")]),t._m(0),r("h2",[t._v("Komponenter")]),r("p",[t._v(" Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang. For eksempel har dere tilgang til komponenten BaseButton som kan brukes slik: "),r("br"),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:t.exampleText,callback:function(e){t.exampleText=e},expression:"exampleText"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[t._v("Submit")]),r("br"),t._v(" Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det. Ta en titt på "),r("a",{attrs:{href:"https://tuuturu.github.io/vue/?path=/story/buttons-button--primary"}},[t._v("oversikten over komponentene")]),t._v(" for å se hva som er tilgjengelig. ")],1),r("h2",[t._v("Farger")]),t._m(1),r("br"),r("div",{staticClass:"exampleColor",attrs:{id:"exampleRed"}},[t._v("$red")]),r("div",{staticClass:"exampleColor",attrs:{id:"examplePurple"}},[t._v("$purple-visited")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleGreen"}},[t._v("$green")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleBeige"}},[t._v("$beige")]),r("h2",[t._v("Typografi")]),t._m(2),r("h2",[t._v("Vue + IDE")]),t._m(3)])},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne ligger i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-informasjonsforvaltning/blob/master/src/views/Help.vue"}},[t._v(" prosjekt-mappe/src/views/Help.vue ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Fargene er hentet ut fra "),r("a",{attrs:{href:"https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette"}},[t._v("Oslo Styleguide")]),t._v(" og dere har tilgang til alle fargene via scss importen "),r("code",[t._v("@import '~@tuuturu/styling/style';")]),r("br"),t._v(" For eksempel kan man bruke: ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-informasjonsforvaltning/blob/master/src/App.vue"}},[t._v("prosjekt-mappe/src/App.vue")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Pro tip for utvikling i Vue med et IDE: pek på "),r("span",{staticClass:"bold"},[t._v("/node_modules/@vue/cli-service/webpack.config.js")]),t._v(" for å fortelle IDE'et hvordan Vue gjør webpack config. ")])}],$=r("6789"),I=r("36b8"),H={name:"help",components:{BaseButton:$["BaseButton"],TextInput:I["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},D=H,O=(r("c2c2"),Object(c["a"])(D,S,C,!1,null,"03b5ac73",null)),B=O.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Inspiration"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[t._v("Hjelp")]),t._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[t._v("Inspirasjon")]),t._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[t._v("Premier")]),t._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[t._v("Ressurser")])],1),r("h1",[t._v("Inspirasjon")]),t._m(0),t._m(1),t._m(2),r("h2",[t._v("Minispill")]),t._m(3),r("h2",[t._v("God storytelling")]),t._m(4),r("h2",[t._v("Kommunikasjonskanal")]),t._m(5),r("h2",[t._v("Videoer")]),t._m(6),r("h2",[t._v("Klassiske produktpresentasjonssider")]),t._m(7)])},A=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Tenk utenfor boksen!"),r("br"),t._v("Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[t._v("Rett på sak! "),r("br"),t._v("Demo/miniversjon/getting started guide av produktet")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/"}},[t._v("https://www.jetbrains.com/lp/mono/")])]),r("li",[r("a",{attrs:{href:"https://safe.page/buildsecurely/"}},[t._v("https://safe.page/buildsecurely/")])]),r("li",[r("a",{attrs:{href:"https://www.duolingo.com/"}},[t._v("https://www.duolingo.com/")])]),r("li",[r("a",{attrs:{href:"https://trello.com/guide"}},[t._v("https://trello.com/guide")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://im-a-good-boye.itch.io/down-scroll"}},[t._v("https://im-a-good-boye.itch.io/down-scroll")])]),r("li",[r("a",{attrs:{href:"https://ohmaigawd.itch.io/afterlife-the-game"}},[t._v("https://ohmaigawd.itch.io/afterlife-the-game")])]),r("li",[r("a",{attrs:{href:"https://leodantas.itch.io/the-cake-is-a-what"}},[t._v("https://leodantas.itch.io/the-cake-is-a-what")])]),r("li",[r("a",{attrs:{href:"https://ncase.me/trust/"}},[t._v("https://ncase.me/trust/")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}},[t._v("https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html")])]),r("li",[r("a",{attrs:{href:"https://www.defeatboco.com/worlds.html"}},[t._v("https://www.defeatboco.com/worlds.html")])]),r("li",[r("a",{attrs:{href:"https://thebearandhisscarf.com/"}},[t._v("https://thebearandhisscarf.com/")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[t._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[t._v("https://growthbot.org/chat")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[t._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[t._v("https://growthbot.org/chat")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl"}},[t._v("https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl")])]),r("li",[r("a",{attrs:{href:"https://mailchimp.com/"}},[t._v("https://mailchimp.com/")])])])}],T={name:"inspiration"},V=T,K=(r("212f"),Object(c["a"])(V,P,A,!1,null,"8395b308",null)),R=K.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[t._v("Hjelp")]),t._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[t._v("Inspirasjon")]),t._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[t._v("Premier")]),t._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[t._v("Ressurser")])],1),r("h1",[t._v("Premier 🏆️")]),r("p",[t._v("I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:")]),r("br"),t._m(0),r("br"),t._m(1)])},F=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)")]),r("li",[t._v("⭐ Brukertestet")]),r("li",[t._v("⭐ Integrasjon med annet team sitt produkt")]),r("li",[t._v("⭐ Skissert ut flere konsepter")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Oppdater disse målene underveis ettersom dere klarer dem i vår eminente "),r("a",{attrs:{href:"https://okr.oslo.systems/product/hackathon",target:"_blank"}},[t._v("OKR-tracker")])])}],L={name:"awards"},U=L,q=(r("9aa7"),Object(c["a"])(U,M,F,!1,null,"2afce1f6",null)),z=q.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[t._v("Hjelp")]),t._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[t._v("Inspirasjon")]),t._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[t._v("Premier")]),t._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[t._v("Ressurser")])],1),r("h1",[t._v("Ressurser️")]),r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122"}},[t._v("Presentasjonen")]),r("h2",[t._v("Beskrivelse av produktområdene")]),t._m(0),r("h2",[t._v("Maler og verktøy")]),t._m(1),r("h2",[t._v("Skrivetips")]),r("h3",[t._v("Hvordan skrive klartekst")]),t._m(2),r("h3",[t._v("Aktiv stemme")]),r("p",[t._v("Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.")]),r("h3",[t._v("Eksempel på passiv stemme:")]),r("span",[t._v("Maskinen kan skrus på ved å trykke på knappen")]),r("h3",[t._v("Eksempel på aktiv stemme:")]),r("span",[t._v("Trykk på knappen for å skru av maskinen")])])},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18",target:"_blank"}},[t._v("Dataplattform")])]),r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87",target:"_blank"}},[t._v("Informasjonsforvaltning")])]),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[t._v("Infrastruktur")])]),r("li",[r("a",{attrs:{href:"https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS",target:"_blank"}},[t._v("Plattform")])]),r("li",[r("a",{attrs:{href:"https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen",target:"_blank"}},[t._v("Utviklerportalen")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850",target:"_blank"}},[t._v("Kjernemodellen")]),t._v(" - et verktøy for å forenkle, prioritere og få ting til å skje.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("Plasser viktig informasjon først")]),r("li",[t._v("Skriv korte setninger: En idé per setning")]),r("li",[t._v("Varier rytmen i setninger: Forskjellig lengde")]),r("li",[t._v("Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting")]),r("li",[t._v("Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.")]),r("li",[t._v('Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"')]),r("li",[t._v("Bruk vanlige ord - unngå lange ord og ukjente forkortelser")]),r("li",[t._v("Bruk aktiv stemme")])])}],Y={name:"awards"},X=Y,N=(r("3521"),Object(c["a"])(X,G,J,!1,null,"7553d664",null)),Q=N.exports;a["a"].use(m["a"]);var W=[{path:"/",name:"Home",component:E},{path:"/help",name:"Help",component:B},{path:"/inspiration",name:"Inspiration",component:R},{path:"/awards",name:"Awards",component:z},{path:"/resources",name:"Resources",component:Q}],Z=new m["a"]({routes:W}),tt=Z;a["a"].config.productionTip=!1,new a["a"]({router:tt,render:function(t){return t(d)}}).$mount("#app")},"5c64":function(t,e,r){"use strict";var a=r("d32a"),s=r.n(a);s.a},"7f18":function(t,e,r){},"85ec":function(t,e,r){},"8f53":function(t,e,r){},9456:function(t,e,r){},"9aa7":function(t,e,r){"use strict";var a=r("0d03"),s=r.n(a);s.a},b491:function(t,e){},b7ec:function(t,e,r){},c2c2:function(t,e,r){"use strict";var a=r("7f18"),s=r.n(a);s.a},cc2e:function(t,e,r){"use strict";var a=r("9456"),s=r.n(a);s.a},d32a:function(t,e,r){}});
//# sourceMappingURL=app.6aacdf1c.js.map