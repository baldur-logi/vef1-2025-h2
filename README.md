# Vefforritun 1, 2025 – Hópverkefni 2: PubQuiz

## Verkefnalýsing

Verkefnið er síða sem hefur 10 einfaldar pub-quiz spurningar. Hægt er að fletta í gegnum þær og sýna eða fela svör. Auk grunnvirkni eru tvö aukaverkefni útfærð sem eru full-screen virkni og að vista stöðu í localStorage svo að síðasta spurning er geymd og opnist aftur þegar notandi kemur aftur á síðuna. 

## Notkun:

Til að keyra verkefnið:

Setja upp dependencies:
`npm install`

Keyra verkefnið í þróunarumhverfi:
`npm run dev`

Tékka linter:
`npm run lint`
Þetta keyrir bæði eslint og stylelint á öllum JavaScript og CSS skrám.

## Uppsetning og skipulag möppu

Helstu atriði :

Í rót verkefnisins er að finna:

- index.html (grunnur, þar sem efni á að vera birt með JavaScript)
- stylelintrc.json (stylelint stillingar)
- eslint.config.js (eslint stillingar)
- package.json (dependencies)

src/ inniheldur:

- components/ (inniheldur footer.js, header.js og nav.js, grunn element síðunnar birt með JavaScript)
- pages/ (inniheldur home.js sem er landing og quizPage.js sem inniheldur spurningavirknina)
- styles/style.css (css útfæringar, mjög einfalt eins og stendur. Sé ekki að sass sé krafa hér, annars væri þessi folder notaður meira)
- main.js (upphafspunktur verkefnis, tengir router og birtir efni á síðunni)
- questions.js (basic spurningar, skrifaði bara eitthvað)
- router.js (stýrir hvaða síða er sýnd eftir hash eða URL)
- storage.js (sér um að vista og sækja index spurningar í localStorage)

Allt efni er búið til og sýnt með JavaScript við keyrslu.

## Grunnvirkni:

- Birta spurningu og svar eitt í einu

- Hægt að fara á næstu og fyrri spurningu með hnöppum á síðu.

## Aukaverkefni (önnur virkni):

Fullscreen birting með lyklaborði:

- F fer í eða úr fullscreen.

- Esc fer úr fullscreen. 

- A/D fara í fyrri/næstu spurningu. 

- Spacebar sýnir/felur svar.

Vista stöðu í localStorage:

- Þegar notandi fer á milli spurninga vistast núverandi spurning.

- Þegar síðan er refreshuð birtist sama spurning og notandi var síðast að skoða.

## Stíll og skalanleiki:

Notað er CSS fyrir grunnstíl.

Útlit skalanlegt frá 450px upp í 1600px breidd.

Notast er við flexbox til að stilla spurningabox og takka.

Fyrir full screen útlit er notað JavaScript. 

## Vefhýsing

Verkefnið er hýst á Netlify: https://vef1-2025-h2-blb.netlify.app/
