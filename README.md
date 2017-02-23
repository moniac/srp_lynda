Notities/Notes

Sass staat voor Syntactically Awesome Style Sheets, dit is een bepaalde manier van css noteren wat omgezet wordt naar de gewone CSS. Ik twijfel nog een beetje of ik SASS of SCSS wil.

Voordelen Sass:
Geen {} en ; meer
Variables
Mixins


Voordelen SCSS:
Hetzelfde hierboven maar dan wel {} en ;

Bij SASS geef je dus wat meer duidelijkheid op om sneller te kunnen schrijven, bij grote projecten lijkt het mij wel dat je veel tijd bespaart door geen {} en ; meer te noteren.


Uiteindelijk kies ik toch maar voor SCSS, omdat het mij de voordelen geeft en goed leesbaar blijft, wat denk ik toch erg belangrijk is.

----------------------------------------------------------------------------------------------------------------------------------------

Javascript

Javascript is interpreted, niet compiled, dus browser kan direct lezen ipv eerst omzetten.

Overduidelijk, maar javascript is case sensitive

Pseudocode is in simpel engels/nederlands opschrijven wat je wilt dat je code uitvoert.

Javascript leest van boven naar beneden.

Als je javascript in de head staat, wordt de rest van je pagina *niet* geladen totdat je javascript volledig gelezen is. Daarom plaatsen we het boven de body.

Variabelen zijn containers, kleine blokjes geheugen die we een waarde geven. Je mag een variable naam niet met een nummer starten.

var year;
year = 2016; werkt

Je kan het woordje var weglaten, maar dit is sloppy code.

var year;
var month;
var year;

var year, month, year;

var year = 2016, month = 10, day = 31;

het is makkelijker om de code te lezen als je alles netjes onder elkaar doet.

'' of "" maakt niet uit, zolang je ze niet met elkaar mist.

score = score + 10 kan ook als score += 10
+= -= * = /=

a == b a is gelijk aan b
a != b als het niet gelijk is aan b
a === b als het gelijk is aan b in waarde en datatype
a !==b als het niet gelijk is aan de waarde en datatype
a > b a groter dan
a < b a kleiner dan
a >= gelijk aan of groter dan b
a <= kleiner dan of gelijk aan b

&& beide moeten waar zijn
| | 1 van de 2 moet waar zijn

% de modelus geeft je wat over blijft, 20 % 3 = 2 want er gaat 3 * 6 in 20 = 18 blijft er 2 over.

var a = 5

alert(++a) tel 1 bij de variable op en weergeef 6

var a =5

alert(a++)  weergeef 5 en tel dan 1 op

pre - post increment

? = ternary operator

condition ? true : false

var one = 500
var two = 600

var highscore

if (one > two) {
  highscore = one
}
else {
  highscore = two
}

var highscore = (one > two) ? one : two

while loop is vaak efficienter dan een for loop.

do while loop zal de code altijd minimaal 1 keer uitvoeren

for loop brengt alles samen

break stopt de loop compleet, continue restart het weer

javascript start met het scannen van al je code inclusief je functions voordat het ook maar iets runt, wat betekent dat je functions gebruikt kunnen worden voordat ze aangemaakt zijn, maar het is netter om de juiste volgorde te hanteren.

Je kan functies aanroepen voordat ze aangemaakt zijn, dus een functie declaratie kan bovenaan staan wat fijner is voor readability.

parameter vul je in tussen de haakjes ()
Je kunt het zien als een variable die je in de code kunt gebruiken. function myFunction (x,y) {
  var myVar = x * y
  console.log(myVar)
  //return values
  return myVar
}
var myResult = myFunction (6,9)

function calculateLoan(amount,months,interests,name) {

}

calculateLoan(10000,60,7," test persoon")

----------------------------------------------------------------------------------------------------------------------------------------
Block level container betekent dat het de beschikbare ruimte opneemt, Inline betekent dat het zich aan de content aanpast.

body {
  background-color:red !important; < tags met important zullen altijd winnen.
}

Justify Content: align flex items alogn the main axis of the flex container, dus bij row horizontaal en bij column verticaal. Hoe align je de items in de container. (bron http://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties )

Om een element te centreren kun je de container .container {
    justify-content: center;
    align-items: center;
}

geven of je geeft de flex-item

.box56 {
    margin: auto;
}

Fitts' Law states that it's faster to hit larger targets closer to you than it is to hit smaller targets further away from you.

Met order pas je de volgorde van flex items aan. -1 zal altijd bovenaan staan omdat standaard flex items een waarde van 0 krijgen.

Dit heb ik op mijn portfolio toegepast met mijn projecten op moniac.nl

 Ampersand NBSP and semi colon

----------------------------------------------------------------------------------------------------------------------------------------

Mijn stagebedrijf heeft mij geadviseerd om met Git te leren werken voor version control, toevallig staat dit ook nog in de course voor Front-End, ik ben hier ook mee aan de slag gegaan.

Allereerst, openen van een CMD of terminal. (git bash is beter blijkbaar)

mkdir = make directory
cd = change directory

we doen eerst cd /desktop om naar het bureaublad te gaan.
dus bijv, mkdir test && cd test, dan zitten we in de net aangemaakte map.

Dus we zitten dan in de map test, en doen git init, wat ervoor zorgt dat git de folder gaat tracken (repo).

Met ls -la kun je alle bestanden in de map zien waaronder .git.

We moeten de bestanden die we willen tracken toevoegen, bijvoorbeeld git add index.html of git add . wat alles toevoegd
(of git add *. werkt ook blijkbaar)*  Dus als je git add .html doet voegt ie alle html bestanden toe.

Je kan zien wat er getracked wordt met git status maar ook de staat van de bestanden.

Om iets te committen doe je git commit -m (-m laat je een bericht toevoegen).

----------------------------------------------------------------------------------------------------------------------------------------
Daarnaast is mij ook aangeraden om met Jquery te gaan spelen. Mijn stagebedrijf was aardig genoeg om een jaar CodeSchool voor mij aan te schaffen, om de jquery cursus daar uit te proberen.

Jquery kan voor verschillende dingen gebruikt worden, om iets te animeren, te selecteren of te zoeken.

Het coole van Jquery is dat het met alle moderne browsers kan communiceren.

The DOM is het Document Object Model, wat in principe de website is die de browser ziet. Je kan met jQuery(document) de DOM benaderen.
jQuery gebruikt dezelfde selectors als die van CSS om iets te selecteren, zoals jQuery("h1");, de shorthand is $("H1");, $ betekent hetzelfde als jQuery.

$("H1").text brengt de tekst in de H1 op
$("H1").text("Test"); verandert de tekst in de H1 naar "Test"

Als de DOM klaar is met laden stuurt het een signaal. $(document).ready(function(){
$("H1").text("Test");
}); < Wordt dus uitgevoerd als de pagina klaar met laden is.

$("div p span").text() de () is belangrijk

$(document).ready(function(){ < wanneer het document geladen is voer dan een functie uit
  $("span").text("$100");
});

$("li"); < selecteert alle li in de DOM ("li").text('Orlando') past alle li's aan naar de tekst Orlando

$("p"); element
$("#container"); < ID
$(".articles"); < classes

als een class uit meerdere woorden bestaat, zoals 'on sale', kun je het selecteren door $(".on .sale");
te doen. Voordeel hiervan is dat je .on apart kan selecteren, waardoor je .sale ook apart kunt stijlen.

Jquery heeft pseudo selectoren waarvan een aantal zelf gemaakt zijn. Bijvoorbeeld: first, last, odd en even, wat grappig genoeg anders werkt dan ik dacht. odd zou bij 1 moeten beginnen maar het is tellen met javascript dus het begint eigenlijk bij 0. Dit betekent dat in een lijstje met 3 items dat de middelste geselecteerd wordt ipv de eerste, aangezien het 0 1 2 is en 1 is odd.

Dit waren allemaal manieren om met css selectoren iets in de DOM te selecteren.

Dit kan ook anders, met traversing the DOM. Dit schijnt soms sneller te zijn, erg handig om een specifiek iets te vinden.

$("#destinations li");
$("#destinations").find("li");
    ^ selectie   ^method/traversal

nog een voorbeeld,
$("li:first"); om de eerste te selecteren
$("li").first();

$("li:last"); om de laatste te selecteren
$("li").last();

$("li").first().next(); selecteerd de tweede, er is vast een efficientere manier dan om zo een chain aan te maken. Method chaining.

$("li").first().next().prev();

$("li").first().parent(); selecteert de parent

$("#destinations").children("li"); selecteer de children van de id en niet dingen een lager dieper

$("#vacations").find(".vacation").last().prev(); Hiermee vind je de een na laatste item

$("#tours").find(".featured").parent(); In de ID #tours, zoek alle items met de class .featured en selecteer daar de parent van.

$("#tours").children(); selecteer alleen de directe children van #tours
