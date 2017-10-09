# Notes
<strong>I'm still busy updating this to English, so there is a Dutch README available.</strong>

<p>I did this for a personal project, the idea is to write about all the code stuff that I had trouble with, the product should have something for anyone reading this</p>

<h2>SASS vs SCSS</h2>

Sass staat voor Syntactically Awesome Style Sheets, dit is een bepaalde manier van css noteren wat omgezet wordt naar de gewone CSS. Ik twijfel nog een beetje of ik SASS of SCSS wil.

SASS stands for Syntactically Awesome Style Sheets, this is a shorter way of writing CSS which will in turn be converted to proper CSS. Next to that it also gives you extra features which will allow you to create variables to include for example a brand's color. As you can imagine there is a huge benefit in using SASS properly. At this point of writing I am still debating on using either SASS or SCSS.

Pro's Sass:
No more {} and ;
Variables
Mixins
Import

Pro's SCSS:
It's exactly the same as the above but here you do use {} and ;, which promotes legibility.
.

So for SASS you give up clarity for more speed, it might seem small but all the {} and ; you don't have to write anymore will save a lot of time in the end.

Personally I will choose SASS, since my internship company also uses it.

----------------------------------------------------------------------------------------------------------------------------------------

<h1>Javascript</h1>

<h2>Basics</h2>
Javascript is an interpreted language, not a compiled one, this means that browsers will be able to immediatly read your javascript instead of having to convert it first.

Javascript <strong>is</strong> case sensitive. 

Pseudocode is writing what your code should do in simple words, useful for if you have an idea in your head.
For example, click button to insert element.

Javascript reads from top to bottom.

By linking your javascript from the head of your document, the rest of the page will *not* be loaded untill the the javascript document has been read completely, making your users wait. This is why we include javascript above the end body tag.

<h2>Working with variables</h2>

Variabelen zijn containers, kleine blokjes geheugen die we een waarde geven. Je mag een variable naam niet met een nummer starten.

Variables are containers, small pieces of memory that we give a value. You can not start a variable name with a number.

<h3>These are two ways of declaring a variable</h3>

var year;
year = 2016; 

As you can see, both ways are methods of declaring a variable, but the second one is very sloppy.

<h3> Ways of declaring multiple variables </h3>

var year;
var month;
var year;

var year, month, year;
<strong>As you can see, the second method is shorter to write, it's up to you or your company as to which method you will use. Personally I find the first method easier to read.</strong>

<h3> Giving variables a value </h3>

Variables can include a lot of datatypes, these are;

Strings, such as 'text' with quotations surrounding it.
Example: var string = 'text'

Strings are text, the difference between 2 and '2' is that 2 is a number, while '2' is a character that doesn't have real value. 
<strong>'' or "" doesn't matter, just don't mix them up.</strong>

Numbers, you can save a number in a variable.
For example, var number = 2

Booleans, booleans only have two values, true or false.
var money = false

score = score + 10 kan ook als score += 10
+= -= * = /=

a == b a is the same value as b
a != b a is not the same as b, will return true
a === b a is the same value <b>and</b> datatype as b
a !==b returns true if a value not the same as b and also not the same datatype
a > b a is bigger than v
a < b a is smaller than b
a >= b is equal or bigger than b
a <= b is equal or smaller than b

&& both conditions have to be true
| | one of the conditions have to be true

% de modelus geeft je wat over blijft, 20 % 3 = 2 want er gaat 3 * 6 in 20 = 18 blijft er 2 over.
%, called modelus, returns what remains. 20 % 3 = 2 because 6 fits 3 times in 20, which is 18 and returns 2.

var a = 5

alert(++a) add 1 to the variable

var a =5

alert(a++)  call the variable, add 1, show the new variable

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

while loop is usually more efficient compared to a for loop

a do while loop while always do the loop atleast once

a for loop brings everything together

break stops the loop, continue has it keep going

javascript start met het scannen van al je code inclusief je functions voordat het ook maar iets runt, wat betekent dat je functions gebruikt kunnen worden voordat ze aangemaakt zijn, maar het is netter om de juiste volgorde te hanteren.

Javascript scans all of the code on start, including the functions before executing anything, which means that you can use functions before they have even been made, but it's nicer to stick to the order

Je kan functies aanroepen voordat ze aangemaakt zijn, dus een functie declaratie kan bovenaan staan wat fijner is voor readability. (hoisting)

You can call functions above function declarations, this might be nice for readability. (Hoisting)

Je MOET functies aanroepen na dat je het aanmaakt, als je het wilt gebruiken. Je doet de naam van de functie en dan () er achter.

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
Stel, je volgt iets teveel toe, dan is het slim genoeg om dit wat extra is te negeren. Voeg je te weinig toe, dan krijg je undefined terug.

Scope, eigenlijk betekent het, waar is dit variable te zien? Welke code kan de var gebruiken? Een variable die je buiten de functie declared en in de functie nogmaals, hebben toch een andere waarde, omdat degene in de functie een local scope heeft.

function simpleFunction() {
  var foo = 500
  console.log(foo)
}
console.log(foo); geeft geen resultaat, want voor javascript bestaat het niet, aangezien het in een functie nog zit.

var in een functie gebruiken betekent, het bestaat alleen in deze functie. Wil je echt een variable kunnen gebruiken binnen en buiten een functie, dan declareer je het buiten de functie.

var foo;
function simpleFunction() {
  foo = 500
  console.log(foo)
}

Variable Scope is alleen relevant binnen functions.

----------------------------------------------------------------------------------------------------------------------------------------

Array's

var singleValue;
singleValue = 99; < var

var multipleValues = [] ; < Array

multipleValues[0] = 50
multipleValues[1] = 'string'
multipleValues=[2] = true

Array's dont care about what you put in there. Array's zijn zero index based, dus het begint bij 0.

Een shorthand voor dit repetieve taakje is var multipleValues = [50,'string',true]
[0] [1] [2]

Het is ALTIJD een zero based index.

Array's zijn in principe objects.

Verschil is dat Array's waarde's houden, waar je bij objects namen hebt zoals var person = {firstName:"john", saldo:2000, auto:true};

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array

Door .length aan het einde van een arraynaam te doen, vraag je op hoeveel items er in zitten.

Stel je wilt iets specifieks in een grote array selecteren, dan wil je dit met een for loop doen
```
var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"]; < declareer de array en de waardes
fLen = fruits.length; in variable fLen slaan we het aantal items in de array op
text = "<ul>"; var text = <ul>
for (i = 0; i < fLen; i++)  < i = 0, als i kleiner is dat het aantal items in de array, tel dan 1 bij i op,{
    text += "<li>" + fruits[i] + "</li>"; < pak ul, plak hier li en de betreffende array item bij op, sluit het af met </li>
}
```
Wat dit dus doet is vermoedelijk in je html weergeven welke items er in je array zitten.

Stel je wilt wat toevoegen aan de array, dan kun je dat zo doen
```
function myFunction() {
    fruits.push("Lemon");
    document.getElementById("demo").innerHTML = fruits;
}

myFunction() < in de array fruits, plak Lemon aan het einde, en het html element met waarde id krijgt de text van de array te zien
```
Arrays gebruiken een numerieke index, waarbij objects namen gebruiken.

JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

Methods zijn functions zie bij objecten horen.

multipleValues.reverse() << doe de array items reversen, maar het maakt in principe een nieuwe array, waar je het dus in een andere variable in kan opslaan.
----------------------------------------------------------------------------------------------------------------------------------------
Block level container betekent dat het de beschikbare ruimte opneemt, Inline betekent dat het zich aan de content aanpast.

body {
  background-color:red !important; << tags met important zullen altijd winnen.
}

Justify Content: align flex items alogn the main axis of the flex container, dus bij row horizontaal en bij column verticaal. Hoe align je de items in de container. (bron http://stackoverflow.com/questions/32551291/in-css--why-are-there-no-justify-items-and-justify-self-properties )

Om een element te centreren kun je de container .container {
    justify-content: center;
    align-items: center;
}

geven of je geeft de flex-item

.box56 {
    margin: auto;
}

Fitts Law states that its faster to hit larger targets closer to you than it is to hit smaller targets further away from you.

Met order pas je de volgorde van flex items aan. -1 zal altijd bovenaan staan omdat standaard flex items een waarde van 0 krijgen.

Dit heb ik op mijn portfolio toegepast met mijn projecten op moniac.nl

 Ampersand NBSP and semi colon

----------------------------------------------------------------------------------------------------------------------------------------

<h1>Git</h1>

<small>Since GitHub is such an important tool in the developer world, I wanted to get very familiar with it.</small>

Fire up your terminal of choice.
```
mkdir = make directory
cd = change directory
cd ~ = go to home
cd ../ = go one back
rm = remove
```
We use cd to navigate to the folder that we want to go to, alternatively you could cd and drag the folder into the terminal, which will copy the filelocation. What you also could do is use ```mkdir test && cd test``` so that it will both create and navigate to a folder.

Now we are in the folder, we type in ```git init```, which will let git do it's thing.

Met ls -la kun je alle bestanden in de map zien waaronder .git.

For git to track your code, we have to tell it to track the files we want it to. You could track all the HTML by using ```git add html.```, you could also do ```git add .``` which will add every file.

With ```git status``` we can see what is being tracked and what is being changed.

Om iets te committen doe je git commit -m (-m laat je een bericht toevoegen).

----------------------------------------------------------------------------------------------------------------------------------------

<h1> jQuery </h1>

Daarnaast is mij ook aangeraden om met Jquery te gaan spelen. Mijn stagebedrijf was aardig genoeg om een jaar CodeSchool voor mij aan te schaffen, om de jquery cursus daar uit te proberen. jQuery is iets wat je moet leren en dan gelijk afleren.

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
