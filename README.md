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

Block level container betekent dat het de beschikbare ruimte opneemt, Inline betekent dat het zich aan de content aanpast.

Justify Content: align flex items alogn the main axis of the flex container, dus bij row horizontaal en bij column verticaal. Hoe align je de items in de container. (bron http://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties )

Om een element te centreren kun je de container .container {
    justify-content: center;
    align-items: center;
}

geven of je geeft de flex-item

.box56 {
    margin: auto;
}

Met order pas je de volgorde van flex items aan. -1 zal altijd bovenaan staan omdat standaard flex items een waarde van 0 krijgen. 

Dit heb ik op mijn portfolio toegepast met mijn projecten op moniac.nl

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
#(".articles"); < classes

